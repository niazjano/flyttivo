import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, href, className = "", onClick }: CardProps) {
  const baseStyles =
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md";

  const combinedClassName = `${baseStyles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
}



