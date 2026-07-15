import { BRAND_NAME } from "@/lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./motion-primitives";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--gold)]/30" />
        <div className="absolute left-[12%] top-[18%] h-px w-[76%] bg-[color:var(--gold)]/25" />
        <div className="absolute bottom-[18%] left-[18%] h-px w-[64%] bg-[color:var(--gold)]/20" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,var(--primary)_75%)]" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:py-40">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-primary-foreground/70">
            <span className="h-px w-8 bg-[color:var(--gold)]" />
            Comece agora
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-balance font-serif text-[42px] leading-[1.05] tracking-[-0.02em] sm:text-[54px] lg:text-[64px]">
            Comece hoje sua{" "}
            <em className="italic text-[color:var(--gold)]">transformação</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-primary-foreground/75 lg:text-[17px]">
            Agende uma consulta com {BRAND_NAME} e receba um plano alimentar
            desenvolvido exclusivamente para a sua realidade.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12">
            <WhatsAppButton variant="light" size="lg">
              Agendar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
