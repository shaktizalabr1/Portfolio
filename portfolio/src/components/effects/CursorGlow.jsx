import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 120,
        y: position.y - 120,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 250,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-1
        h-60
        w-60
        rounded-full
        bg-cyan-500/10
        blur-[120px]
      "
    />
  );
};

export default CursorGlow;