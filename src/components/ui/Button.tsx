"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brown-600 text-bone-50 hover:bg-brown-500 focus-visible:outline-brown-400",
  secondary:
    "bg-bone-50 text-navy-900 hover:bg-bone-200 focus-visible:outline-bone-300",
  ghost:
    "border border-current/30 bg-transparent text-current hover:bg-current/10 focus-visible:outline-current",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.14em]",
    "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link href={href} className={classes} onClick={onClick} {...rest}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
