import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-20 text-center">
          <span
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-5
              py-2
              text-cyan-300
            "
          >
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A selection of projects demonstrating my expertise in
            Full Stack Development, Artificial Intelligence,
            FastAPI, Cloud Computing, and modern software engineering.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;