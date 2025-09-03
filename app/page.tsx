// app/page.tsx
import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";

export default function HomePage() {
  return (
    <main className="pt-28 pb-20">
      {/* HERO */}
      <section className="container text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Predictable B2B Pipeline — Without Burning Your Domain
        </h1>
        <p className="mt-4 text-lg text-white/70">
          We help Seed–Series B SaaS &amp; B2B Services (NA &amp; EU) book sales
          conversations that convert. GDPR-compliant, multi-channel outbound:
          ICP research, data enrichment, SDR-as-a-Service, and appointment
          setting.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#contact"
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

        {/* LOGOS */}
        <div className="mt-12">
          <p className="text-white/60 text-sm mb-4">Trusted by teams at</p>
          <LogoMarquee />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mt-32">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-[var(--card)]/80 border border-white/10">
            <h3 className="text-xl font-semibold">B2B Lead Generation</h3>
            <p className="text-white/70 mt-2">
              Multi-channel strategies (email, LinkedIn, phone) to generate
              high-quality leads matched to your ICP.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)]/80 border border-white/10">
            <h3 className="text-xl font-semibold">Cold Email Campaigns</h3>
            <p className="text-white/70 mt-2">
              GDPR-compliant outreach with strong deliverability, avoiding spam
              traps and protecting your domain reputation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)]/80 border border-white/10">
            <h3 className="text-xl font-semibold">LinkedIn Outreach</h3>
            <p className="text-white/70 mt-2">
              Personalized connection requests and messages to build pipeline
              via LinkedIn.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)]/80 border border-white/10">
            <h3 className="text-xl font-semibold">SDR-as-a-Service</h3>
            <p className="text-white/70 mt-2">
              Dedicated sales reps representing your brand, booking qualified
              meetings directly to your calendar.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container mt-32">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          How Our Process Works
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto text-left">
          <li>
            <strong>1. ICP Research:</strong> We identify your Ideal Customer
            Profile.
          </li>
          <li>
            <strong>2. Data Enrichment:</strong> Verified contact details +
            firmographics.
          </li>
          <li>
            <strong>3. Multi-channel Outbound:</strong> Cold email, LinkedIn,
            and calling.
          </li>
          <li>
            <strong>4. Appointment Setting:</strong> We hand over sales-ready
            meetings.
          </li>
        </ol>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="container mt-32">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-[var(--card)]/80 border border-white/10">
            <h3 className="font-semibold">SaaS Client — Series A</h3>
            <p className="text-white/70 mt-2">
              Booked 45 meetings in 90 days, expanded pipeline by 3.2x.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--card)]/80 border border-white/10">
            <h3 className="font-semibold">IT Services Firm</h3>
            <p className="text-white/70 mt-2">
              Penetrated enterprise accounts, added $1.2M to pipeline in 6
              months.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container mt-32">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What Clients Say
        </h2>
        <blockquote className="max-w-2xl mx-auto italic text-white/80">
          “Patrick’s team built our outbound engine from scratch. In 3 months,
          we had more qualified demos than the past 12 months combined.”
          <footer className="mt-4 text-right text-white/60">— SaaS Founder</footer>
        </blockquote>
      </section>

      {/* ABOUT */}
      <section id="about" className="container mt-32 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          I’m Patrick, specializing in B2B lead generation for SaaS &amp;
          services companies. My focus: compliance, data accuracy, and
          predictable growth. I combine modern tools with a human approach to
          deliver qualified meetings that turn into revenue.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mt-32 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-white/70 mb-6">
          Ready to scale your outbound? Let’s talk.
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow border border-white/10"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
