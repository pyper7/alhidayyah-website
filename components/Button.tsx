import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "accent";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = "px-8 py-4 rounded-xl font-semibold text-base transition-all duration-500 inline-flex items-center justify-center text-center relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg",
    outline: "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white hover:shadow-xl hover:scale-105 active:scale-95 backdrop-blur-sm",
    accent: "bg-gradient-to-r from-accent to-accent-hover text-white hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></span>
    </button>
  );
}

