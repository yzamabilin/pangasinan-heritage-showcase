import { ThingToDo } from "../../data/destinations";
import Icon from "../atoms/Icon";

export default function ThingsToDo({ items }: { items: ThingToDo[] }) {
  return (
    <section className="px-6 md:px-10 pb-16 pt-6">
      <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
        THINGS TO DO
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-[#a9c68f] rounded-xl p-6 pt-12 relative text-center"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#2f4a35] flex items-center justify-center">
              <Icon emoji={item.emoji || "📍"} label={item.title} size="md" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-800">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}