"use client";
import { useEffect } from "react";
import { animate, useMotionValue } from "framer-motion";

export default function Counter({ from = 0, to, duration = 1.2, suffix = "" }:{ from?: number; to: number; duration?: number; suffix?: string; }) {
  const v = useMotionValue(from);
  useEffect(() => {
    const controls = animate(v, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [to, duration, v]);
  return <span>{Math.round(v.get())}{suffix}</span>;
}
