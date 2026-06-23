import { motion } from "framer-motion";
import Button from "../ui/Button";

function Hero() {
  function scrollToGenerator() {
    document.getElementById("generator")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-8 text-center">

      <motion.span
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
      >
        🎨 Modern Color Palette Generator
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl text-6xl font-black leading-tight md:text-7xl"
      >
        Create beautiful
        <span className="block bg-linear-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
          Color Palettes
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 max-w-3xl text-xl leading-8 text-slate-400"
      >
        Generate modern color palettes, lock your favorite colors,
        copy HEX codes instantly and export palettes for your next project.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <Button onClick={scrollToGenerator}>
          🎨 Generate Palette
        </Button>
      </motion.div>

    </section>
  );
}

export default Hero;