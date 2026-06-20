"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, Building2, Users, Award } from "lucide-react";

const stories = [
  {
    company: "Vingroup L&D Division",
    industry: "Conglomerate",
    icon: Building2,
    iconColor: "#FF5CA8",
    before: {
      metric1: { label: "Attendance Rate", value: "94%" },
      metric2: { label: "Visibility into Engagement", value: "None" },
      pain: "High attendance, zero data on actual learning.",
    },
    after: {
      metric1: { label: "Participation Quality Score", value: "87%" },
      metric2: { label: "Knowledge Retention", value: "+52%" },
      win: "Board-presented training ROI report for the first time.",
    },
    roi: "380% ROI",
    timeframe: "6 months",
    testimonial: "We went from gut feeling to boardroom evidence.",
    person: "Nguyễn Thị Lan, L&D Director",
  },
  {
    company: "Masan Group HR",
    industry: "Consumer Goods",
    icon: Users,
    iconColor: "#6B7280",
    before: {
      metric1: { label: "Completion Rate", value: "89%" },
      metric2: { label: "Training Impact Data", value: "0 Reports" },
      pain: "Completing modules ≠ understanding content.",
    },
    after: {
      metric1: { label: "Content Comprehension", value: "+67%" },
      metric2: { label: "Manager-Ready Reports", value: "Automated" },
      win: "Reduced training cycles by 40% by identifying what works.",
    },
    roi: "290% ROI",
    timeframe: "4 months",
    testimonial: "AhaSlides turned our guesswork into science.",
    person: "David Park, CHRO",
  },
  {
    company: "FPT Software Academy",
    industry: "Technology",
    icon: Award,
    iconColor: "#FF8BC2",
    before: {
      metric1: { label: "Course Completion", value: "78%" },
      metric2: { label: "Performance Correlation", value: "Unknown" },
      pain: "No connection between training data and job performance.",
    },
    after: {
      metric1: { label: "Engagement-to-Performance Link", value: "Proven" },
      metric2: { label: "Skill Retention at 90 Days", value: "+41%" },
      win: "Training investment justified to C-suite with data.",
    },
    roi: "450% ROI",
    timeframe: "8 months",
    testimonial: "For the first time, we could prove L&D's value.",
    person: "Dr. Anh Tuấn, Learning Director",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

export default function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="success-stories" className="py-24 md:py-36 bg-[#FFF8FC]" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
            Section 07 — Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
            From High Attendance to{" "}
            <span className="text-gradient">Measurable Outcomes</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Organizations that made the shift from presence tracking to
            engagement intelligence — and what they discovered.
          </p>
        </motion.div>

        {/* Story cards */}
        <div className="space-y-8">
          {stories.map((story, i) => {
            const CompanyIcon = story.icon;
            return (
              <motion.div
                key={story.company}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                className="bg-white rounded-3xl border border-[rgba(255,92,168,0.1)] card-shadow overflow-hidden"
              >
                <div className="p-8">
                  {/* Company header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${story.iconColor}15` }}
                      >
                        <CompanyIcon size={22} style={{ color: story.iconColor }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1F1F1F] text-lg">{story.company}</h3>
                        <p className="text-[#6B7280] text-sm">{story.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gradient">{story.roi}</p>
                        <p className="text-xs text-[#6B7280]">in {story.timeframe}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                        <TrendingUp size={18} className="text-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Before / After */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-[9px] font-bold text-gray-600">B</span>
                        </div>
                        <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                          Before AhaSlides
                        </span>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#6B7280]">{story.before.metric1.label}</span>
                          <span className="text-sm font-bold text-[#1F1F1F]">{story.before.metric1.value}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#6B7280]">{story.before.metric2.label}</span>
                          <span className="text-sm font-bold text-red-500">{story.before.metric2.value}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#6B7280] italic border-t border-gray-200 pt-3">
                        &ldquo;{story.before.pain}&rdquo;
                      </p>
                    </div>

                    {/* After */}
                    <div className="bg-[#FFF8FC] rounded-2xl p-5 border border-[rgba(255,92,168,0.15)]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-[#FF5CA8] flex items-center justify-center">
                          <span className="text-[9px] font-bold text-white">A</span>
                        </div>
                        <span className="text-xs font-bold text-[#FF5CA8] uppercase tracking-wider">
                          After AhaSlides
                        </span>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#6B7280]">{story.after.metric1.label}</span>
                          <span className="text-sm font-bold text-green-600">{story.after.metric1.value}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#6B7280]">{story.after.metric2.label}</span>
                          <span className="text-sm font-bold text-[#FF5CA8]">{story.after.metric2.value}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#6B7280] italic border-t border-[rgba(255,92,168,0.12)] pt-3">
                        &ldquo;{story.after.win}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="flex items-center gap-4 bg-[#1F1F1F] rounded-2xl px-6 py-4">
                    <div
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5CA8] to-[#FF8BC2] flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    >
                      {story.person.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/85 text-sm font-medium italic">
                        &ldquo;{story.testimonial}&rdquo;
                      </p>
                      <p className="text-white/40 text-xs mt-1">{story.person}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#FF5CA8] flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
