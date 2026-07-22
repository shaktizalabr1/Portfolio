import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl"
          />

          <div className="relative text-center">

            {/* Logo */}

            <motion.h1
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="text-8xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              SSZ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="mt-6 text-gray-400 tracking-[4px]"
            >
              LOADING PORTFOLIO...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;