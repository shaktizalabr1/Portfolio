import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            About Me
          </span>

          <h2 className="mt-6 bg-linear-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold text-transparent">
            Passionate About Building
            <br />
            Modern AI Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I enjoy creating scalable software solutions with Python,
            FastAPI, Artificial Intelligence, and modern
            frontend technologies.
          </p>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;