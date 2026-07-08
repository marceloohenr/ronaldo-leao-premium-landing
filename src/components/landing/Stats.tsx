import { useEffect, useRef, useState } from "react";
import { Reveal } from "./motion-primitives";

const stats = [
  {
    value: 50,
    prefix: "+",
    suffix: "",
    label: "Pacientes acompanhados",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Planos personalizados",
  },
  {
    value: null,
    display: "Sob medida",
    label: "Atendimento individual",
  },
];

function AnimatedValue({
  value,
  prefix = "",
  suffix = "",
  display,
  active,
}: {
  value: number | null;
  prefix?: string;
  suffix?: string;
  display?: string;
  active: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active || value === null) return;

    let frame = 0;
    let start: number | null = null;
    const duration = 1300;

    const tick = (timestamp: number) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, value]);

  if (value === null) return <>{display}</>;

  return (
    <>
      {prefix}
      {current}
      {suffix}
    </>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-border/70 bg-[oklch(0.955_0.012_95)]"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-y-10 px-6 py-14 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-border/70 md:py-20 lg:px-10">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="text-center sm:px-5 lg:px-8"
          >
            <div className="min-h-[56px] font-serif text-[42px] leading-none tracking-tight text-primary sm:text-5xl lg:text-6xl">
              <AnimatedValue
                active={active}
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                display={s.display}
              />
            </div>
            <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
