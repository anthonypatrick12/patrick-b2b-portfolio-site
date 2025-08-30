import { testimonials } from "@/lib/seo";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map(t => (
            <blockquote key={t.name} className="card p-6">
              <p className="text-white/80">“{t.quote}”</p>
              <footer className="mt-4 text-white/60">{t.name} · {t.title}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
