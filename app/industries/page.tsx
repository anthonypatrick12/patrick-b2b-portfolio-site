import Link from "next/link";

export default function IndustriesIndex() {
  const items = [
    {href: "/industries/saas", title: "SaaS"},
    {href: "/industries/logistics", title: "Logistics"}
  ];
  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-semibold">Industries</h1>
        <p className="mt-3 text-white/70 max-w-3xl">Experience across SaaS, professional services, fintech, and logistics.</p>
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
