import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ACHIEVEMENTS } from "@/lib/content";

export default function Achievements() {
  return (
    <Section
      id="awards"
      tone="navy"
      eyebrow="The trophy wall"
      title="Sixteen years. A very heavy shelf."
      lead="We do not chase medals for their own sake — but when the work is right, they tend to follow."
      className="overflow-hidden"
    >
      {/* Oversized ghost numeral for depth */}
      <span
        aria-hidden
        className="text-outline pointer-events-none absolute -right-10 top-10 select-none text-[16rem] font-extrabold leading-none opacity-[0.06] lg:text-[22rem]"
      >
        01
      </span>

      <ol className="relative border-l border-bone-50/15 pl-8 sm:pl-12">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.06} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[3.05rem] flex h-12 w-12 items-center justify-center border border-gold-400/45 bg-navy-950 text-sm font-extrabold text-gold-400 sm:-left-[4.05rem] sm:h-14 sm:w-14"
            >
              {item.badge}
            </span>
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
              <p className="shrink-0 text-sm font-extrabold tabular-nums tracking-[0.2em] text-brown-300">
                {item.year}
              </p>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-bone-50 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-bone-200/70 md:text-base">
                  {item.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.15} className="mt-16">
        <div className="grid gap-px border border-bone-50/12 bg-bone-50/12 sm:grid-cols-3">
          {[
            { value: "72", label: "Tournament medals" },
            { value: "9", label: "Certified coaches" },
            { value: "500+", label: "Belts promoted" },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-900 px-8 py-9 text-center">
              <p className="text-5xl font-extrabold text-gold-400">{stat.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-bone-200/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
