"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export default function Parallax({ children, offset = 120 }: PropsWithChildren<{ offset?: number }>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
