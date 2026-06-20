"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  BarChart3,
  Map,
  FileBarChart,
  PieChart,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";

interface ROIDemoRoomProps {
  onBookDemo: () => void;
}

const features = [
  {
    icon: Activity,
    title: "Live Participation Tracking",
    description: "Real-time visibility into who is engaging — by individual, team, or cohort — as your session unfolds.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Instantaneous dashboards that transform every interaction into structured, comparable data points.",
  },
  {
    icon: Map,
    title: "Engagement Heatmaps",
    description: "Visualize attention patterns across your content — discover exactly when and where engagement drops.",
  },
  {
    icon: FileBarChart,
    title: "Training Effectiveness Reports",
    description: "Automated post-session reports scoring every dimension of engagement quality against defined benchmarks.",
  },
  {
    icon: PieChart,
    title: "ROI Dashboards",
    description: "Connect engagement data to business outcomes and generate executive-ready ROI presentations in one click.",
  },
];

export default function ROIDemoRoom({ onBookDemo }: ROIDemoRoomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="roi-demo"
      className="py-24 md:py-36 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5CA8] via-[#FF3D9A] to-[#D63989]" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)" }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-5 block">
              Section 05 — ROI Demo Room
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              See Engagement{" "}
              <span className="text-white/80 italic">Become</span>{" "}
              Data
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Experience how AhaSlides transforms every interaction into
              measurable business insights. In a 45-minute ROI Demo Room
              session, you&apos;ll see real data from your industry — not a generic
              slide deck.
            </p>

            <div className="space-y-4 mb-12">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{feature.title}</p>
                      <p className="text-white/60 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                    <CheckCircle2 size={16} className="text-white/40 flex-shrink-0 mt-0.5" />
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookDemo}
              className="inline-flex items-center gap-3 bg-white text-[#FF5CA8] px-8 py-4.5 rounded-xl font-bold text-base shadow-xl hover:-translate-y-0.5 transition-transform"
            >
              <CalendarCheck size={20} />
              Book Your ROI Demo Room
            </motion.button>

            <p className="text-white/40 text-xs mt-4">
              45 minutes · Free · Personalized to your industry
            </p>
          </motion.div>

          {/* Right: Demo preview */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              {/* Mock browser bar */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/15">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
                <div className="flex-1 bg-white/10 rounded-md h-5 flex items-center px-3">
                  <span className="text-[10px] text-white/40">demo.ahaslides.com/roi-session</span>
                </div>
              </div>

              {/* Mock dashboard */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Q3 Training ROI Report</p>
                    <p className="text-white/40 text-xs">Generated live · 47 participants</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/60 text-xs">Live session</span>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Participation", value: "87%", change: "+23%" },
                    { label: "Retention", value: "71%", change: "+18%" },
                    { label: "ROI Score", value: "340%", change: "+89%" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white/10 rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-white">{kpi.value}</p>
                      <p className="text-[10px] text-white/50 mt-0.5">{kpi.label}</p>
                      <p className="text-[10px] text-green-300 font-semibold">{kpi.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart bars */}
                <div className="bg-white/5 rounded-2xl p-4">
                  <p className="text-xs text-white/50 mb-3">Engagement by Module</p>
                  <div className="flex items-end gap-2 h-20">
                    {[65, 82, 54, 91, 78, 67, 88].map((v, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${v}%` } : {}}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                        className="flex-1 rounded-t-md"
                        style={{
                          backgroundColor: v > 80 ? "rgba(255,255,255,0.9)" : v > 65 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["M1", "M2", "M3", "M4", "M5", "M6", "M7"].map((m) => (
                      <span key={m} className="text-[9px] text-white/30 flex-1 text-center">{m}</span>
                    ))}
                  </div>
                </div>

                {/* CTA inside demo */}
                <button
                  onClick={onBookDemo}
                  className="w-full bg-white text-[#FF5CA8] py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors"
                >
                  See Your Data Live →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
