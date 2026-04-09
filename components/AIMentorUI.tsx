"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const messages = [
  "Your learning path has been optimized.",
  "Next recommended subject: Quantum Systems.",
  "Neural retention boosted by 18% after adaptive simulation.",
];

export function AIMentorUI() {
  return (
    <SectionShell
      title="AI Mentor Interface"
      subtitle="A living intelligence layer that listens, predicts, and coaches each learner in context."
    >
      <div className="grid gap-5 rounded-2xl border border-white/10 bg-slate-950/40 p-5 md:p-7">
        {messages.map((message, idx) => (
          <motion.div
            key={message}
            className="w-fit max-w-xl rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50 shadow-[0_0_18px_rgba(34,211,238,0.2)]"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.25, duration: 0.65 }}
          >
            <motion.span
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 1, 0.65, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatType: "reverse", delay: idx * 0.2 }}
            >
              {message}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
