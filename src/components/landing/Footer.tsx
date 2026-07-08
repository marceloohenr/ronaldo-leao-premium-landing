import { Instagram } from "lucide-react";
import { RONALDO_LOGO } from "@/lib/assets";
import {
  BRAND_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={RONALDO_LOGO}
              alt="Ronaldo Leão Nutrição e Bem-estar"
              className="h-28 w-auto max-w-full object-contain object-left"
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-8 text-[12px] text-muted-foreground md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos
            reservados.
          </span>
          <span className="tracking-wide">Recife · Pernambuco · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
