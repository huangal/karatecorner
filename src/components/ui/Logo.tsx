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
        <path d="M2 2h28v28H2z" className="fill-brown-600" />
        <path d="M8 8h16v4H8zM8 20h16v4H8z" className="fill-bone-50" />
        <path d="M14 12h4v8h-4z" className="fill-bone-50/60" />
      </svg>
      Karate<span className="text-brown-400">Corner</span>
    </span>
  );
}
