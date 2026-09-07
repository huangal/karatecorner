import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { INSTRUCTORS } from "@/lib/content";

export default function Instructors() {
  return (
    <Section
      id="instructors"
      tone="washi"
      eyebrow="The instructors"
      title="Taught by people who still bow in."
      lead="Three instructors, one for each lineage, holding a single shared standard. Between them: a JKA apprenticeship in Tokyo, Aikikai certification through Hombu Dojo, and a Songshan transmission."
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {INSTRUCTORS.map((person, i) => (
          <Reveal as="li" key={person.name} delay={i * 0.08}>
            <article className="group h-full">
              <div className="relative aspect-3/4 w-full overflow-hidden bg-ink-800">
                <Image
                  src={person.image}
                  alt={`Portrait of ${person.name}, ${person.discipline}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/10 to-transparent"
                />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-[0.18em] text-ochre-300">
                  {person.rank}
                </p>
              </div>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink-900">
                {person.name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-vermillion-700">
                {person.discipline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/70">
                {person.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
