import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const SectionTitle = ({ badge, title, subtitle }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        {badge}
      </span>

      <h2 className="mt-6 bg-linear-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-400">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionTitle;