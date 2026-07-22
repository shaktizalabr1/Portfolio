import { motion } from "framer-motion";
import { FiArrowRight, FiFolder } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            p-12
            backdrop-blur-3xl
          "
        >
          {/* Glow */}
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative z-10 text-center">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
              Ready to Collaborate?
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              Let's Build Something
              <br />
              Amazing Together 🚀
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
              Whether it's an internship, AI project, web
              application, or full-stack product, I'd love to
              collaborate and create something impactful.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-cyan-500
                  px-8
                  py-4
                  font-semibold
                "
              >
                Hire Me
                <FiArrowRight />
              </a>

              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-4
                  backdrop-blur-xl
                "
              >
                View Projects
                <FiFolder />
              </a>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;