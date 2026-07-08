import ronaldoDark from "@/assets/ronaldo-dark.jpg.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./motion-primitives";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <img
          src={ronaldoDark.url}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
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
            Agende uma consulta personalizada e receba um plano alimentar
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