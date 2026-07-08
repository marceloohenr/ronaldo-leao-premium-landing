import ronaldoLight from "@/assets/ronaldo-light.jpg.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./motion-primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      {/* Ambient wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_5%,transparent),transparent_70%)]" />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-6 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:pb-32">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-[color:var(--gold)]/70" />
              Nutricionista · Recife / PE
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance font-serif text-[44px] leading-[1.02] tracking-[-0.02em] text-foreground sm:text-[56px] lg:text-[68px]">
              Transforme sua saúde através de uma{" "}
              <em className="font-serif italic text-primary">
                alimentação personalizada
              </em>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-7 max-w-[520px] text-[16px] leading-relaxed text-muted-foreground lg:text-[17px]">
              Acompanhamento nutricional focado em emagrecimento, nutrição
              funcional, esportiva e estética — para quem busca resultados reais
              e duradouros.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <WhatsAppButton size="lg">Agendar Consulta</WhatsAppButton>
              <WhatsAppButton size="lg" variant="ghost">
                Falar pelo WhatsApp
              </WhatsAppButton>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 flex items-center gap-4 text-[12px] text-muted-foreground">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-6 w-6 rounded-full border border-background bg-[color:var(--gold)]/30"
                  />
                ))}
              </div>
              <span className="tracking-wide">
                Atendimento individualizado · presencial e online
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal dir="right" delay={0.1} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px]">
            {/* Gold frame */}
            <div className="absolute -inset-3 rounded-[2px] border border-[color:var(--gold)]/40" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-[color:var(--gold)]/60" />
            <img
              src={ronaldoLight.url}
              alt="Retrato de Ronaldo Leão, nutricionista"
              className="relative h-full w-full rounded-[2px] object-cover grayscale-[15%]"
              loading="eager"
              decoding="async"
            />
            {/* CRN badge */}
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-full border border-border bg-background/90 px-5 py-2.5 backdrop-blur-sm shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-foreground">
                CRN · Nutricionista
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}