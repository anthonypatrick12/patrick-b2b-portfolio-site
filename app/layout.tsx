import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { site } from "@/lib/seo";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: "%s · Patrick — B2B Lead Gen"
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage]
  },
  alternates: {
    canonical: site.url
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-body antialiased`}>
        <ScrollProgress />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": site.name,
              "url": site.url,
              "logo": "/logo.svg",
              "sameAs": [
                "https://www.linkedin.com/",
                "https://twitter.com/"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
