"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Gauge, BrainCircuit, TrendingUp, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Eye,
    title: "Quan sát",
    description:
      "Ghi nhận mọi tương tác nhỏ theo thời gian thực — bình chọn, Q&A, câu đố, đám mây từ và phản ứng trực tiếp — ngay trong buổi học.",
    visual: {
      label: "Ghi nhận Trực tiếp",
      metrics: ["Bình chọn: 87%", "Q&A: 64%", "Phản ứng: 102"],
      color: "#6B7280",
    },
  },
  {
    number: "02",
    icon: Gauge,
    title: "Đo lường",
    description:
      "Tự động chấm điểm chất lượng tham gia, không chỉ số lượng. Ai trả lời đúng? Ai tương tác sâu? Ai mất tập trung sớm?",
    visual: {
      label: "Điểm Chất lượng",
      metrics: ["Chiều sâu: 78%", "Chính xác: 85%", "Tốc độ: 2.1s"],
      color: "#FF8BC2",
    },
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Phân tích",
    description:
      "Phát hiện xu hướng xuyên suốt các nhóm, buổi học và thời gian. Xác định lỗ hổng kiến thức, điểm giảm Engagement và người học xuất sắc.",
    visual: {
      label: "Phân tích Xu hướng",
      metrics: ["Lỗ hổng: 3", "Xu hướng: +12%", "Rủi ro: 2 người"],
      color: "#FF5CA8",
    },
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Cải tiến",
    description:
      "Hành động từ dữ liệu thực. Thiết kế lại nội dung, điều chỉnh cách triển khai và can thiệp có mục tiêu dựa trên những gì số liệu thực sự tiết lộ — không phải phỏng đoán.",
    visual: {
      label: "Cải tiến",
      metrics: ["Nội dung: A+", "Triển khai: ↑", "Tác động: +23%"],
      color: "#FF5CA8",
    },
  },
  {
    number: "05",
    icon: Trophy,
    title: "Chứng minh tác động",
    description:
      "Tạo báo cáo sẵn sàng cho ban lãnh đạo, thể hiện ROI đào tạo, mức tăng Engagement, lưu giữ kiến thức và kết quả kinh doanh — chỉ với một cú click.",
    visual: {
      label: "Báo cáo ROI",
      metrics: ["ROI: 340%", "Lưu giữ KT: +41%", "Giá trị: $2.1M"],
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
              Bước {step.number}
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
            Phần 04 — Phương pháp đo lường
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Đo lường{" "}
            <span className="text-gradient">Engagement</span> là gì?
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Phương pháp 5 bước chuyển hóa quan sát chủ quan thành dữ liệu kinh doanh khách quan,
            có thể hành động ngay lập tức.
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
                      Bước {activeData.number}
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
                          { label: "Đám mây từ", v: 92 },
                          { label: "Bình chọn trực tiếp", v: 87 },
                          { label: "Hoạt động Q&A", v: 64 },
                          { label: "Phản ứng Emoji", v: 78 },
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
                          { label: "Điểm Chiều sâu", value: "78%" },
                          { label: "Tỷ lệ chính xác", value: "85%" },
                          { label: "Phản hồi TB", value: "2.1s" },
                          { label: "Hoàn thành", value: "91%" },
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
                          <p className="text-xs text-red-400 font-semibold mb-1">⚠ Phát hiện lỗ hổng kiến thức</p>
                          <p className="text-xs text-white/50">Mô-đun 3: Phân tích dữ liệu — 3 thành viên dưới ngưỡng</p>
                        </div>
                        <div className="bg-green-950/30 border border-green-900/30 rounded-xl p-3">
                          <p className="text-xs text-green-400 font-semibold mb-1">✓ Xu hướng tích cực</p>
                          <p className="text-xs text-white/50">Engagement tổng thể tăng +12% so với quý trước</p>
                        </div>
                        <div className="bg-yellow-950/30 border border-yellow-900/30 rounded-xl p-3">
                          <p className="text-xs text-yellow-400 font-semibold mb-1">🔍 Giảm Engagement ở phút 23</p>
                          <p className="text-xs text-white/50">Engagement giảm nhất quán ở các phần giảng nhiều</p>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-3">
                        {[
                          { label: "Thiết kế lại nội dung", status: "Đã áp dụng", color: "text-green-400" },
                          { label: "Thêm 3 phần tương tác", status: "Đã lên lịch", color: "text-blue-400" },
                          { label: "Coaching mục tiêu × 2", status: "Đang thực hiện", color: "text-yellow-400" },
                          { label: "Engagement +23%", status: "Đã đo được", color: "text-[#FF5CA8]" },
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
                        <p className="text-white/50 text-sm mb-4">ROI Đào tạo</p>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { l: "Lưu giữ KT", v: "+41%" },
                            { l: "Giá trị KD", v: "$2.1M" },
                            { l: "Điểm NPS", v: "9.2" },
                            { l: "Ban LD chấp thuận", v: "100%" },
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
