"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

const STATS = [
  { value: "500+", label: "Black belts promoted" },
  { value: "16", label: "Years on the mat" },
  { value: "40+", label: "Classes each week" },
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
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy-950 px-5 pb-20 pt-32 sm:px-8"
    >
      {/* Layered background: gradient wash + geometric texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_15%_0%,var(--color-navy-600)_0%,var(--color-navy-900)_45%,var(--color-navy-950)_100%)]"
      />
      <div aria-hidden className="texture-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden
        className="absolute -right-40 top-1/4 -z-10 h-[36rem] w-[36rem] rotate-45 border border-brown-500/25"
      />
      <div
        aria-hidden
        className="absolute -bottom-56 -left-32 -z-10 h-[30rem] w-[30rem] rotate-12 bg-brown-800/35 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl">
        <motion.p
          {...rise(0)}
          className="mb-7 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.34em] text-brown-300"
        >
          <span aria-hidden className="h-px w-10 bg-brown-500" />
          Est. 2009 — Northside
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          id="hero-heading"
          className="max-w-5xl text-[3.25rem] font-extrabold leading-[0.86] tracking-tight text-bone-50 text-balance sm:text-7xl lg:text-[7.5rem]"
        >
          Train like the
          <br />
          <span className="text-brown-400">title</span> is already
          <br />
          yours.
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-bone-200/75"
        >
          KarateCorner is a championship gym in the middle of an ordinary
          neighbourhood. Karate, Muay Thai, Jiu-Jitsu and Kickboxing — taught by
          coaches who have competed at the highest level, to anyone willing to
          show up.
        </motion.p>

        <motion.div
          {...rise(0.24)}
          className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="#contact" size="lg">
            Book a Free Class
          </Button>
          <Button href="#programs" size="lg" variant="secondary">
            Explore Programs
          </Button>
        </motion.div>

        <motion.dl
          {...rise(0.34)}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-px border border-bone-50/12 bg-bone-50/12 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-navy-950/85 px-6 py-7">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-extrabold text-bone-50">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.18em] text-bone-200/55">
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
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-bone-200/45">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          className="block h-10 w-px bg-gradient-to-b from-brown-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
