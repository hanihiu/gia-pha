import Link from "next/link";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/app/config";
import type { NavItem } from "@/types";

const navigation: NavItem[] = [
  { href: "#structure", label: "Structure" },
  { href: "#principles", label: "Principles" },
  { href: "#next-steps", label: "Next steps" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color:var(--color-surface)]/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-foreground)] text-sm font-semibold text-[var(--color-background)]">
            GP
          </span>
          <div className="space-y-0.5">
            <p className="text-sm font-semibold tracking-[0.18em] text-[var(--color-muted-foreground)] uppercase">
              {siteConfig.name}
            </p>
            <p className="text-sm text-[var(--color-foreground)]">
              Next.js App Router foundation
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted-foreground)] md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
