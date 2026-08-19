/** Fixed decorative layer: panning grid plus the two colour blooms. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop-grid" />
      <div className="backdrop-glow backdrop-glow--green" />
      <div className="backdrop-glow backdrop-glow--blue" />
    </div>
  );
}
