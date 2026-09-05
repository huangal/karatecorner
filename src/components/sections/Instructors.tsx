import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { INSTRUCTORS } from "@/lib/content";

export default function Instructors() {
  return (
    <Section
      id="instructors"
      tone="bone"
      eyebrow="The coaching staff"
      title="Coached by people who have been in the deep end."
      lead="Four head coaches, one shared standard. Between them: national titles, Pan-Am medals, and eight years of Bangkok pad work."
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {INSTRUCTORS.map((person, i) => (
          <Reveal as="li" key={person.name} delay={i * 0.08}>
            <article className="group h-full">
              <div className="relative aspect-3/4 w-full overflow-hidden bg-navy-800">
                <Image
                  src={person.image}
                  alt={`Portrait of ${person.name}, ${person.discipline}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/10 to-transparent"
                />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-[0.18em] text-brown-300">
                  {person.rank}
                </p>
              </div>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy-900">
                {person.name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-brown-700">
                {person.discipline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-800/70">
                {person.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
