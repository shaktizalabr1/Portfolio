import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-10
          h-96
          w-96
          rounded-full
          bg-indigo-500/15
          blur-[120px]
        "
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          h-125
          w-125
          rounded-full
          bg-cyan-500/15
          blur-[150px]
        "
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/3
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />
    </div>
  );
};

export default AuroraBackground;