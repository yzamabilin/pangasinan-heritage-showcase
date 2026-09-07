import Link from "next/link";

type NavigationItemProps = {
  href: string;
  label: string;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
};

export default function NavigationItem({
  href,
  label,
  onClick,
  variant = "desktop",
}: NavigationItemProps) {
  const styles =
    variant === "desktop"
      ? "text-white hover:opacity-80 transition-opacity"
      : "text-white text-lg hover:opacity-80 transition-opacity";

  return (
    <Link href={href} onClick={onClick} className={styles}>
      {label}
    </Link>
  );
}