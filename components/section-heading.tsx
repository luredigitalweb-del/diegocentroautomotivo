"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** light = fundo claro | dark = fundo preto | red = fundo vermelho */
  tone?: "light" | "dark" | "red";
  align?: "center" | "left";
  className?: string;
};

function EyebrowLine({
  tone,
  side,
}: {
  tone: "light" | "dark" | "red";
  side: "left" | "right";
}) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "h-px w-8",
        side === "left" ? "origin-right" : "origin-left",
        tone === "light" ? "bg-brand-red" : "bg-brand-yellow"
      )}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em]",
          tone === "light" ? "text-brand-red" : "text-brand-yellow"
        )}
      >
        <EyebrowLine tone={tone} side="left" />
        {eyebrow}
        {isCenter && <EyebrowLine tone={tone} side="right" />}
      </span>

      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-balance md:text-4xl lg:text-[2.6rem]",
          tone === "light" ? "text-brand-black" : "text-white"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            tone === "light" ? "text-neutral-600" : "text-white/80",
            isCenter && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
