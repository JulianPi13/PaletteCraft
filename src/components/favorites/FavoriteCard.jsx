import { motion } from "framer-motion";

function FavoriteCard({
  palette,
  onLoad,
  onDelete,
}) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4"
    >
      <div
        onClick={() => onLoad(palette)}
        className="flex cursor-pointer gap-2"
      >
        {palette.map((color) => (
          <div
            key={color.id}
            className="h-10 w-10 rounded-lg"
            style={{
              backgroundColor: color.hex,
            }}
          />
        ))}
      </div>

      <button
        onClick={onDelete}
        className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-xl transition hover:scale-105 hover:bg-red-600"
      >
        🗑️
    </button>
    </motion.div>
  );
}

export default FavoriteCard;