import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const linkVariants = {
  plain: "",
  nav: "transition hover:text-[var(--color-foreground)]",
  text: "font-semibold text-[#8f1918] transition hover:text-[#751413]",
  brand: "inline-flex w-fit items-center gap-3",
  button:
    "flex h-14 items-center justify-center gap-3 rounded-2xl border px-5 text-sm font-semibold shadow-sm transition",
};

export type AppLinkVariant = keyof typeof linkVariants;

export interface AppLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> {
  variant?: AppLinkVariant;
}

export default function AppLink({
  className,
  variant = "plain",
  ...props
}: AppLinkProps) {
  return (
    <Link className={cn(linkVariants[variant], className)} {...props} />
  );
}
