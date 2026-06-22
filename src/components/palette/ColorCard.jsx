import toast from "react-hot-toast";

function ColorCard({ color, onToggleLock }) {

  async function copyColor() {

    await navigator.clipboard.writeText(color.hex);

    toast.success(`${color.hex} copied!`);

  }

  return (

    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">

      <div

        className="h-40"

        style={{
          backgroundColor: color.hex,
        }}

      />

      <div className="p-5">

        <h2 className="font-bold text-lg">

          {color.hex}

        </h2>

        <div className="mt-5 flex gap-3">

          <button

            onClick={copyColor}

            className="flex-1 rounded-xl bg-indigo-500 py-2 hover:bg-indigo-600 transition"

          >

            📋 Copy

          </button>

          <button

            onClick={() => onToggleLock(color.id)}

            className={`w-14 rounded-xl transition ${
              color.locked
                ? "bg-red-500"
                : "bg-slate-700 hover:bg-slate-600"
            }`}

          >

            {color.locked ? "🔒" : "🔓"}

          </button>

        </div>

      </div>

    </div>

  );
}

export default ColorCard;