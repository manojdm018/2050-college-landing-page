"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";

const courses = [
  { title: "Quantum Systems Lab", tags: ["Live Sim", "Mentor AI"] },
  { title: "Neural Interface Design", tags: ["Bio-Tech", "Holo Studio"] },
  { title: "Interplanetary Logistics", tags: ["Space Ops", "Strategy"] },
];

export function CoursesSection() {
  return (
    <SectionShell title="Courses" subtitle="Minimal form. Maximum capability. Built for high-agency learners.">
      <div className="grid gap-5 md:grid-cols-3">
        {courses.map((course) => (
          <motion.div
            key={course.title}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl border border-purple-300/30 bg-slate-950/55 p-5"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
            <h3 className="relative z-10 text-lg font-semibold text-cyan-100">{course.title}</h3>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-xs uppercase tracking-wide text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
