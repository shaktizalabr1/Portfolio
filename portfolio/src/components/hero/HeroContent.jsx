import { motion } from "framer-motion";
import hero from "../../data/hero";

import TypewriterText from "./TypewriterText";
import HeroButtons from "./HeroButtons";
import SocialIcons from "./SocialIcons";
import HeroStats from "./HeroStats";
import HeroTech from "./HeroTech";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="max-w-3xl"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl shadow-lg"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />

        <span className="text-sm font-semibold tracking-wide text-cyan-300">
          Available for Opportunities
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8"
      >
        <p className="text-lg font-medium tracking-wide text-gray-400 md:text-xl">
          Hi, I'm
        </p>

        <h1 className="mt-3 leading-none">
          <span className="block bg-linear-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-7xl lg:text-8xl">
            Shaktisinh
          </span>

          <span className="mt-2 block bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-7xl lg:text-8xl">
            Zala
          </span>
        </h1>
      </motion.div>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-8"
      >
        <TypewriterText />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-8 max-w-2xl text-lg leading-9 text-gray-400"
      >
        {hero.description}
      </motion.p>

      {/* Stats */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <HeroStats />
      </motion.div> */}

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <HeroTech />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="mt-12"
      >
        <HeroButtons />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10"
      >
        <SocialIcons />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;