import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_10px_30px_-15px_color-mix(in_oklab,var(--primary)_45%,transparent)]",
  ghost:
    "bg-transparent text-foreground border border-border hover:border-foreground/40 hover:bg-foreground/[0.03]",
  light:
    "bg-background text-primary border border-primary/20 hover:border-primary/40 hover:bg-primary/[0.04]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[15px]",
  lg: "h-14 px-9 text-base",
};

export function WhatsAppButton({
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}