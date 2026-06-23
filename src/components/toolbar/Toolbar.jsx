import Button from "../ui/Button";
import ExportMenu from "../export/ExportMenu";
import ExportPNG from "../export/ExportPNG";
import ImageUploader from "../image/ImageUploader";

function Toolbar({
  palette,
  onGenerate,
  onImagePalette,
}) {
  return (
    <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
            Palette Generator
          </span>

          <h2 className="mt-3 text-3xl font-bold">
            Your Palette
          </h2>

          <p className="mt-2 text-slate-400">
            Press <kbd className="rounded bg-slate-800 px-2 py-1">Space</kbd> to generate a new palette instantly.
          </p>
        </div>

        <Button onClick={onGenerate}>
          🎲 Generate Palette
        </Button>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        <ExportMenu palette={palette} />

        <ImageUploader
          onPalette={onImagePalette}
        />

        <ExportPNG />

      </div>

    </div>
  );
}

export default Toolbar;