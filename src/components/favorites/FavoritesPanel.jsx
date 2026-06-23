import FavoriteCard from "./FavoriteCard";

function FavoritesPanel({
  favorites,
  onLoad,
  onDelete,
}) {
  return (
    <section className="mt-16">

      <h2 className="mb-6 text-3xl font-bold">
        ❤️ Favorite Palettes
      </h2>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-500">
          No favorite palettes yet.
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((palette, index) => (
            <FavoriteCard
              key={index}
              palette={palette}
              onLoad={onLoad}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default FavoritesPanel;