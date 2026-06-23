import randomColor from "randomcolor";

export function generatePalette(previousPalette = []) {
  return Array.from({ length: 5 }, (_, index) => {
    const previous = previousPalette[index];

    if (previous?.locked) {
      return previous;
    }

    return {
      id: crypto.randomUUID(),
      hex: randomColor({
        luminosity: "bright",
      }),
      locked: false,
    };
  });
}