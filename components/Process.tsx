import { processSteps } from "@/lib/seo";

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">How We Work</h2>
        <p className="text-white/70 mt-2 max-w-2xl">A proven framework to build pipeline safely and predictably.</p>
        <div className="grid md:grid-cols-5 gap-4 mt-10">
          {processSteps.map((s) => (
            <div key={s.step} className="card p-5 md:sticky top-24 h-fit">
              <div className="text-brand-400 font-semibold">{s.step}</div>
              <div className="text-lg font-semibold mt-1">{s.title}</div>
              <div className="text-white/70 mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
