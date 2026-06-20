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
    type: "Báo cáo Nghiên cứu",
    title: "Khung đo lường Engagement 2024",
    description:
      "Phân tích toàn diện về cách 500+ doanh nghiệp đo lường hiệu quả đào tạo — và điều gì tạo ra sự khác biệt giữa các tổ chức dẫn đầu và những tổ chức còn lại.",
    readTime: "Đọc 12 phút",
    featured: true,
    tag: "Mới",
  },
  {
    icon: BookOpen,
    type: "Tài liệu Chuyên sâu",
    title: "Vượt qua Kirkpatrick: Mô hình ROI đào tạo hiện đại",
    description:
      "Cách các đội L&D hiện đại vượt qua khung đánh giá cũ để xây dựng trí tuệ Engagement theo thời gian thực.",
    readTime: "Đọc 8 phút",
    tag: "Phổ biến",
  },
  {
    icon: BarChart3,
    type: "Thông tin Ngành",
    title: "Báo cáo Chuẩn mực HR Việt Nam Q3 2024",
    description:
      "Dữ liệu độc quyền về tỷ lệ Engagement trong các ngành tăng trưởng nhanh nhất Việt Nam. Doanh nghiệp của bạn đang đứng ở đâu?",
    readTime: "Đọc 15 phút",
    tag: "Độc quyền",
  },
  {
    icon: Users2,
    type: "Tình huống thực tế",
    title: "Từ 95% điểm danh đến 89% lưu giữ kiến thức",
    description:
      "Cách một tập đoàn sản xuất Fortune 500 chuyển đổi chương trình L&D với dữ liệu Engagement có thể đo lường.",
    readTime: "Đọc 6 phút",
    tag: "Tình huống",
  },
  {
    icon: Lightbulb,
    type: "Khung thực hành",
    title: "Mô hình Engagement 5 bước có thể đo lường",
    description:
      "Hướng dẫn triển khai thực tế dành cho HR Leaders cần chứng minh giá trị đào tạo với ban lãnh đạo cấp cao.",
    readTime: "Đọc 10 phút",
    tag: "Khung thực hành",
  },
  {
    icon: Compass,
    type: "Công cụ Tương tác",
    title: "Tính ROI đào tạo của bạn trong 5 phút",
    description:
      "Công cụ tính toán tương tác cho thấy chính xác sự thiếu tương tác vô hình đang tiêu tốn bao nhiêu của doanh nghiệp mỗi năm.",
    readTime: "Dùng 5 phút",
    tag: "Tương tác",
  },
];

const tagColors: Record<string, string> = {
  "Mới": "bg-green-50 text-green-600",
  "Phổ biến": "bg-blue-50 text-blue-600",
  "Độc quyền": "bg-purple-50 text-purple-600",
  "Tình huống": "bg-orange-50 text-orange-600",
  "Khung thực hành": "bg-[#FCE7F3] text-[#FF5CA8]",
  "Tương tác": "bg-yellow-50 text-yellow-600",
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
              Dữ liệu thay cho{" "}
              <span className="text-gradient">phỏng đoán</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Thư viện tài nguyên chuyên biệt chứa đựng nghiên cứu, khung thực hành, báo cáo
              và thông tin Engagement — được xây dựng dành riêng cho HR và L&D Leaders cần dữ liệu.
            </p>
          </div>

          {!isUnlocked ? (
            <button
              onClick={onUnlock}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF5CA8] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(255,92,168,0.4)] hover:-translate-y-0.5"
            >
              <Unlock size={16} />
              Mở khóa toàn bộ tài nguyên
            </button>
          ) : (
            <div className="flex-shrink-0 inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3.5 rounded-xl font-semibold border border-green-200">
              <Unlock size={16} />
              Knowledge Hub đã mở khóa
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
                      Mở khóa để đọc →
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
                    Đọc ngay
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
                Truy cập toàn bộ Knowledge Hub
              </p>
              <p className="text-white/60 text-sm">
                6 báo cáo nghiên cứu, tài liệu chuyên sâu, tình huống thực tế và công cụ tương tác — truy cập miễn phí.
              </p>
            </div>
            <button
              onClick={onUnlock}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF5CA8] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all whitespace-nowrap shadow-[0_0_30px_rgba(255,92,168,0.4)]"
            >
              <Unlock size={16} />
              Mở khóa miễn phí
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
