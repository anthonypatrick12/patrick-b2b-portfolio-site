// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

// If you have lib/seo.ts with a `site` export, this will work.
// Otherwise, you can replace the object below with your own values.
import { site } from "@/lib/seo";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Client-only chat widget (no SSR)
const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget"), { ssr: false });

export const metadata: Metadata = {
  // Uses your env var if set in Vercel, falls back to localhost
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: site?.name || "Patrick — B2B Lead Generation",
    template: `%s · ${site?.name || "Patrick — B2B Lead Generation"}`,
  },
  description:
    site?.description ||
    "Patrick specializes in B2B lead generation: compliant list-building, cold email, LinkedIn outreach, and SDR-as-a-Service.",
  openGraph: {
    type: "website",
    url: site?.url || "http://localhost:3000",
    title: site?.name || "Patrick — B2B Lead Generation",
    description:
      site?.description ||
      "B2B lead gen with deliverability-first cold email, LinkedIn orchestration, and SDR-as-a-Service.",
    images: [
      {
        url: (site as any)?.ogImage || "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Patrick — B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site?.name || "Patrick — B2B Lead Generation",
    description:
      site?.description ||
      "B2B lead gen with deliverability-first cold email, LinkedIn orchestration, and SDR-as-a-Service.",
    images: [(site as any)?.ogImage || "/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      {/* You can put global scripts, analytics, etc. in <head> if needed */}
      <body className="min-h-screen bg-gradient text-white antialiased">
        {/* Your pages render here */}
        {children}

        {/* Floating chat bubble on every page */}
        <ChatWidget />
      </body>
    </html>
  );
}
