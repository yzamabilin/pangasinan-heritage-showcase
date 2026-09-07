export const colors = {
  primaryGreen: "#2f4a35",
  lightGreen: "#dce6dc",
  limeAccent: "#c6f24e",
  softLime: "#e3f5b0",
  sageGreen: "#a9c68f",
  textDark: "#1a1a1a",
  textGray: "#4b5563",
  white: "#ffffff",
};

export default function ColorTokens() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {Object.entries(colors).map(([name, hex]) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <div
            className="w-16 h-16 rounded-lg border border-gray-300"
            style={{ backgroundColor: hex }}
          />
          <p className="text-xs text-gray-700 text-center">
            {name}
            <br />
            {hex}
          </p>
        </div>
      ))}
    </div>
  );
}