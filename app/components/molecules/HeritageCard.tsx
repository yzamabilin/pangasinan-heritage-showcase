import Button from "../atoms/Button";
import Image from "../atoms/Image";

type HeritageCardProps = {
  image: string;
  title: string;
  location?: string;
  description?: string;
  href?: string;
  variant?: "grid" | "list" | "card";
  size?: "normal" | "large";
};

export default function HeritageCard({
  image,
  title,
  location,
  description,
  href,
  variant = "grid",
  size = "normal",
}: HeritageCardProps) {
  if (variant === "card") {
    return (
      <div
        className={`flex flex-col bg-white rounded-2xl overflow-hidden border-2 border-[#2f4a35] shadow-md p-3 ${
          size === "large" ? "md:mt-0 md:-mb-6" : ""
        }`}
      >
        <Image
          src={image}
          alt={title}
          className={`relative w-full ${size === "large" ? "aspect-[4/3]" : "aspect-[16/10]"}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="pt-4 flex flex-col gap-2">
          <h3 className="font-serif text-lg leading-snug">{title}</h3>
          {location && (
            <p className="flex items-center gap-1 text-sm text-gray-600">
              <span aria-hidden="true">📍</span> {location}
            </p>
          )}
          {description && <p className="text-sm text-gray-700">{description}</p>}
          <div className="pt-2 flex justify-end">
            <Button label="View More Details" href={href} />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border-2 border-[#2f4a35] shadow-md">
        <Image
          src={image}
          alt={title}
          className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto md:h-auto shrink-0"
          rounded={false}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="flex-1 p-6 flex flex-col justify-center gap-2">
          <h3 className="font-serif text-2xl">{title}</h3>
          {location && (
            <p className="flex items-center gap-1 text-sm text-gray-600">
              <span aria-hidden="true">📍</span> {location}
            </p>
          )}
          {description && <p className="text-gray-700">{description}</p>}
          <div className="mt-2">
            <Button label="View More Details" href={href} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl shadow-[0_6px_16px_rgba(47,74,53,0.4)] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_24px_rgba(47,74,53,0.6)] cursor-pointer group">
      <div className="w-full aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 z-10" />
        <h3 className="absolute inset-0 flex items-center justify-center text-center font-serif text-xl text-white px-4 drop-shadow-lg z-20">
          {title}
        </h3>
      </div>
    </div>
  );
}