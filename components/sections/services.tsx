"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { mainServices, otherServices } from "@/lib/data";
import { whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

function serviceMessage(service: string) {
  return `Olá, vim pelo site! Gostaria de agendar o serviço de ${service} na Diego Centro Automotivo.`;
}

export function Services() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="servicos" className="bg-brand-gray py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nossos serviços"
          title="Serviços completos para o seu veículo"
          description="Da revisão preventiva à manutenção especializada, tudo em um só lugar — com tecnologia, agilidade e garantia."
        />

        {/* Cards com foto */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} className="h-full">
              <a
                href={whatsappUrl(serviceMessage(service.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                {/* Ícone gigante em marca d'água */}
                <service.icon
                  aria-hidden
                  className="pointer-events-none absolute -bottom-7 -right-7 h-36 w-36 text-brand-gray transition-colors duration-500 group-hover:text-brand-red/[0.07]"
                />

                {/* Selo do ícone */}
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow shadow-[0_10px_24px_-8px_rgb(255_198_0_/_0.8)] transition-transform duration-300 group-hover:scale-110">
                  <service.icon aria-hidden className="h-7 w-7 text-brand-black" />
                </span>

                <h3 className="relative mt-6 font-display text-lg font-bold text-brand-black transition-colors duration-300 group-hover:text-brand-red">
                  {service.title}
                </h3>
                <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <span className="relative mt-6 inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_-10px_rgb(215_25_32_/_0.7)] transition-all duration-300 group-hover:brightness-110 group-hover:shadow-[0_14px_30px_-10px_rgb(215_25_32_/_0.9)]">
                  {/* Brilho varrendo o botão */}
                  {!reduced && (
                    <motion.span
                      aria-hidden
                      animate={{ x: ["-130%", "260%"] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        repeatDelay: 1.8,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/25"
                    />
                  )}
                  Agendar serviço
                  <motion.span
                    aria-hidden
                    animate={reduced ? undefined : { x: [0, 4, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                    className="flex"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Painel premium: outros serviços */}
        <Reveal delay={0.1}>
          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-brand-black p-8 md:p-12">
            {/* Brilho decorativo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/25 blur-[110px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[110px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.55fr] lg:items-center lg:gap-16">
              <div className="max-w-md">
                <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Outros serviços
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">
                  Atendimento completo para tudo o que o seu veículo precisa —
                  toque em um serviço para agendar.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {otherServices.map((service, i) => (
                  <Reveal
                    key={service.name}
                    delay={0.15 + i * 0.04}
                    from="zoom"
                    className="h-full"
                  >
                    <a
                      href={whatsappUrl(serviceMessage(service.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/chip flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-white/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow/50 hover:bg-brand-yellow/[0.08] hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-brand-yellow transition-colors duration-300 group-hover/chip:bg-brand-yellow group-hover/chip:text-brand-black">
                        <service.icon aria-hidden className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1 truncate">{service.name}</span>
                      <ArrowUpRight
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-white/20 transition-colors duration-300 group-hover/chip:text-brand-yellow"
                      />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="relative mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-white/65">
                Não encontrou o que procura?{" "}
                <span className="font-semibold text-white">
                  Fale com a nossa equipe.
                </span>
              </p>
              <Button asChild size="lg">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
