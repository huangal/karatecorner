"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { PROGRAMS } from "@/lib/content";

const HOURS = [
  { days: "Monday – Thursday", time: "06:00 – 21:30" },
  { days: "Friday", time: "06:00 – 20:30" },
  { days: "Saturday", time: "08:00 – 13:00" },
  { days: "Sunday", time: "Qigong & zazen, 10:00 – 12:00" },
];

const FIELD_CLASS =
  "w-full border border-washi-50/20 bg-ink-950/60 px-4 py-3.5 text-sm font-semibold text-washi-50 placeholder:text-washi-200/35 focus:border-ochre-400 focus:outline-none";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section
      id="contact"
      tone="ink"
      eyebrow="Visit the dojo"
      title="Your first class is free. Genuinely."
      lead="Tell us what you would like to train and we will put you in the right class this week. No contract, no sales pitch, no need to own a gi — just a spot on the mat and someone to show you where to stand."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <form
            className="grid gap-5 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-washi-200/60"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Alex Moreau"
                className={FIELD_CLASS}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-washi-200/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={FIELD_CLASS}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="program"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-washi-200/60"
              >
                Program of interest
              </label>
              <select id="program" name="program" className={FIELD_CLASS} defaultValue="">
                <option value="" disabled>
                  Choose a program
                </option>
                {PROGRAMS.map((program) => (
                  <option key={program.name} value={program.name}>
                    {program.name}
                  </option>
                ))}
                <option value="unsure">Not sure yet</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-washi-200/60"
              >
                Anything we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any training history, injuries, or class times that suit you…"
                className={FIELD_CLASS}
              />
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-5 pt-2">
              <Button type="submit" size="lg">
                Book My Free Class
              </Button>
              <p
                role="status"
                aria-live="polite"
                className="text-sm font-semibold text-ochre-300"
              >
                {submitted
                  ? "Thanks — this demo form does not send yet. Call us and we will book you in."
                  : ""}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="border border-washi-50/12 p-8">
            <h3 className="text-xl font-extrabold uppercase tracking-[0.14em] text-washi-50">
              Find us
            </h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-washi-200/75">
              412 Ironside Avenue
              <br />
              Northside District
              <br />
              Springfield, 62704
            </address>
            <p className="mt-5 space-y-1 text-sm font-semibold">
              <a
                href="tel:+15550142778"
                className="block text-washi-100 underline-offset-4 hover:text-ochre-300 hover:underline"
              >
                (555) 014-2778
              </a>
              <a
                href="mailto:train@karatecorner.example.com"
                className="block text-washi-100 underline-offset-4 hover:text-ochre-300 hover:underline"
              >
                train@karatecorner.example.com
              </a>
            </p>

            <h4 className="mt-9 text-xs font-bold uppercase tracking-[0.2em] text-washi-200/70">
              Opening hours
            </h4>
            <dl className="mt-4 space-y-2.5 text-sm">
              {HOURS.map((row) => (
                <div key={row.days} className="flex justify-between gap-4">
                  <dt className="font-semibold text-washi-200/70">{row.days}</dt>
                  <dd className="font-bold tabular-nums text-washi-50">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Map placeholder — swap for an embedded map iframe when keys are available. */}
          <div
            role="img"
            aria-label="Map placeholder showing the KarateCorner location at 412 Ironside Avenue"
            className="texture-grid mt-6 flex h-56 items-center justify-center border border-washi-50/12 bg-ink-800"
          >
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-washi-200/70">
              Map embed
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
