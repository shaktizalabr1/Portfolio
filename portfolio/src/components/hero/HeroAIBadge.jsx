import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const HeroAIBadge = () => {
  return (
    <motion.div
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="
        absolute
        -right-10
        top-12
        hidden
        lg:flex
        items-center
        gap-3
        rounded-full
        border
        border-cyan-500/20
        bg-cyan-500/10
        px-5
        py-3
        backdrop-blur-xl
      "
    >
      <FaRobot className="text-cyan-400"/>

      <span>
        AI Developer
      </span>

    </motion.div>
  );
};

export default HeroAIBadge;