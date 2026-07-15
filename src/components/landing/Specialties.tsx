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

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-border/70 bg-border/70 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="group relative flex min-h-[230px] flex-col justify-between bg-background p-5 transition-colors duration-500 hover:bg-[oklch(0.97_0.012_95)] sm:p-8 lg:min-h-[300px] lg:p-10"
            >
              <div>
                <item.icon
                  strokeWidth={1.1}
                  className="h-6 w-6 text-primary transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-7 sm:w-7"
                />
                <h3 className="mt-6 font-serif text-[20px] leading-tight tracking-tight text-foreground sm:mt-8 sm:text-2xl lg:text-[26px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                  {item.desc}
                </p>
              </div>
              <div className="mt-7 h-px w-6 bg-[color:var(--gold)]/60 transition-all duration-500 group-hover:w-14 sm:mt-10" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
