import Image from "../atoms/Image";

export default function DestinationsHero() {
  return (
    <section className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[19/9] min-h-[400px] flex items-center">
      <Image
        src="/images/forest.png"
        alt="Forest canopy in Pangasinan"
        className="absolute inset-0"
        rounded={false}
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 px-10 max-w-2xl">
        <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold leading-tight mb-4">
          <span className="text-white">DISCOVER</span>
          <br />
          <span className="text-[#c6f24e]">PANGASINAN</span>
          <br />
          <span className="text-[#8bc63e]">DESTINATIONS</span>
        </h1>
        <p className="text-white text-sm md:text-base">
          Promoting cultural awareness and tourism for Pangasinan&apos;s most
          iconic heritage sites, from historic landmarks to natural wonders.
        </p>
      </div>
    </section>
  );
}