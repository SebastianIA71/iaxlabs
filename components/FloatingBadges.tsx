export default function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">

      {/* Top Left */}
      <div className="absolute top-16 -left-44 animate-drift">
        <Badge label="GTP" color="purple" />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-24 -left-56 animate-drift-2">
        <Badge label="Cloud" color="blue" />
      </div>

      {/* Top Right */}
      <div className="absolute top-20 -right-80 animate-drift-3">
        <Badge label="LLMs" color="red" />
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-20 -right-60 animate-drift">
        <Badge label="JSON" color="yellow" />
      </div>

    </div>
  )
}

function Badge({ label, color }: { label: string; color: string }) {
  const colorMap: Record<string, string> = {
    purple: "bg-purple-500/10 text-purple-400",
    blue: "bg-blue-500/10 text-blue-400",
    red: "bg-red-500/10 text-red-400",
    yellow: "bg-yellow-500/10 text-yellow-400",
  }

  return (
    <div
      className={`
        px-4 py-2
        rounded-full
        text-sm
        font-medium
        shadow-lg
        backdrop-blur-md
        ${colorMap[color]}
      `}
    >
      {label}
    </div>
  )
}
