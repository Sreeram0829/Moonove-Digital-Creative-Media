export default function AtmosphericBackground({ theme = "moonove" }) {
  return <div className={`atmosphere ${theme}`} aria-hidden="true"><div className="grid-texture absolute inset-0 opacity-30" /></div>;
}
