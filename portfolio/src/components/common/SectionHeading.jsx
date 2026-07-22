import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="mb-20 text-center">

      <motion.span
        whileHover={{
          scale: 1.05,
        }}
        className="
          inline-block
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-5
          py-2
          text-cyan-300
        "
      >
        {badge}
      </motion.span>

      <h2
        className="
          mt-6
          bg-linear-to-r
          from-white
          via-indigo-300
          to-cyan-300
          bg-clip-text
          text-5xl
          font-black
          text-transparent
        "
      >
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
        {description}
      </p>

    </div>
  );
};

export default SectionHeading;