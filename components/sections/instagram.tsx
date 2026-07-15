"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Camera, Clapperboard, Heart, Sparkles } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { InstagramIcon } from "@/components/icons/instagram";
import { IphoneMockup } from "@/components/iphone-mockup";

const highlights = [
  { icon: Clapperboard, text: "Bastidores e serviços em tempo real" },
  { icon: Sparkles, text: "Antes e depois dos veículos" },
  { icon: Camera, text: "Dicas rápidas de manutenção" },
];

export function Instagram() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="instagram"
      className="relative overflow-hidden bg-brand-black py-24 lg:py-32"
    >
      {/* Brilhos decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-red/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#DD2A7B]/15 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Texto */}
        <div>
          <Reveal from="left">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              <InstagramIcon className="h-4 w-4 text-brand-yellow" />
              @diegocentroautomotivo
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              Siga a gente no{" "}
              <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent">
                Instagram
              </span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/70 md:text-lg">
              O dia a dia da oficina, de perto: veículos sendo cuidados,
              tecnologia em ação e o resultado que fala por si.
            </p>
          </Reveal>

          <Reveal from="left" delay={0.15}>
            <ul className="mt-9 space-y-4">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3.5 text-white/90">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07]">
                    <item.icon aria-hidden className="h-5 w-5 text-brand-yellow" />
                  </span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="left" delay={0.25}>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-95"
              >
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                  Seguir no Instagram
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* iPhone com o vídeo */}
        <Reveal from="right" delay={0.1} className="flex justify-center">
          <div className="relative">
            {/* Glow atrás do aparelho */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-gradient-to-tr from-brand-red/30 via-[#DD2A7B]/20 to-brand-yellow/20 blur-3xl"
            />

            <motion.div
              animate={reduced ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <IphoneMockup className="h-auto w-[260px] sm:w-[300px]">
                <video
                  src="/videos/instagram.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </IphoneMockup>

              {/* Coração flutuante */}
              <motion.span
                aria-hidden
                animate={reduced ? undefined : { y: [0, -8, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -right-5 top-16 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lift"
              >
                <Heart className="h-5 w-5 fill-brand-red text-brand-red" />
              </motion.span>

              {/* Chip do perfil */}
              <motion.span
                aria-hidden
                animate={reduced ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                className="absolute -left-8 bottom-20 flex items-center gap-2 rounded-full bg-white py-2 pl-2.5 pr-4 shadow-lift"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
                  <InstagramIcon className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-xs font-bold text-brand-black">
                  @diegocentroautomotivo
                </span>
              </motion.span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
