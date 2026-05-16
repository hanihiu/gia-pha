import type { InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const inputVariants = {
  default:
    "h-12 w-full rounded-2xl border border-[var(--color-border)] bg-white/85 px-4 text-sm text-[var(--color-foreground)] outline-none transition placeholder:text-[var(--color-muted-foreground)] focus:border-[#8f1918] focus:ring-4 focus:ring-[#8f1918]/10",
  auth:
    "h-12 w-full rounded-2xl border border-[#d9bf7f] bg-white/85 px-4 text-sm text-[#24150f] outline-none transition placeholder:text-[#a7957b] focus:border-[#8f1918] focus:ring-4 focus:ring-[#8f1918]/10",
};

export type InputVariant = keyof typeof inputVariants;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

export default function Input({
  className,
  variant = "default",
  ...props
}: InputProps) {
  return <input className={cn(inputVariants[variant], className)} {...props} />;
}
