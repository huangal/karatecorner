import type { Program } from "@/lib/content";

const PATHS: Record<Program["icon"], React.ReactNode> = {
  // Obi and its two hanging ends.
  karate: (
    <>
      <path d="M4 20h40v8H4z" />
      <path d="M20 28l-6 14M28 28l6 14" />
    </>
  ),
  // A circle with a redirecting current through it — blending, not blocking.
  aikido: (
    <>
      <circle cx="24" cy="24" r="17" />
      <path d="M11 30c7 0 6-13 13-13s6 13 13 13" />
    </>
  ),
  // Lotus.
  shaolin: (
    <>
      <path d="M24 42c-5-11-5-21 0-31 5 10 5 20 0 31z" />
      <path d="M24 42c-7-7-15-9-19-5 5 8 12 10 19 5z" />
      <path d="M24 42c7-7 15-9 19-5-5 8-12 10-19 5z" />
    </>
  ),
  kids: (
    <>
      <circle cx="24" cy="12" r="6" />
      <path d="M24 18v14M14 24h20M18 44l6-12 6 12" />
    </>
  ),
  // Steps, rising from the baseline.
  foundations: (
    <>
      <path d="M4 42h40" />
      <path d="M11 42V34M21 42V26M31 42V18M41 42V10" />
    </>
  ),
  // Breath, moving out from a still centre.
  qigong: (
    <>
      <circle cx="24" cy="24" r="4" />
      <path d="M13 13a15.5 15.5 0 000 22M35 13a15.5 15.5 0 010 22" />
    </>
  ),
};

export default function ProgramIcon({
  icon,
  className,
}: {
  icon: Program["icon"];
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="square"
      className={className}
    >
      {PATHS[icon]}
    </svg>
  );
}
