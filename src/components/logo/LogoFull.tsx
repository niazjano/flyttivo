import { LogoWordmark } from "./LogoWordmark";

interface LogoFullProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function LogoFull({
  className = "",
  size = "md",
  showTagline = true,
}: LogoFullProps) {
  return (
    <LogoWordmark
      className={className}
      size={size}
      showTagline={showTagline}
    />
  );
}
