import Image from "next/image";
import { BRAND } from "@/lib/brand";

const iconProps = {
  className: "h-[18px] w-[18px]",
  fill: "none",
  stroke: BRAND.navy,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const REASONS = [
  {
    title: "Erfarna specialister",
    body: "Metodiskt arbete för en trygg flytt från start till mål.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Pålitlig service",
    body: "Vi håller tider och levererar det vi lovar.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M20 7l-8 10-4-4" />
        <path d="M4 12h4M16 7h4" />
      </svg>
    ),
  },
  {
    title: "Tydliga priser",
    body: "Inga dolda avgifter och RUT när det är möjligt.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Anpassat efter dig",
    body: "Upplägget skräddarsys efter dina behov.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
];

export function WhyChooseSection() {
  return (
    <section
      className="reveal why-choose-section py-12 sm:py-14"
      data-reveal
      data-reveal-id="why-us"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Varför välja Flyttivo?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            Trygg, professionell service – anpassad efter dina behov.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          <div className="relative min-h-[220px] overflow-hidden rounded-[20px] border border-slate-200/40 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_rgba(15,23,42,0.06)] sm:min-h-[280px] lg:min-h-0 lg:aspect-[4/3]">
            <Image
              src="/image/2%20guys%20moving%20coach.webp"
              alt="Flyttivo personal som hjälper till med flytt"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <ul className="flex flex-col justify-center gap-3 sm:gap-3.5">
            {REASONS.map((reason) => (
              <li
                key={reason.title}
                className="why-item group flex gap-3.5 rounded-[16px] border border-slate-200/35 bg-white/70 px-4 py-3.5 transition-[transform,box-shadow,border-color] duration-[250ms] sm:px-5 sm:py-4"
              >
                <span className="trust-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] border border-slate-200/60 bg-slate-50/80 transition-colors duration-[250ms] group-hover:border-slate-200 group-hover:bg-white">
                  {reason.icon}
                </span>
                <div className="min-w-0 space-y-0.5">
                  <h3 className="text-[13px] font-medium text-slate-900 sm:text-sm">
                    {reason.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                    {reason.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
