import { Reveal } from "./motion-primitives";

const stats = [
  { value: "500+", label: "Pacientes acompanhados" },
  { value: "04", label: "Especialidades" },
  { value: "100%", label: "Planos personalizados" },
  { value: "1:1", label: "Atendimento individual" },
];

export function Stats() {
  return (
    <section className="border-y border-border/70 bg-[oklch(0.955_0.012_95)]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4 md:divide-x md:divide-border/70 md:py-20 lg:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:px-6">
            <div className="font-serif text-5xl leading-none tracking-tight text-primary lg:text-6xl">
              {s.value}
            </div>
            <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}