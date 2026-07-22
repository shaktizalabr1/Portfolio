import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";

const LanguageCard = ({ language }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-5
        py-3
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">
        <FiGlobe className="text-cyan-400" />
        {language}
      </div>
    </motion.div>
  );
};

export default LanguageCard;