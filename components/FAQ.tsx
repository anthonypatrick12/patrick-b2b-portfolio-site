import faq from "@/content/faq.json";

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faq.map((f) => (
            <details key={f.q} className="card p-6">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
