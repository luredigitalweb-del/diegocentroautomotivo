"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Award, Car, CheckCircle2, Crown, Users } from "lucide-react";

import { whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import fachada from "@/public/images/fachada.jpg";

const highlights = [
  "Diagnóstico preciso",
  "Equipe altamente qualificada",
  "Peças das melhores marcas",
];

const titleWords = "Mais de 10 anos cuidando do seu veículo com".split(" ");
const titleHighlight = "qualidade, tecnologia e confiança.".split(" ");
const easing = [0.22, 1, 0.36, 1] as const;

function CascadeWord({
  word,
  index,
  className,
}: {
  word: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.05, ease: easing }}
      className={`inline-block will-change-transform ${className ?? ""}`}
    >
      {word}&nbsp;
    </motion.span>
  );
}

const indicators = [
  { icon: Award, value: "+10 anos", label: "de mercado" },
  { icon: Users, value: "150+", label: "clientes por mês" },
  { icon: Crown, value: "Premium", label: "atendimento" },
  { icon: Car, value: "Multimarcas", label: "todas as marcas" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "16%"]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-black"
    >
      {/* Foto da fachada com parallax discreto */}
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.08]">
        <Image
          src={fachada}
          alt="Fachada da Diego Centro Automotivo em Petrolina/PE"
          fill
          priority
          placeholder="blur"
          quality={82}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
      </motion.div>

      {/* Overlay escuro suave */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/55 to-brand-black/80"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-black/90 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-10 pt-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          Centro automotivo premium em Petrolina/PE
        </motion.div>

        <h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
          {titleWords.map((word, i) => (
            <CascadeWord key={`w-${i}`} word={word} index={i} />
          ))}
          {titleHighlight.map((word, i) => (
            <CascadeWord
              key={`h-${i}`}
              word={word}
              index={titleWords.length + i}
              className="text-brand-yellow"
            />
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          Especialistas em veículos premium e multimarcas.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 flex flex-wrap gap-x-7 gap-y-3"
        >
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/90 md:text-base">
              <CheckCircle2 aria-hidden className="h-5 w-5 text-brand-yellow" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <a
              href={whatsappUrl(
                "Olá, vim pelo site! Gostaria de solicitar um orçamento na Diego Centro Automotivo."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="relative">
        <div className="mx-auto w-full max-w-7xl px-5 pb-8 lg:px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {indicators.map((item, i) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 backdrop-blur-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/15">
                  <item.icon aria-hidden className="h-5 w-5 text-brand-yellow" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-display text-base font-bold text-white lg:text-lg">
                    {item.value}
                  </span>
                  <span className="text-xs text-white/65">{item.label}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
