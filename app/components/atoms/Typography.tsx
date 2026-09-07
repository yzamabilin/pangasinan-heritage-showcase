type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
  className?: string;
};

export default function Typography({ as = "p", children, className = "" }: TypographyProps) {
  const baseStyles: Record<string, string> = {
    h1: "font-serif text-[clamp(1.75rem,5vw,3.25rem)] leading-tight",
    h2: "font-serif text-[clamp(1.25rem,3.5vw,1.875rem)] leading-snug",
    h3: "font-serif text-lg font-semibold",
    p: "font-sans text-base text-gray-700 leading-relaxed",
  };

  const Tag = as;

  return <Tag className={`${baseStyles[as]} ${className}`}>{children}</Tag>;
}