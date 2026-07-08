import { Leaf, Dumbbell, Sprout, Sparkles } from "lucide-react";
import { Reveal } from "./motion-primitives";

const items = [
  {
    icon: Leaf,
    title: "Emagrecimento",
    desc: "Perda de peso saudável, sustentável e sem restrições extremas.",
  },
  {
    icon: Dumbbell,
    title: "Nutrição Esportiva",
    desc: "Estratégias para performance, hipertrofia e recuperação.",
  },
  {
    icon: Sprout,
    title: "Nutrição Funcional",
    desc: "Investigação profunda das causas para restaurar equilíbrio.",
  },
  {
    icon: Sparkles,
    title: "Nutrição Estética",
    desc: "Nutrientes que apoiam pele, cabelo e composição corporal.",
  },
];

export function Specialties() {
  return (
    <section
      id="especialidades"
      className="border-y border-border/70 bg-[oklch(0.955_0.012_95)] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-[color:var(--gold)]/70" />
              Especialidades
            </span>
            <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
              Quatro caminhos, um mesmo cuidado.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Cada especialidade é conduzida com protocolos individuais e
              acompanhamento próximo — do primeiro dia ao resultado.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="group relative flex flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-[oklch(0.97_0.012_95)] lg:p-10"
            >
              <div>
                <item.icon
                  strokeWidth={1.1}
                  className="h-7 w-7 text-primary transition-transform duration-500 group-hover:-translate-y-0.5"
                />
                <h3 className="mt-8 font-serif text-2xl tracking-tight text-foreground lg:text-[26px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <div className="mt-10 h-px w-6 bg-[color:var(--gold)]/60 transition-all duration-500 group-hover:w-14" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}