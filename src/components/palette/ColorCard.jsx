function ColorCard({ color }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20">

      <div
        className="h-40 w-full"
        style={{ backgroundColor: color }}
      />

      <div className="p-5">

        <h3 className="font-bold text-lg">
          {color}
        </h3>

        <button
          className="mt-4 w-full rounded-lg bg-indigo-500 py-2 font-semibold transition hover:bg-indigo-600"
        >
          Copy
        </button>

      </div>

    </div>
  );
}

export default ColorCard;