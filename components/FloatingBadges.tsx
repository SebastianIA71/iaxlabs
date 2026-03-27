
export default function FloatingBadges() {
  return (
    <div className="absolute inset-0 h-[150%] md:h-[180%] pointer-events-none">

      {/* Left near title */}
      <div className="absolute top-[20%] left-[18%] animate-float1">
        <CustomBadge label="AI" color="purple" />
      </div>

      {/* Bottom left */}
      <div className="absolute top-[32%] left-[28%] animate-float2">
        <CustomBadge label="Cloud" color="blue" />
      </div>

      {/* Right near title */}
      <div className="absolute top-[22%] right-[22%] animate-float3">
        <CustomBadge label="LLMs" color="red" />
      </div>

      {/* Bottom right */}
      <div className="absolute top-[35%] right-[30%] animate-float1">
        <CustomBadge label="Agents" color="yellow" />
      </div>

    </div>
  )
}

function CustomBadge({ label, color }: { label: string; color: string }) {
  const colorMap: Record<string, string> = {
    purple: "bg-purple-500/10 text-purple-400",
    blue: "bg-blue-500/10 text-blue-400",
    red: "bg-red-500/10 text-red-400",
    yellow: "bg-yellow-500/10 text-yellow-400",
  }

  return (
    <div
      className={`
        w-16 h-16 md:w-20 md:h-20
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