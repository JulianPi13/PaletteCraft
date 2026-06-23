import { motion } from "framer-motion";

function FavoritesPanel({
  favorites,
  onLoad,
  onDelete,
}) {
  if (!favorites.length) {
    return (
      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center text-slate-400">
        No favorite palettes yet.
      </div>
    );
  }

  return (
    <section className="mt-14">

      <h2 className="mb-6 text-3xl font-bold">
        ❤️ Favorites
      </h2>

      <div className="space-y-5">

        {favorites.map((palette, index) => (

          <motion.div
            key={index}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-4"
          >

            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => onLoad(palette)}
            >
              {palette.map((color) => (

                <div
                  key={color.id}
                  className="h-10 w-10 rounded-lg"
                  style={{
                    background: color.hex,
                  }}
                />

              ))}
            </div>

            <button
              onClick={() => onDelete(index)}
              className="rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600"
            >
              Delete
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default FavoritesPanel;