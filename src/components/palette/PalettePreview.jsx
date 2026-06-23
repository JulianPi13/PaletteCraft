import { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import Toolbar from "../toolbar/Toolbar";
import { generatePalette } from "../../utils/generatePalette";

function PalettePreview() {
  const [palette, setPalette] = useState(generatePalette());

  function updatePalette(newPalette) {
    setPalette(newPalette);
  }

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

  useEffect(() => {
    function handleKeyDown(event) {
      const tag = event.target.tagName;

      if (
        event.code === "Space" &&
        tag !== "INPUT" &&
        tag !== "TEXTAREA"
      ) {
        event.preventDefault();
        generateNewPalette();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="mx-auto mt-24 max-w-7xl px-8">

      <Toolbar
        palette={palette}
        onGenerate={generateNewPalette}
        onImagePalette={updatePalette}
      />

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