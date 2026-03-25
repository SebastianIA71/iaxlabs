"use client";

import { cn } from "@/lib/utils";

export function AnimatedBorderButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex rounded-full p-[2px] overflow-hidden",
        className
      )}
    >
      {/* Animated border */}
      <span
        className="
          absolute inset-0
          bg-[conic-gradient(from_0deg,transparent,#B79A29,#E6C200,#B79A29,transparent)]
          animate-spin-slow
        "
      />

      {/* Button content */}
      <span
        className="
          relative z-10
          inline-flex items-center gap-2
          rounded-full
          bg-background
          px-4 py-1.5
          text-sm font-medium
          backdrop-blur
        "
      >
        {children}
      </span>
    </div>
  );
}
