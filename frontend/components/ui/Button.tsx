import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const buttonVariants = {
  primary:
    "h-13 rounded-2xl bg-[#8f1918] px-5 text-sm font-semibold text-[#fff7df] shadow-[0_14px_32px_rgba(143,25,24,0.25)] transition hover:bg-[#751413]",
  secondary:
    "h-12 rounded-2xl border border-[var(--color-border)] bg-white px-5 text-sm font-semibold text-[var(--color-foreground)] shadow-sm transition hover:bg-stone-50",
};

export type ButtonVariant = keyof typeof buttonVariants;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

export default function Button({
  className,
  fullWidth = false,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants[variant], fullWidth && "w-full", className)}
      type={type}
      {...props}
    />
  );
}
