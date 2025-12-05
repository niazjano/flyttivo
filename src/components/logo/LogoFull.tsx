import React from "react";
import { LogoSymbol } from "./LogoSymbol";

interface LogoFullProps {
  className?: string;
  symbolColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function LogoFull({
  className = "",
  symbolColor,
  textColor,
  size = "md",
  variant = "light",
}: LogoFullProps) {
  // Default colors based on variant
  const defaultSymbolColor = symbolColor || (variant === "light" ? "#1E5F99" : "#1E5F99");
  const defaultTextColor = textColor || (variant === "light" ? "#0E3A5D" : "#FFFFFF");

  // Size configurations
  const sizeConfig = {
    sm: { symbol: 24, text: "text-base", gap: "gap-2" },
    md: { symbol: 32, text: "text-lg", gap: "gap-2.5" },
    lg: { symbol: 40, text: "text-xl", gap: "gap-3" },
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex items-center ${config.gap} ${className}`}>
      <LogoSymbol color={defaultSymbolColor} size={config.symbol} />
      <span
        className={`${config.text} font-semibold tracking-tight`}
        style={{ color: defaultTextColor }}
      >
        Flyttivo
      </span>
    </div>
  );
}

