import experience from "../../data/experience";
import SectionHeading from "../common/SectionHeading";
import ExperienceTimeline from "./ExperienceTimeline";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="Experience"
          title="Professional Journey"
          description="My internship experience and professional growth in backend development, AI, and Frontend technologies."
        />

        <div className="relative mt-20">
          <ExperienceTimeline />

          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;