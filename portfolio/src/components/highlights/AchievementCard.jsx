import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const AchievementCard = ({ title }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl
      "
    >
      <div className="rounded-xl bg-cyan-500/20 p-3 text-cyan-400">
        <FiAward />
      </div>

      <span>{title}</span>
    </motion.div>
  );
};

export default AchievementCard;