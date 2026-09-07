type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({ label, href, onClick }: ButtonProps) {
  const classes =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full  bg-[#2E472C] text-white font-medium hover:bg-[#c9d8c9] transition-colors";

  if (href) {
    return (
      <a href={href} className={classes}>
        {label}
        <span aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {label}
      <span aria-hidden="true">→</span>
    </button>
  );
}