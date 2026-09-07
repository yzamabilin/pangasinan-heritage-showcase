import Link from "next/link";

export default function BackButton({ href = "/heritage-sites" }: { href?: string }) {
  return (
    <Link
      href={href}
      aria-label="Go back to destinations"
      className="absolute top-24 left-6 z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-[#2f4a35] text-white hover:bg-[#25392a] transition-colors"
    >
      <span aria-hidden="true">←</span>
    </Link>
  );
}