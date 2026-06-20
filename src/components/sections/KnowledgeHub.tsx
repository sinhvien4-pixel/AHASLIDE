"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  BookOpen,
  BarChart3,
  Users2,
  Lightbulb,
  Compass,
  ArrowRight,
  Lock,
  Unlock,
} from "lucide-react";

interface KnowledgeHubProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

const resources = [
  {
    icon: FileText,
    type: "Research Report",
    title: "The Engagement Measurement Framework 2024",
    description:
      "A comprehensive analysis of how 500+ organizations measure training effectiveness — and what separates the leaders from the laggards.",
    readTime: "12 min read",
    featured: true,
    tag: "New",
  },
  {
    icon: BookOpen,
    type: "Whitepaper",
    title: "Beyond Kirkpatrick: Modern Training ROI Models",
    description:
      "How modern L&D teams are moving past legacy evaluation frameworks to build real-time engagement intelligence.",
    readTime: "8 min read",
    tag: "Popular",
  },
  {
    icon: BarChart3,
    type: "Industry Insights",
    title: "Vietnam HR Benchmark Report Q3 2024",
    description:
      "Exclusive data on engagement rates across Vietnam's fastest-growing industries. Where does your organization stand?",
    readTime: "15 min read",
    tag: "Exclusive",
  },
  {
    icon: Users2,
    type: "Case Studies",
    title: "From 95% Attendance to 89% Retention",
    description:
      "How a Fortune 500 manufacturing company transformed their L&D program with measurable engagement data.",
    readTime: "6 min read",
    tag: "Case Study",
  },
  {
    icon: Lightbulb,
    type: "Framework",
    title: "The 5-Step Measurable Engagement Model",
    description:
      "A practical implementation guide for HR leaders who need to demonstrate training value to executive stakeholders.",
    readTime: "10 min read",
    tag: "Framework",
  },
  {
    icon: Compass,
    type: "Interactive Guide",
    title: "Calculate Your Training ROI in 5 Minutes",
    description:
      "An interactive calculator that shows exactly how much invisible disengagement is costing your organization annually.",
    readTime: "5 min read",
    tag: "Interactive",
  },
];

const tagColors: Record<string, string> = {
  New: "bg-green-50 text-green-600",
  Popular: "bg-blue-50 text-blue-600",
  Exclusive: "bg-purple-50 text-purple-600",
  "Case Study": "bg-orange-50 text-orange-600",
  Framework: "bg-[#FCE7F3] text-[#FF5CA8]",
  Interactive: "bg-yellow-50 text-yellow-600",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function KnowledgeHub({ isUnlocked, onUnlock }: KnowledgeHubProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="knowledge-hub" className="py-24 md:py-36 bg-[#FFF8FC]" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
              Section 03 — Knowledge Hub
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
              Evidence,{" "}
              <span className="text-gradient">Not Assumptions</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              A curated resource center containing research, frameworks, reports
              and measurable engagement insights — built for HR and L&D leaders
              who demand evidence.
            </p>
          </div>

          {!isUnlocked ? (
            <button
              onClick={onUnlock}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF5CA8] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(255,92,168,0.4)] hover:-translate-y-0.5"
            >
              <Unlock size={16} />
              Unlock All Resources
            </button>
          ) : (
            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3.5 rounded-xl font-semibold border border-green-200">
              <Unlock size={16} />
              Knowledge Hub Unlocked
            </div>
          )}
        </motion.div>

        {/* Resource cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            const isLocked = !isUnlocked && i > 0;
            return (
              <motion.div
                key={resource.title}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                className={`group relative bg-white rounded-2xl p-7 border transition-all duration-300 cursor-pointer ${
                  resource.featured
                    ? "border-[#FF5CA8] shadow-[0_0_40px_rgba(255,92,168,0.1)] md:col-span-2 lg:col-span-1"
                    : "border-[rgba(255,92,168,0.1)] card-shadow"
                } ${!isLocked ? "hover:card-shadow-hover hover:-translate-y-1" : "opacity-80"}`}
              >
                {/* Lock overlay */}
                {isLocked && (
                  <div className="absolute inset-0 rounded-2xl bg-white/70 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FCE7F3] flex items-center justify-center">
                      <Lock size={18} className="text-[#FF5CA8]" />
                    </div>
                    <button
                      onClick={onUnlock}
                      className="text-sm font-semibold text-[#FF5CA8] hover:underline"
                    >
                      Unlock to read →
                    </button>
                  </div>
                )}

                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#FCE7F3" }}
                  >
                    <Icon size={18} className="text-[#FF5CA8]" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      tagColors[resource.tag] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {resource.tag}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  {resource.type}
                </span>
                <h3 className="text-lg font-bold text-[#1F1F1F] mt-2 mb-3 leading-snug group-hover:text-[#FF5CA8] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,92,168,0.08)]">
                  <span className="text-xs text-[#6B7280]">{resource.readTime}</span>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-[#FF5CA8] group-hover:gap-2.5 transition-all">
                    Read now
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Unlock CTA banner (when locked) */}
        {!isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-10 bg-gradient-to-r from-[#1F1F1F] to-[#2D1F2B] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-white font-bold text-xl mb-1">
                Get access to the full Knowledge Hub
              </p>
              <p className="text-white/60 text-sm">
                6 research reports, whitepapers, case studies, and interactive guides — free access.
              </p>
            </div>
            <button
              onClick={onUnlock}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF5CA8] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all whitespace-nowrap shadow-[0_0_30px_rgba(255,92,168,0.4)]"
            >
              <Unlock size={16} />
              Unlock Free Access
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
