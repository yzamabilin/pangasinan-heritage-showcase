import HeritageCard from "../molecules/HeritageCard";

const destinations = [
  {
    image: "/images/Island.png",
    title: "Hundred Islands National Park",
  },
  {
    image: "/images/tower.png",
    title: "Cape Bolinao Lighthouse",
  },
  {
    image: "/images/church.png",
    title: "Our Lady of the Most Holy Rosary of Manaoag",
  },
];

export default function HeritageGrid() {
  return (
    <section className="px-10 py-10 ">
      <h2 className="text-[clamp(1.25rem,3.5vw,1.875rem)] font-serif text-[#2f4a35] text-center mb-10">
        Top Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 text-[#2f4a35] gap-10 max-w-6xl mx-auto text-center">
        {destinations.map((site) => (
          <HeritageCard key={site.title} {...site} />
        ))}
      </div>
    </section>
  );
}