import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const HeroExperience = () => {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="
        absolute
        -left-10
        top-24
        hidden
        lg:flex
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-5
        py-4
        backdrop-blur-xl
      "
    >
      <FiBriefcase className="text-cyan-400 text-2xl"/>

      <div>

        <p className="text-sm text-gray-400">
          Experience
        </p>

        <h4 className="font-semibold">
          Python Developer
        </h4>

      </div>
    </motion.div>
  );
};

export default HeroExperience;