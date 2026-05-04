import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed hover:-translate-y-0.5 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-white/80 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white",
    ghost: "text-on-surface hover:bg-surface-container",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}