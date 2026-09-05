import type { Program } from "@/lib/content";

const PATHS: Record<Program["icon"], React.ReactNode> = {
  belt: (
    <>
      <path d="M4 20h40v8H4z" />
      <path d="M20 28l-6 14M28 28l6 14" />
    </>
  ),
  fist: (
    <>
      <path d="M10 22v-6a4 4 0 018 0v6M18 20v-8a4 4 0 018 0v8M26 20v-6a4 4 0 018 0v10" />
      <path d="M10 22v10a12 12 0 0012 12h4a12 12 0 0012-12V22" />
    </>
  ),
  grapple: (
    <>
      <circle cx="16" cy="14" r="6" />
      <circle cx="32" cy="14" r="6" />
      <path d="M6 44c0-8 4-14 10-14s10 6 10 14M22 44c0-8 4-14 10-14s10 6 10 14" />
    </>
  ),
  shin: (
    <>
      <path d="M18 6v18l14 8" />
      <path d="M32 32l-4 14M18 24l-8 10" />
      <circle cx="18" cy="6" r="0.5" />
    </>
  ),
  kids: (
    <>
      <circle cx="24" cy="12" r="6" />
      <path d="M24 18v14M14 24h20M18 44l6-12 6 12" />
    </>
  ),
  conditioning: (
    <>
      <path d="M6 18v12M12 14v20M36 14v20M42 18v12" />
      <path d="M12 24h24" />
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
