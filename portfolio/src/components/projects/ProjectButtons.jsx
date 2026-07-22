import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectButtons = ({ github, live }) => {
  return (
    <div className="mt-8 flex gap-4">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-indigo-600 px-6 py-3 transition hover:bg-indigo-500"
      >
        <FaGithub />
      </a>

      <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-cyan-400"
      >
        <FiExternalLink />
      </a>
    </div>
  );
};

export default ProjectButtons;