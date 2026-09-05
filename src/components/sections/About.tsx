import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { PILLARS } from "@/lib/content";

export default function About() {
  return (
    <Section
      id="about"
      tone="white"
      eyebrow="The dojo"
      title="Three traditions. One mat."
      lead="We opened in 2009 with a borrowed tatami and a single Shotokan class. Aikido joined in 2016, Shaolin Kung Fu in 2021 — three lineages that disagree about almost every technique and agree completely about how a dojo should feel."
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=80"
              alt="Students in white gi lined up and bowing at the start of a class"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-ink-900/20 mix-blend-multiply"
            />
          </div>
          <div className="mt-8 border-l-4 border-vermillion-600 pl-6">
            <p className="text-xl font-bold leading-snug text-ink-800 md:text-2xl">
              &ldquo;The mat does not care who you were before you stepped onto
              it. It only asks that you bow in and begin.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-vermillion-700">
              Hiroshi Tanaka — Shihan &amp; Chief Instructor
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="bg-sage-800 p-9 text-washi-100 md:p-11">
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Three things we never negotiate.
              </h3>
              <ul className="mt-9 space-y-8">
                {PILLARS.map((pillar) => (
                  <li key={pillar.title} className="flex gap-5">
                    <span
                      aria-hidden
                      className="kanji mt-0.5 text-3xl text-ochre-300"
                    >
                      {pillar.kanji}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-[0.1em]">
                        {pillar.title}
                        <span className="ml-2 text-xs font-semibold normal-case tracking-normal text-sage-300">
                          {pillar.romaji}
                        </span>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-washi-200/75">
                        {pillar.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
