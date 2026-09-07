import Image from "../atoms/Image";

export default function PlaceWorthDiscovering() {
  return (
    <section className="relative py-16 px-6 md:px-10">
      <Image
        src="/images/forest.png"
        alt="Forest canopy in Pangasinan"
        className="absolute inset-0"
        rounded={false}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/pangasinan-map.png"
          alt="Map of Pangasinan province"
          className="relative w-full h-64 md:h-80"
          fit="contain"
        />
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#c6f24e] mb-4">
            A Place Worth Discovering
          </h2>
          <p className="text-white leading-relaxed">
            Pangasinan is a province in the western part of Luzon known for
            its beautiful landscapes, meaningful heritage, and welcoming
            communities. From its breathtaking islands and beaches to its
            historic churches and local traditions, Pangasinan offers
            different experiences for every kind of traveler. It is a place
            where the beauty of nature meets stories, culture, and the warmth
            of its people.
          </p>
        </div>
      </div>
    </section>
  );
}