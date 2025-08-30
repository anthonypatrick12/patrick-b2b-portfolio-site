import { services } from "@/lib/seo";
import { Target, Mail, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

const icons = [Target, Mail, Users];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <Reveal><h2 className="text-3xl md:text-4xl font-semibold">Services</h2></Reveal>
        <Reveal delay={0.05}><p className="text-white/70 mt-2 max-w-2xl">Pick a model that fits: one-off blueprint, campaign management, or fully managed SDR-as-a-service.</p></Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.title} className="card p-6">
                <div className="flex items-center gap-3">
                  <Icon className="text-brand-400" />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="text-white/70 mt-3">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-white/70 list-disc list-inside">
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
