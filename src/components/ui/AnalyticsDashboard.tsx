"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { TrendingUp, Users, Brain, Zap, BarChart2 } from "lucide-react";

const metrics = [
  {
    label: "Attendance Rate",
    value: 95,
    color: "#6B7280",
    icon: Users,
    trend: null,
  },
  {
    label: "Active Participation",
    value: 42,
    color: "#FF5CA8",
    icon: Zap,
    trend: "+12%",
  },
  {
    label: "Knowledge Retention",
    value: 37,
    color: "#FF8BC2",
    icon: Brain,
    trend: "+8%",
  },
  {
    label: "Interaction Score",
    value: 51,
    color: "#FF5CA8",
    icon: BarChart2,
    trend: "+18%",
  },
];

function MiniBarChart({ value, color }: { value: number; color: string }) {
  const bars = [
    Math.random() * 40 + 20,
    Math.random() * 40 + 30,
    Math.random() * 40 + 25,
    Math.random() * 40 + 35,
    value,
  ].map((v) => Math.min(Math.max(v, 10), 95));

  return (
    <div className="flex items-end gap-0.5 h-8">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
          className="flex-1 rounded-sm"
          style={{ backgroundColor: i === 4 ? color : `${color}40`, minHeight: 2 }}
        />
      ))}
    </div>
  );
}

function HeatmapCell({
  intensity,
  delay,
}: {
  intensity: number;
  delay: number;
}) {
  const opacity = 0.15 + intensity * 0.85;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="w-3 h-3 rounded-sm"
      style={{ backgroundColor: `rgba(255, 92, 168, ${opacity})` }}
    />
  );
}

const heatmapData = Array.from({ length: 5 }, () =>
  Array.from({ length: 7 }, () => Math.random())
);

export default function AnalyticsDashboard() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="relative w-full max-w-sm"
    >
      {/* Main Dashboard Card */}
      <div className="glass rounded-2xl p-5 card-shadow border border-[rgba(255,92,168,0.15)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest">
              AhaSlides Analytics
            </p>
            <p className="text-sm font-medium text-[#1F1F1F] mt-0.5">
              Session Dashboard
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-[#6B7280]">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="bg-white rounded-xl p-3 border border-[rgba(255,92,168,0.08)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon size={14} className="text-[#6B7280]" />
                  {m.trend && (
                    <span className="text-[10px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                      <TrendingUp size={8} />
                      {m.trend}
                    </span>
                  )}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold"
                  style={{ color: m.color }}
                >
                  {m.value}%
                </motion.p>
                <p className="text-[10px] text-[#6B7280] mt-0.5 leading-tight">
                  {m.label}
                </p>
                <div className="mt-2">
                  <MiniBarChart value={m.value} color={m.color} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement Heatmap */}
        <div className="bg-white rounded-xl p-3 border border-[rgba(255,92,168,0.08)]">
          <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
            Engagement Heatmap
          </p>
          <div className="flex flex-col gap-1">
            {heatmapData.map((row, r) => (
              <div key={r} className="flex gap-1">
                {row.map((cell, c) => (
                  <HeatmapCell
                    key={c}
                    intensity={cell}
                    delay={0.05 * (r * 7 + c)}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[9px] text-[#6B7280]">Mon</span>
            <span className="text-[9px] text-[#6B7280]">Sun</span>
          </div>
        </div>
      </div>

      {/* Floating pill badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -right-4 top-8 glass rounded-full px-3 py-1.5 shadow-lg border border-[rgba(255,92,168,0.15)]"
      >
        <p className="text-xs font-semibold text-[#FF5CA8] whitespace-nowrap">
          +18% ROI ↑
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1 }}
        className="absolute -left-4 bottom-12 glass rounded-full px-3 py-1.5 shadow-lg border border-[rgba(255,92,168,0.15)]"
      >
        <p className="text-xs font-semibold text-[#1F1F1F] whitespace-nowrap">
          🔥 Real-time data
        </p>
      </motion.div>
    </motion.div>
  );
}
