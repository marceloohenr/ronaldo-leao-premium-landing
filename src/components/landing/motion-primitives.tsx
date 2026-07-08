import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const base: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

type Dir = "up" | "left" | "right";

export function Reveal({
  children,
  className,
  delay = 0,
  dir = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  dir?: Dir;
  as?: keyof HTMLElementTagNameMap;
}) {
  const variants = dir === "left" ? fromLeft : dir === "right" ? fromRight : base;
  const MotionTag = motion[Tag as "div"];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export { motion };