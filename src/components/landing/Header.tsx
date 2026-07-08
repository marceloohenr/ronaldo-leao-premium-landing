import { useEffect, useState } from "react";
import logoAsset from "@/assets/ronaldo-logo.jpg.asset.json";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-6 lg:h-20 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Logotipo Ronaldo Leão"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-border lg:h-10 lg:w-10"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-[15px] tracking-[0.14em] text-foreground">
              {BRAND_NAME.toUpperCase()}
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              {BRAND_TAGLINE}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton size="sm">Agendar</WhatsAppButton>
      </div>
    </header>
  );
}