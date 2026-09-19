export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 172 28"
      fill="none"
      className={className}
      role="img"
      aria-label="VIIDTEC"
    >
      <circle cx="4" cy="14" r="3.2" className="fill-current2" />
      <text
        x="14"
        y="21"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight={700}
        fontSize="21"
        letterSpacing="0.5"
        className="fill-mist-50"
      >
        VIID
        <tspan className="fill-signal-300">TEC</tspan>
      </text>
    </svg>
  );
}
