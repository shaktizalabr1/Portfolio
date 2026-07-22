import { motion } from "framer-motion";

const GlassButton = ({
  children,
  icon,
  href,
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
      group
      inline-flex
      items-center
      gap-3
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-7
      py-4
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:bg-white/10
      "
    >
      {icon}

      {children}
    </motion.a>
  );
};

export default GlassButton;