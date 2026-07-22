import certifications from "../../data/certifications";
import SectionHeading from "../common/SectionHeading";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Certifications"
          title="Learning Never Stops"
          description="Professional certifications that reflect my continuous learning in cloud computing, AI, programming, and software development."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <CertificationCard
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

export default Certifications;