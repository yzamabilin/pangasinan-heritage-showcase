import Button from "../atoms/Button";
import Image from "../atoms/Image";

export default function Hero() {
  return (
    <section className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[19/9] min-h-[400px] flex items-center">
      <Image
        src="/images/capitol.png"
        alt="Pangasinan Capitol Building"
        className="absolute inset-0"
        rounded={false}
        priority
      />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-xl px-10 mx-auto text-center">
        <h1 className="text-[clamp(1.1rem,4.5vw,2.50rem)] font-serif text-[#1a1a1a] leading-tight mb-1 flex flex-nowrap justify-center gap-x-2 sm:gap-x-3 whitespace-nowrap">
          <span>See.</span>
          <span>Explore.</span>
          <span>Experience.</span>
        </h1>
        <h2 className="top-24 text-[#2f4a35] text-[clamp(1.75rem,7vw,4rem)] font-serif font-bold opacity-90 drop-shadow-lg">
          PANGASINAN
        </h2>
        <p className="text-black-800 mb-6 max-w-md mx-auto">
          Discover the natural wonders, rich heritage, and unique destinations
          that make Pangasinan a place worth exploring. Experience its beauty,
          history, and hidden gems in one unforgettable journey.
        </p>
      </div>
    </section>
  );
}