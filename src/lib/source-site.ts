import { cache } from "react";
import { load } from "cheerio";

import { normalizeShopifyImage } from "@/lib/utils";

const SOURCE_BASE = "https://shwetacomputers.com";

type RemoteProductDetail = {
  title: string;
  description: string;
  image?: string;
  gallery: string[];
  vendor?: string;
  price?: string;
  currency?: string;
  specs: string[];
};

type RemoteCollectionDetail = {
  title: string;
  description: string;
  productSlugs: string[];
};

type RemoteBlogDetail = {
  title: string;
  description: string;
  image?: string;
  blocks: string[];
};

async function fetchHtml(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 60 * 60 * 6 },
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; QueroTech/1.0; +https://querotech.example)",
      accept: "text/html,*/*",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function cleanText(value?: string | null) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function parseProductJsonLd(html: string) {
  const $ = load(html);
  const scripts = $("script[type='application/ld+json']")
    .toArray()
    .map((node) => $(node).text())
    .filter(Boolean);

  for (const script of scripts) {
    try {
      const parsed = JSON.parse(script);
      const candidates = Array.isArray(parsed) ? parsed : [parsed];
      const match = candidates.find((item) => item?.["@type"] === "Product");

      if (match) {
        return match;
      }
    } catch {
      continue;
    }
  }

  return null;
}

function parseGalleryImages(html: string) {
  const match = html.match(/"images":\[([\s\S]*?)\],"featured_image"/);
  if (!match?.[1]) {
    return [];
  }

  const raw = `[${match[1]}]`;

  try {
    return JSON.parse(raw).map((src: string) => normalizeShopifyImage(src)).filter(Boolean);
  } catch {
    return [];
  }
}

export const getRemoteProductDetail = cache(async (slug: string): Promise<RemoteProductDetail | null> => {
  try {
    const html = await fetchHtml(`${SOURCE_BASE}/products/${slug}`);
    const $ = load(html);
    const jsonLd = parseProductJsonLd(html);
    const title = cleanText(
      $('meta[property="og:title"]').attr("content") ?? jsonLd?.name ?? $("title").text(),
    );
    const description = cleanText(
      $('meta[property="og:description"]').attr("content") ?? jsonLd?.description,
    );
    const image = normalizeShopifyImage(
      $('meta[property="og:image"]').attr("content") ?? jsonLd?.image?.[0] ?? jsonLd?.image,
    );
    const price = $('meta[property="og:price:amount"]').attr("content") ?? jsonLd?.offers?.price;
    const currency =
      $('meta[property="og:price:currency"]').attr("content") ?? jsonLd?.offers?.priceCurrency;
    const vendorMatch = html.match(/vendor\s*:\s*"([^"]+)"/);
    const listItems = $("li")
      .toArray()
      .map((node) => cleanText($(node).text()))
      .filter((item) => item.length > 12);

    return {
      title,
      description,
      image,
      gallery: parseGalleryImages(html),
      vendor: vendorMatch?.[1] ?? jsonLd?.brand?.name,
      price,
      currency,
      specs: [...new Set(listItems)].slice(0, 8),
    };
  } catch {
    return null;
  }
});

export const getRemoteCollectionDetail = cache(
  async (slug: string): Promise<RemoteCollectionDetail | null> => {
    try {
      const html = await fetchHtml(`${SOURCE_BASE}/collections/${slug}`);
      const $ = load(html);
      const title = cleanText(
        $('meta[property="og:title"]').attr("content") ?? $("title").text() ?? slug,
      );
      const description = cleanText($('meta[property="og:description"]').attr("content"));
      const productSlugs = [...new Set(
        $("a[href*='/products/']")
          .toArray()
          .map((node) => $(node).attr("href"))
          .filter(Boolean)
          .map((href) => href?.split("/products/")[1]?.split("?")[0])
          .filter(Boolean),
      )].slice(0, 24) as string[];

      return { title, description, productSlugs };
    } catch {
      return null;
    }
  },
);

export const getRemoteBlogDetail = cache(async (slug: string): Promise<RemoteBlogDetail | null> => {
  try {
    const html = await fetchHtml(`${SOURCE_BASE}/blogs/news/${slug}`);
    const $ = load(html);
    const title = cleanText(
      $('meta[property="og:title"]').attr("content") ?? $("title").text() ?? slug,
    );
    const description = cleanText($('meta[property="og:description"]').attr("content"));
    const image = normalizeShopifyImage($('meta[property="og:image"]').attr("content"));
    const blocks = $("article p, article h2, article h3, .article-template p, .article-template h2, .article-template h3")
      .toArray()
      .map((node) => cleanText($(node).text()))
      .filter((item) => item.length > 24)
      .slice(0, 14);

    return {
      title,
      description,
      image,
      blocks,
    };
  } catch {
    return null;
  }
});
