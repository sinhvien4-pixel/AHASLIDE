"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Gauge, BrainCircuit, TrendingUp, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Observe",
    description:
      "Capture every micro-interaction in real time — polls, Q&As, quizzes, word clouds, and live reactions — as they happen during your sessions.",
    visual: {
      label: "Live Capture",
      metrics: ["Polls: 87%", "Q&A: 64%", "Reactions: 102"],
      color: "#6B7280",
    },
  },
  {
    number: "02",
    icon: Gauge,
    title: "Measure",
    description:
      "Automatically score participation quality, not just quantity. Who answered correctly? Who engaged deeply? Who disengaged early?",
    visual: {
      label: "Quality Score",
      metrics: ["Depth: 78%", "Accuracy: 85%", "Speed: 2.1s"],
      color: "#FF8BC2",
    },
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Analyze",
    description:
      "Surface patterns across teams, sessions, and time. Identify knowledge gaps, engagement drop-off points, and high-performing participants.",
    visual: {
      label: "Pattern Analysis",
      metrics: ["Gap Found: 3", "Trend: +12%", "Risk: 2 users"],
      color: "#FF5CA8",
    },
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve",
    description:
      "Act on real data. Redesign content, adjust delivery, and target interventions based on what the numbers actually reveal — not assumptions.",
    visual: {
      label: "Improvement",
      metrics: ["Content: A+", "Delivery: ↑", "Impact: +23%"],
      color: "#FF5CA8",
    },
  },
  {
    number: "05",
    icon: Trophy,
    title: "Prove Impact",
    description:
      "Generate board-ready reports showing training ROI, engagement lift, knowledge retention, and business outcomes — in one click.",
    visual: {
      label: "ROI Report",
      metrics: ["ROI: 340%", "Retention: +41%", "Value: $2.1M"],
      color: "#FF5CA8",
    },
  },
];

function StepCard({
  step,
  index,
  isActive,
  onClick,
}: {
  step: (typeof steps)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl p-7 border transition-all duration-400 ${
        isActive
          ? "bg-[#1F1F1F] border-[#FF5CA8] shadow-[0_0_40px_rgba(255,92,168,0.2)]"
          : "bg-white border-[rgba(255,92,168,0.1)] card-shadow hover:card-shadow-hover hover:-translate-y-1"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: isActive ? "rgba(255,92,168,0.15)" : "#FCE7F3",
          }}
        >
          <Icon size={18} className={isActive ? "text-[#FF5CA8]" : "text-[#FF5CA8]"} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-bold uppercase tracking-widest ${
                isActive ? "text-[#FF5CA8]" : "text-[#6B7280]"
              }`}
            >
              Step {step.number}
            </span>
          </div>
          <h3
            className={`text-lg font-bold mb-2 ${
              isActive ? "text-white" : "text-[#1F1F1F]"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isActive ? "text-white/60" : "text-[#6B7280]"
            }`}
          >
            {step.description}
          </p>
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-5 pt-5 border-t border-white/10"
        >
          <p className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-wider mb-3">
            {step.visual.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {step.visual.metrics.map((m) => (
              <span
                key={m}
                className="text-xs font-medium text-white/80 bg-white/10 px-3 py-1.5 rounded-lg"
              >
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function MeasurableEngagement() {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeData = steps[activeStep];
  const ActiveIcon = activeData.icon;

  return (
    <section id="engagement" className="py-24 md:py-36 bg-[#FFF8FC]" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
            Section 04 — Methodology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
            What Is{" "}
            <span className="text-gradient">Measurable Engagement</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A five-step methodology that transforms subjective observations into
            objective, actionable business evidence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Steps */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                isActive={activeStep === i}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-2 sticky top-24 self-start"
          >
            <div className="bg-[#1F1F1F] rounded-3xl p-8 overflow-hidden relative min-h-[480px] flex flex-col">
              {/* Decorative */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-15"
                style={{
                  background: `radial-gradient(circle, ${activeData.visual.color}, transparent)`,
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(255,92,168,0.15)] flex items-center justify-center">
                    <ActiveIcon size={18} className="text-[#FF5CA8]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-wider">
                      Step {activeData.number}
                    </p>
                    <p className="text-white font-bold">{activeData.title}</p>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="bg-white/5 rounded-2xl p-5">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                      {activeData.visual.label}
                    </p>

                    {/* Simulated data visualization */}
                    {activeStep === 0 && (
                      <div className="space-y-3">
                        {[
                          { label: "Word Cloud", v: 92 },
                          { label: "Live Poll", v: 87 },
                          { label: "Q&A Activity", v: 64 },
                          { label: "Emoji Reactions", v: 78 },
                        ].map((item) => (
                          <div key={item.label}>
                            <div className="flex justify-between text-xs text-white/50 mb-1">
                              <span>{item.label}</span>
                              <span className="text-white/80">{item.v}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-1.5">
                              <motion.div
                                key={activeStep}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.v}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="h-1.5 rounded-full bg-[#FF5CA8]"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Depth Score", value: "78%" },
                          { label: "Accuracy Rate", value: "85%" },
                          { label: "Avg Response", value: "2.1s" },
                          { label: "Completion", value: "91%" },
                        ].map((item) => (
                          <div key={item.label} className="bg-white/5 rounded-xl p-3 text-center">
                            <p className="text-2xl font-bold text-[#FF5CA8]">{item.value}</p>
                            <p className="text-[10px] text-white/40 mt-1">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-3">
                        <div className="bg-red-950/30 border border-red-900/30 rounded-xl p-3">
                          <p className="text-xs text-red-400 font-semibold mb-1">⚠ Knowledge Gap Detected</p>
                          <p className="text-xs text-white/50">Module 3: Data Analysis — 3 team members below threshold</p>
                        </div>
                        <div className="bg-green-950/30 border border-green-900/30 rounded-xl p-3">
                          <p className="text-xs text-green-400 font-semibold mb-1">✓ Positive Trend</p>
                          <p className="text-xs text-white/50">Overall engagement up +12% vs. last quarter</p>
                        </div>
                        <div className="bg-yellow-950/30 border border-yellow-900/30 rounded-xl p-3">
                          <p className="text-xs text-yellow-400 font-semibold mb-1">🔍 Drop-off at 23 min</p>
                          <p className="text-xs text-white/50">Engagement dips consistently at lecture-heavy segments</p>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-3">
                        {[
                          { label: "Content Redesign", status: "Applied", color: "text-green-400" },
                          { label: "Interactive Segments +3", status: "Scheduled", color: "text-blue-400" },
                          { label: "Targeted Coaching × 2", status: "In Progress", color: "text-yellow-400" },
                          { label: "Engagement +23%", status: "Measured", color: "text-[#FF5CA8]" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between">
                            <span className="text-xs text-white/60">{item.label}</span>
                            <span className={`text-xs font-semibold ${item.color}`}>{item.status}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="text-center py-2">
                        <motion.div
                          key={activeStep}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                          className="text-5xl font-bold text-[#FF5CA8] mb-1"
                        >
                          340%
                        </motion.div>
                        <p className="text-white/50 text-sm mb-4">Training ROI</p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { l: "Retention", v: "+41%" },
                            { l: "Business Value", v: "$2.1M" },
                            { l: "NPS Score", v: "9.2" },
                            { l: "Exec Approval", v: "100%" },
                          ].map((d) => (
                            <div key={d.l} className="bg-white/5 rounded-lg p-2 text-center">
                              <p className="text-sm font-bold text-white">{d.v}</p>
                              <p className="text-[10px] text-white/40">{d.l}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step navigation dots */}
                  <div className="flex gap-2 justify-center mt-auto pt-4">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`transition-all duration-300 rounded-full ${
                          activeStep === i
                            ? "w-6 h-2 bg-[#FF5CA8]"
                            : "w-2 h-2 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
