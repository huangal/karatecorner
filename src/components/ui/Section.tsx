import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Tone = "ink" | "washi" | "white" | "sage";

const TONES: Record<Tone, string> = {
  ink: "bg-ink-900 text-washi-100 texture-grid",
  washi: "bg-washi-100 text-ink-900",
  white: "bg-washi-50 text-ink-900",
  sage: "bg-sage-800 text-washi-100 texture-grid",
};

type SectionProps = {
  id: string;
  tone?: Tone;
  eyebrow?: string;
  title?: string;
  lead?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  tone = "washi",
  eyebrow,
  title,
  lead,
  className,
  containerClassName,
  children,
}: SectionProps) {
  const headingId = title ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "relative scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 lg:py-32",
        TONES[tone],
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-7xl", containerClassName)}>
        {(eyebrow || title || lead) && (
          <Reveal className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && (
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] opacity-70">
                <span aria-hidden className="h-px w-8 bg-current" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="text-4xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-6xl"
              >
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 md:text-lg">
                {lead}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
