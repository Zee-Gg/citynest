interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  const textColor = light ? "text-white" : "text-gray-900";
  const subtitleColor = light ? "text-white/70" : "text-gray-600";
  const alignClass = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-8 sm:mb-16`}>
      <h2
        className={`font-sans font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight mb-2 sm:mb-4 ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl text-sm sm:text-base md:text-lg ${subtitleColor} mb-4 sm:mb-6`}>{subtitle}</p>
      )}
      <div className="h-1.5 w-20 bg-[#fdae3c] rounded-full" />
    </div>
  );
}