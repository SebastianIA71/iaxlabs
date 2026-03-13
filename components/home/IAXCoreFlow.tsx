"use client";

import { motion } from "framer-motion";

const apps = ["ERP", "CRM", "BI", "BigQuery", "Reporting"];

export default function IAXCoreFlow() {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-6xl relative h-[400px]">

        {/* Nodo entrada */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 
                        w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white">
          Client
        </div>

        {/* Nodo central */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-20 h-20 rounded-full 
                        bg-gradient-to-br from-purple-600 to-blue-500
                        flex items-center justify-center text-white shadow-lg">
          AI
        </div>

        {/* Outputs */}
        {apps.map((app, i) => (
          <motion.div
            key={app}
            className="absolute right-10"
            style={{ top: `${60 + i * 60}px` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <div className="w-14 h-14 rounded-full bg-gray-800 
                            flex items-center justify-center text-xs text-white">
              {app}
            </div>
          </motion.div>
        ))}

        {/* SVG conexiones */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {apps.map((_, i) => (
            <motion.path
              key={i}
              d={`M 150 200 C 400 ${170 + i * 10}, 700 ${100 + i * 40}, 950 ${80 + i * 60}`}
              stroke="url(#grad)"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
