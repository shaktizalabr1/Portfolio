import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="
        fixed
        left-0
        top-0
        z-999
        h-1
        w-full
        origin-left
        bg-linear-to-r
        from-indigo-500
        via-purple-500
        to-cyan-400
      "
    />
  );
};

export default ScrollProgress;