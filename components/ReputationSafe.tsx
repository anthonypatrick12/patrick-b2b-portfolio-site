export default function ReputationSafe() {
  return (
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-6 items-start">
        <div className="card p-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Reputation‑safe Outbound</h2>
          <p className="text-white/70 mt-2">Deliverability safeguards baked in: domains, warm-up, DMARC/DKIM/SPF, opt-outs, consent-first tactics where required.</p>
          <ul className="mt-4 space-y-2 text-white/70 list-disc list-inside">
            <li>Custom tracking & seed tests</li>
            <li>Daily health checks & list hygiene</li>
            <li>LinkedIn + phone to diversify risk</li>
          </ul>
          <a href="/privacy" className="inline-block mt-4 text-brand-400 hover:underline">See our privacy & compliance →</a>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold">Free Outbound Audit (48 hours)</h3>
          <p className="text-white/70 mt-2">Get a quick diagnostic across domains, copy, lists, and metrics—with a prioritized checklist.</p>
          <a href="/audit" className="inline-block mt-4 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Get the Audit</a>
        </div>
      </div>
    </section>
  );
}
