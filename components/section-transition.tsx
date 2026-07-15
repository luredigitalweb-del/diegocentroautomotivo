import { cn } from "@/lib/utils";

/** Cores de fundo usadas pelas seções — precisam bater com o tailwind.config. */
const TONES = {
  black: "#111111",
  white: "#FFFFFF",
  gray: "#F6F6F6",
  red: "#D71920",
} as const;

type Tone = keyof typeof TONES;

type SectionTransitionProps = {
  /** Cor de fundo da seção de cima. */
  from: Tone;
  /** Cor de fundo da seção de baixo. */
  to: Tone;
  className?: string;
};

/**
 * Faixa de degradê que costura o fundo de duas seções vizinhas, no lugar do
 * corte seco. As cores das pontas precisam ser exatamente as das seções.
 */
export function SectionTransition({
  from,
  to,
  className,
}: SectionTransitionProps) {
  return (
    <div
      aria-hidden
      className={cn("h-20 w-full lg:h-28", className)}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${TONES[from]}, ${TONES[to]})`,
      }}
    />
  );
}
