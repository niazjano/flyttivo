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

const TRUST_ITEMS = [
  {
    title: "Lokalt företag i Kristianstad",
    description: "Bas i Kristianstad med lokalkännedom.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Snabba svarstider",
    description: "Offert och svar, oftast samma dag.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Transparent prissättning",
    description: "Tydlig offert utan dolda avgifter.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
  {
    title: "Försäkrade tjänster",
    description: "Trygghet genom hela uppdraget.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
        <path d="M9.5 12.5l1.5 1.5 3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Professionell kundservice",
    description: "Tydlig kommunikation från start till mål.",
    icon: (
      <svg viewBox="0 0 24 24" {...iconProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    ),
  },
];

export function TrustSection() {
  return (
    <section
      className="reveal trust-section py-12 sm:py-14"
      data-reveal
      data-reveal-id="trust"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-7 max-w-xl text-center sm:mb-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Trygg flyttfirma i Kristianstad
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            Professionell flytt och städ med tydlig kommunikation, snabb service
            och lokalt fokus.
          </p>
        </div>

        <div className="trust-panel rounded-[20px] border border-slate-200/40 bg-white/80 p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:p-6 md:p-7">
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-4">
            {TRUST_ITEMS.map((item, index) => (
              <li
                key={item.title}
                className={`trust-item group flex gap-3.5 sm:flex-col sm:items-center sm:gap-3 sm:text-center lg:items-start lg:text-left ${
                  index > 0
                    ? "sm:border-t sm:border-slate-100 sm:pt-5 lg:border-t-0 lg:border-l lg:border-slate-100/90 lg:pl-4 lg:pt-0"
                    : ""
                }`}
              >
                <span className="trust-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] border border-slate-200/60 bg-slate-50/80 transition-colors duration-[250ms] group-hover:border-slate-200 group-hover:bg-white">
                  {item.icon}
                </span>
                <div className="min-w-0 space-y-0.5">
                  <p className="text-[13px] font-medium leading-snug text-slate-800 sm:text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {item.description}
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
