import { Reveal } from "./motion-primitives";

const steps = [
  {
    n: "01",
    title: "Avaliação completa",
    desc: "Anamnese profunda, histórico, rotina e objetivos.",
  },
  {
    n: "02",
    title: "Planejamento alimentar",
    desc: "Plano exclusivo, alinhado à sua realidade e preferências.",
  },
  {
    n: "03",
    title: "Acompanhamento",
    desc: "Ajustes contínuos, suporte próximo e escuta ativa.",
  },
  {
    n: "04",
    title: "Resultados",
    desc: "Evolução mensurável, sustentável e a longo prazo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
      <div className="mb-16 max-w-2xl">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--gold)]/70" />
            Como funciona
          </span>
          <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
            Um processo claro, do primeiro contato ao resultado.
          </h2>
        </Reveal>
      </div>

      <div className="relative grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Connector line — desktop */}
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent lg:block" />

        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 0.08}
            className="relative flex min-h-[190px] flex-col lg:pr-6"
          >
            <div className="relative z-10 flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--gold)]/50 bg-background font-serif text-[14px] text-primary sm:h-12 sm:w-12 sm:text-[15px]">
                {s.n}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-[20px] leading-tight tracking-tight text-foreground sm:mt-6 sm:text-2xl">
              {s.title}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
              {s.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
