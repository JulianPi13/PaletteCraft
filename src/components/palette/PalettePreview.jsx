import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Toolbar from "../toolbar/Toolbar";
import ColorCard from "./ColorCard";
import FavoritesPanel from "../favorites/FavoritesPanel";

import { generatePalette } from "../../utils/generatePalette";
import { palettePresets } from "../../utils/palettePresets";
import { useFavorites } from "../../hooks/useFavorites";

function PalettePreview() {
  const [palette, setPalette] = useState(generatePalette());

  const {
    favorites,
    savePalette,
    removePalette,
  } = useFavorites();

  function updatePalette(newPalette) {
    setPalette(newPalette);
  }

  function loadPalette(savedPalette) {
    setPalette(savedPalette);
  }

  function generateNewPalette() {
    setPalette((current) => generatePalette(current));
  }

  function toggleLock(id) {
    setPalette((current) =>
      current.map((color) =>
        color.id === id
          ? {
              ...color,
              locked: !color.locked,
            }
          : color
      )
    );
  }

  function loadPreset(name) {
    const colors = palettePresets[name];

    if (!colors) return;

    setPalette(
      colors.map((hex, index) => ({
        id: index + 1,
        hex,
        locked: false,
      }))
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
    <section
      id="generator"
      className="mx-auto mt-24 max-w-7xl px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Inspiration */}

        <div className="mb-8">

          <h2 className="mb-4 text-xl font-bold">
            ✨ Inspiration
          </h2>

          <div className="flex flex-wrap gap-3">

            {Object.keys(palettePresets).map((preset) => (
              <button
                key={preset}
                onClick={() => loadPreset(preset)}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium transition hover:border-indigo-500 hover:bg-slate-800"
              >
                {preset}
              </button>
            ))}

          </div>

        </div>

        {/* Toolbar */}

        <Toolbar
          palette={palette}
          onGenerate={generateNewPalette}
          onImagePalette={updatePalette}
          onSavePalette={() => savePalette(palette)}
        />

        {/* Palette */}

        <div
          id="palette-grid"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {palette.map((color) => (
            <ColorCard
              key={color.id}
              color={color}
              onToggleLock={toggleLock}
            />
          ))}
        </div>

        {/* Favorites */}

        <FavoritesPanel
          favorites={favorites}
          onLoad={loadPalette}
          onDelete={removePalette}
        />
      </motion.div>
    </section>
  );
}

export default PalettePreview;