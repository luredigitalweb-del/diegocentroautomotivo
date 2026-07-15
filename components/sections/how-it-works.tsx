"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";
import { Car } from "lucide-react";

import { steps } from "@/lib/data";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

/** Duração da travessia do carro pela linha no desktop (s). */
const DRIVE_DURATION = 2.6;
/** Momento em que o carro chega ao fim da pista (s). */
const DRIVE_END = 0.15 + DRIVE_DURATION;

/** Gatilho mobile: dispara quando o elemento cruza ~70% do viewport (onde o carrinho está). */
const MOBILE_VIEWPORT = { once: true, margin: "0px 0px -30% 0px" } as const;

/** Diâmetro do círculo do ícone (px) — usado para ancorar a pista vertical. */
const CIRCLE = 80;

const EASE = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  const trackRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLLIElement>(null);
  // Amount baixo: em telas pequenas a seção é mais alta que o viewport,
  // e um limiar alto impediria a animação de disparar.
  const inView = useInView(trackRef, { once: true, amount: 0.15 });
  const reduced = useReducedMotion() ?? false;

  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mobile: a pista termina exatamente no centro do último círculo — o texto
  // de cada etapa tem altura variável, então a distância é medida, não chutada.
  const [trackEnd, setTrackEnd] = useState(CIRCLE);
  useEffect(() => {
    const list = trackRef.current;
    const last = lastItemRef.current;
    if (!list || !last) return;

    const measure = () =>
      setTrackEnd(
        Math.max(0, list.offsetHeight - last.offsetTop - CIRCLE / 2)
      );

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  // Mobile: o carrinho desce a linha acompanhando o scroll — ancorado em
  // ~70% do viewport, passa por cada círculo conforme a página rola.
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.7", "end 0.7"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.4,
  });
  const carTop = useTransform(progress, (v) => `${Math.min(1, Math.max(0, v)) * 100}%`);

  // Desktop: cada círculo aparece quando o carro passa por ele.
  const delayFor = (i: number) =>
    reduced ? 0 : 0.15 + ((i + 0.5) / steps.length) * DRIVE_DURATION;

  /** Props de disparo: no desktop segue o relógio do carro; no mobile, o scroll. */
  const trigger = (
    target: TargetAndTransition,
    delay: number,
    transition: Transition = {}
  ) =>
    desktop
      ? {
          animate: inView ? target : ({} as TargetAndTransition),
          transition: { delay, ...transition } as Transition,
        }
      : {
          whileInView: target,
          viewport: MOBILE_VIEWPORT,
          transition,
        };

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Decoração discreta */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rotate-45 rounded-[3rem] border border-neutral-100"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Um processo simples e transparente"
          description="Do diagnóstico à entrega, você acompanha cada etapa e aprova tudo antes da execução."
        />

        <ol
          ref={trackRef}
          className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-6"
        >
          {/* Pista + carro (desktop) */}
          <div
            aria-hidden
            className="absolute inset-x-8 top-[100px] hidden lg:block"
          >
            {/* Trilho base */}
            <div className="absolute inset-x-0 h-px bg-neutral-200" />

            {/* Trilho percorrido pelo carro */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView && !reduced ? { scaleX: 1 } : {}}
              transition={{ duration: DRIVE_DURATION, ease: "linear", delay: 0.15 }}
              className="absolute inset-x-0 h-[3px] -translate-y-[1px] origin-left rounded-full bg-gradient-to-r from-brand-red via-brand-red to-brand-yellow"
            />

            {!reduced && (
              <>
                {/* Brilho na ponta da pista pintada */}
                <motion.span
                  initial={{ left: "0%", opacity: 0 }}
                  animate={inView ? { left: "100%", opacity: [0, 1, 1, 1, 0] } : {}}
                  transition={{ duration: DRIVE_DURATION, ease: "linear", delay: 0.15 }}
                  className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow blur-[4px]"
                />

                {/* Carro atravessando */}
                <motion.span
                  initial={{ left: "0%", opacity: 0 }}
                  animate={
                    inView ? { left: "100%", opacity: [0, 1, 1, 1, 1, 0] } : {}
                  }
                  transition={{ duration: DRIVE_DURATION, ease: "linear", delay: 0.15 }}
                  className="absolute -top-[30px] -translate-x-1/2"
                >
                  {/* Arrancada + balancinho da suspensão */}
                  <motion.span
                    initial={{ rotate: -10, scale: 0.6 }}
                    animate={inView ? { rotate: 0, scale: 1 } : {}}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 10 }}
                    className="relative block"
                  >
                    <motion.span
                      animate={inView ? { y: [0, -2.5, 0] } : {}}
                      transition={{ duration: 0.3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative block"
                    >
                      {/* Fumaça do escapamento */}
                      {[0, 1, 2].map((k) => (
                        <motion.span
                          key={k}
                          initial={{ opacity: 0 }}
                          animate={
                            inView
                              ? { opacity: [0, 0.55, 0], x: [-6, -20], y: [2, -4], scale: [0.5, 1.4] }
                              : {}
                          }
                          transition={{
                            duration: 0.65,
                            repeat: Infinity,
                            delay: 0.15 + k * 0.22,
                            ease: "easeOut",
                          }}
                          className="absolute left-0 top-4 h-2.5 w-2.5 rounded-full bg-neutral-400/70"
                        />
                      ))}
                      {/* Rastro de velocidade */}
                      <span className="absolute -left-7 top-3 h-[2px] w-5 rounded-full bg-brand-red/50" />
                      <span className="absolute -left-5 top-6 h-[2px] w-3.5 rounded-full bg-brand-yellow/70" />
                      <Car className="h-8 w-8 text-brand-red drop-shadow-[0_4px_8px_rgb(215_25_32_/_0.4)]" />
                    </motion.span>
                  </motion.span>
                </motion.span>
              </>
            )}
          </div>

          {/* Pista vertical + carro seguindo o scroll (mobile) */}
          <div
            ref={lineRef}
            aria-hidden
            style={{ bottom: trackEnd }}
            className="absolute left-10 top-10 w-px -translate-x-1/2 lg:hidden"
          >
            {/* Trilho base */}
            <div className="absolute inset-0 bg-neutral-200" />

            {/* Trilho percorrido */}
            <motion.div
              style={{ scaleY: reduced ? 1 : progress }}
              className="absolute inset-y-0 -left-[1px] w-[3px] origin-top rounded-full bg-gradient-to-b from-brand-red via-brand-red to-brand-yellow"
            />

            {!reduced && (
              <>
                {/* Brilho na ponta */}
                <motion.span
                  style={{ top: carTop }}
                  className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow blur-[4px]"
                />

                {/* Carrinho descendo com o scroll */}
                <motion.span
                  style={{ top: carTop }}
                  className="absolute left-1/2 z-[5] -translate-x-1/2 -translate-y-1/2"
                >
                  {/* Fumaça do escapamento (para cima) */}
                  {[0, 1, 2].map((k) => (
                    <motion.span
                      key={k}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.55, 0], y: [-4, -18], x: [1, -2], scale: [0.5, 1.4] }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                        delay: k * 0.24,
                        ease: "easeOut",
                      }}
                      className="absolute -top-2 left-2 h-2.5 w-2.5 rounded-full bg-neutral-400/70"
                    />
                  ))}
                  {/* Rastro de velocidade */}
                  <span className="absolute -top-6 left-1 h-4 w-[2px] rounded-full bg-brand-red/50" />
                  <span className="absolute -top-4 right-1 h-3 w-[2px] rounded-full bg-brand-yellow/70" />
                  <Car className="h-7 w-7 rotate-90 text-brand-red drop-shadow-[0_4px_8px_rgb(215_25_32_/_0.4)]" />
                </motion.span>
              </>
            )}
          </div>

          {steps.map((step, i) => {
            const d = delayFor(i);
            const isLast = i === steps.length - 1;

            return (
              <li
                key={step.title}
                ref={isLast ? lastItemRef : undefined}
                className="group relative flex items-start gap-5 text-left lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                {/* Número gigante atrás do círculo (só no desktop) */}
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center lg:h-[140px] lg:w-full lg:items-end">
                  <motion.span
                    aria-hidden
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    {...trigger(
                      { opacity: 1, y: 0, filter: "blur(0px)" },
                      d,
                      { duration: 0.7, ease: EASE }
                    )}
                    className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 select-none font-display text-[110px] font-extrabold leading-none text-neutral-100 transition-colors duration-500 group-hover:text-brand-red/[0.08] lg:block"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>

                  {/* Círculo pula quando o carro passa */}
                  <motion.span
                    initial={reduced ? { opacity: 0 } : { scale: 0, opacity: 0 }}
                    {...trigger(
                      reduced ? { opacity: 1 } : { scale: 1, opacity: 1 },
                      d,
                      { type: "spring", stiffness: 280, damping: 14 }
                    )}
                    className="relative z-10 block h-20 w-20"
                  >
                    {/* Anéis de radar */}
                    {!reduced &&
                      [0, 0.18].map((extra) => (
                        <motion.span
                          key={extra}
                          initial={{ scale: 0.7, opacity: 0 }}
                          {...trigger(
                            { scale: 2, opacity: [0, 0.6, 0] },
                            d + extra,
                            { duration: 1, delay: desktop ? d + extra : extra, ease: "easeOut" }
                          )}
                          className="pointer-events-none absolute inset-0 rounded-full border-2 border-brand-yellow"
                        />
                      ))}

                    {/* Flutuação contínua */}
                    <motion.span
                      animate={
                        reduced
                          ? undefined
                          : { y: [0, -5, 0] }
                      }
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: d + 0.6,
                      }}
                      className="block h-full w-full"
                    >
                      <span className="flex h-full w-full items-center justify-center rounded-full border-2 border-brand-yellow bg-brand-black shadow-[0_0_0_8px_rgb(255_198_0_/_0.12),0_14px_30px_-12px_rgb(17_17_17_/_0.35)] transition-shadow duration-300 group-hover:shadow-[0_0_0_10px_rgb(255_198_0_/_0.2),0_22px_44px_-12px_rgb(17_17_17_/_0.45)]">
                        {/* Ícone gira ao entrar */}
                        <motion.span
                          initial={reduced ? undefined : { rotate: -180, scale: 0 }}
                          {...trigger(
                            reduced ? {} : { rotate: 0, scale: 1 },
                            d + 0.08,
                            { type: "spring", stiffness: 200, damping: 13, delay: desktop ? d + 0.08 : 0.08 }
                          )}
                          className="block"
                        >
                          <step.icon aria-hidden className="h-8 w-8 text-brand-yellow" />
                        </motion.span>
                      </span>
                    </motion.span>

                    {/* Faíscas na chegada (última etapa) */}
                    {isLast && !reduced && (
                      <span className="pointer-events-none absolute inset-0">
                        {Array.from({ length: 8 }).map((_, k) => {
                          const angle = (k / 8) * Math.PI * 2;
                          return (
                            <motion.span
                              key={k}
                              initial={{ x: 0, y: 0, opacity: 0, scale: 1 }}
                              {...trigger(
                                {
                                  x: Math.cos(angle) * 42,
                                  y: Math.sin(angle) * 42,
                                  opacity: [0, 1, 0],
                                  scale: [1, 1, 0.3],
                                },
                                DRIVE_END,
                                {
                                  duration: 0.75,
                                  delay: desktop ? DRIVE_END : 0.4,
                                  ease: "easeOut",
                                }
                              )}
                              className={cn(
                                "absolute left-1/2 top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full",
                                k % 2 ? "bg-brand-yellow" : "bg-brand-red"
                              )}
                            />
                          );
                        })}
                      </span>
                    )}
                  </motion.span>
                </div>

                {/* Conteúdo surge logo após o círculo */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  {...trigger({ opacity: 1, y: 0 }, d + 0.18, {
                    duration: 0.5,
                    delay: desktop ? d + 0.18 : 0.12,
                    ease: EASE,
                  })}
                  className="relative z-10 flex min-w-0 flex-1 flex-col items-start pt-1 lg:flex-none lg:items-center lg:bg-white lg:px-3 lg:pt-0"
                >
                  <span className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/[0.05] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red lg:mt-7">
                    Etapa {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-brand-black lg:mt-4">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 lg:mt-2.5 lg:max-w-[260px]">
                    {step.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>

        <Reveal delay={0.3}>
          <div className="mt-20 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <p className="text-center text-neutral-600 sm:text-left">
              Tudo começa com um diagnóstico preciso.{" "}
              <span className="font-semibold text-brand-black">
                Agende o seu em menos de um minuto.
              </span>
            </p>
            <Button asChild variant="red" size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Agendar diagnóstico
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
