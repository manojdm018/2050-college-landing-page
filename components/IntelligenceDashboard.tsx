"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const stats = [
  { label: "Skill Growth", value: 92 },
  { label: "Performance", value: 88 },
  { label: "AI Insight Score", value: 96 },
];

export function IntelligenceDashboard() {
  return (
    <SectionShell title="Student Intelligence Dashboard" subtitle="Control-room analytics synced to cognition and project execution velocity.">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.03 }}
            className="glass-panel rounded-2xl p-5"
          >
            <div className="relative mx-auto mb-4 grid h-28 w-28 place-items-center rounded-full border border-cyan-300/40">
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background: `conic-gradient(#3be7ff ${stat.value * 3.6}deg, rgba(27, 40, 70, 0.55) 0deg)`,
                }}
              />
              <div className="absolute inset-4 rounded-full bg-slate-950/90" />
              <span className="relative z-10 text-xl font-bold text-cyan-200">{stat.value}%</span>
            </div>
            <p className="text-center text-sm tracking-wide text-blue-50/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
