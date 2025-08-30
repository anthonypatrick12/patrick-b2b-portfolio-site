"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nWebsite: ${payload.website}\nMonthly ACV: ${payload.acv}\nRegion: ${payload.region}\nCRM: ${payload.crm}\nMessage: ${payload.message}`
      );
      window.location.href = `mailto:patrick@example.com?subject=New inquiry from ${payload.name}&body=${body}`;
      setStatus("Thanks! I’ll get back to you shortly.");
      setTimeout(() => { window.location.href = "/thank-you"; }, 1200);
    } catch (e) {
      setStatus("Something went wrong. Please email patrick@example.com.");
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Let’s Talk</h2>
          <p className="text-white/70 mt-2">Tell me about your ICP and goals. I’ll confirm fit and share a blueprint within 5 business days.</p>
          <div className="mt-6 card p-6 space-y-4 text-white/70">
            <div><span className="text-white">Email:</span> patrick@example.com</div>
            <div><span className="text-white">Location:</span> Remote / Global</div>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://calendly.com/your-handle/intro?hide_gdpr_banner=1"
                className="w-full h-full"
                title="Book a discovery call"
              />
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="card p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input required name="name" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70">Company</label>
              <input name="company" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Website</label>
              <input name="website" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-white/70">Monthly ACV</label>
              <input name="acv" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Primary Region</label>
              <input name="region" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3" />
            </div>
            <div>
              <label className="block text-sm text-white/70">CRM Used</label>
              <input name="crm" className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl bg-[#0b1220] border border-white/10 p-3 outline-none focus:ring-2 focus:ring-brand-500"></textarea>
          </div>
          <input type="text" name="companyWebsite" className="hidden" tabIndex={-1} autoComplete="off" />{/* honeypot */}
          <button className="px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Send</button>
          {status && <p className="text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  );
}
