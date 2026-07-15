"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

import { galleryImages } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-brand-red py-24 lg:py-32"
    >
      {/* Brilho central tira o ar chapado do vermelho — as bordas ficam na cor
          exata da seção para casar com o degradê das faixas vizinhas. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_45%,rgb(255_255_255_/_0.10),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="left"
          tone="red"
          eyebrow="Nossa estrutura"
          title="Conheça a Diego por dentro"
          description="Estrutura organizada, equipamentos modernos e o cuidado que você só entende quando vê de perto."
        />
      </div>

      {/* Esteira infinita — pausa ao passar o mouse ou ao focar um card */}
      <Reveal delay={0.1}>
        <div className="group/track relative mt-14 overflow-hidden motion-reduce:overflow-x-auto">
          {/* Bordas esmaecidas */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-red to-transparent lg:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-red to-transparent lg:w-32"
          />

          <div
            style={{ animationDuration: "60s" }}
            className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none"
          >
            {[0, 1].map((half) => (
              <ul
                key={half}
                aria-hidden={half === 1}
                className="flex shrink-0 items-center"
              >
                {galleryImages.map((image, i) => (
                  <li key={image.src} className="pr-5">
                    <button
                      type="button"
                      tabIndex={half === 1 ? -1 : undefined}
                      onClick={() => setActive(i)}
                      aria-label={`Ampliar imagem: ${image.alt}`}
                      className="group relative block h-[260px] w-[300px] overflow-hidden rounded-3xl ring-1 ring-white/20 transition-all duration-300 hover:ring-brand-yellow focus-visible:ring-offset-brand-red sm:h-[340px] sm:w-[420px]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 420px, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Legenda */}
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/85 via-brand-black/30 to-transparent p-5 pt-16 text-left">
                        <span className="block translate-y-2 text-sm font-semibold text-white opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {image.alt}
                        </span>
                      </span>

                      {/* Ícone de ampliar */}
                      <span className="absolute right-4 top-4 flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-brand-yellow opacity-0 shadow-lift transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <Plus aria-hidden className="h-5 w-5 text-brand-black" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="relative mt-8 text-center text-xs font-bold uppercase tracking-[0.22em] text-white/60">
        <span className="lg:hidden">Toque em uma foto para ampliar</span>
        <span className="hidden lg:inline">
          Passe o mouse para pausar · clique para ampliar
        </span>
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Galeria de fotos ampliada"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar galeria"
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Imagem anterior"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[82vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl">
                <Image
                  src={galleryImages[active].src}
                  alt={galleryImages[active].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between text-sm text-white/80">
                <span>{galleryImages[active].alt}</span>
                <span className="font-semibold text-brand-yellow">
                  {active + 1} / {galleryImages.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima imagem"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
