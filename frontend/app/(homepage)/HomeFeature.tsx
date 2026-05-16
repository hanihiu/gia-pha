import {
  Boxes,
  FolderTree,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/container";
import Card from "@/components/ui/Card";
import { MotionDiv, MotionSection } from "@/components/ui/MotionBlock";
import { siteConfig } from "@/app/config";

const structureGroups = [
  {
    icon: GitBranch,
    title: "Routing in app/",
    items: [
      "Dung route group nhu (marketing), (dashboard), (auth) de tach layout theo khu vuc.",
      "Moi route chi giu file convention cua Next: page, layout, loading, error, not-found.",
    ],
  },
  {
    icon: Layers3,
    title: "Shared modules",
    items: [
      "components/ cho UI tai su dung, tach ro layout va ui primitives.",
      "app/config.ts, utils/ va types/ de giu cau hinh, utilities va contracts dung chung.",
    ],
  },
  {
    icon: Boxes,
    title: "Feature-first growth",
    items: [
      "Component chi dung cho route nao thi colocate ngay trong route do de giam coupling.",
      "Khi mot route lon dan len, co the colocate file vao app/segment/_components ma van an toan voi router.",
    ],
  },
];

const principles = [
  {
    icon: FolderTree,
    text: "App Router va route groups de tao nhieu layout ma khong lam doi URL.",
  },
  {
    icon: Network,
    text: "Tach shared UI khoi route de tranh page.tsx phinh to qua som.",
  },
  {
    icon: ShieldCheck,
    text: "Alias import ro rang de scale codebase ma van de doc.",
  },
  {
    icon: Sparkles,
    text: "Metadata va site config tap trung mot noi de de doi ten du an, SEO, domain.",
  },
];

const nextSteps = [
  "Them (dashboard) cho khu vuc quan tri ho toc.",
  "Bo sung components/ui cho button, input, card neu bat dau co design system.",
  "Them utils/supabase va app/actions khi bat dau ket noi backend.",
  "Cai dat testing va lint rules theo muc do nghiem ngat cua team.",
];

export default function HomeFeature() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="dragon-hero-background absolute inset-x-0 top-0 -z-10 h-[36rem]" />

      <Container className="py-16 sm:py-20 lg:py-24">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <MotionDiv className="space-y-6">
            <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-1 text-sm font-medium text-[var(--color-muted-foreground)] shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 text-amber-700" aria-hidden="true" />
              Next.js 16 app foundation
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-serif text-4xl leading-tight font-semibold text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
                Thiet lap structure de du an Next.js de mo rong ngay tu dau.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-muted-foreground)] sm:text-lg">
                Minh da thay scaffold mac dinh bang mot bo khung theo huong
                route-driven, feature-first va phu hop voi App Router cua Next
                16. Tu day chung ta co the them auth, dashboard, data layer va
                design system ma khong can dap di lam lai.
              </p>
            </div>
          </MotionDiv>

          <MotionDiv delay={0.12} preset="scaleIn">
            <Card variant="elevated" className="p-6">
              <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-muted-foreground)] uppercase">
                Project identity
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Name
                  </p>
                  <p className="text-xl font-semibold text-[var(--color-foreground)]">
                    {siteConfig.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Direction
                  </p>
                  <p className="text-base leading-7 text-[var(--color-foreground)]">
                    Public marketing shell, shared UI layer, and feature modules
                    ready for genealogy workflows.
                  </p>
                </div>
              </div>
            </Card>
          </MotionDiv>
        </section>

        <MotionSection
          id="structure"
          className="mt-16 rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[0_18px_60px_rgba(53,41,18,0.08)] sm:p-10"
          preset="fadeUp"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-muted-foreground)] uppercase">
              Proposed structure
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[var(--color-foreground)]">
              Khung thu muc de phat trien du an
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {structureGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <MotionDiv key={group.title} delay={index * 0.08}>
                  <Card as="article" variant="muted" className="h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-[var(--color-foreground)]">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted-foreground)]">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </MotionDiv>
              );
            })}
          </div>
        </MotionSection>

        <section
          id="principles"
          className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <MotionDiv>
            <Card as="article" variant="dark" className="p-8 sm:p-10">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
                Working principles
              </p>
              <ul className="mt-6 space-y-4 text-base leading-8 text-white/85">
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.text} className="flex gap-3">
                      <Icon
                        className="mt-1 h-5 w-5 shrink-0 text-amber-200"
                        aria-hidden="true"
                      />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </MotionDiv>

          <MotionDiv delay={0.1}>
            <Card
              as="article"
              id="next-steps"
              className="bg-[#f4ead7] p-8 shadow-none sm:p-10"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-[var(--color-muted-foreground)] uppercase">
                Next steps
              </p>
              <div className="mt-5 space-y-4">
                {nextSteps.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[1.25rem] bg-white/70 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-foreground)] text-sm font-semibold text-[var(--color-background)]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[var(--color-foreground)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </MotionDiv>
        </section>
      </Container>
    </div>
  );
}
