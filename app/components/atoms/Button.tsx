import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({ label, href, onClick }: ButtonProps) {
  const classes =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 " +
    "border-[#8fa88f] bg-[#dce6dc] text-[#1f2e1f] font-medium " +
    "hover:bg-[#c9d8c9] transition-colors";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {label}
      <span aria-hidden="true">→</span>
    </button>
  );
}