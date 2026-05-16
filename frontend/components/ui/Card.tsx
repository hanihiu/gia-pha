import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const cardVariants = {
  surface:
    "rounded-[2rem] border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(53,41,18,0.08)]",
  elevated:
    "rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_rgba(53,41,18,0.12)] backdrop-blur",
  muted: "rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)]",
  dark:
    "rounded-[2rem] bg-[var(--color-foreground)] text-[var(--color-background)] shadow-[0_18px_60px_rgba(24,24,18,0.16)]",
  auth:
    "rounded-[2rem] border border-[#d5b46a]/70 bg-[#fffaf0]/88 shadow-[0_28px_90px_rgba(79,42,19,0.2)] backdrop-blur",
};

export type CardElement = "article" | "div" | "section";
export type CardVariant = keyof typeof cardVariants;

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: CardElement;
  variant?: CardVariant;
}

export default function Card({
  as: Component = "div",
  className,
  variant = "surface",
  ...props
}: CardProps) {
  return (
    <Component className={cn(cardVariants[variant], className)} {...props} />
  );
}
