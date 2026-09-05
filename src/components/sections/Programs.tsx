import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import ProgramIcon from "@/components/ui/ProgramIcon";
import { PROGRAMS } from "@/lib/content";

export default function Programs() {
  return (
    <Section
      id="programs"
      tone="ink"
      eyebrow="Disciplines"
      title="Three lineages, six ways in."
      lead="Every class runs on the same logic: fundamentals first, pressure only when you are ready for it, and competition only if you ever want it at all."
    >
      <ul className="grid gap-px border border-washi-50/12 bg-washi-50/12 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((program, i) => (
          <Reveal
            key={program.name}
            as="li"
            delay={(i % 3) * 0.08}
            className="bg-ink-900"
          >
            <Card
              className="group border-0 bg-ink-900 p-8 md:p-10"
              as="div"
            >
              <ProgramIcon
                icon={program.icon}
                className="h-11 w-11 text-ochre-400 transition-colors duration-300 group-hover:text-ochre-300"
              />
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-washi-200/70">
                {program.tagline}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-washi-50 md:text-3xl">
                {program.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-washi-200/70">
                {program.description}
              </p>
              <p className="mt-7 inline-block border border-washi-50/20 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-washi-200/70">
                {program.level}
              </p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
