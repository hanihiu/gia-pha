"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type MotionPreset = "fadeIn" | "fadeUp" | "scaleIn";

const defaultViewport = {
  margin: "-80px",
  once: true,
};

const presets: Record<
  MotionPreset,
  Pick<HTMLMotionProps<"div">, "initial" | "whileInView">
> = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.97 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

interface MotionPresetProps {
  delay?: number;
  preset?: MotionPreset;
}

type MotionDivProps = HTMLMotionProps<"div"> & MotionPresetProps;
type MotionSectionProps = HTMLMotionProps<"section"> & MotionPresetProps;

function getMotionPreset({
  delay = 0,
  preset = "fadeUp",
  transition,
  viewport,
}: MotionPresetProps &
  Pick<HTMLMotionProps<"div">, "transition" | "viewport">) {
  return {
    ...presets[preset],
    transition: transition ?? { delay, duration: 0.5, ease: "easeOut" },
    viewport: viewport ?? defaultViewport,
  };
}

export function MotionDiv({
  delay,
  preset,
  transition,
  viewport,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      {...getMotionPreset({ delay, preset, transition, viewport })}
      {...props}
    />
  );
}

export function MotionSection({
  delay,
  preset,
  transition,
  viewport,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      {...getMotionPreset({ delay, preset, transition, viewport })}
      {...props}
    />
  );
}
