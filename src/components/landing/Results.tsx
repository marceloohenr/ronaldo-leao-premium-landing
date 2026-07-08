import { Placeholder } from "./Placeholder";
import { Reveal } from "./motion-primitives";

export function Results() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--gold)]/70" />
            Resultados
          </span>
          <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
            Histórias que falam por si.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Uma galeria em construção — em breve, resultados reais de pacientes
            que confiaram no processo.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <Placeholder label="Resultado do paciente" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}