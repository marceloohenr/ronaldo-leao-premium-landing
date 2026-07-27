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
              aria-label="Visitar o site do desenvolvedor"
              className="group inline-flex min-h-16 w-full max-w-[250px] items-center justify-center gap-3 rounded-full border border-primary/15 bg-background/70 py-1.5 pl-4 pr-1.5 text-[12px] font-medium text-foreground shadow-[0_14px_30px_-28px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/[0.05] hover:shadow-[0_18px_36px_-30px_rgba(0,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] sm:w-auto"
            >
              <Code2 size={16} strokeWidth={1.7} className="text-primary" />
              <span>Desenvolvido por</span>
              <span className="relative grid h-13 w-13 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_210deg,#ff7a59,#ffd34e,#38d996,#1e8cff,#7c3aed,#ff4fc3,#ff7a59)] p-[2px] shadow-[0_0_18px_rgba(70,130,180,0.32)] transition-transform duration-300 group-hover:scale-105 motion-safe:animate-[developer-glow_4s_ease-in-out_infinite]">
                <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_30deg,transparent_10%,rgba(255,255,255,0.82)_28%,transparent_46%)] opacity-70 motion-safe:animate-[developer-spin_6s_linear_infinite]" />
                <span className="relative h-full w-full overflow-hidden rounded-full border border-background bg-black">
                  <img
                    src="/ronaldo/developer-marcelo.png"
                    alt=""
                    className="h-full w-full scale-125 object-cover object-[58%_45%]"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
