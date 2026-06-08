/**
 * Subtle batik-inspired geometric pattern overlay.
 * Pure CSS — zero image loading, zero bundle cost.
 */
export default function BatikPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
      {/* Diamond grid — inspired by traditional batik rhombus motifs */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #1a1a1a 0.5px, transparent 0.5px),
            linear-gradient(-45deg, #1a1a1a 0.5px, transparent 0.5px)
          `,
          backgroundSize: "64px 64px",
          opacity: 0.035,
        }}
      />

      {/* Dot matrix — mimicking batik isen (filler motifs) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, #1a1a1a 0.75px, transparent 0.75px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "16px 16px",
          opacity: 0.025,
        }}
      />

      {/* Subtle horizontal bands — like batik's border stripes */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 120px,
              #1a1a1a 120px,
              #1a1a1a 122px
            )
          `,
          opacity: 0.015,
        }}
      />
    </div>
  );
}
