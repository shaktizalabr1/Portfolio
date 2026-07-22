import { motion } from "framer-motion";

const GradientButton = ({
  children,
  icon,
  onClick,
  href,
  target = "_self",
}) => {
  const content = (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
      group
      relative
      inline-flex
      items-center
      gap-3
      overflow-hidden
      rounded-2xl
      px-7
      py-4
      font-semibold
      text-white
      transition-all
      duration-300
      "
    >
      {/* Animated Gradient */}

      <div
        className="
        absolute
        inset-0
        bg-linear-to-r
        from-indigo-500
        via-purple-500
        to-cyan-500
        transition-all
        duration-500
        group-hover:scale-110
      "
      />

      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        blur-2xl
        opacity-0
        group-hover:opacity-60
        bg-cyan-400
        transition
      "
      />

      <span className="relative z-10 flex items-center gap-3">
        {icon}
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
};

export default GradientButton;