"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Parallax from "@/components/Parallax";
import Counter from "@/components/Counter";

export default function Hero() {
  return (
    <section className="relative pt-36 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(60rem_60rem_at_50%_-10%,black,transparent)] bg-grid bg-[size:24px_24px]" />
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Build Predictable <span className="text-brand-400">B2B Pipeline</span> — Without Burning Your Domain
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-white/70"
          >
            For Seed–Series B SaaS & B2B Services (NA & EU). Compliant, multi-channel outbound: ICP research, data enrichment, SDR-as-a-Service, and appointment setting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Book a Discovery Call</a>
            <a href="#case-studies" className="px-6 py-3 rounded-2xl border border-white/20 hover:border-white/40">View Case Studies</a>
          </motion.div>
          <div className="mt-6 flex gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70">Deliverability-safe</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70">CRM-native</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70"><Counter to={4} suffix="x" /> pipeline in 90 days</span>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/60">
            <div className="flex -space-x-3">
              <Image src="/patrick-portrait.jpg" alt="Patrick" width={48} height={48} className="rounded-full border border-white/20" priority />
              <Image src="/case-study-1.jpg" alt="" width={48} height={48} className="rounded-full border border-white/20" />
              <Image src="/case-study-2.jpg" alt="" width={48} height={48} className="rounded-full border border-white/20" />
            </div>
            <p><span className="text-white"><Counter to={40} suffix="%" /></span> avg. reply uplift · <span className="text-white"><Counter to={2} />–<Counter to={4} />x</span> pipeline in 90 days</p>
          </div>
        </div>
        <Parallax>
          <div className="card p-4 md:p-6 relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-brand-500/20 to-transparent blur-2xl -z-10" />
            <video className="w-full rounded-xl border border-white/10" autoPlay muted loop playsInline poster="/og-image.png">
              <source src="" type="video/mp4" />
            </video>
            <p className="text-white/60 text-sm mt-3">Add a short 30s screen recording walkthrough (replace video source).</p>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
