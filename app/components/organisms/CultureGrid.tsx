import Image from "../atoms/Image";

const items = [
  {
    image: "/images/local-crafts.png",
    label: "Choose Local",
    caption:
      "Support local businesses, food vendors, and artisans. Every purchase helps local communities and keeps traditions alive.",
  },
  {
    image: "/images/heritage-landmarks.png",
    label: "Preserve Heritage",
    caption:
      "Appreciate Pangasinan's historic landmarks and help protect them so future generations can experience their beauty and history.",
  },
  {
    image: "/images/local-food.png",
    label: "Taste Tradition",
    caption:
      "Discover Pangasinan through its local flavors. Try traditional dishes and experience the stories behind the food.",
  },
  {
    image: "/images/church-heritage.png",
    label: "Respect Culture",
    caption:
      "Learn about Pangasinan's customs, beliefs, and traditions, and show respect when visiting cultural and religious places.",
  },
];

export default function CultureGrid() {
  return (
    <section className="px-6 md:px-10 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {items.map((item) => (
          <div
            key={item.caption}
            className="flex flex-col gap-3 rounded-xl shadow-[0_4px_12px_rgba(47,74,53,0.35)] bg-white hover:bg-[#e3f5b0] p-3 transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(47,74,53,0.5)] cursor-pointer"
          >
            <Image
               src={item.image}
               alt={item.caption}
               className="relative w-full aspect-square"
               sizes="(max-width: 768px) 50vw, 25vw"
            />
            <h4 className="font-serif text-center font-semibold text-[#2f4a35]">
              {item.label}
            </h4>
            <p className="text-sm text-gray-700 text-center pt-1">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}