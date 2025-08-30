import Link from "next/link";

export default function Page() {
  return (
    <main className="pt-28 pb-20">
      <div className="container">
        <nav className="text-white/60 text-sm mb-6">
          <Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span className="text-white">SaaS</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-semibold">SaaS</h1>
        <p className="mt-4 text-white/70 max-w-3xl">We’ve built outbound for SaaS at Seed to Series B: targeting budget owners, highlighting time-to-value and integration proof, and sequencing LinkedIn with email.</p>
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card p-6"><h3 className="font-semibold">ICP Examples</h3><p className="text-white/70 mt-2">Budget owners, firmographics, technographics, buying signals.</p></div>
          <div className="card p-6"><h3 className="font-semibold">Case Snapshot</h3><p className="text-white/70 mt-2">Challenge → Approach → Results with concrete metrics.</p></div>
        </section>
        <a href="/#contact" className="inline-block mt-8 px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Book a Discovery Call</a>
      </div>
    </main>
  );
}
