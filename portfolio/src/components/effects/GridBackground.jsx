const GridBackground = () => {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-[0.07]
        pointer-events-none
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
};

export default GridBackground;