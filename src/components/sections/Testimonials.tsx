"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback((next: number) => {
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  const current = TESTIMONIALS[index];

  return (
    <Section
      id="testimonials"
      tone="sage"
      eyebrow="From the mat"
      title="What students actually say."
    >
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[19rem] sm:min-h-[15rem]"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 48 32"
                className="h-8 w-12 text-ochre-300"
                fill="currentColor"
              >
                <path d="M0 32V16L10 0h9L11 16h8v16H0zm29 0V16L39 0h9l-8 16h8v16H29z" />
              </svg>
              <blockquote className="mt-7 max-w-4xl text-2xl font-bold leading-snug text-washi-50 text-balance sm:text-3xl md:text-4xl">
                {current.quote}
              </blockquote>
              <figcaption className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-washi-100">
                {current.name}
                <span className="mt-1 block text-xs font-semibold normal-case tracking-normal text-washi-200/60">
                  {current.role}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6 border-t border-washi-50/15 pt-8">
          <ul className="flex items-center gap-3" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => go(i)}
                  className={cn(
                    "h-1.5 w-10 transition-colors duration-300",
                    i === index ? "bg-washi-50" : "bg-washi-50/25 hover:bg-washi-50/50",
                  )}
                />
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {([
              ["Previous testimonial", -1, "M10 2L4 8l6 6"],
              ["Next testimonial", 1, "M6 2l6 6-6 6"],
            ] as const).map(([label, dir, path]) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={() => go(index + dir)}
                className="flex h-12 w-12 items-center justify-center border border-washi-50/25 text-washi-50 transition-colors hover:bg-washi-50 hover:text-sage-800"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d={path} />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
