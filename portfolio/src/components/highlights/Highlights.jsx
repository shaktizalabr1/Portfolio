import SectionHeading from "../common/SectionHeading";

import {
  achievements,
  languages,
  hobbies,
} from "../../data/highlights";

import AchievementCard from "./AchievementCard";
import LanguageCard from "./LanguageCard";
import HobbyCard from "./HobbyCard";

const Highlights = () => {
  return (
    <section id="highlights" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Highlights"
          title="Beyond Coding"
          description="A quick overview of my achievements, languages, and interests."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Achievements */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">🏆 Achievements</h3>
            <div className="space-y-4">
              {achievements.map((item) => (
                <AchievementCard key={item} title={item} />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">🌍 Languages</h3>
            <div className="space-y-4">
              {languages.map((item) => (
                <LanguageCard key={item} language={item} />
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">❤️ Hobbies</h3>
            <div className="space-y-4">
              {hobbies.map((item) => (
                <HobbyCard key={item} hobby={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;