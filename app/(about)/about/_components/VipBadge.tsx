export function VipBadge() {
  return (
    <div
      style={{
        position: "absolute",
        top: "-14px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        background: "linear-gradient(135deg, #ffd700, #ffaa00, #ffd700)",
        backgroundSize: "200%",
        borderRadius: "999px",
        padding: "3px 10px 3px 7px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        border: "1.5px solid #fff8dc",
        whiteSpace: "nowrap",
        animation:
          "vip-glow 2s ease-in-out infinite, vip-badge-pulse 2s ease-in-out infinite",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 20 14" fill="none">
        <path
          d="M1 12 L4 4 L8 9 L10 2 L12 9 L16 4 L19 12 Z"
          fill="#7a3800"
          stroke="#7a3800"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <circle cx="1"  cy="12" r="1.5" fill="#7a3800" />
        <circle cx="10" cy="2"  r="1.5" fill="#7a3800" />
        <circle cx="19" cy="12" r="1.5" fill="#7a3800" />
        <rect x="1" y="12" width="18" height="2" rx="1" fill="#7a3800" />
      </svg>
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#7a3800",
          letterSpacing: "0.08em",
          lineHeight: 1,
        }}
      >
        VIP
      </span>
    </div>
  );
}