"use client";

import { Award, Sparkles } from "lucide-react";

import { certifications, type Certification } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

function CertCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex w-56 shrink-0 flex-col items-center rounded-2xl bg-white p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 sm:w-64">
      {/* Selo dourado */}
      <span className="rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-[3px] shadow-[0_6px_18px_-6px_rgb(217_119_6_/_0.6)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500">
          <Award aria-hidden className="h-6 w-6 text-white" />
        </span>
      </span>
      <h3 className="mt-4 font-display text-base font-bold text-brand-black">
        {cert.name}
      </h3>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
        {cert.kind}
      </p>
    </div>
  );
}

function CarouselRow({
  items,
  reverse = false,
  duration = "30s",
}: {
  items: Certification[];
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      {/* Fade nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-red to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-red to-transparent sm:w-28" />

      <div
        style={{ animationDuration: duration }}
        className={cn(
          "flex w-max animate-marquee py-2 hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 gap-4 pr-4">
            {items.map((cert) => (
              <CertCard key={cert.name} cert={cert} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <section
      id="certificacoes"
      className="relative overflow-hidden bg-brand-red py-24 lg:py-32"
    >
      {/* Textura discreta inspirada no losango da logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rotate-45 rounded-[3rem] border border-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rotate-45 rounded-[3rem] border border-white/10"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="red"
          eyebrow="Qualificação comprovada"
          title="Equipe certificada pelas melhores instituições"
          description="Formações, especializações e parcerias técnicas que garantem um serviço no nível que o seu veículo exige."
        />
      </div>

      {/* Carrossel em fileira única */}
      <Reveal delay={0.1} className="relative mt-14">
        <CarouselRow items={certifications} duration="50s" />
      </Reveal>

      <Reveal delay={0.2}>
        <p className="relative mt-12 flex items-center justify-center gap-2.5 px-5 text-center text-sm font-medium text-white/80">
          <Sparkles aria-hidden className="h-4 w-4 text-brand-yellow" />
          Atualização constante: nossa equipe se qualifica todos os anos.
        </p>
      </Reveal>
    </section>
  );
}
