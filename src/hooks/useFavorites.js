import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("palettecraft-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "palettecraft-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function savePalette(palette) {
    const exists = favorites.some(
      (fav) =>
        JSON.stringify(fav.map((c) => c.hex)) ===
        JSON.stringify(palette.map((c) => c.hex))
    );

    if (exists) {
      return false;
    }

    setFavorites((prev) => [...prev, palette]);
    return true;
  }

  function removePalette(index) {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  }

  function clearFavorites() {
    setFavorites([]);
  }

  return {
    favorites,
    savePalette,
    removePalette,
    clearFavorites,
  };
}