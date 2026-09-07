import Typography from "../components/atoms/Typography";
import ColorTokens from "../components/atoms/ColorTokens";

export default function StyleGuidePage() {
  return (
    <main className="pt-32 px-6 md:px-10 max-w-3xl mx-auto pb-20">
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 bg-[#2f4a35] text-white inline-block px-4 py-2 rounded">
          ATOM: Typography
        </h2>
        <div className="p-6 bg-gray-50 rounded-xl">
          <Typography as="h1">Heading 1 — See. Explore. Experience.</Typography>
          <Typography as="h2">Heading 2 — Top Destinations</Typography>
          <Typography as="h3">Heading 3 — Choose Local</Typography>
          <Typography as="p">
            Paragraph — Discover the natural wonders, rich heritage, and unique
            destinations that make Pangasinan a place worth exploring.
          </Typography>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 bg-[#2f4a35] text-white inline-block px-4 py-2 rounded">
          ATOM: Color Tokens
        </h2>
        <div className="p-6 bg-gray-50 rounded-xl">
          <ColorTokens />
        </div>
      </section>
    </main>
  );
}