import { BRAND } from "@/lib/brand";

interface LogoSymbolProps {
  className?: string;
  size?: number;
}

/** Compact “F” mark — matches site favicon. */
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
      <rect width="32" height="32" rx="7" fill={BRAND.faviconBg} />
      <path fill="#ffffff" d="M9 8h13v4H13v3.5h7v4.5H13v8H9V8z" />
    </svg>
  );
}
