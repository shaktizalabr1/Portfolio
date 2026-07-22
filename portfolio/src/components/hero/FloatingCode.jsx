import { motion } from "framer-motion";

const FloatingCode = () => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="
        absolute
        -right-20
        bottom-10
        hidden
        xl:block
        rounded-2xl
        border
        border-white/10
        bg-[#0f172a]/80
        p-5
        backdrop-blur-2xl
        shadow-2xl
      "
    >
      <pre className="text-xs leading-6 text-cyan-300">
{`const developer = {
  name: "Shaktisinh",
  skills: [
    "Python",
    "FastAPI",
    "React",
    "AI"
  ]
}`}
      </pre>
    </motion.div>
  );
};

export default FloatingCode;