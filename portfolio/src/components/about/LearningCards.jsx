import { motion } from "framer-motion";
import {
  FaPython,
  FaDocker,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import {
  SiFastapi,
} from "react-icons/si";

import {
  FiBookOpen,
} from "react-icons/fi";

const learning = [
  {
    title: "Advanced Python",
    icon: <FaPython />,
    color: "text-yellow-400",
    progress: 90,
  },
  {
    title: "FastAPI",
    icon: <SiFastapi />,
    color: "text-green-400",
    progress: 95,
  },
  {
    title: "AI Agents",
    icon: <FaRobot />,
    color: "text-cyan-400",
    progress: 75,
  },
  {
    title: "RAG Systems",
    icon: <FiBookOpen />,
    color: "text-purple-400",
    progress: 80,
  },
  {
    title: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    progress: 85,
  },
  {
    title: "Cloud Computing",
    icon: <FaCloud />,
    color: "text-indigo-400",
    progress: 80,
  },
];

const LearningCards = () => {
  return (
    <div className="mt-16">
      <h3 className="mb-8 text-3xl font-bold">
        Currently Learning
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {learning.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-[0_0_35px_rgba(6,182,212,.18)]
            "
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`
                    text-3xl
                    ${item.color}
                  `}
                >
                  {item.icon}
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-400">
                    Learning Progress
                  </p>

                </div>

              </div>

              <span className="font-bold text-cyan-400">
                {item.progress}%
              </span>

            </div>

            <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${item.progress}%`,
                }}
                transition={{
                  duration: 1.2,
                  delay: index * .1,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  h-full
                  rounded-full
                  bg-linear-to-r
                  from-indigo-500
                  via-purple-500
                  to-cyan-400
                "
              />

            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearningCards;