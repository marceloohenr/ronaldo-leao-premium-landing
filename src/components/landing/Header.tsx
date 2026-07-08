import { useEffect, useState } from "react";
import { RONALDO_LOGO } from "@/lib/assets";
import { BRAND_NAME } from "@/lib/constants";
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
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-6 lg:h-20 lg:px-10">
        <a
          href="#top"
          className="flex min-w-0 items-center"
          aria-label={`${BRAND_NAME} - início`}
        >
          <img
            src={RONALDO_LOGO}
            alt="Ronaldo Leão Nutrição e Bem-estar"
            className="h-14 w-auto object-contain object-left sm:h-16"
          />
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
