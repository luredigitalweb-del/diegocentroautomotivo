"use client";

import { ShieldCheck } from "lucide-react";

import { differentials } from "@/lib/data";
import { whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

const timeline = [
  ...differentials,
  {
    title: "Garantia em todos os serviços",
    description:
      "Total responsabilidade sobre o que fazemos: todos os serviços executados possuem garantia. É o nosso compromisso com a sua tranquilidade.",
    icon: ShieldCheck,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 lg:grid-cols-[1fr_1.25fr] lg:gap-24 lg:px-8">
        {/* Chamada fixa enquanto a timeline rola */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal from="left">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
              <span aria-hidden className="h-px w-8 bg-brand-red" />
              Nossos diferenciais
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-brand-black text-balance md:text-4xl lg:text-[2.6rem]">
              O padrão de cuidado que o seu carro merece.
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-600 md:text-lg">
              Um atendimento que combina a técnica de concessionária com o
              cuidado de quem conhece você pelo nome. Cada detalhe da nossa
              estrutura foi pensado para entregar segurança, precisão e
              tranquilidade.
            </p>
          </Reveal>

          <Reveal from="left" delay={0.15}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Mais de 10 anos de experiência · até 176 clientes atendidos por mês
            </p>
          </Reveal>
        </div>

        {/* Timeline vertical */}
        <ol className="relative">
          {/* Linha conectora */}
          <div
            aria-hidden
            className="absolute bottom-10 left-[33px] top-10 w-px bg-gradient-to-b from-brand-red via-neutral-200 to-brand-yellow"
          />

          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <li className="group relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
                {/* Círculo com ícone */}
                <span className="relative z-10 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-neutral-100 bg-white shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-red group-hover:bg-brand-red group-hover:shadow-lift">
                  <item.icon
                    aria-hidden
                    className="h-7 w-7 text-brand-red transition-colors duration-300 group-hover:text-brand-yellow"
                  />
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-brand-yellow ring-4 ring-white"
                  />
                </span>

                <div className="pt-1">
                  <span className="inline-flex items-center rounded-full border border-brand-red/15 bg-brand-red/[0.06] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    Diferencial {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-brand-black md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
