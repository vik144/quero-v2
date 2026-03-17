import { load } from "cheerio";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_BASE = "https://shwetacomputers.com";
const ROOT = process.cwd();
const OUTPUT_PATH = path.join(ROOT, "src/data/generated/source-index.json");

const SHOP_SECTIONS = [
  "laptops",
  "components",
  "accessories",
  "prebuilt-pcs",
  "deals",
  "new-arrivals",
];

const BRAND_SLUGS = new Set([
  "adata",
  "amd",
  "antec",
  "apc",
  "asrock",
  "asus",
  "acer",
  "ant-esports",
  "benq",
  "circle",
  "cooler-master",
  "corsair",
  "crucial",
  "d-link",
  "deep-cool",
  "dell",
  "fractal-design",
  "g-skill",
  "galax",
  "gamdias",
  "gigabyte",
  "hp",
  "hyper-x",
  "inno-3d",
  "intel",
  "kingston",
  "lenovo",
  "lg",
  "lian-li",
  "logitech",
  "microtek",
  "msi",
  "nzxt",
  "portronics",
  "powercool",
  "razer",
  "samsung",
  "sapphire",
  "seagate",
  "western-digital",
  "zebronics",
  "nvidia",
]);

function titleizeSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((segment) => {
      const lower = segment.toLowerCase();

      if (["amd", "nvidia", "rtx", "gpu", "ssd", "ups", "hp", "msi", "asus"].includes(lower)) {
        return lower.toUpperCase();
      }

      if (lower === "pcs") {
        return "PCs";
      }

      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function parseXmlEntries(xml) {
  const $ = load(xml, { xmlMode: true });
  return $("url")
    .toArray()
    .map((entry) => {
      const node = $(entry);
      return {
        loc: node.find("loc").first().text().trim(),
        lastmod: node.find("lastmod").first().text().trim() || undefined,
        image: node.find("image\\:loc").first().text().trim() || undefined,
        imageTitle: node.find("image\\:title").first().text().trim() || undefined,
      };
    })
    .filter((entry) => entry.loc);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; QueroTechImporter/1.0; +https://querotech.example)",
      accept: "text/html,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function inferProductSections(slug, title) {
  const haystack = `${slug} ${title}`.toLowerCase();
  const sections = new Set();

  if (/(laptop|notebook)/.test(haystack)) sections.add("laptops");
  if (/(processor|graphics|graphic|motherboard|ram|ssd|hdd|cooler|cabinet|power|smps|psu)/.test(haystack)) sections.add("components");
  if (/(monitor|mouse|keyboard|headphone|speaker|webcam|microphone|adapter|cable|controller|chair|stream|capture|prompter|vr|earphone)/.test(haystack)) sections.add("accessories");
  if (/(prebuilt|all in one pc|gaming pc|creator pc|research pc|workstation)/.test(haystack)) sections.add("prebuilt-pcs");
  if (sections.size === 0) sections.add("components");

  return [...sections];
}

function inferCollectionSection(slug) {
  const haystack = slug.toLowerCase();

  if (/(laptop|laptops)/.test(haystack)) return "laptops";
  if (/(prebuilt|gaming-prebuilt|creators-prebuilt|research-prebuilt)/.test(haystack)) return "prebuilt-pcs";
  if (/(sale|latest|frontpage)/.test(haystack)) return haystack.includes("latest") ? "new-arrivals" : "deals";
  if (/(mouse|keyboard|headphones|earphones|monitor|microphone|speaker|webcam|adapter|cables|ups|controller|chair|prompter|stream|capture|vr|powerbanks)/.test(haystack)) {
    return "accessories";
  }
  if (/(processor|graphic|graphics|motherboard|ram|ssd|hdd|cooler|cabinet|power-suppply|thermal-paste|fans)/.test(haystack)) {
    return "components";
  }
  if (BRAND_SLUGS.has(haystack)) return "brands";
  return "general";
}

function toBrandSlug(title, slug) {
  const lowerSlug = slug.toLowerCase();
  if (BRAND_SLUGS.has(lowerSlug)) return lowerSlug;

  const first = title.split(" ")[0]?.toLowerCase();
  if (first && BRAND_SLUGS.has(first)) {
    return first;
  }

  return undefined;
}

function dedupeBySlug(items) {
  const seen = new Map();
  for (const item of items) {
    seen.set(item.slug, item);
  }
  return [...seen.values()];
}

async function main() {
  const sitemapIndex = await fetchText(`${SOURCE_BASE}/sitemap.xml`);
  const $ = load(sitemapIndex, { xmlMode: true });
  const sitemapUrls = $("sitemap loc")
    .toArray()
    .map((node) => $(node).text().trim())
    .filter(Boolean);

  const productSitemaps = sitemapUrls.filter((url) => url.includes("sitemap_products"));
  const collectionSitemap = sitemapUrls.find((url) => url.includes("sitemap_collections"));
  const pageSitemap = sitemapUrls.find((url) => url.includes("sitemap_pages"));
  const blogSitemap = sitemapUrls.find((url) => url.includes("sitemap_blogs"));

  const productEntries = dedupeBySlug(
    (
      await Promise.all(productSitemaps.map(async (url) => parseXmlEntries(await fetchText(url))))
    )
      .flat()
      .filter((entry) => entry.loc.includes("/products/"))
      .map((entry) => {
        const slug = entry.loc.split("/products/")[1];
        const title = entry.imageTitle || titleizeSlug(slug);
        return {
          slug,
          title,
          image: entry.image,
          lastModified: entry.lastmod,
          sourceUrl: entry.loc,
          brandSlug: toBrandSlug(title, slug),
          sections: inferProductSections(slug, title),
        };
      }),
  );

  const collectionEntries = dedupeBySlug(
    parseXmlEntries(await fetchText(collectionSitemap))
      .filter((entry) => entry.loc.includes("/collections/"))
      .map((entry) => {
        const slug = entry.loc.split("/collections/")[1];
        const section = inferCollectionSection(slug);
        return {
          slug,
          title: entry.imageTitle || titleizeSlug(slug),
          image: entry.image,
          lastModified: entry.lastmod,
          sourceUrl: entry.loc,
          section,
          isBrand: section === "brands",
        };
      }),
  );

  const pageEntries = parseXmlEntries(await fetchText(pageSitemap))
    .filter((entry) => entry.loc.includes("/pages/"))
    .map((entry) => {
      const slug = entry.loc.split("/pages/")[1];
      return {
        slug,
        title: titleizeSlug(slug),
        lastModified: entry.lastmod,
        sourceUrl: entry.loc,
      };
    });

  const blogEntries = parseXmlEntries(await fetchText(blogSitemap))
    .filter((entry) => entry.loc.includes("/blogs/news/"))
    .map((entry) => {
      const slug = entry.loc.split("/blogs/news/")[1];
      return {
        slug,
        title: entry.imageTitle || titleizeSlug(slug),
        image: entry.image,
        lastModified: entry.lastmod,
        sourceUrl: entry.loc,
        excerpt: `Imported from the public source blog: ${titleizeSlug(slug)}.`,
      };
    });

  const brands = dedupeBySlug(
    collectionEntries
      .filter((collection) => collection.isBrand)
      .map((collection) => ({
        slug: collection.slug,
        name: collection.title,
        hero: `${collection.title} systems, parts, and related accessories surfaced from the public catalog.`,
        specialties: SHOP_SECTIONS.filter((section) =>
          productEntries.some(
            (product) => product.brandSlug === collection.slug && product.sections.includes(section),
          ),
        ),
      })),
  );

  const campaigns = pageEntries
    .filter((page) =>
      [
        "amd",
        "nvidia",
        "ge-force-rtx",
        "geforce-rtx-studio",
        "geforce-esports",
        "nvidia-40-series-studio",
        "nvidia-40-super-esports",
        "nvidia-rtx-for-ai",
        "gigabyte-brand",
        "nvidia-50-series",
        "nvidia-5060-ti",
      ].includes(page.slug),
    )
    .map((page) => ({
      slug: page.slug,
      title: page.title,
      sourceUrl: page.sourceUrl,
      lastModified: page.lastModified,
    }));

  const payload = {
    importedAt: new Date().toISOString(),
    sourceBase: SOURCE_BASE,
    stats: {
      products: productEntries.length,
      collections: collectionEntries.length,
      pages: pageEntries.length,
      blogPosts: blogEntries.length,
      brands: brands.length,
      campaigns: campaigns.length,
    },
    products: productEntries,
    collections: collectionEntries,
    pages: pageEntries,
    blogPosts: blogEntries,
    brands,
    campaigns,
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Imported source content to ${OUTPUT_PATH}`);
  console.log(payload.stats);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
