import Image from "../atoms/Image";

type Props = {
  title: string;
  location: string;
  paragraphs: string[];
  gallery: string[];
};

export default function AboutSection({ title, location, paragraphs, gallery }: Props) {
  return (
    <section className="px-6 md:px-10 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 className="font-serif text-3xl mb-2">About {title}</h2>
        <p className="flex items-center gap-1 text-gray-600 mb-6">
          <span aria-hidden="true">📍</span> {location}
        </p>
        <div className="flex flex-col gap-4 text-gray-700">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
  <Image
    src={gallery[0]}
    alt={`${title} photo 1`}
    className="relative col-span-2 aspect-[16/9]"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  <Image
    src={gallery[1]}
    alt={`${title} photo 2`}
    className="relative aspect-square"
    sizes="(max-width: 768px) 50vw, 25vw"
  />
  <Image
    src={gallery[2]}
    alt={`${title} photo 3`}
    className="relative aspect-square"
    sizes="(max-width: 768px) 50vw, 25vw"
  />
</div>
    </section>
  );
}