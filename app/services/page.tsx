import Link from "next/link";

export default function ServicesIndex() {
  const items = [
    {href: "/services/b2b-lead-generation", title: "B2B Lead Generation"},
    {href: "/services/sdr-as-a-service", title: "SDR-as-a-Service"},
    {href: "/services/linkedin-outreach", title: "LinkedIn Outreach"},
    {href: "/services/cold-email", title: "Cold Email Campaigns"}
  ];
  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-semibold">Services</h1>
        <p className="mt-3 text-white/70 max-w-3xl">Choose the model that fits: from strategy blueprints to fully managed SDR teams integrated with your CRM.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {items.map(i => (
            <Link key={i.href} href={i.href} className="card p-6 hover:shadow-glow transition">
              <h2 className="text-xl font-semibold">{i.title}</h2>
              <p className="text-white/70 mt-2">Learn more →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
