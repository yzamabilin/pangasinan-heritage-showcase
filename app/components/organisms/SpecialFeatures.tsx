import Icon from "../atoms/Icon";

const features = [
  {
    emoji: "🌴",
    title: "Nature",
    description:
      "Discover beautiful islands, beaches, waterfalls, mountains, and natural springs that offer unforgettable views and relaxing escapes.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Culture & People",
    description:
      "Meet welcoming communities and experience local traditions, celebrations, food, and everyday life that make Pangasinan unique.",
  },
  {
    emoji: "⛪",
    title: "Heritage",
    description:
      "Explore historic churches, landmarks, traditions, and stories that reflect the province's rich and colorful past.",
  },
];

export default function SpecialFeatures() {
  return (
    <section className="py-16 px-6 md:px-10">
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
        What makes Pangasinan Special?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#a9c68f] rounded-xl p-6 pt-12 relative text-center"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#2f4a35] flex items-center justify-center">
              <Icon emoji={f.emoji} label={f.title} size="md" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-gray-800">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}