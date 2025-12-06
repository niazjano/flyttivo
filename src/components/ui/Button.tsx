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
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all duration-200";

  const variantStyles = {
    primary:
      "bg-[#1E5F99] text-white shadow-[0_8px_30px_rgba(30,95,153,0.22)] hover:bg-[#174A77] hover:scale-105",
    secondary:
      "border border-white/80 bg-transparent text-white hover:bg-white/10",
    ghost:
      "border border-slate-300 bg-white text-slate-700 hover:border-[#1E5F99] hover:text-[#1E5F99]",
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

