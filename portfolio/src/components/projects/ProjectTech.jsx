const ProjectTech = ({ tech }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {tech.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            text-cyan-300
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ProjectTech;