import React from "react";

interface LogoSymbolProps {
  className?: string;
  color?: string;
  size?: number;
}

export function LogoSymbol({
  className = "",
  color = "#1E5F99",
  size = 40,
}: LogoSymbolProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Premium geometric F symbol with forward motion - Scandinavian minimalism */}
      {/* Main F shape - clean lines, rounded corners */}
      <path
        d="M12 10V30M12 10H24M12 18H20M12 26H22"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Forward motion indicator - elegant arrow suggesting progress */}
      <path
        d="M26 18L30 20L26 22"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Minimal geometric container - subtle frame for structure */}
      <rect
        x="10"
        y="8"
        width="22"
        height="24"
        rx="3.5"
        stroke={color}
        strokeWidth="1.2"
        strokeOpacity="0.12"
        fill="none"
      />
      {/* Premium accent - sophisticated detail */}
      <circle cx="28" cy="12" r="1.8" fill={color} opacity="0.5" />
    </svg>
  );
}

