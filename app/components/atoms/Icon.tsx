type IconProps = {
  emoji: string;
  label: string;
  size?: "sm" | "md" | "lg";
};

export default function Icon({ emoji, label, size = "md" }: IconProps) {
  const sizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <span className={sizes[size]} role="img" aria-label={label}>
      {emoji}
    </span>
  );
}