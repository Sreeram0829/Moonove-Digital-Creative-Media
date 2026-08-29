export default function AtmosphericBackground({
  theme = "moonove",
}) {
  return (
    <div
      className={`atmosphere ${theme}`}
      aria-hidden="true"
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <div className="ambient-particles">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
        <span className="particle particle-7" />
        <span className="particle particle-8" />
      </div>

      <div className="grid-texture absolute inset-0" />
    </div>
  );
}