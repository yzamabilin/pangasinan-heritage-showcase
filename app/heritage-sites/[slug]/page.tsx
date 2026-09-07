import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "../../data/destinations";
import DestinationDetailHero from "../../components/organisms/DestinationDetailHero";
import AboutSection from "../../components/organisms/AboutSection";
import ThingsToDo from "../../components/organisms/ThingsToDo";
import TaglineBar from "../../components/organisms/TaglineBar";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main>
      <DestinationDetailHero image={destination.image} title={destination.title} />
      <AboutSection
        title={destination.title}
        location={destination.location}
        paragraphs={destination.paragraphs}
        gallery={destination.gallery}
      />
      <ThingsToDo items={destination.thingsToDo} />
      <TaglineBar text={destination.tagline} />
    </main>
  );
}