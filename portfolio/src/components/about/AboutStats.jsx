import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCode />,
    number: 5,
    suffix: "+",
    title: "Projects",
    color: "text-cyan-400",
  },
  {
    icon: <FaCertificate />,
    number: 6,
    suffix: "+",
    title: "Certifications",
    color: "text-yellow-400",
  },
  {
    icon: <FaBriefcase />,
    number: 1,
    suffix: "",
    title: "Internship",
    color: "text-green-400",
  },
  {
  icon: <FaCode />,
  number: 20,
  suffix: "+",
  title: "Technologies",
  color: "text-indigo-400",
},
];

const AboutStats = () => {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
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
            backdrop-blur-2xl
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:shadow-[0_0_35px_rgba(6,182,212,.15)]
          "
        >
          <div
            className={`mb-5 text-3xl ${item.color} transition-transform duration-300 group-hover:scale-110`}
          >
            {item.icon}
          </div>

          <h3 className="text-4xl font-black">
            {item.number}
            {item.suffix}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutStats;