import { WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_38px_-18px_rgba(0,0,0,0.55)] ring-1 ring-[color:var(--gold)]/35 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[color:var(--gold)]/10" />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
