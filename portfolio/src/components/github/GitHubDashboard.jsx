import github from "../../data/github";
import SectionHeading from "../common/SectionHeading";
import GitHubStats from "./GitHubStats";
import LearningCard from "./LearningCard";

const GitHubDashboard = () => {
  return (
    <section id="github" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Developer Dashboard"
          title="Always Learning, Always Building"
          description="A snapshot of my development journey, technologies, and continuous learning."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <img
              src="https://ghchart.rshah.org/6366F1/Shaktiz"
              alt="GitHub Contribution Graph"
              className="w-full rounded-3xl border border-white/10 bg-white p-4"
            />

            <GitHubStats stats={github.stats} />
          </div>

          {/* Right */}
          <div>
            <h3 className="mb-8 text-3xl font-bold">
              Currently Learning
            </h3>

            <div className="grid gap-5">
              {github.learning.map((item) => (
                <LearningCard
                  key={item}
                  title={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubDashboard;