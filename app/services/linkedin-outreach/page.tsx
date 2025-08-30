import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "LinkedIn Outreach",
  description: "LinkedIn Outreach by Patrick — B2B Lead Generation",
};

export default function Page() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: site.url + "/services" },
      { "@type": "ListItem", position: 3, name: "LinkedIn Outreach", item: site.url + "/services/linkedin-outreach" },
    ],
  };

  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <nav className="text-white/60 text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
          <span className="text-white">LinkedIn Outreach</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-semibold">LinkedIn Outreach</h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          Persona-led messaging and warm social touches that complement email. Smart sequencing increases replies without
          harming domain reputation.
        </p>

        <section className="mt-10 card p-6">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-3 space-y-2 text-white/70 list-disc list-inside">
            <li>Persona frameworks & warm touches</li>
            <li>Messaging experiments & testing</li>
            <li>Layered with email & phone</li>
            <li>Dashboards and weekly reviews</li>
          </ul>
        </section>

        <a
          href="/#contact"
          className="inline-block mt-8 px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow"
        >
          Book a Discovery Call
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </div>
    </main>
  );
}
