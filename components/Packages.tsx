export default function Packages() {
  const items = [
    {
      name: "Blueprint",
      price: "Fixed",
      goodFor: "Teams needing a plan & messaging",
      bullets: ["ICP & list plan", "Deliverability checklist", "Messaging map", "KPI model"]
    },
    {
      name: "Managed Campaigns",
      price: "Monthly",
      goodFor: "Teams wanting us to run outbound",
      bullets: ["Domains & warm-up", "Cadences + A/B tests", "Dashboards & weekly review", "SQL & pipeline reporting"]
    },
    {
      name: "SDR-as-a-Service",
      price: "Monthly",
      goodFor: "Hands-off meetings to pipeline",
      bullets: ["Dedicated SDR(s)", "Playbooks & scripts", "CRM integration", "SLA on meetings"]
    }
  ];
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">Packages</h2>
        <p className="text-white/70 mt-2 max-w-3xl">Choose the level of involvement and ownership that fits your stage and goals.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((p) => (
            <div key={p.name} className="card p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-white/60">{p.price}</span>
              </div>
              <p className="text-white/60 mt-2">Good fit if: {p.goodFor}</p>
              <ul className="mt-4 space-y-2 text-white/70 list-disc list-inside">
                {p.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <a href="/#contact" className="inline-block mt-4 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Get Proposal</a>
            </div>
          ))}
        </div>
        <p className="text-white/60 mt-6">Risk reversal: Blueprint ready in 5 business days. If it’s not actionable, you don’t pay.</p>
      </div>
    </section>
  );
}
