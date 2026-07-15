import { RONALDO_ABOUT_OFFICE } from "@/lib/assets";
import { Reveal } from "./motion-primitives";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[1240px] px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal dir="left" className="flex flex-col justify-center">
          <span className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--gold)]/70" />
            Sobre
          </span>
          <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[46px] lg:text-[54px]">
            Muito além de <em className="italic text-primary">uma dieta</em>.
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted-foreground lg:text-[17px]">
            <p>
              Cada corpo tem uma história, uma rotina e um objetivo. Meu
              trabalho começa em compreender profundamente quem você é antes de
              qualquer recomendação alimentar.
            </p>
            <p>
              A partir dessa escuta, construo planos vivos, ajustados ao seu
              cotidiano, à sua bioquímica e aos resultados que buscamos juntos.
              Ciência aplicada com sensibilidade, sem promessas rápidas, com o
              cuidado que a sua saúde merece.
            </p>
          </div>
          <div className="mt-10">
            <WhatsAppButton variant="ghost">Conhecer o método</WhatsAppButton>
          </div>
        </Reveal>

        <Reveal dir="right">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-[2px] border border-border/70 bg-[oklch(0.95_0.012_95)] shadow-[0_28px_70px_-48px_rgba(0,0,0,0.5)]">
            <img
              src={RONALDO_ABOUT_OFFICE}
              alt="Ronaldo Leão em atendimento nutricional"
              className="h-full w-full object-cover object-[50%_42%]"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-4 border border-[color:var(--gold)]/25" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/72 to-transparent px-7 pb-7 pt-20">
              <p className="font-serif text-[15px] italic text-primary-foreground">
                Atendimento nutricional individualizado
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
