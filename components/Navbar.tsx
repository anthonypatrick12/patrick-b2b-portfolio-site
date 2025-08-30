"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/seo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-[#070b12]/70 backdrop-blur border-b border-white/10" : ""}`}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Patrick logo" className="w-7 h-7" />
          <span className="font-semibold tracking-tight">Patrick</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-white/80 hover:text-white transition">{n.label}</Link>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow transition">Book a Call</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#070b12]">
          <div className="container py-4 space-y-3">
            {nav.map(n => (
              <Link key={n.href} href={n.href} className="block text-white/80 hover:text-white">{n.label}</Link>
            ))}
            <a href="#contact" className="inline-block px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-400 text-white shadow-glow">Book a Call</a>
          </div>
        </div>
      )}
    </header>
  );
}
