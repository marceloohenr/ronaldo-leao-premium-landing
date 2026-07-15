import {
  HeartHandshake,
  ClipboardList,
  MessageCircle,
  FlaskConical,
  Repeat,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./motion-primitives";

const items = [
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    desc: "Escuta ativa, acolhimento e cuidado real em cada consulta.",
  },
  {
    icon: ClipboardList,
    title: "Plano personalizado",
    desc: "Nada de fórmulas prontas — protocolos desenhados para você.",
  },
  {
    icon: MessageCircle,
    title: "Suporte individual",
    desc: "Contato próximo entre consultas para ajustes e dúvidas.",
  },
  {
    icon: FlaskConical,
    title: "Baseado em ciência",
    desc: "Estratégias fundamentadas em evidências atualizadas.",
  },
  {
    icon: Repeat,
    title: "Mudança sustentável",
    desc: "Hábitos que permanecem — sem restrições insustentáveis.",
  },
  {
    icon: TrendingUp,
    title: "Resultados reais",
    desc: "Evolução mensurável, respeitando o seu tempo.",
  },
];

export function Differentiators() {
  return (
    <section className="border-y border-border/70 bg-[oklch(0.955_0.012_95)] py-28 lg:py-36">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              <span className="h-px w-8 bg-[color:var(--gold)]/70" />
              Diferenciais
            </span>
            <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
              Um cuidado que se sente na experiência inteira.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="group min-h-[210px] rounded-[2px] border border-border/70 bg-background p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color:var(--gold)]/60 sm:p-8"
            >
              <item.icon strokeWidth={1.1} className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              <h3 className="mt-5 font-serif text-[19px] leading-tight tracking-tight text-foreground sm:mt-6 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
