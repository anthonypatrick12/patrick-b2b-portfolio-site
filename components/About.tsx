import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <Image src="/patrick-portrait.jpg" alt="Patrick portrait" width={640} height={800} className="rounded-2xl border border-white/10 object-cover h-full w-full" />
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Hi, I’m Patrick</h2>
          <p className="text-white/70 mt-3">I’ve built outbound engines for startups and mid-market teams across SaaS, services, and fintech. My focus is measurable pipeline and protecting your sender reputation while doing it.</p>
          <ul className="mt-4 space-y-2 text-white/70 list-disc list-inside">
            <li>HubSpot/Salesforce native workflows</li>
            <li>Deliverability hardening · domain & DKIM setup · warm-up</li>
            <li>Data enrichment & verification across sources</li>
            <li>Outbound scripts, cadences, and reporting that the team actually uses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
