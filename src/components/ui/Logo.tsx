import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Mark size in px. The wordmark scales with the surrounding text. */
  size?: number;
};

/**
 * The dojo mark: the kicking figure from the MyKaratesCorner lockup, in the
 * reversed white artwork so it sits straight on the dark navbar and footer.
 * The name is live text rather than part of the image — the wordmark inside
 * the original lockup is unreadable below roughly 200px.
 */
export default function Logo({ className, size = 36 }: LogoProps) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 text-lg font-extrabold uppercase tracking-[0.18em]",
        className,
      )}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        priority
        className="shrink-0"
        style={{ width: size, height: size }}
      />
      Karate<span className="text-ochre-400">Corner</span>
    </span>
  );
}
