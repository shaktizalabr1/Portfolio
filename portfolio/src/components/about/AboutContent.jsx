import { motion } from "framer-motion";

import hero from "../../data/hero";
import AboutStats from "./AboutStats";
import LearningCards from "./LearningCards";
import FunFacts from "./FunFacts";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="text-cyan-400 font-semibold tracking-wider uppercase">
        Who I Am
      </span>

      <h2 className="mt-4 text-5xl font-bold leading-tight">
        Creating Intelligent &
        <span className="block bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Scalable Applications
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-400">
        {hero.description}
      </p>

      <p className="mt-6 text-lg leading-9 text-gray-400">
        I enjoy building scalable backend systems, AI-powered
        applications, Retrieval-Augmented Generation (RAG)
        solutions, and modern full-stack web applications while
        continuously exploring Cloud Computing and emerging AI
        technologies.
      </p>
      <AboutStats />
      <LearningCards />
      {/* <FunFacts/> */}
    </motion.div>
    
  );
};

export default AboutContent;