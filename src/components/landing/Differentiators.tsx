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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className="group rounded-[2px] border border-border/70 bg-background p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-[color:var(--gold)]/60"
            >
              <item.icon strokeWidth={1.1} className="h-6 w-6 text-primary" />
              <h3 className="mt-6 font-serif text-xl tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}