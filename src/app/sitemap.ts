import type { MetadataRoute } from "next";

import { getAllCollections, getAllProducts, getBlogPosts, getBrands, getCampaigns } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/shop",
    "/shop/laptops",
    "/shop/components",
    "/shop/accessories",
    "/shop/prebuilt-pcs",
    "/shop/deals",
    "/shop/new-arrivals",
    "/brands",
    "/campaigns",
    "/build-your-dream-machine",
    "/expert-support",
    "/bulk-enquiry",
    "/about",
    "/awards",
    "/stores",
    "/faq",
    "/contact",
    "/blog",
    "/policies/privacy",
    "/policies/shipping",
    "/policies/refunds",
    "/policies/returns",
    "/policies/warranty",
  ].map((path) => ({
    url: `https://querotech.example${path}`,
    lastModified: now,
  }));

  const collectionRoutes = getAllCollections().map((collection) => ({
    url: `https://querotech.example/shop/collections/${collection.slug}`,
    lastModified: collection.lastModified ? new Date(collection.lastModified) : now,
  }));

  const productRoutes = getAllProducts().map((product) => ({
    url: `https://querotech.example/products/${product.slug}`,
    lastModified: product.lastModified ? new Date(product.lastModified) : now,
  }));

  const brandRoutes = getBrands().map((brand) => ({
    url: `https://querotech.example/brands/${brand.slug}`,
    lastModified: now,
  }));

  const campaignRoutes = getCampaigns().map((campaign) => ({
    url: `https://querotech.example/campaigns/${campaign.slug}`,
    lastModified: now,
  }));

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `https://querotech.example/blog/${post.slug}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : now,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes, ...brandRoutes, ...campaignRoutes, ...blogRoutes];
}
