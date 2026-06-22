import { motion } from "framer-motion";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-24 pb-24 text-center">

      <motion.h1

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: .7 }}

        className="text-6xl font-black leading-tight"

      >

        Create Beautiful

        <span className="text-indigo-400">

          {" "}Color Palettes

        </span>

      </motion.h1>

      <motion.p

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: .25 }}

        className="text-slate-400 text-xl mt-8 max-w-2xl mx-auto"

      >

        Generate, customize and export stunning color palettes
        for your next design project.

      </motion.p>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: .5 }}

        className="flex justify-center gap-5 mt-12"

      >

        <Button>

          Generate Palette

        </Button>

        <Button variant="secondary">

          Explore

        </Button>

      </motion.div>

    </section>
  );
}

export default Hero;