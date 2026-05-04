interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}