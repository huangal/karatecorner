"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const STATS = [
  { value: "600+", label: "Students trained" },
  { value: "3", label: "Traditions taught" },
  { value: "30+", label: "Classes each week" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink-950 px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Indigo wash, warmed from below so the section invites rather than looms. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(125%_95%_at_18%_0%,var(--color-ink-600)_0%,var(--color-ink-800)_42%,var(--color-ink-950)_100%)]"
      />
      <div aria-hidden className="texture-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden
        className="absolute -bottom-64 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-vermillion-700/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/4 -z-10 h-[36rem] w-[36rem] rotate-45 border border-ochre-500/20"
      />
      {/* Enso — the open circle. Drawn, not decorative filler. */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="absolute -right-16 bottom-8 -z-10 hidden h-96 w-96 text-ochre-400/15 lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path d="M148 46a70 70 0 10 14 62" />
      </svg>

      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          {...rise(0)}
          className="mb-7 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.34em] text-ochre-300"
        >
          <span aria-hidden className="h-px w-10 bg-ochre-500" />
          Est. 2009 — Northside
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          id="hero-heading"
          className="max-w-5xl text-[3.25rem] font-extrabold leading-[0.86] tracking-tight text-washi-50 text-balance sm:text-7xl lg:text-[7rem]"
        >
          Every black belt
          <br />
          was once a
          <br />
          <span className="text-ochre-400">white belt.</span>
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-washi-200/75"
        >
          KarateCorner is a traditional dojo teaching Shotokan Karate, Aikido and
          Shaolin Kung Fu. No experience needed, no contracts, no minimum
          fitness — just a clean mat, patient instruction, and a place to begin.
        </motion.p>

        <motion.div
          {...rise(0.24)}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#contact" size="lg">
            Book a Free Class
          </Button>
          <Button href="#programs" size="lg" variant="secondary">
            Explore Disciplines
          </Button>
        </motion.div>

        <motion.dl
          {...rise(0.34)}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-px border border-washi-50/12 bg-washi-50/12 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink-950/85 px-6 py-7">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-extrabold text-washi-50">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.18em] text-washi-200/70">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-washi-200/70">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-gradient-to-b from-ochre-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
