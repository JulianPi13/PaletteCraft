import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="w-full border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎨</span>

          <h1 className="text-2xl font-bold tracking-tight">
            PaletteCraft
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-slate-400">
          <a href="#">Features</a>
          <a href="#">Generator</a>
          <a href="#">Docs</a>
        </div>

        <Button variant="secondary">
          GitHub
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;