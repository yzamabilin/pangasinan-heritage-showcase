type ImageDividerProps = {
  image: string;
  alt: string;
  height?: string;
};

export default function ImageDivider({ image, alt, height = "h-24" }: ImageDividerProps) {
  return (
    <div
      className={`w-full ${height} bg-cover bg-center`}
      style={{ backgroundImage: `url('${image}')` }}
      role="img"
      aria-label={alt}
    />
  );
}