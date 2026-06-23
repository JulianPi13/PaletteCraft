import { motion } from "framer-motion";
import toast from "react-hot-toast";

function hexToRgb(hex) {
  const clean = hex.replace("#", "");

  const bigint = parseInt(clean, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}

function ColorCard({ color, onToggleLock }) {
  async function copyColor() {
    try {
      await navigator.clipboard.writeText(color.hex);
      toast.success(`${color.hex} copied!`);
    } catch {
      toast.error("Failed to copy color.");
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg transition-all hover:border-indigo-500 hover:shadow-indigo-500/20"
    >
      <motion.div
        layout
        transition={{ duration: 0.4 }}
        className="h-44"
        style={{
          backgroundColor: color.hex,
        }}
      />

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-wide">
            {color.hex.toUpperCase()}
          </h2>

          <button
            onClick={() => onToggleLock(color.id)}
            className="rounded-lg bg-slate-800 p-2 transition hover:bg-slate-700 hover:scale-110"
          >
            {color.locked ? "🔒" : "🔓"}
          </button>
        </div>

        <div className="space-y-2 text-sm text-slate-400">
          <p>
            <span className="font-semibold text-slate-300">
              RGB:
            </span>{" "}
            {hexToRgb(color.hex)}
          </p>

          <p>
            <span className="font-semibold text-slate-300">
              HEX:
            </span>{" "}
            {color.hex.toUpperCase()}
          </p>
        </div>

        <button
          onClick={copyColor}
          className="w-full rounded-xl bg-indigo-500 py-3 font-semibold transition-all hover:bg-indigo-600 active:scale-95"
        >
          📋 Copy HEX
        </button>
      </div>
    </motion.div>
  );
}

export default ColorCard;