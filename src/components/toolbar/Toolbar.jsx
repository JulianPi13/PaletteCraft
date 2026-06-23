import Button from "../ui/Button";
import ExportMenu from "../export/ExportMenu";
import ImageUploader from "../image/ImageUploader";

function Toolbar({ palette, onGenerate, onImagePalette }) {
  return (
    <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-3xl font-bold">
            Your Palette
          </h2>

          <p className="mt-2 text-slate-400">
            Press{" "}
            <kbd className="rounded bg-slate-800 px-2 py-1">
              Space
            </kbd>{" "}
            to generate a new palette.
          </p>
        </div>

        <Button onClick={onGenerate}>
          🎲 Generate Palette
        </Button>

      </div>

      <div className="flex flex-wrap items-center gap-4">

        <ExportMenu palette={palette} />

        <ImageUploader
          onPalette={onImagePalette}
        />

      </div>

    </div>
  );
}

export default Toolbar;