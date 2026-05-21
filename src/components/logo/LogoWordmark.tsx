import { BRAND } from "@/lib/brand";

interface LogoWordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const sizeConfig = {
  sm: {
    wordmark: "text-[1.05rem] sm:text-lg",
    tagline: "text-[9px] sm:text-[10px]",
    gap: "gap-0",
  },
  md: {
    wordmark: "text-[1.2rem] sm:text-[1.35rem]",
    tagline: "text-[10px] sm:text-[11px]",
    gap: "gap-0",
  },
  lg: {
    wordmark: "text-2xl sm:text-[1.75rem]",
    tagline: "text-[11px] sm:text-xs",
    gap: "gap-0.5",
  },
} as const;

export function LogoWordmark({
  className = "",
  size = "md",
  showTagline = true,
}: LogoWordmarkProps) {
  const config = sizeConfig[size];

  return (
    <span
      className={`flex min-w-0 flex-col justify-center leading-none ${config.gap} ${className}`}
    >
      <span
        className={`logo-wordmark inline-flex items-baseline font-semibold tracking-[-0.03em] ${config.wordmark}`}
        aria-hidden="true"
      >
        <span
          className="font-semibold"
          style={{ color: BRAND.navy }}
        >
          Flytt
        </span>
        <span
          className="font-medium"
          style={{ color: BRAND.accent }}
        >
          ivo
        </span>
      </span>
      {showTagline ? (
        <span
          className={`mt-1 font-normal tracking-[0.04em] text-slate-500 ${config.tagline}`}
        >
          Flytt och Städ AB
        </span>
      ) : null}
    </span>
  );
}
