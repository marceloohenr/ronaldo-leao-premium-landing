import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  TESTIMONIAL_RUNNER_BEACH,
  TESTIMONIAL_RUNNER_PINK,
} from "@/lib/assets";
import { Reveal } from "./motion-primitives";

const testimonials = [
  {
    quote:
      "Ter o Ronaldo Leão como nutricionista fez toda a diferença para mim. Tenho alergia à proteína do leite, então minha alimentação sempre foi muito limitada. Mesmo com todas as restrições, ele montou uma dieta prática, variada e que encaixou perfeitamente na minha rotina corrida, além de escolher suplementos compatíveis com a minha condição. O resultado foi um excelente ganho de massa magra sem abrir mão da saúde. Recomendo de olhos fechados para quem procura um acompanhamento realmente personalizado.",
    name: "Paciente em acompanhamento",
    role: "Ganho de massa magra",
    image: TESTIMONIAL_RUNNER_BEACH,
    imageAlt: "Paciente correndo ao ar livre após acompanhamento nutricional",
  },
  {
    quote:
      "Além de ser um excelente profissional, Ronaldo Leão é muito empático, escuta com atenção e explica tudo de forma clara e didática, fazendo com que a gente realmente entenda o processo. O acompanhamento é acolhedor, sem julgamentos, e isso faz toda a diferença para manter a motivação e alcançar os resultados. Recomendo de olhos fechados!",
    name: "Paciente acompanhada",
    role: "Acompanhamento personalizado",
    image: TESTIMONIAL_RUNNER_PINK,
    imageAlt: "Paciente sorrindo durante corrida de rua",
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
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.image}
                className="min-w-0 flex-[0_0_100%] px-2 sm:px-4 md:flex-[0_0_88%] lg:flex-[0_0_78%]"
              >
                <figure className="relative mx-auto grid overflow-hidden rounded-[2px] border border-border/70 bg-background text-left md:grid-cols-[0.78fr_1.22fr]">
                  <span
                    aria-hidden
                    className="absolute left-5 top-4 z-10 font-serif text-6xl leading-none text-[color:var(--gold)]/35 md:left-[calc(39%+2rem)] md:top-8 md:text-7xl"
                  >
                    “
                  </span>

                  <div className="relative min-h-[320px] overflow-hidden bg-[oklch(0.94_0.012_95)] md:min-h-[560px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      className="h-full w-full object-cover object-center"
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-4 border border-[color:var(--gold)]/30" />
                  </div>

                  <div className="relative flex flex-col justify-center px-7 py-12 sm:px-9 md:px-12 md:py-16">
                    <blockquote className="font-serif text-[18px] italic leading-relaxed text-foreground sm:text-[20px] lg:text-[22px]">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-8 border-t border-border/70 pt-6">
                      <span className="block font-serif text-[16px] text-foreground">
                        {testimonial.name}
                      </span>
                      <span className="mt-2 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {testimonial.role}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
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
