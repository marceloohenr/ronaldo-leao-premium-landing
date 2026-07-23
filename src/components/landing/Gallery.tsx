import {
  GALLERY_ASSESSMENT,
  GALLERY_CONSULTORIO,
  GALLERY_PLANNER_NOTEBOOK,
  GALLERY_SITE_PREVIEW,
} from "@/lib/assets";
import { Reveal } from "./motion-primitives";

const galleryItems = [
  {
    title: "Consulta com escuta e estratégia",
    image: GALLERY_CONSULTORIO,
    alt: "Ronaldo Leão em atendimento no consultório",
    position: "50% 42%",
  },
  {
    title: "Acompanhamento de evolução",
    image: GALLERY_ASSESSMENT,
    alt: "Avaliação nutricional durante acompanhamento",
    position: "50% 46%",
  },
  {
    title: "Planejamento para sua rotina",
    image: GALLERY_SITE_PREVIEW,
    alt: "Ambiente de trabalho com planejamento nutricional",
    position: "50% 48%",
  },
  {
    title: "Organização e cuidado em cada plano",
    image: GALLERY_PLANNER_NOTEBOOK,
    alt: "Caderno de Ronaldo Leão com notebook no consultório",
    position: "50% 50%",
  },
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
            <Reveal key={item.title} delay={i * 0.06}>
              <figure className="group relative overflow-hidden rounded-[2px] border border-border/70 bg-background p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color:var(--gold)]/60">
                <div className="relative aspect-[3/4] overflow-hidden border border-[color:var(--gold)]/25 bg-[oklch(0.95_0.012_95)]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: item.position }}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0">
                      <div className="absolute left-[12%] top-[13%] h-[30%] w-[48%] rounded-full bg-[color:var(--gold)]/16" />
                      <div className="absolute bottom-[18%] right-[10%] h-[46%] w-[48%] rounded-t-full bg-primary/88" />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-3 border border-[color:var(--gold)]/25" />
                </div>
                <figcaption className="mt-3 border-t border-[color:var(--gold)]/40 pt-2 font-serif text-[13px] italic leading-tight text-muted-foreground sm:text-[14px]">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
