import education from "../../data/education";

import SectionHeading from "../common/SectionHeading";
import ExperienceTimeline from "../experience/ExperienceTimeline";

import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          badge="Education"
          title="Academic Journey"
          description="My educational background that shaped my technical foundation and passion for engineering."
        />

        <div className="relative mt-20">
          <ExperienceTimeline />

          {education.map((item, index) => (
            <EducationCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;