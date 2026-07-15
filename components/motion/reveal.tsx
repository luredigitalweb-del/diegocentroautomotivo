"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealFrom = "bottom" | "left" | "right" | "zoom" | "none";

const easing = [0.22, 1, 0.36, 1] as const;

function buildVariants(from: RevealFrom, reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  const hidden: Record<string, number> = { opacity: 0 };
  if (from === "bottom") hidden.y = 36;
  if (from === "left") hidden.x = -36;
  if (from === "right") hidden.x = 36;
  if (from === "zoom") hidden.scale = 0.92;

  return {
    hidden,
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
}

type RevealProps = {
  children: ReactNode;
  /** Direção de onde o elemento surge. */
  from?: RevealFrom;
  delay?: number;
  duration?: number;
  className?: string;
  /** Percentual do elemento visível para disparar a animação. */
  amount?: number;
};

/** Anima o conteúdo quando ele entra na viewport (uma única vez). */
export function Reveal({
  children,
  from = "bottom",
  delay = 0,
  duration = 0.7,
  className,
  amount = 0.25,
}: RevealProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      variants={buildVariants(from, reduced)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}
