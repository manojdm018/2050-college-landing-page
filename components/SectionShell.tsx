"use client";

import { motion } from "framer-motion";

type SectionShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SectionShell({ title, subtitle, children }: SectionShellProps) {
  return (
    <motion.section
      className="glass-panel relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl p-6 md:p-10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="scanline pointer-events-none absolute inset-0" />
      <div className="relative z-10 mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/80">Future Module</p>
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        {subtitle ? <p className="max-w-3xl text-sm text-blue-100/70 md:text-base">{subtitle}</p> : null}
      </div>
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
