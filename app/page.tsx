import Hero from "./components/organisms/Hero";
import HeritageGrid from "./components/organisms/HeritageGrid";
import QuoteSection from "./components/organisms/QuoteSection";
import Button from "./components/atoms/Button";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeritageGrid />
      <div className="flex justify-center pb-16 px-10">
        <Button label="Explore Destinations" href="/heritage-sites" />
      </div>
      <QuoteSection />
    </main>
  );
}