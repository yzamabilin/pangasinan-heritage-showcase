import DestinationsHero from "../components/organisms/DestinationsHero";
import DestinationList from "../components/organisms/DestinationList";
import CulturalAwareness from "../components/organisms/CulturalAwareness";
import CultureGrid from "../components/organisms/CultureGrid";
import TaglineBar from "../components/organisms/TaglineBar";

export default function HeritageSitesPage() {
  return (
    <main>
      <DestinationsHero />
      <DestinationList />
      <CulturalAwareness />
      <CultureGrid />
      <TaglineBar />
    </main>
  );
}