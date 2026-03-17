import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/content/siteContent";

import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://querotech.example"),
  title: {
    default: `${siteConfig.companyName} | Dark catalog systems`,
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
      <body className={`${display.variable} ${body.variable} bg-[--background] text-[--foreground] antialiased`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(190,242,100,0.08),transparent_18%),linear-gradient(180deg,#05070a_0%,#081018_48%,#05070a_100%)]">
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
