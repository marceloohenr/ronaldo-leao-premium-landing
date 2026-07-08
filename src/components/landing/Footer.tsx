import { Code2, Instagram } from "lucide-react";
import { RONALDO_LOGO } from "@/lib/assets";
import {
  BRAND_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

const DEVELOPER_URL = "https://marcelodev.online";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={RONALDO_LOGO}
              alt="Ronaldo Leão Nutrição e Bem-estar"
              className="h-32 w-auto max-w-full object-contain object-left"
            />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
              Nutrição personalizada, escuta atenta e ciência aplicada, para
              transformações que permanecem.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-6 space-y-3 text-[14px]">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                >
                  <Instagram size={14} strokeWidth={1.2} />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Navegação
            </h4>
            <ul className="mt-6 space-y-3 text-[14px]">
              <li>
                <a href="#sobre" className="text-foreground hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#especialidades"
                  className="text-foreground hover:text-primary"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-foreground hover:text-primary"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-5 border-t border-border/70 pt-8 text-[12px] text-muted-foreground md:grid-cols-[1fr_auto]">
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos
            reservados.
          </span>

          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-end md:gap-6">
            <span className="text-center tracking-wide md:text-right">
              Recife · Pernambuco · Brasil
            </span>

            <a
              href={DEVELOPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site do desenvolvedor"
              className="inline-flex h-10 w-full max-w-[210px] items-center justify-center gap-2 rounded-full border border-primary/15 bg-background/70 px-4 text-[11px] font-semibold text-primary shadow-[0_14px_30px_-28px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/[0.05] hover:shadow-[0_18px_36px_-30px_rgba(0,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] sm:w-auto"
            >
              <Code2 size={14} strokeWidth={1.7} />
              <span>{"</Desenvolvedor/>"}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
