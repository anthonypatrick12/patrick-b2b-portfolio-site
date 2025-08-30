"use client";
import Image from "next/image";
import { caseStudies } from "@/lib/seo";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">Case Studies</h2>
        <p className="text-white/70 mt-2 max-w-2xl">A few outcomes from recent engagements.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {caseStudies.map(cs => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card overflow-hidden"
            >
              <Image src={cs.image} alt={cs.company} width={800} height={500} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{cs.company}</h3>
                <p className="text-white/60 text-sm">{cs.industry} · {cs.length} · {cs.stack}</p>
                <p className="mt-3"><span className="text-white/80">Challenge:</span> <span className="text-white/70">{cs.challenge}</span></p>
                <p className="mt-2"><span className="text-white/80">Approach:</span> <span className="text-white/70">{cs.approach}</span></p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cs.results.map(r => (
                    <li key={r} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">{r}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
