import { EditorialImage } from "./ImageFallbacks";
import { Reveal } from "./motion-primitives";

const galleryItems = [
  "Consulta com escuta e estratégia",
  "Plano alimentar para sua rotina",
  "Acompanhamento de evolução",
  "Nutrição funcional e estética",
];

export function Gallery() {
  return (
    <section className="border-y border-border/70 bg-[oklch(0.955_0.012_95)] py-28 lg:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="mb-16">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-[color:var(--gold)]/70" />
              Galeria
            </span>
            <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
              Momentos do consultório.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item} delay={i * 0.06}>
              <EditorialImage title={item} aspect="aspect-[3/4]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
