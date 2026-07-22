import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const ExperienceCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative ml-20"
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute
          -left-13.5
          top-8
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-cyan-500
          shadow-lg
        "
      >
        <FiBriefcase />
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          transition
          hover:border-cyan-400/40
        "
      >
        <span className="text-cyan-400 text-sm">
          {item.duration}
        </span>

        <h3 className="mt-2 text-3xl font-bold">
          {item.role}
        </h3>

        <h4 className="mt-2 text-lg text-indigo-300">
          {item.company}
        </h4>

        <p className="mt-6 text-gray-400 leading-8">
          {item.description}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {item.responsibilities.map((task) => (
            <div
              key={task}
              className="flex items-center gap-3"
            >
              <span className="text-cyan-400">✔</span>
              <span>{task}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;