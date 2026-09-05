import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { SCHEDULE, TIERS } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Schedule() {
  return (
    <Section
      id="schedule"
      tone="white"
      eyebrow="Timetable & membership"
      title="Find your class. Pick your tier."
      lead="Doors open at 06:00 on weekdays and the beginners’ course starts fresh every eight weeks. No booking app, no queue — bow in and take a place in the line."
    >
      <Reveal>
        <div className="overflow-x-auto border border-ink-900/12">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <caption className="sr-only">
              Weekly class timetable for KarateCorner
            </caption>
            <thead>
              <tr className="bg-ink-900 text-washi-50">
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]">
                  Day
                </th>
                <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-[0.2em]">
                  Classes
                </th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((row, i) => (
                <tr
                  key={row.day}
                  className={cn(
                    "border-t border-ink-900/10",
                    i % 2 === 1 && "bg-washi-100",
                  )}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-5 align-top text-sm font-extrabold uppercase tracking-[0.14em] text-ink-900"
                  >
                    {row.day}
                  </th>
                  <td className="px-6 py-5">
                    <ul className="flex flex-wrap gap-x-8 gap-y-3">
                      {row.sessions.map((session) => (
                        <li key={session.time} className="flex items-baseline gap-3">
                          <span className="text-sm font-extrabold tabular-nums text-vermillion-700">
                            {session.time}
                          </span>
                          <span className="text-sm font-semibold text-ink-800/80">
                            {session.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <h3 className="mt-20 text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
        Membership
      </h3>
      <ul className="mt-8 grid gap-8 lg:grid-cols-3">
        {TIERS.map((tier, i) => (
          <Reveal as="li" key={tier.name} delay={i * 0.08}>
            <div
              className={cn(
                "flex h-full flex-col p-9",
                tier.featured
                  ? "bg-ink-900 text-washi-100 shadow-2xl shadow-ink-900/20"
                  : "border border-ink-900/12 bg-washi-50 text-ink-900",
              )}
            >
              {tier.featured && (
                <p className="mb-5 inline-block self-start bg-vermillion-600 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-washi-50">
                  Most popular
                </p>
              )}
              <h4 className="text-xl font-extrabold uppercase tracking-[0.14em]">
                {tier.name}
              </h4>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-60">
                  {tier.cadence}
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed opacity-75">
                {tier.summary}
              </p>
              <ul className="mt-8 space-y-3 border-t border-current/12 pt-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-vermillion-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M2 8.5l4 4 8-9" />
                    </svg>
                    <span className="opacity-85">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 pt-1">
                <Button
                  href="#contact"
                  variant={tier.featured ? "primary" : "secondary"}
                  className={cn(
                    "w-full",
                    !tier.featured && "border border-ink-900/15",
                  )}
                >
                  Choose {tier.name}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 text-sm font-semibold text-ink-800/60">
        No joining fee, no fixed contract. Cancel any time with 30 days&rsquo;
        notice. Concession rates for students, seniors and anyone for whom the
        fee is the only thing standing in the way &mdash; just ask at the front desk.
      </p>
    </Section>
  );
}
