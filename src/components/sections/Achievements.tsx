import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ACHIEVEMENTS } from "@/lib/content";

export default function Achievements() {
  return (
    <Section
      id="awards"
      tone="ink"
      eyebrow="Milestones"
      title="Sixteen years of quiet accumulation."
      lead="Grades, affiliations and the occasional medal. We do not chase any of it — but when the training is honest, it tends to follow."
      className="overflow-hidden"
    >
      {/* 道 — "the way". Oversized and barely there, for depth. */}
      <span
        aria-hidden
        className="text-outline kanji pointer-events-none absolute -right-8 top-10 select-none text-[16rem] leading-none opacity-[0.07] lg:text-[22rem]"
      >
        道
      </span>

      <ol className="relative border-l border-washi-50/15 pl-8 sm:pl-12">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.06} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[3.05rem] flex h-12 w-12 items-center justify-center border border-ochre-400/45 bg-ink-950 text-sm font-extrabold text-ochre-400 sm:-left-[4.05rem] sm:h-14 sm:w-14"
            >
              {item.badge}
            </span>
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
              <p className="shrink-0 text-sm font-extrabold tabular-nums tracking-[0.2em] text-ochre-300">
                {item.year}
              </p>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-washi-50 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-washi-200/70 md:text-base">
                  {item.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.15} className="mt-16">
        <div className="grid gap-px border border-washi-50/12 bg-washi-50/12 sm:grid-cols-3">
          {[
            { value: "200+", label: "Black belts graded" },
            { value: "9", label: "Certified instructors" },
            { value: "600+", label: "Students trained" },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink-900 px-8 py-9 text-center">
              <p className="text-5xl font-extrabold text-ochre-400">{stat.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-washi-200/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
