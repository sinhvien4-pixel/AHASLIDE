"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Link2, Globe } from "lucide-react";

const experts = [
  {
    name: "Sarah Chen",
    role: "Chief People Officer",
    company: "Unilever SEA",
    category: "HR Leader",
    avatar: "SC",
    avatarColor: "from-[#FF5CA8] to-[#FF8BC2]",
    quote:
      "We spent years measuring headcount in training rooms. When we finally started measuring engagement quality, we discovered our most-attended sessions had our lowest knowledge transfer rates. The data changed everything.",
    stat: "↑ 340% ROI",
  },
  {
    name: "Marcus Reinhardt",
    role: "Global Head of L&D",
    company: "Bosch Vietnam",
    category: "L&D Manager",
    avatar: "MR",
    avatarColor: "from-[#6B7280] to-[#9CA3AF]",
    quote:
      "The industry is shifting from 'did they attend?' to 'did they learn?' Organizations that make this transition first will have a significant competitive advantage in talent development.",
    stat: "↑ 52% Retention",
  },
  {
    name: "Dr. Linh Nguyen",
    role: "Training Consultant & Author",
    company: "L&D Insight Asia",
    category: "Training Consultant",
    avatar: "LN",
    avatarColor: "from-[#FF8BC2] to-[#FF5CA8]",
    quote:
      "Every organization I work with has a spreadsheet showing 90%+ attendance rates — and every single one is surprised when we show them that actual engagement is half that number. The gap is universal.",
    stat: "8 Years Research",
  },
  {
    name: "James Okonkwo",
    role: "CHRO & Keynote Speaker",
    company: "HR Asia Conference",
    category: "Conference Speaker",
    avatar: "JO",
    avatarColor: "from-[#1F1F1F] to-[#4B5563]",
    quote:
      "Attendance metrics are organizational theater. Real L&D leaders stopped measuring who showed up and started measuring who actually grew. That distinction is the difference between cost centers and value creators.",
    stat: "50+ Conferences",
  },
];

const categoryColors: Record<string, string> = {
  "HR Leader": "bg-[#FCE7F3] text-[#FF5CA8]",
  "L&D Manager": "bg-blue-50 text-blue-600",
  "Training Consultant": "bg-purple-50 text-purple-600",
  "Conference Speaker": "bg-[#1F1F1F] text-white",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function ExpertValidation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experts" className="py-24 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
            Section 06 — Expert Validation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
            The Industry Is Already Moving{" "}
            <span className="text-gradient">Beyond Attendance</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Thought leaders across HR, L&D, and organizational development
            are unified on one point: presence metrics are no longer enough.
          </p>
        </motion.div>

        {/* Expert cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="group relative bg-white rounded-2xl p-8 border border-[rgba(255,92,168,0.1)] card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                size={32}
                className="text-[#FCE7F3] mb-4 group-hover:text-[#FF5CA8] transition-colors"
              />

              <blockquote className="text-[#1F1F1F] text-base leading-relaxed mb-7 font-medium">
                &ldquo;{expert.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${expert.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {expert.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1F1F] text-sm">
                      {expert.name}
                    </p>
                    <p className="text-[#6B7280] text-xs">{expert.role}</p>
                    <p className="text-[#6B7280] text-xs">{expert.company}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[expert.category] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {expert.category}
                  </span>
                  <span className="text-xs font-bold text-[#FF5CA8]">
                    {expert.stat}
                  </span>
                </div>
              </div>

              {/* Bottom action row */}
              <div className="mt-6 pt-4 border-t border-[rgba(255,92,168,0.08)] flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors">
                  <Link2 size={12} />
                  Connect
                </button>
                <span className="text-[#6B7280]/30">·</span>
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors">
                  <Globe size={12} />
                  Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,92,168,0.1)] rounded-2xl overflow-hidden"
        >
          {[
            { value: "200+", label: "Industry Experts" },
            { value: "50+", label: "Countries Represented" },
            { value: "1M+", label: "Employees Impacted" },
            { value: "$4.2B", label: "Training Budget Optimized" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-8 py-6 text-center">
              <p className="text-3xl font-bold text-gradient mb-1">{item.value}</p>
              <p className="text-sm text-[#6B7280]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
