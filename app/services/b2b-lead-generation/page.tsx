import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "B2B Lead Generation",
  description: "B2B Lead Generation service by Patrick — B2B Lead Generation",
};

export default function Page() {
  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <nav className="text-white/60 text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span className="text-white">B2B Lead Generation</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-semibold">B2B Lead Generation</h1>
        <p className="mt-4 text-white/70 max-w-3xl">Full-funnel outbound to create qualified pipeline. We combine ICP research, compliant list building, and multi-channel outreach to consistently book meetings with budget owners.</p>
        <section className="mt-10 card p-6">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-3 space-y-2 text-white/70 list-disc list-inside">
            <li>Blueprint, messaging, and deliverability setup</li>
            <li>ICP and list building with data enrichment</li>
            <li>Cadences across email, LinkedIn, and phone</li>
            <li>Weekly reviews and dashboards</li>
          </ul>
        </section>
        <a href="/#contact" className="inline-block mt-8 px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Book a Discovery Call</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {"@type":"ListItem","position":1,"name":"Home","item": site.url},
                {"@type":"ListItem","position":2,"name":"Services","item": site.url + "/services"},
                {"@type":"ListItem","position":3,"name":"B2B Lead Generation","item": site.url + "/services/b2b-lead-generation"}
              ]
            })
          }
        />
      </div>
    </main>
  );
}
