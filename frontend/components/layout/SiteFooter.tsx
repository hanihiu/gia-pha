import Container from "@/components/ui/container";
import { siteConfig } from "@/app/config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white/80">
      <Container className="flex flex-col gap-3 py-6 text-sm text-[var(--color-muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.tagline}</p>
        <p>
          {siteConfig.name} - Boilerplate structure for scalable Next.js apps
        </p>
      </Container>
    </footer>
  );
}
