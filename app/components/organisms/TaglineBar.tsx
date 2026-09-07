export default function TaglineBar({
  text = "Visit with curiosity. Leave with memories. Give back with respect.",
}: {
  text?: string;
}) {
  return (
    <section className="bg-[#2f4a35] py-6 text-center">
      <p className="font-serif text-lg md:text-xl text-[#c6f24e] italic px-6">
        {text}
      </p>
    </section>
  );
}