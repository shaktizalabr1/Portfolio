import {
  FaReact,
  FaPython,
  FaDatabase,
  FaCloud,
  FaTools,
  FaBrain,
} from "react-icons/fa";

import SkillCard from "./SkillCard";

const categories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: <FaPython />,
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Java",
      "REST API",
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      "SQL",
      "MySQL",
      "MongoDB",
      "DBMS",
      "JSON",
    ],
  },
  {
    title: "Cloud",
    icon: <FaCloud />,
    skills: [
      "Microsoft Azure",
      "Virtual Machines",
      "Storage",
      "Deployment",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain />,
    skills: [
      "Machine Learning",
      "EDA",
      "Data Analysis",
      "FAISS",
      "Sentence Transformers",
      "RAG",
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            My Skills
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A collection of technologies, frameworks and tools that I
            use to build modern applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((category) => (
            <SkillCard
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;