import { BRAND } from "@/lib/brand";

interface LogoSymbolProps {
  className?: string;
  size?: number;
}

/** Minimal “F” mark for favicons and compact brand use only. */
export function LogoSymbol({
  className = "",
  size = 32,
}: LogoSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="#ffffff" />
      <path
        d="M10 9H20M10 9V23M10 16H17"
        stroke={BRAND.navy}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 9V13"
        stroke={BRAND.accent}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
