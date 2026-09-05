import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 text-lg font-extrabold uppercase tracking-[0.18em]",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        fill="none"
      >
        <path d="M2 2h28v28H2z" className="fill-vermillion-600" />
        {/* Torii: lintel, tie-beam, two posts. */}
        <path d="M6 8h20v3H6zM8 14h16v2.5H8z" className="fill-washi-50" />
        <path d="M10 11h3v13h-3zM19 11h3v13h-3z" className="fill-washi-50" />
      </svg>
      Karate<span className="text-ochre-400">Corner</span>
    </span>
  );
}
