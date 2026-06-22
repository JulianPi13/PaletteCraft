import { useState } from "react";
import Button from "../ui/Button";
import ColorCard from "./ColorCard";
import { generatePalette } from "../../utils/generatePalette";

function PalettePreview() {

  const [palette, setPalette] = useState(generatePalette());

  function generateNewPalette() {
    setPalette((current) => generatePalette(current));
  }

  function toggleLock(id) {
    setPalette((current) =>
      current.map((color) =>
        color.id === id
          ? { ...color, locked: !color.locked }
          : color
      )
    );
  }

  return (
    <section className="mx-auto mt-24 max-w-7xl px-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Your Palette
        </h2>

        <Button onClick={generateNewPalette}>
          🎲 Generate
        </Button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

        {palette.map((color) => (

          <ColorCard
            key={color.id}
            color={color}
            onToggleLock={toggleLock}
          />

        ))}

      </div>

    </section>
  );
}

export default PalettePreview;