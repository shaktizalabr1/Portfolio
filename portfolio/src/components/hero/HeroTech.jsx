import { SiFastapi } from "react-icons/si";

import {
  FaPython,
  FaReact,
  FaDocker,
  FaMicrosoft,
  FaBrain,
  FaCode,
  FaGit,
  FaGithub,
} from "react-icons/fa6";

const tech = [
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi />,
  },
  {
    name: "SQL",
    icon: <FaCode />,
  },
  {
    name: "Git and GitHub",
    icon: <FaGit/>,
  },
  {
    name: "AI",
    icon: <FaBrain />,
  },
  {
    name: "Azure",
    icon: <FaMicrosoft />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
];

const HeroTech = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {tech.map((item) => (
        <div
          key={item.name}
          className="
            group
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2.5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-400/50
            hover:bg-cyan-500/10
          "
        >
          <span className="text-cyan-400 text-lg group-hover:scale-110 transition">
            {item.icon}
          </span>

          <span className="text-sm text-gray-300">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeroTech;