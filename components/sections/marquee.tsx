const items = [
  "Revisão",
  "Alinhamento",
  "Balanceamento",
  "Freios",
  "Suspensão",
  "Diagnóstico",
  "Injeção",
  "Motor",
  "Arrefecimento",
  "Baterias",
  "Faróis",
  "Venda de Peças",
];

/** Faixa animada de serviços — passa a régua da marca logo abaixo do Hero. */
export function Marquee() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-brand-black py-4"
    >
      {/* fade nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-black to-transparent" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((half) => (
          <ul key={half} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-8 pr-8">
                <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-brand-yellow/80" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
