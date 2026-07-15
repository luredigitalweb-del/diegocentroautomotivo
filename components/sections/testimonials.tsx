import { ArrowUpRight, Star } from "lucide-react";

import { testimonials, type Testimonial } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GoogleIcon } from "@/components/icons/google";

const avatarColors = [
  "bg-purple-600",
  "bg-teal-600",
  "bg-brand-red",
  "bg-indigo-500",
  "bg-rose-500",
  "bg-emerald-600",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Stars({ className }: { className?: string }) {
  return (
    <span
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label="Avaliação: 5 de 5 estrelas"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className="h-[18px] w-[18px] fill-amber-400 text-amber-400"
        />
      ))}
    </span>
  );
}

function ReviewCard({ review, color }: { review: Testimonial; color: string }) {
  return (
    <article className="flex w-[320px] flex-none flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-card sm:w-[400px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white",
              color
            )}
          >
            {initials(review.name)}
          </span>
          <span>
            <span className="block font-semibold leading-tight text-brand-black">
              {review.name}
            </span>
            <span className="mt-0.5 block text-xs text-neutral-500">
              {review.meta}
            </span>
          </span>
        </div>
        <GoogleIcon className="mt-1 h-5 w-5 shrink-0" />
      </div>

      <Stars className="mt-4" />

      <p className="mt-3 text-sm leading-relaxed text-neutral-700">
        “{review.text}”
      </p>
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem nossos clientes"
          description="A melhor propaganda é a opinião de quem deixa o carro com a gente."
        />

        {/* Selo de avaliação Google */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white py-2.5 pl-4 pr-5 shadow-card">
              <GoogleIcon className="h-6 w-6" />
              <span className="font-display text-lg font-extrabold tracking-tight text-brand-black">
                5,0
              </span>
              <Stars />
              <span className="text-sm text-neutral-500">no Google</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Carrossel automático de avaliações */}
      <Reveal delay={0.15}>
        <div className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-32"
          />

          <div
            style={{ animationDuration: "48s" }}
            className="flex w-max animate-marquee py-2 hover:[animation-play-state:paused] motion-reduce:animate-none"
          >
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-stretch gap-5 pr-5">
                {testimonials.map((review, i) => (
                  <ReviewCard
                    key={review.name}
                    review={review}
                    color={avatarColors[i % avatarColors.length]}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex justify-center">
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-brand-red"
          >
            Ver todas as avaliações no Google
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
