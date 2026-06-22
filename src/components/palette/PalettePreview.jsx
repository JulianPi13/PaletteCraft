import ColorCard from "./ColorCard";

const colors = [
  "#4F46E5",
  "#06B6D4",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

function PalettePreview() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-8">

      <h2 className="mb-10 text-center text-3xl font-bold">
        Preview Palette
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

        {colors.map((color) => (
          <ColorCard
            key={color}
            color={color}
          />
        ))}

      </div>

    </section>
  );
}

export default PalettePreview;