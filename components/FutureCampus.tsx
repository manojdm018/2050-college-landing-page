"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const departments = ["AI Engineering", "Space Technology", "Neural Science"];

export function FutureCampus() {
  return (
    <SectionShell title="Future Campus" subtitle="Domain clusters built for post-AGI industries and interplanetary economies.">
      <div className="grid gap-5 md:grid-cols-3">
        {departments.map((name) => (
          <motion.article
            key={name}
            whileHover={{ y: -8, rotateX: 8, rotateY: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="glass-panel group relative rounded-2xl p-6"
            style={{ transformStyle: "preserve-3d" }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-purple-200/80">Department</p>
            <h3 className="text-xl font-semibold text-cyan-100 transition group-hover:text-white">{name}</h3>
            <p className="mt-3 text-sm text-blue-100/65">Immersive labs, autonomous tutors, and mission-grade research studios.</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
