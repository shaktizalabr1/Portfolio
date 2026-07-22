import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const HobbyCard = ({ hobby }) => {
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
        <FiHeart className="text-pink-400" />
        {hobby}
      </div>
    </motion.div>
  );
};

export default HobbyCard;