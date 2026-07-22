import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseSpotlight = () => {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 30,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 30,
  });

  const move = (e) => {
    x.set(e.clientX - 250);
    y.set(e.clientY - 250);
  };

  return (
    <div
      onMouseMove={move}
      className="absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
          absolute
          h-125
          w-125
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />
    </div>
  );
};

export default MouseSpotlight;