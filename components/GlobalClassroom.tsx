"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const nodes = [
  { top: "25%", left: "18%" },
  { top: "40%", left: "31%" },
  { top: "34%", left: "53%" },
  { top: "47%", left: "67%" },
  { top: "55%", left: "79%" },
  { top: "62%", left: "44%" },
];

export function GlobalClassroom() {
  return (
    <SectionShell title="Global Classroom" subtitle="Always-on, borderless collaboration between students connected in real time.">
      <div className="relative h-72 overflow-hidden rounded-2xl border border-blue-300/20 bg-gradient-to-br from-blue-950/40 via-slate-900/65 to-purple-950/25">
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_58%)]" />
        {nodes.map((node, idx) => (
          <motion.span
            key={`${node.left}-${idx}`}
            className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(56,189,248,0.9)]"
            style={{ top: node.top, left: node.left }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.8, 1, 0.7] }}
            transition={{ duration: 2.8 + idx * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </SectionShell>
  );
}
