"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Eye } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    value: 95,
    suffix: "%",
    label: "Điểm danh",
    sublabel: "ghế được lấp đầy",
    description: "Chỉ số bạn đang theo dõi",
    color: "#6B7280",
    bgColor: "#F9FAFB",
    icon: Eye,
    tag: "Có thể thấy",
  },
  {
    value: 42,
    suffix: "%",
    label: "Tham gia thực sự",
    sublabel: "thực sự tương tác",
    description: "Điều bạn đang bỏ lỡ",
    color: "#FF5CA8",
    bgColor: "#FFF8FC",
    icon: TrendingDown,
    tag: "Khoảng cách vô hình",
    featured: true,
  },
  {
    value: 37,
    suffix: "%",
    label: "Lưu giữ kiến thức",
    sublabel: "kiến thức được giữ lại",
    description: "Điều thực sự quan trọng",
    color: "#FF8BC2",
    bgColor: "#FFF0F8",
    icon: AlertTriangle,
    tag: "Cốt lõi",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function HiddenGap() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hidden-gap" className="py-24 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
            Phần 02 — Khoảng cách vô hình
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-6">
            Những con số bạn tin tưởng{" "}
            <span className="text-gradient">có thể đang</span> đánh lừa bạn
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Hầu hết doanh nghiệp chỉ theo dõi một chỉ số rồi cho rằng đó là toàn bộ câu chuyện.
            Nhưng thực tế không phải vậy. Có một khoảng cách đáng kể giữa những gì bạn nhìn thấy
            và những gì thực sự đang xảy ra.
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  stat.featured
                    ? "border-[#FF5CA8] shadow-[0_0_40px_rgba(255,92,168,0.12)]"
                    : "border-[rgba(255,92,168,0.1)] card-shadow"
                }`}
                style={{ backgroundColor: stat.bgColor }}
              >
                {stat.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-[#FF5CA8] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Khoảng cách
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: stat.color }}
                  >
                    {stat.tag}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <Icon size={16} style={{ color: stat.color }} />
                  </div>
                </div>

                <div
                  className="text-6xl md:text-7xl font-bold tracking-tight mb-2"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xl font-semibold text-[#1F1F1F] mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-[#6B7280] mb-4">{stat.sublabel}</p>

                {/* Mini progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-auto">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${stat.value}%` } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                    className="h-1.5 rounded-full"
                    style={{ backgroundColor: stat.color }}
                  />
                </div>
                <p className="text-xs text-[#6B7280] mt-2">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative bg-[#1F1F1F] rounded-3xl px-10 md:px-16 py-14 md:py-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #FF5CA8, transparent)", transform: "translate(30%, -30%)" }}
          />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, #FF8BC2, transparent)", transform: "translate(-30%, 30%)" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-6xl text-[#FF5CA8] leading-none mb-6 font-serif">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
              Có mặt không có nghĩa là{" "}
              <span className="text-[#FF5CA8]">đang tương tác.</span>
            </blockquote>
            <p className="text-[#6B7280] text-base">
              Sự khác biệt giữa hai thực tế này chính là nơi giá trị doanh nghiệp được tạo ra hoặc mất đi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
