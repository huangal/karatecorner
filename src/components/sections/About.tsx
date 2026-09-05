import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const PILLARS = [
  {
    title: "Respect",
    body: "Bow in, bow out. Everyone on the mat is here to make everyone else better.",
  },
  {
    title: "Repetition",
    body: "Technique is earned in the thousandth rep, not the tenth. We drill until it is instinct.",
  },
  {
    title: "Readiness",
    body: "Fitness is a side effect. What we actually build is the ability to stay calm under pressure.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      tone="white"
      eyebrow="Our philosophy"
      title="A gym built on the boring parts of greatness."
      lead="We opened in 2009 with three heavy bags and a borrowed mat. What has not changed is the belief that discipline compounds — that the person who shows up on the ordinary Tuesday is the one holding the belt at the end of the year."
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1400&q=80"
              alt="Students lined up in gi, bowing at the start of a karate class"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-navy-900/25 mix-blend-multiply"
            />
          </div>
          <div className="mt-8 border-l-4 border-brown-600 pl-6">
            <p className="text-xl font-bold leading-snug text-navy-800 md:text-2xl">
              &ldquo;We are not trying to make everyone a fighter. We are trying
              to make everyone harder to discourage.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-brown-700">
              Marcus Ren — Founder &amp; Head Coach
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="bg-brown-800 p-9 text-bone-100 md:p-11">
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Three things we never negotiate.
              </h3>
              <ul className="mt-9 space-y-8">
                {PILLARS.map((pillar, i) => (
                  <li key={pillar.title} className="flex gap-5">
                    <span
                      aria-hidden
                      className="mt-1 text-sm font-extrabold tabular-nums text-brown-300"
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-[0.1em]">
                        {pillar.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-bone-200/75">
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
