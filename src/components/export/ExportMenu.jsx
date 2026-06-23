import toast from "react-hot-toast";
import { downloadFile } from "../../utils/downloadFile";

function ExportMenu({ palette }) {
  function exportJSON() {
    const json = JSON.stringify(
      {
        colors: palette.map((color) => color.hex),
      },
      null,
      2
    );

    downloadFile(json, "palette.json", "application/json");

    toast.success("JSON downloaded!");
  }

  function exportCSS() {
    const css = `:root {
${palette
  .map(
    (color, index) => `  --color-${index + 1}: ${color.hex};`
  )
  .join("\n")}
}`;

    downloadFile(css, "palette.css", "text/css");

    toast.success("CSS downloaded!");
  }

  function exportTailwind() {
    const tailwind = `export const colors = {
${palette
  .map(
    (color, index) =>
      `  color${index + 1}: "${color.hex}",`
  )
  .join("\n")}
};`;

    downloadFile(
      tailwind,
      "tailwind-colors.js",
      "text/javascript"
    );

    toast.success("Tailwind file downloaded!");
  }

  return (
    <div className="flex flex-wrap gap-3">

      <button
        onClick={exportCSS}
        className="rounded-xl bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
      >
        📄 CSS
      </button>

      <button
        onClick={exportJSON}
        className="rounded-xl bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
      >
        📦 JSON
      </button>

      <button
        onClick={exportTailwind}
        className="rounded-xl bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
      >
        🎨 Tailwind
      </button>

    </div>
  );
}

export default ExportMenu;