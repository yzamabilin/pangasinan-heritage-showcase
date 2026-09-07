import Image from "../atoms/Image";

export default function CulturalAwareness() {
  return (
    <section className="relative py-16 px-6 md:px-10">
      <Image
        src="/images/forest.png"
        alt="Forest canopy in Pangasinan"
        className="absolute inset-0"
        rounded={false}
      />
      <div className="absolute inset-0 bg-black/50" />

    <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl mx-auto text-center">
  <h2 className="font-serif text-3xl md:text-4xl text-[#c6f24e] leading-tight">
    CULTURAL AWARENESS
  </h2>
  <p className="text-white text-sm md:text-base">
    Discover Pangasinan with respect. Learn from its people, appreciate
    its traditions, and help protect the places that make the province
    special.
  </p>
</div>
    </section> 
  );
}