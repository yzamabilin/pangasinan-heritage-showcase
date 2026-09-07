export type ThingToDo = {
  emoji?: string;
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  title: string;
  location: string;
  description: string;
  image: string;
  paragraphs: string[];
  gallery: string[];
  thingsToDo: ThingToDo[];
  tagline: string;
};

export const destinations: Destination[] = [
  {
    slug: "manaoag-church",
    title: "Manaoag Church",
    location: "Manaoag, Pangasinan",
    description:
      "Experience the beauty, faith, and heritage of Manaoag at one of Pangasinan's most treasured landmarks.",
    image: "/images/church.png",
    paragraphs: [
      "The Minor Basilica of the Most Holy Rosary of Manaoag, commonly known as Manaoag Church, is one of the most visited religious landmarks in Pangasinan. It is widely known for the revered image of Our Lady of the Most Holy Rosary of Manaoag, which draws pilgrims and visitors from different places.",
      "Visitors can admire the basilica's architecture, spend a quiet moment in prayer, and explore the surrounding area. Beyond its religious importance, Manaoag Church offers travelers an opportunity to experience an important part of Pangasinan's history, faith, and culture.",
    ],
    gallery: [
      "/images/manaoag-1.png",
      "/images/manaoag-2.png",
      "/images/manaoag-3.png",
    ],
    thingsToDo: [
  {
    emoji: "🙏",
    title: "Experience the Basilica",
    description:
      "Discover the peaceful atmosphere and spiritual significance of this beloved landmark.",
  },
  {
    emoji: "🕯️",
    title: "Pause & Reflect",
    description:
      "Take a quiet moment for prayer, reflection, or simply to enjoy the peaceful surroundings.",
  },
  {
    emoji: "⛪",
    title: "Admire the Architecture",
    description:
      "Take a closer look at the beautiful details that make the basilica special.",
  },
],
    tagline: "Come with an open heart. Leave with a deeper connection to Pangasinan.",
  },
  {
    slug: "hundred-islands",
    title: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    description:
      "Discover a breathtaking collection of islands surrounded by turquoise waters, where every view offers something new to explore.",
    image: "/images/Island.png",
    paragraphs: [
      "Hundred Islands National Park is one of Pangasinan's most popular destinations, known for its collection of islands and islets scattered across the Lingayen Gulf. Each area offers its own scenic views, natural formations, and places to explore.",
      "Visitors can spend the day island hopping, swimming in the clear waters, taking photos, or simply enjoying the peaceful coastal atmosphere. It is a great destination for travelers who want to experience the natural beauty of Pangasinan.",
    ],
    gallery: [
      "/images/hundred-islands-1.png",
      "/images/hundred-islands-2.png",
      "/images/hundred-islands-3.png",
    ],
    thingsToDo: [
  {
    emoji: "🛥️",
    title: "Island Hop",
    description:
      "Cruise across the waters and discover the unique beauty of the islands.",
  },
  {
    emoji: "🤿",
    title: "Explore Underwater",
    description:
      "Get closer to marine life and discover what lies beneath the waves.",
  },
  {
    emoji: "🛶",
    title: "Paddle Around",
    description:
      "Enjoy a relaxing kayaking adventure surrounded by beautiful scenery.",
  },
],
    tagline: "Explore the islands. Make memories. Take the adventure home.",
  },
  {
    slug: "bolinao-lighthouse",
    title: "Cape Bolinao Lighthouse",
    location: "Patar, Bolinao, Pangasinan",
    description:
      "Step into a piece of Bolinao's history and enjoy sweeping views of the sea from this iconic coastal landmark.",
    image: "/images/tower.png",
    paragraphs: [
      "Standing on a scenic hill in Bolinao, the Cape Bolinao Lighthouse is a historic landmark overlooking the coast. Its location gives visitors a beautiful view of the surrounding greenery and the West Philippine Sea.",
      "The lighthouse is a great stop for travelers who enjoy history, architecture, photography, and scenic views. After visiting the landmark, tourists can continue exploring the nearby coastal attractions and beaches of Bolinao.",
    ],
    gallery: [
      "/images/bolinao-1.png",
      "/images/bolinao-2.png",
      "/images/bolinao-3.png",
    ],
    thingsToDo: [
  {
    emoji: "🗼",
    title: "Discover Its Story",
    description:
      "Learn more about the lighthouse and its place in Bolinao's maritime history.",
  },
  {
    emoji: "🌿",
    title: "Enjoy the Scenery",
    description:
      "Slow down, breathe in the fresh air, and appreciate the peaceful surroundings.",
  },
  {
    emoji: "📸",
    title: "Capture the Moment",
    description:
      "Bring your camera—the lighthouse and its surroundings make a great backdrop.",
  },
],
    tagline: "Follow the view. Discover the history. Make your Bolinao story.",
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}