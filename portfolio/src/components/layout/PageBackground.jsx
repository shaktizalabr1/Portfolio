import AuroraBackground from "../effects/AuroraBackground";
import FloatingBlobs from "../effects/FloatingBlobs";
import GridBackground from "../effects/GridBackground";
import MouseSpotlight from "../effects/MouseSpotlight";

const PageBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">
      <GridBackground />
      <AuroraBackground />
      <FloatingBlobs />
      <MouseSpotlight />
    </div>
  );
};

export default PageBackground;