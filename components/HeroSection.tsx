"use client";

import { motion } from "framer-motion";
import { Hero3D } from "./Hero3D";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-12 md:px-10 md:pt-16">
      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          className="space-y-7"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.26em] text-cyan-200">
            College Nexus // 2050
          </p>
          <h1 className="neon-text text-5xl font-black leading-[0.95] md:text-7xl">Welcome to Education 2050</h1>
          <p className="max-w-xl text-base text-blue-100/75 md:text-lg">
            AI-driven personalized learning cores adapt in real-time to your cognition, performance, and ambitions—
            turning every student into a mission-ready innovator.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-cyan-300/50 bg-gradient-to-r from-cyan-400/20 via-blue-500/25 to-purple-400/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_25px_rgba(56,189,248,0.55)]"
          >
            Launch My Learning Orbit
          </motion.button>
        </motion.div>

        <motion.div
          className="glass-panel h-[420px] overflow-hidden rounded-3xl md:h-[520px]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
