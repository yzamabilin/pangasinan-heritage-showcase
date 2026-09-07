import NextImage from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  rounded?: boolean;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
};

export default function Image({
  src, alt, className = "", imgClassName = "",
  rounded = true, priority = false, fit = "cover",
  sizes = "100vw",
}: ImageProps) {
  const fullSrc = src.startsWith("http") ? src : `${BASE_PATH}${src}`;

  return (
    <div className={`overflow-hidden ${rounded ? "rounded-xl" : ""} ${className}`}>
      <NextImage
        src={fullSrc}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes={sizes}
        className={`${fit === "cover" ? "object-cover" : "object-contain"} ${imgClassName}`}
      />
    </div>
  );
}