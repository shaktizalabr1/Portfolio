import { motion } from "framer-motion";

const SkillBadge = ({ skill }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-2
        text-sm
        font-medium
        text-gray-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-cyan-500/10
        hover:text-cyan-300
      "
    >
      {skill}
    </motion.div>
  );
};

export default SkillBadge;