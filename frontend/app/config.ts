import type { Metadata } from "next";

export const siteConfig = {
  name: "Gia Pha",
  description:
    "Nen tang frontend cho du an gia pha duoc to chuc de mo rong, bao tri va phat trien tinh nang nhanh hon.",
  tagline: "Structure first. Feature-focused. Ready for scale.",
  url: "https://gia-pha.local",
} satisfies {
  name: string;
  description: string;
  tagline: string;
  url: string;
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
};
