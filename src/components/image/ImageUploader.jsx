import { ImagePlus } from "lucide-react";
import toast from "react-hot-toast";
import { extractColors } from "../../services/colorExtractor";

function ImageUploader({ onPalette }) {
  async function handleImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const palette = await extractColors(file);

      if (!palette.length) {
        toast.error("Couldn't detect colors.");
        return;
      }

      onPalette(palette);

      toast.success("Palette extracted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error extracting colors.");
    }
  }

  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 transition-all hover:border-indigo-500 hover:bg-slate-700">

      <input
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />

      <ImagePlus size={20} />

      <span className="font-medium">
        Upload Image
      </span>

    </label>
  );
}

export default ImageUploader;