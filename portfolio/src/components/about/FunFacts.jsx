import { motion } from "framer-motion";
import {
  FaCode,
  FaSwimmer,
  FaGamepad,
  FaCloud,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";

const facts = [
  {
    icon: <FaCode />,
    title: "Coding",
    desc: "Building scalable web applications",
    color: "text-cyan-400",
  },
  {
    icon: <FaSwimmer />,
    title: "Swimming",
    desc: "Keeps me active and refreshed",
    color: "text-blue-400",
  },
  {
    icon: <FaGamepad />,
    title: "Gaming",
    desc: "Strategy & problem-solving",
    color: "text-purple-400",
  },
  {
    icon: <FaCloud />,
    title: "Cloud",
    desc: "Exploring Azure & modern cloud",
    color: "text-indigo-400",
  },
  {
    icon: <FaBookOpen />,
    title: "Learning",
    desc: "Always exploring new technologies",
    color: "text-green-400",
  },
  {
    icon: <FaUsers />,
    title: "Teamwork",
    desc: "Love collaborating on projects",
    color: "text-pink-400",
  },
];

const FunFacts = () => {
  return (
    <div className="mt-20">
      <h3 className="mb-8 text-3xl font-bold">
        Beyond Coding
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-[0_0_30px_rgba(6,182,212,.18)]
            "
          >
            <div className={`mb-5 text-4xl ${fact.color}`}>
              {fact.icon}
            </div>

            <h4 className="text-xl font-semibold">
              {fact.title}
            </h4>

            <p className="mt-3 leading-7 text-gray-400">
              {fact.desc}
            </p>

            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-300 group-hover:scale-150" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;