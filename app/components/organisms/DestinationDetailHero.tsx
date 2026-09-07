import BackButton from "../atoms/BackButton";
import Image from "../atoms/Image";

type Props = {
  image: string;
  title: string;
};

export default function DestinationDetailHero({ image, title }: Props) {
  return (
    <section className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[19/9] min-h-[400px] flex items-end">
      <Image src={image} alt={title} className="absolute inset-0" rounded={false} priority />
      <BackButton />
      <h1
        className="relative z-10 px-8 pb-8 text-white text-[clamp(1.5rem,6vw,4rem)] font-extrabold uppercase text-right w-full"
        style={{ textShadow: "0 4px 20px rgba(47, 74, 53, 0.9), 0 2px 8px rgba(47, 74, 53, 0.7)" }}
      >
        {title}
      </h1>
    </section>
  );
}