import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/content/siteContent";

import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://querotech.example"),
  title: {
    default: `${siteConfig.companyName} | Gaming PCs, Laptops & Accessories`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#0a0a0a] text-[#f5f5f5] antialiased`}>
        <div className="min-h-screen">
          <SiteHeader />
          <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
