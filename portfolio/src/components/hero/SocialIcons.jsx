import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
  MdPhone,
} from "react-icons/md";

import hero from "../../data/hero";

const socials = [
  {
    icon: <FaGithub />,
    link: hero.github,
    label: "GitHub",
    color: "group-hover:text-white",
    glow: "group-hover:shadow-[0_0_35px_rgba(255,255,255,.18)]",
  },
  {
    icon: <FaLinkedin />,
    link: hero.linkedin,
    label: "LinkedIn",
    color: "group-hover:text-[#0A66C2]",
    glow: "group-hover:shadow-[0_0_35px_rgba(10,102,194,.45)]",
  },
  {
    icon: <MdEmail />,
    link: `mailto:${hero.email}`,
    label: "Email",
    color: "group-hover:text-cyan-400",
    glow: "group-hover:shadow-[0_0_35px_rgba(6,182,212,.45)]",
  },
  {
    icon: <MdPhone />,
    link: `tel:${hero.phone}`,
    label: "Phone",
    color: "group-hover:text-green-400",
    glow: "group-hover:shadow-[0_0_35px_rgba(34,197,94,.45)]",
  },
];

const SocialIcons = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="mt-10 flex flex-wrap items-center gap-5"
    >
      {socials.map((item) => (
        <motion.a
          key={item.label}
          href={item.link}
          target={
            item.label === "GitHub" || item.label === "LinkedIn"
              ? "_blank"
              : "_self"
          }
          rel="noopener noreferrer"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          whileHover={{
            y: -6,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="group relative"
        >
          {/* Tooltip */}

          <span
            className="
              pointer-events-none
              absolute
              -top-12
              left-1/2
              -translate-x-1/2
              rounded-xl
              border
              border-white/10
              bg-[#0d1224]/95
              px-3
              py-1.5
              text-xs
              font-medium
              text-gray-300
              opacity-0
              backdrop-blur-xl
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:opacity-100
              whitespace-nowrap
            "
          >
            {item.label}
          </span>

          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              rounded-2xl
              opacity-0
              blur-xl
              transition-all
              duration-300
              group-hover:opacity-100
              bg-cyan-500/20
            "
          />

          {/* Button */}

          <div
            className={`
              relative
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              text-2xl
              text-gray-300
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-white/10
              ${item.color}
              ${item.glow}
            `}
          >
            {item.icon}
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;