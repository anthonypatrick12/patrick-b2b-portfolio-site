"use client";
import { useEffect, useRef } from "react";

export default function Marquee({ children }:{ children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let anim: number;
    let x = 0;
    const tick = () => {
      x = (x - 1) % el.scrollWidth;
      el.style.transform = `translateX(${x}px)`;
      anim = requestAnimationFrame(tick);
    };
    anim = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim);
  }, []);
  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex gap-12 will-change-transform py-4">
        {children}{children}
      </div>
    </div>
  );
}
