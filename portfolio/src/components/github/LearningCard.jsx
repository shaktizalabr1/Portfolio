import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const LearningCard = ({ title }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
      "
    >
      <div className="flex items-center gap-3">
        <FiBookOpen className="text-cyan-400 text-xl" />

        <span className="font-medium">
          {title}
        </span>
      </div>
    </motion.div>
  );
};

export default LearningCard;