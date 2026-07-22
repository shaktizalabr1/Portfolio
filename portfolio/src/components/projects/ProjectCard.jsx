import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import ProjectTech from "./ProjectTech";
import ProjectButtons from "./ProjectButtons";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
      }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={1000}
        transitionSpeed={1200}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.02}
        className="h-full"
      >
        <div
          className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-cyan-400/40
            hover:shadow-[0_20px_60px_rgba(6,182,212,.18)]
          "
        >
          {/* Image */}

          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="
                h-72
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-linear-to-t
                from-[#050816]
                via-transparent
                to-transparent
              "
            />

            {project.featured && (
              <span
                className="
                  absolute
                  top-5
                  left-5
                  rounded-full
                  bg-linear-to-r
                  from-indigo-500
                  to-cyan-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Content */}

          <div className="p-8">
            <h3 className="text-3xl font-bold">
              {project.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {project.description}
            </p>

            <ProjectTech tech={project.tech} />

            <ProjectButtons
              github={project.github}
              live={project.live}
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;