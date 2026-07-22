import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import AuroraBackground from "../effects/AuroraBackground";
import FloatingBlobs from "../effects/FloatingBlobs";
import MouseSpotlight from "../effects/MouseSpotlight";
import GridBackground from "../effects/GridBackground";
import Noise from "../effects/Noise";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* Background Layers */}

      <AuroraBackground />

      <FloatingBlobs />

      <GridBackground />

      <Noise />

      <MouseSpotlight />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050816]" />

      {/* Main Container */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col-reverse
          items-center
          justify-center
          gap-20
          px-6
          py-24
          lg:flex-row
          lg:justify-between
        "
      >
        {/* Left */}

        <div className="w-full lg:w-[55%]">
          <HeroContent />
        </div>

        {/* Right */}

        <div className="flex w-full justify-center lg:w-[45%]">
          <HeroImage />
        </div>
      </div>

      {/* Scroll */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

        <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">

          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-cyan-400" />

        </div>

      </div>
    </section>
  );
};

export default Hero;