import { Vibrant } from "node-vibrant/browser";

export async function extractColors(file) {
  const imageUrl = URL.createObjectURL(file);

  try {
    const palette = await Vibrant.from(imageUrl).getPalette();

    URL.revokeObjectURL(imageUrl);

    const colors = Object.values(palette)
      .filter((swatch) => swatch)
      .slice(0, 5)
      .map((swatch) => ({
        id: crypto.randomUUID(),
        hex: swatch.hex,
        locked: false,
      }));

    return colors;
  } catch (error) {
    URL.revokeObjectURL(imageUrl);
    throw error;
  }
}