import { motion } from "framer-motion";

function Button({
  children,
  onClick,
  variant = "primary",
}) {

  const styles = {
    primary:
      "bg-indigo-500 hover:bg-indigo-600 text-white",

    secondary:
      "bg-slate-800 border border-slate-700 hover:border-indigo-500 text-white",
  };

  return (
    <motion.button

      whileHover={{ scale: 1.03 }}

      whileTap={{ scale: 0.95 }}

      onClick={onClick}

      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${styles[variant]}`}

    >
      {children}
    </motion.button>
  );
}

export default Button;