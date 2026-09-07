import Image from "../atoms/Image";

export default function QuoteSection() {
  return (
    <section className="relative text-white text-center py-24 px-6">
      <Image
        src="/images/visit.png"
        alt="Forest canopy in Pangasinan"
        className="absolute inset-0"
        rounded={false}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-serif mb-6 tracking-wide">
          WHY VISIT PANGASINAN
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Where every journey becomes a story. Pangasinan brings together
          breathtaking islands, golden beaches, historic landmarks, rich
          traditions, and the warmth of its people. Whether you&apos;re seeking
          adventure, culture, or a peaceful escape, there&apos;s always
          something waiting to be discovered. Come for the views, stay for the
          experience, and leave with memories worth keeping.
        </p>
      </div>
    </section>
  );
}