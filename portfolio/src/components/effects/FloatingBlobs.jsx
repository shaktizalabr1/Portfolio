import { motion } from "framer-motion";

const blobs = [
  {
    id: 1,
    size: "w-[420px] h-[420px]",
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
    position: "-top-32 -left-32",
    duration: 24,
    x: [0, 80, -60, 0],
    y: [0, -60, 50, 0],
    scale: [1, 1.15, 0.9, 1],
  },
  {
    id: 2,
    size: "w-[360px] h-[360px]",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    position: "top-1/4 -right-24",
    duration: 30,
    x: [0, -70, 40, 0],
    y: [0, 80, -40, 0],
    scale: [1, 0.9, 1.2, 1],
  },
  {
    id: 3,
    size: "w-[300px] h-[300px]",
    color: "from-purple-500/20 via-pink-500/10 to-transparent",
    position: "bottom-10 left-1/4",
    duration: 28,
    x: [0, 50, -30, 0],
    y: [0, -80, 30, 0],
    scale: [1, 1.2, 1, 1],
  },
  {
    id: 4,
    size: "w-[260px] h-[260px]",
    color: "from-sky-500/15 via-cyan-500/10 to-transparent",
    position: "bottom-20 right-20",
    duration: 22,
    x: [0, -40, 30, 0],
    y: [0, 40, -50, 0],
    scale: [1, 0.85, 1.1, 1],
  },
];

const FloatingBlobs = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: blob.scale,
            rotate: [0, 30, -20, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className={`
            absolute
            ${blob.position}
            ${blob.size}
            rounded-full
            bg-linear-to-br
            ${blob.color}
            blur-[120px]
          `}
        />
      ))}
    </div>
  );
};

export default FloatingBlobs;