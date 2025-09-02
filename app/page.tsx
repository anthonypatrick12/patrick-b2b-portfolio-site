// app/page.tsx
import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";

export default function HomePage() {
  return (
    <main className="pt-28 pb-20">
      <section className="container">
        {/* HERO TEXT */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Build Predictable B2B Pipeline — Without Burning Your Domain
          </h1>
          <p className="mt-4 text-white/70">
            For Seed–Series B SaaS &amp; B2B Services (NA &amp; EU). Compliant, multi-channel
            outbound: ICP research, data enrichment, SDR-as-a-Service, and appointment setting.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow border border-white/10"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-2xl border border-white/15 text-white/90 hover:bg-white/5"
            >
              See Services
            </Link>
          </div>
        </div>

        {/* CLIENT LOGOS */}
        <div className="mt-12">
          <p className="text-white/60 text-sm mb-4">Trusted by teams at</p>
          <LogoMarquee />
        </div>
      </section>
    </main>
  );
}
