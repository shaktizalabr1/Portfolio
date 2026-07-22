import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import hero from "../../data/hero";

import FloatingCode from "./FloatingCode";
import HeroExperience from "./HeroExperience";
import HeroAIBadge from "./HeroAIBadge";

import {
  FaPython,
  FaReact,
  FaBrain,
  FaCloud,
} from "react-icons/fa6";

const badges = [
  {
    title: "Python",
    icon: <FaPython />,
    className: "-top-8 left-8",
  },
  {
    title: "React",
    icon: <FaReact />,
    className: "top-12 -right-14",
  },
  {
    title: "AI",
    icon: <FaBrain />,
    className: "bottom-14 -left-12",
  },
  {
    title: "FastAPI",
    icon: "⚡",
    className: "bottom-0 right-0",
  },
];

const HeroImage = () => {
  return (
    <div className="relative flex h-162.5 w-full items-center justify-center">

      {/* Glow */}

      <div className="absolute h-130 w-130 rounded-full bg-indigo-500/15 blur-[140px]" />

      <div className="absolute h-105 w-105 rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Orbit Rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-130 w-130 rounded-full border border-cyan-400/15"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-150 w-150 rounded-full border border-dashed border-indigo-500/15"
      />

      {/* Floating Badges */}

      {badges.map((badge, index) => (
        <motion.div
          key={badge.title}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className={`absolute z-20 ${badge.className}`}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="text-xl text-cyan-400">
                {badge.icon}
            </span>
            <span className="text-sm">{badge.title}</span>
          </div>
        </motion.div>
      ))}

      <motion.div
            animate={{
                scale: [1,1.1,1],
                opacity: [.3,.5,.3]
            }}
            transition={{
                repeat:Infinity,
                duration:5
            }}
            className="
                absolute
                h-125
                w-125
                rounded-full
                bg-cyan-500/10
                blur-[140px]
            "
        />

      {/* Card */}

      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1200}
        glareEnable
        glareMaxOpacity={0.12}
        className="relative z-30"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="relative rounded-[42px] border border-white/15 bg-white/6 p-6 backdrop-blur-2xl shadow-[0_35px_120px_rgba(0,0,0,.45)]]"
        >
          {/* Animated Gradient Border */}

          <div className="absolute inset-0 rounded-[40px] bg-linear-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 blur-xl" />

          <div className="relative overflow-hidden rounded-4xl bg-black">
            <div
                className="
                    absolute
                    inset-0
                    rounded-[42px]
                    bg-linear-to-br
                    from-indigo-500/20
                    via-transparent
                    to-cyan-500/20"/>
            <img
              src={hero.image}
              alt={hero.name}
              className="h-125 w-90 object-cover object-top transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </Tilt>

      {/* Status */}
          <HeroExperience />

        <HeroAIBadge />

        <FloatingCode />
      
    </div>
  );
};

export default HeroImage;