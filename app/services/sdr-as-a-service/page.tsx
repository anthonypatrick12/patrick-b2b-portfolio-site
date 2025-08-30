import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SDR-as-a-Service",
  description: "SDR-as-a-Service by Patrick — B2B Lead Generation",
};

export default function Page() {
  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <nav className="text-white/60 text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
          <span className="text-white">SDR-as-a-Service</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-semibold">SDR-as-a-Service</h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          Dedicated SDRs managed by us and integrated with your CRM. We own playbooks, cadences, reporting,
          and weekly reviews to deliver predictable meetings.
        </p>

        <section className="mt-10 card p-6">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-3 space-y-2 text-white/70 list-disc list-inside">
            <li>Playbooks & scripts</li>
            <li>CRM integration</li>
            <li>Performance dashboards</li>
            <li>Meeting SLAs</li>
          </ul>
        </section>

        <a href="/#contact" className="inline-block mt-8 px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">
          Book a Discovery Call
        </a>

        <script
          type="application/ld+json"
          // @ts-expect-error: JSON string for LD+JSON
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Services", item: site.url + "/services" },
                { "@type": "ListItem", position: 3, name: "SDR-as-a-Service", item: site.url + "/services/sdr-as-a-service" }
              ]
            }),
          }}
        />
      </div>
    </main>
  );
}
