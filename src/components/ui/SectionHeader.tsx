interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {badge && (
        <span
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            light
              ? "bg-white/10 text-white/90 border border-white/20"
              : "bg-primary-50 text-primary-700 border border-primary-100"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base lg:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
