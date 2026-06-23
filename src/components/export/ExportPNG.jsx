import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";

function ExportPNG() {

  async function downloadPalette() {
    const element = document.getElementById("palette-grid");

    if (!element) return;

    try {
      const dataUrl = await toPng(element, {
        pixelRatio: 2,
        backgroundColor: "#020617",
      });

      saveAs(dataUrl, "palettecraft-palette.png");

      toast.success("PNG downloaded!");
    } catch (err) {
      console.error(err);
      toast.error("Couldn't export PNG.");
    }
  }

  return (
    <button
      onClick={downloadPalette}
      className="rounded-xl bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
    >
      🖼 Export PNG
    </button>
  );
}

export default ExportPNG;