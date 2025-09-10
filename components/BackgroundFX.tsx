export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Global gradient backdrop */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated aurora + parallax */}
      <div className="absolute inset-0 parallax-var">
        <div className="aurora-wrap">
          <span className="aurora" />
          <span className="aurora" />
          <span className="aurora" />
          <span className="aurora" />
        </div>
        <div className="absolute inset-0 bg-grid-mask" />
      </div>
    </div>
  );
}

