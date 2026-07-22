import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCode,
  FiAward,
} from "react-icons/fi";

import hero from "../../data/hero";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Glow */}

      <div className="absolute h-105 w-105 rounded-full bg-indigo-500/20 blur-[120px]" />

      {/* Main Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-4xl
          border
          border-white/10
          bg-white/5
          p-5
          backdrop-blur-2xl
          shadow-[0_30px_100px_rgba(0,0,0,.35)]
        "
      >
        {/* Gradient Border */}

        <div className="absolute inset-0 rounded-4xl border border-cyan-400/20" />

        {/* Image */}

        <img
          src={hero.image}
          alt={hero.name}
          className="
            h-130
            w-100
            rounded-[26px]
            object-cover
            object-top
          "
        />

        {/* Experience */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            absolute
            -right-10
            top-10
            rounded-2xl
            border
            border-white/10
            bg-[#0d1224]/80
            px-5
            py-4
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <FiCode className="text-cyan-400 text-xl" />

            <div>
              <h3 className="font-bold">Python Developer</h3>

              <p className="text-sm text-gray-400">
                AI • FastAPI
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}

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
            -left-10
            bottom-24
            rounded-2xl
            border
            border-white/10
            bg-[#0d1224]/80
            px-5
            py-4
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <FiAward className="text-yellow-400 text-xl" />

            <div>
              <h3 className="font-bold">6+ Certifications</h3>

              <p className="text-sm text-gray-400">
                Microsoft • IBM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Location */}

        <div
          className="
            absolute
            left-1/2
            bottom-5
            -translate-x-1/2
            rounded-full
            border
            border-cyan-400/20
            bg-[#111827]/90
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-2">
            <FiMapPin className="text-cyan-400" />

            <span className="text-sm">
              Ahmedabad, Gujarat
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutImage;