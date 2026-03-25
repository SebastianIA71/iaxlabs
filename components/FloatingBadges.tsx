export default function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">

      {/* Left near title */}
      <div className="absolute top-[38%] left-[18%] animate-float1">
        <Badge label="AI" color="purple" />
      </div>

      {/* Bottom left */}
      <div className="absolute top-[58%] left-[28%] animate-float2">
        <Badge label="Cloud" color="blue" />
      </div>

      {/* Right near title */}
      <div className="absolute top-[40%] right-[22%] animate-float3">
        <Badge label="LLMs" color="red" />
      </div>

      {/* Bottom right */}
      <div className="absolute top-[60%] right-[30%] animate-float1">
        <Badge label="Agents" color="yellow" />
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
        w-20 h-20
        flex items-center justify-center
        rounded-full
        text-sm font-medium
        shadow-lg
        backdrop-blur-sm
        will-change-transform
        ${colorMap[color]}
      `}
    >
      {label}
    </div>
  )
}