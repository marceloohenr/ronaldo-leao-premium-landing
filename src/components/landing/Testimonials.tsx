import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  TESTIMONIAL_CELERIDADE,
  TESTIMONIAL_MUDANCA_HABITOS,
  TESTIMONIAL_PLAN_CRITERIOSO,
  TESTIMONIAL_PROJECT_VERAO,
  TESTIMONIAL_REEDUCACAO_LEVE,
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
    imagePosition: "50% 48%",
    imageAlt: "Paciente correndo ao ar livre após acompanhamento nutricional",
  },
  {
    quote:
      "Além de ser um excelente profissional, Ronaldo Leão é muito empático, escuta com atenção e explica tudo de forma clara e didática, fazendo com que a gente realmente entenda o processo. O acompanhamento é acolhedor, sem julgamentos, e isso faz toda a diferença para manter a motivação e alcançar os resultados. Recomendo de olhos fechados!",
    name: "Paciente acompanhada",
    role: "Acompanhamento personalizado",
    image: TESTIMONIAL_RUNNER_PINK,
    imagePosition: "52% 34%",
    imageAlt: "Paciente sorrindo durante corrida de rua",
  },
  {
    quote:
      "Participar do Projeto Verão com o Ronaldo foi, sem dúvidas, uma virada de chave. Eu sempre levei meus treinos de musculação a sério, mas foi o acompanhamento nutricional dele que me fez atingir outro patamar. Ele entendeu exatamente a minha correria de faculdade, treino e dieta, entregando um planejamento sem terrorismo e prático para o dia a dia. Essa alimentação alinhada foi o combustível que eu precisava para aguentar a intensidade da musculação, trazendo resultados reais na disposição e no espelho.",
    name: "Paciente do Projeto Verão",
    role: "Musculação e rotina de estudos",
    image: TESTIMONIAL_PROJECT_VERAO,
    imagePosition: "50% 38%",
    imageAlt: "Paciente do Projeto Verão em retrato",
  },
  {
    quote:
      "O plano alimentar foi elaborado de forma criteriosa e totalmente adequado às minhas necessidades, rotina e objetivos, mostrando um cuidado individualizado que fez toda a diferença.",
    name: "Paciente acompanhada",
    role: "Plano alimentar individualizado",
    image: TESTIMONIAL_PLAN_CRITERIOSO,
    imagePosition: "50% 42%",
    imageAlt: "Paciente em área externa próxima à praia",
  },
  {
    quote:
      "Gostei muito do acompanhamento de Ronaldo Leão. Desde o começo ele foi super atencioso, montou um plano alimentar que realmente fez sentido para a minha rotina. Com a ajuda dele consegui fazer uma reeducação alimentar de um jeito mais leve, sem sofrimento, e isso melhorou muito meu bem-estar e a forma como me sinto no dia a dia. Só tenho a agradecer pelo cuidado e pela dedicação. Recomendo de olhos fechados!",
    name: "Paciente acompanhada",
    role: "Reeducação alimentar leve",
    image: TESTIMONIAL_REEDUCACAO_LEVE,
    imagePosition: "58% 38%",
    imageAlt: "Paciente sorrindo em retrato",
  },
  {
    quote:
      "Minha experiência com o nutricionista Ronaldo Leão foi excelente. Desde a primeira consulta, fui atendido com muita atenção e de forma totalmente personalizada, levando em consideração minhas necessidades e objetivos. Um dos grandes diferenciais foi a celeridade na elaboração do plano alimentar e das recomendações, o que me permitiu iniciar as mudanças imediatamente. O atendimento humanizado, a disponibilidade para esclarecer dúvidas e o plano personalizado me transmitiram muita confiança.",
    name: "Paciente em acompanhamento",
    role: "Agilidade e plano personalizado",
    image: TESTIMONIAL_CELERIDADE,
    imagePosition: "50% 38%",
    imageAlt: "Paciente em selfie ao ar livre",
  },
  {
    quote:
      "Quero agradecer por todo o cuidado e atenção durante o atendimento. Você realmente me ouviu, entendeu as minhas dificuldades com a alimentação e conseguiu adaptar o plano alimentar à minha rotina, ao meu planejamento e, principalmente, aos meus gostos. Isso fez toda a diferença, porque eu não senti que estava seguindo uma dieta impossível, mas sim construindo uma reeducação alimentar que faz sentido para a minha realidade.",
    name: "Paciente em acompanhamento",
    role: "Mudança de hábitos",
    image: TESTIMONIAL_MUDANCA_HABITOS,
    imagePosition: "50% 36%",
    imageAlt: "Paciente em retrato sorrindo",
  },
];

const AUTOPLAY_DELAY = 7000;

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

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
      <div className="mb-9 text-center sm:mb-12">
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
        <div
          className="cursor-grab overflow-hidden active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex items-stretch">
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.image}
                className="flex min-w-0 flex-[0_0_92%] px-2 sm:flex-[0_0_84%] sm:px-3 md:flex-[0_0_78%] lg:flex-[0_0_72%] lg:px-4"
              >
                <figure
                  className={`relative mx-auto flex min-h-[520px] w-full max-w-[900px] flex-col overflow-hidden rounded-[2px] border border-border/70 bg-background px-5 py-9 text-center shadow-[0_24px_70px_-55px_rgba(0,0,0,0.45)] transition-all duration-500 sm:min-h-[540px] sm:px-8 sm:py-11 md:min-h-[540px] md:px-10 md:py-12 lg:min-h-[640px] lg:px-16 lg:py-16 ${
                    selected === i
                      ? "scale-100 opacity-100"
                      : "scale-[0.96] opacity-55"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute left-5 top-4 z-10 font-serif text-5xl leading-none text-[color:var(--gold)]/35 md:left-8 md:top-6 md:text-6xl lg:left-10 lg:top-8 lg:text-7xl"
                  >
                    “
                  </span>

                  <div>
                    <blockquote className="relative mx-auto max-w-3xl font-serif text-[14px] italic leading-[1.62] text-foreground sm:text-[16px] sm:leading-[1.7] md:text-[17px] lg:text-[21px] lg:leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>

                  <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-10">
                    <div className="flex justify-center">
                      <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[color:var(--gold)]/45 bg-background p-1 shadow-[0_24px_55px_-38px_rgba(0,0,0,0.45)] sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-44 lg:w-44">
                        <img
                          src={testimonial.image}
                          alt={testimonial.imageAlt}
                          className="h-full w-full rounded-full object-cover"
                          style={{ objectPosition: testimonial.imagePosition }}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                        <div className="pointer-events-none absolute inset-3 rounded-full border border-[color:var(--gold)]/25" />
                      </div>
                    </div>

                    <figcaption className="mx-auto mt-5 max-w-sm border-t border-border/70 pt-5 sm:mt-6 sm:pt-6 lg:mt-7">
                      <span className="block font-serif text-[15px] text-foreground sm:text-[16px]">
                        {testimonial.name}
                      </span>
                      <span className="mt-2 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
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
