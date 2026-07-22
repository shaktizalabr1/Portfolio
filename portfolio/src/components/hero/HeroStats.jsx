import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
  FaCode,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    value: 5,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: <FaCertificate />,
    value: 6,
    suffix: "+",
    label: "Certificates",
  },
  {
    icon: <FaBriefcase />,
    value: 1,
    suffix: "",
    label: "Internship",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-5">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="mb-4 text-2xl text-cyan-400 transition-transform duration-300 group-hover:rotate-12">
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold text-white">
            {item.value}
            {item.suffix}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;