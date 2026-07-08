import { cn } from "@/lib/utils";

export function Placeholder({
  label,
  className,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[2px] border border-border/70 bg-[oklch(0.95_0.012_95)]",
        aspect,
        className,
      )}
    >
      {/* Inner gold frame */}
      <div className="pointer-events-none absolute inset-3 border border-[color:var(--gold)]/25" />
      {/* Corner accents */}
      <span className="pointer-events-none absolute left-3 top-3 h-2 w-2 border-l border-t border-[color:var(--gold)]/60" />
      <span className="pointer-events-none absolute right-3 top-3 h-2 w-2 border-r border-t border-[color:var(--gold)]/60" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-2 w-2 border-b border-l border-[color:var(--gold)]/60" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-2 w-2 border-b border-r border-[color:var(--gold)]/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[color:var(--gold)]/70"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m3 17 5-5 4 4 3-3 6 6" />
        </svg>
        <span className="font-serif text-[13px] italic text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}