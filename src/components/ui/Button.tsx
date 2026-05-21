import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 ease-out active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-[#163A5F] text-white shadow-[0_8px_30px_rgba(22,58,95,0.2)] hover:bg-[#0F2D4A] hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(22,58,95,0.26)]",
    secondary:
      "border border-white/80 bg-transparent text-white hover:bg-white/10 hover:shadow-[0_10px_24px_rgba(15,23,42,0.18)] hover:scale-[1.02]",
    ghost:
      "border border-slate-300 bg-white text-slate-700 hover:border-[#163A5F] hover:text-[#163A5F] hover:shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:scale-[1.02]",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}



