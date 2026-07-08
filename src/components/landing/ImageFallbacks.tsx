import { BRAND_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

function initials() {
  return BRAND_NAME.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BrandMark({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-[color:var(--gold)]/35 bg-[oklch(0.94_0.018_102)] text-primary ring-1 ring-border",
        className,
      )}
    >
      <span className="font-serif text-[0.72em] tracking-[0.14em]">
        {initials()}
      </span>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </span>
  );
}

export function PortraitImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[2px] bg-[linear-gradient(145deg,oklch(0.93_0.016_102),oklch(0.78_0.045_142))]",
        className,
      )}
    >
      <div className="absolute inset-x-[18%] bottom-0 h-[70%] rounded-t-full bg-primary/90" />
      <div className="absolute left-1/2 top-[17%] h-[28%] w-[32%] -translate-x-1/2 rounded-full bg-[oklch(0.86_0.036_74)] shadow-[0_22px_60px_rgba(0,0,0,0.18)]" />
      <div className="absolute left-[16%] top-[12%] h-px w-[68%] bg-[color:var(--gold)]/55" />
      <div className="absolute bottom-[12%] left-[12%] right-[12%] flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-primary-foreground/70">
        <span>Nutrição</span>
        <span>Bem-estar</span>
      </div>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover grayscale-[15%]"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : null}
    </div>
  );
}

export function EditorialImage({
  title,
  aspect = "aspect-[4/5]",
  className,
}: {
  title: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[2px] border border-border/70 bg-[oklch(0.95_0.012_95)]",
        aspect,
        className,
      )}
    >
      <div className="absolute inset-4 border border-[color:var(--gold)]/30" />
      <div className="absolute left-[12%] top-[13%] h-[30%] w-[48%] rounded-full bg-[color:var(--gold)]/16" />
      <div className="absolute bottom-[18%] right-[10%] h-[46%] w-[48%] rounded-t-full bg-primary/88" />
      <div className="absolute bottom-[13%] left-[10%] h-px w-[80%] bg-[color:var(--gold)]/45" />
      <span className="absolute bottom-8 left-8 right-8 font-serif text-[15px] italic leading-snug text-muted-foreground">
        {title}
      </span>
    </div>
  );
}
