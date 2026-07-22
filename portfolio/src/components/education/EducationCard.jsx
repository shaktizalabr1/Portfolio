import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const EducationCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
      }}
      className="relative ml-20 mb-12"
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
          bg-indigo-500
          shadow-lg
        "
      >
        <FiBookOpen />
      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-2xl
          transition-all
          duration-300
          hover:border-indigo-400/40
          hover:-translate-y-1
          hover:shadow-[0_20px_50px_rgba(99,102,241,.2)]
        "
      >
        <span className="text-cyan-400 text-sm">
          {item.duration}
        </span>

        <h3 className="mt-3 text-3xl font-bold">
          {item.degree}
        </h3>

        <h4 className="mt-2 text-xl text-indigo-300">
          {item.institute}
        </h4>

        <p className="mt-1 text-sm text-gray-500">
          {item.location}
        </p>

        <p className="mt-6 leading-8 text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;