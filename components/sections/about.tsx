"use client";

import Image from "next/image";
import { ArrowRight, Building2, Gem, Trophy, Wrench } from "lucide-react";

import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import fachadaDetalhe from "@/public/images/fachada-detalhe.jpg";

const pillars = [
  {
    icon: Building2,
    title: "Estrutura completa e equipada",
    description:
      "Elevadores, scanners e equipamentos modernos para tratar o seu veículo com precisão de concessionária.",
  },
  {
    icon: Gem,
    title: "Especialistas em veículos premium",
    description:
      "Jeep, Peugeot, Citroën, BMW, Mercedes e todas as demais marcas — seguindo os procedimentos técnicos de cada fabricante.",
  },
  {
    icon: Wrench,
    title: "Do diagnóstico à entrega",
    description:
      "Revisão, alinhamento, freios, suspensão e câmbio. O veículo inteiro cuidado em um só lugar, com garantia.",
  },
  {
    icon: Trophy,
    title: "Mais de 10 anos de história",
    description:
      "Histórico consolidado em Petrolina e uma base de clientes que volta e indica. Qualidade que se sustenta.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        {/* Cabeçalho centralizado */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-brand-red/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Sobre nós
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-brand-black text-balance md:text-4xl lg:text-5xl">
            Um centro automotivo{" "}
            <span className="text-brand-red">completo</span>. Não uma oficina
            comum.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-neutral-600 md:text-lg">
            Há mais de 10 anos cuidando de veículos em Petrolina com tecnologia
            de ponta, equipe certificada e atenção singular a cada carro.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Foto com selo */}
          <Reveal from="left" className="h-full">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] shadow-lift sm:min-h-[460px]">
              <Image
                src={fachadaDetalhe}
                alt="Estrutura da Diego Centro Automotivo"
                fill
                placeholder="blur"
                quality={82}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black shadow-soft backdrop-blur-sm">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                Oficina em {site.address.city}/{site.address.state}
              </span>
            </div>
          </Reveal>

          {/* Pilares + banner */}
          <div className="flex flex-col justify-between gap-8">
            <ul className="flex flex-col gap-7">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} from="right" delay={i * 0.08}>
                  <li className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-red/[0.06]">
                      <pillar.icon aria-hidden className="h-5 w-5 text-brand-red" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-brand-black">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-neutral-600">
                        {pillar.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            {/* Banner de conversão */}
            <Reveal from="right" delay={0.35}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-brand-black p-5 pr-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                  <WhatsAppIcon className="h-6 w-6 text-white" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-yellow">
                    Até 176 clientes atendidos por mês
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-bold leading-snug text-white">
                    Junte-se a quem confia na Diego
                  </span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-brand-yellow transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
