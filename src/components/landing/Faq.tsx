import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./motion-primitives";

const faqs = [
  {
    q: "Como funciona a consulta?",
    a: "A primeira consulta inclui uma anamnese profunda: histórico de saúde, rotina, exames, objetivos e preferências. A partir daí, construímos juntos o plano ideal para você.",
  },
  {
    q: "A consulta é online?",
    a: "Sim. Atendo presencialmente no consultório em Recife e também de forma online, com a mesma profundidade e qualidade em ambos os formatos.",
  },
  {
    q: "Como é feito o acompanhamento?",
    a: "O acompanhamento é contínuo entre as consultas, com canal direto para dúvidas, ajustes de plano e suporte na adesão. Você não caminha sozinho no processo.",
  },
  {
    q: "Quanto tempo dura?",
    a: "A duração varia conforme o objetivo. Trabalhamos em ciclos com metas claras — a maioria dos pacientes percebe mudanças significativas nas primeiras semanas.",
  },
  {
    q: "Como funciona o retorno?",
    a: "Os retornos são agendados conforme o plano definido — geralmente a cada 15 ou 30 dias — para avaliar evolução, ajustar estratégias e alinhar próximos passos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/70">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10 lg:py-36">
        <Reveal dir="left">
          <span className="mb-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--gold)]/70" />
            Perguntas
          </span>
          <h2 className="text-balance font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
            Dúvidas frequentes.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Se sua pergunta não estiver aqui, converse comigo diretamente pelo
            WhatsApp.
          </p>
        </Reveal>

        <Reveal dir="right">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/70"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-[19px] tracking-tight text-foreground hover:no-underline lg:text-[22px]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}