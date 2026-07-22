import { Typewriter } from "react-simple-typewriter";
import hero from "../../data/hero";

const TypewriterText = () => {
  return (
    <div className="mt-6 h-12 flex items-center">
      <span className="text-xl md:text-3xl font-semibold text-gray-300">
        I'm a{" "}
      </span>

      <span className="ml-3 text-xl md:text-3xl font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        <Typewriter
          words={hero.roles}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1800}
        />
      </span>
    </div>
  );
};

export default TypewriterText;