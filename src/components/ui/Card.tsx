"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "div" | "article" | "li";
};

export default function Card({
  children,
  className,
  interactive = true,
  as = "div",
}: CardProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      whileHover={interactive && !reduceMotion ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "relative h-full border border-current/12 p-7 transition-colors duration-300",
        interactive && "hover:border-current/35",
        className,
      )}
    >
      {children}
    </MotionTag>
  );
}
