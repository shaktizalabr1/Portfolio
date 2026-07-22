import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FiArrowUp,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Logo */}

          <div>

            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-500 to-cyan-500 text-3xl font-black">
              SSZ
            </div>

            <p className="leading-8 text-gray-400">
              Computer Engineering Student passionate about
              Artificial Intelligence, FastAPI, Cloud Computing,
              Full Stack Development and modern web technologies.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <div className="grid gap-3">

              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:shaktisinhzala8900@gmail.com"
                className="flex items-center gap-3"
              >
                <FiMail />
                Email
              </a>

              <a
                href="tel:+916357271111"
                className="flex items-center gap-3"
              >
                <FiPhone />
                Phone
              </a>

              <a
                href="https://github.com/Shaktiz"
                target="_blank"
                className="flex items-center gap-3"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/shaktisinh-zala-92273528b"
                target="_blank"
                className="flex items-center gap-3"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-gray-500">
            © 2026 Shaktisinh Zala.
            Designed & Developed with ❤️ using React.
          </p>

          <motion.a
            whileHover={{
              y: -5,
            }}
            href="#home"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-linear-to-r
              from-indigo-500
              to-cyan-500
            "
          >
            <FiArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;