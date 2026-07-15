import {
  RONALDO_LOGO,
  RONALDO_PORTRAIT_ARMS,
  RONALDO_PORTRAIT_CLOSE,
} from "@/lib/assets";
import { BRAND_NAME } from "@/lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./motion-primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_5%,transparent),transparent_70%)]" />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-6 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:pb-32">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-[color:var(--gold)]/70" />
              {BRAND_NAME} · Nutricionista · Recife / PE
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
              Acompanhamento nutricional com Ronaldo Leão, focado em
              emagrecimento, nutrição funcional, esportiva e estética, para
              quem busca resultados reais e duradouros.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <WhatsAppButton size="lg">Agendar Consulta</WhatsAppButton>
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
          <div className="relative mx-auto w-full max-w-[560px] pb-16 sm:pb-20">
            <div className="relative ml-auto aspect-[4/5] w-[86%] overflow-hidden rounded-[2px] border border-[color:var(--gold)]/35 bg-[oklch(0.955_0.012_95)] shadow-[0_32px_80px_-45px_rgba(0,0,0,0.55)] sm:w-[82%]">
              <img
                src={RONALDO_PORTRAIT_CLOSE}
                alt="Retrato de Ronaldo Leão, nutricionista"
                className="h-full w-full object-cover object-[52%_42%]"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-3 border border-[color:var(--gold)]/25" />
            </div>

            <div className="absolute bottom-0 left-0 w-[46%] overflow-hidden rounded-[2px] border border-background bg-background shadow-[0_24px_55px_-30px_rgba(0,0,0,0.5)] sm:w-[42%]">
              <img
                src={RONALDO_PORTRAIT_ARMS}
                alt="Ronaldo Leão em retrato preto e branco"
                className="aspect-[4/5] w-full object-cover object-[52%_38%]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute right-3 top-3 hidden sm:block">
              <img
                src={RONALDO_LOGO}
                alt="Ronaldo Leão Nutrição e Bem-estar"
                className="h-20 w-auto object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.16)]"
              />
            </div>

            <div className="absolute bottom-8 right-5 flex items-center gap-3 rounded-full border border-border bg-background/95 px-4 py-2.5 shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:bottom-10 sm:right-8 sm:px-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-foreground sm:text-[11px] sm:tracking-[0.24em]">
                CRN · Nutricionista
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
