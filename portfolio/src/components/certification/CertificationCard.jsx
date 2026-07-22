import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const CertificationCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_20px_60px_rgba(6,182,212,.18)]
      "
    >
      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div
              className="
                h-16
                w-16
                rounded-2xl
                bg-white
                p-3
                shadow-lg
                flex
                items-center
                justify-center
              "
            >
              <img
                src={item.logo}
                alt={item.organization}
                className="h-full w-full object-contain"
              />
            </div>

          {item.verified && (
            <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
              <FiCheckCircle />
              Verified
            </div>
          )}
        </div>

        <h3 className="text-2xl font-bold leading-snug">
          {item.title}
        </h3>

        <p className="mt-3 text-cyan-300">
          {item.organization}
        </p>
        

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            Issued
          </span>

          <span className="text-lg font-semibold">
            {item.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;