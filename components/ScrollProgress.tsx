"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-brand-500 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
