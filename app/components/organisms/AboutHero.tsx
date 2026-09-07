import Image from "../atoms/Image";

export default function AboutHero() {
  return (
    <section className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[19/9] min-h-[400px] flex items-center">
      <Image
        src="/images/about-hero.png"
        alt="Aerial view of a Pangasinan beach"
        className="absolute inset-0"
        rounded={false}
        priority
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 px-10">
        <h1 className="text-white text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-tight mb-4">
          ABOUT
          <br />
          PANGASINAN
        </h1>
        <p className="text-white text-base md:text-lg">
          A Province rich in history, culture
          <br />
          and natural beauty
        </p>
      </div>
    </section>
  );
}