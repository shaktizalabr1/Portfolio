import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import navigation from "../../data/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      setVisible(current < lastScroll || current < 50);

      lastScroll = current;

      navigation.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (current >= top && current < bottom) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        y: visible ? 0 : -120,
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div className="glass flex items-center justify-between rounded-2xl px-8 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black tracking-wider bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          SSZ
        </a>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-8">

          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition duration-300 hover:text-cyan-400 ${
                active === item.href
                  ? "text-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 px-5 py-3 font-semibold"
          >
            Resume
          </a>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mt-3 rounded-2xl p-6 lg:hidden"
        >
          <div className="flex flex-col gap-5">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a href="/resume.pdf" download>
              Resume
            </a>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;