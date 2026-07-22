import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const SkillCard = ({ category }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .5,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(6,182,212,.15)]
      "
    >
      <div className="mb-6 flex items-center gap-4">

        <div className="text-4xl text-cyan-400">
          {category.icon}
        </div>

        <div>

          <h3 className="text-2xl font-bold">
            {category.title}
          </h3>

          <p className="text-sm text-gray-400">
            {category.skills.length} Technologies
          </p>

        </div>

      </div>

      <div className="flex flex-wrap gap-3">

        {category.skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}

      </div>
    </motion.div>
  );
};

export default SkillCard;