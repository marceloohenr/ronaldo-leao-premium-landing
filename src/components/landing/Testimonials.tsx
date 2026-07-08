import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "./motion-primitives";

const placeholders = [
  {
    quote:
      "Um espaço reservado para o depoimento de um paciente. Em breve, histórias reais de quem viveu a experiência de perto.",
    name: "Paciente",
    role: "Depoimento em breve",
  },
  {
    quote:
      "Este é um bloco preparado para receber avaliações verdadeiras. Cada nova jornada concluída poderá ser compartilhada aqui.",
    name: "Paciente",
    role: "Depoimento em breve",
  },
  {
    quote:
      "Aqui será compartilhada a percepção de quem confiou no processo — palavras que traduzem o cuidado recebido em cada consulta.",
    name: "Paciente",
    role: "Depoimento em breve",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36">
      <div className="mb-12 text-center">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--gold)]/70" />
            Depoimentos
          </span>
          <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
            O que dizem sobre a experiência.
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {placeholders.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_75%] lg:flex-[0_0_60%]">
                <figure className="relative mx-auto rounded-[2px] border border-border/70 bg-background px-8 py-14 text-center md:px-14 md:py-16">
                  <span
                    aria-hidden
                    className="absolute left-8 top-6 font-serif text-6xl leading-none text-[color:var(--gold)]/40 md:text-7xl"
                  >
                    “
                  </span>
                  <blockquote className="font-serif text-[22px] italic leading-relaxed text-foreground md:text-[26px]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col items-center gap-2">
                    <span className="h-9 w-9 rounded-full border border-border bg-[oklch(0.94_0.012_95)]" />
                    <span className="font-serif text-[15px] text-foreground">
                      {t.name}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {placeholders.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-[3px] transition-all duration-500 ${
                selected === i
                  ? "w-10 bg-primary"
                  : "w-5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}