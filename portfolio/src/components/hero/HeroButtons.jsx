import { motion } from "framer-motion";
import {
  FiDownload,
  FiFolder,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const buttons = [
  {
    title: "Download Resume",
    icon: <FiDownload />,
    href: "/resume.pdf",
    download: true,
    primary: true,
  },
  {
    title: "View Projects",
    icon: <FiFolder />,
    href: "#projects",
    primary: false,
  },
  {
    title: "Hire Me",
    icon: <FiMail />,
    href: "#contact",
    primary: false,
  },
];

const HeroButtons = () => {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-4">
      {buttons.map((button) => (
        <motion.a
          key={button.title}
          href={button.href}
          download={button.download}
          whileHover={{
            y: -4,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className={`
            group
            relative
            inline-flex
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-2xl
            px-7
            py-4
            font-semibold
            transition-all
            duration-500
            backdrop-blur-xl

            ${
              button.primary
                ? `
                  border border-indigo-400/30
                  bg-linear-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  text-white
                  shadow-[0_10px_40px_rgba(99,102,241,0.45)]
                  hover:shadow-[0_15px_55px_rgba(99,102,241,0.65)]
                `
                : `
                  border border-white/10
                  bg-white/5
                  text-white
                  hover:border-cyan-400/40
                  hover:bg-white/10
                `
            }
          `}
        >
          {/* Glow */}
          {button.primary && (
            <span
              className="
                absolute
                inset-0
                opacity-0
                blur-3xl
                transition-opacity
                duration-500
                group-hover:opacity-50
                bg-cyan-400
              "
            />
          )}

          {/* Shine Effect */}
          <span
            className="
              absolute
              -left-24
              top-0
              h-full
              w-16
              rotate-12
              bg-white/20
              blur-md
              transition-all
              duration-700
              group-hover:left-[120%]
            "
          />

          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-lg">{button.icon}</span>

            <span>{button.title}</span>

            <FiArrowRight
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default HeroButtons;