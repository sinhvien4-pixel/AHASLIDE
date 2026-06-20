"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, BarChart3, BookOpen, ArrowRight } from "lucide-react";
import type { DownloadResource } from "@/types";

interface DownloadCenterProps {
  onDownload: (resource: DownloadResource) => void;
}

const resources: DownloadResource[] = [
  {
    id: "engagement-report",
    title: "Báo cáo Engagement Đo lường được 2024",
    description:
      "Hướng dẫn toàn diện về đo lường Engagement đào tạo. Bao gồm chuẩn mực, mô hình chấm điểm và 15 tình huống thực tế từ khắp Đông Nam Á.",
    type: "Báo cáo PDF",
    size: "4.2 MB",
  },
  {
    id: "roi-framework",
    title: "Khung ROI Đào tạo",
    description:
      "Khung từng bước để tính toán, truyền đạt và liên tục cải thiện ROI đào tạo trong tổ chức mọi quy mô.",
    type: "PDF Khung thực hành",
    size: "2.8 MB",
  },
  {
    id: "analytics-guide",
    title: "Hướng dẫn Phân tích Engagement",
    description:
      "Hướng dẫn kỹ thuật thiết lập quy trình phân tích Engagement, Dashboard và báo cáo tự động sử dụng dữ liệu AhaSlides.",
    type: "Hướng dẫn Triển khai",
    size: "3.5 MB",
  },
];

const resourceIcons = [FileText, BarChart3, BookOpen];
const resourceColors = ["#FF5CA8", "#6B7280", "#FF8BC2"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function DownloadCenter({ onDownload }: DownloadCenterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="downloads" className="py-24 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Tài nguyên miễn phí{" "}
            <span className="text-gradient">dành cho HR Leaders</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Báo cáo, khung thực hành và hướng dẫn chuyên sâu — được xây dựng riêng
            cho HR và L&D Leaders cần vượt qua giới hạn của số liệu điểm danh.
          </p>
        </motion.div>

        {/* Resource cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, i) => {
            const Icon = resourceIcons[i];
            const color = resourceColors[i];
            return (
              <motion.div
                key={resource.id}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                className="group bg-white rounded-2xl p-7 border border-[rgba(255,92,168,0.1)] card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Type badge */}
                <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  {resource.type}
                </span>

                <h3 className="text-lg font-bold text-[#1F1F1F] mt-2 mb-3 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                  {resource.description}
                </p>

                {/* Size indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex-1 bg-gray-100 rounded-full h-1">
                    <div
                      className="h-1 rounded-full"
                      style={{
                        backgroundColor: color,
                        width: `${(parseFloat(resource.size) / 5) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-[#6B7280]">{resource.size}</span>
                </div>

                {/* Download button */}
                <button
                  onClick={() => onDownload(resource)}
                  className="group w-full flex items-center justify-between bg-[#FFF8FC] hover:bg-[#FCE7F3] border border-[rgba(255,92,168,0.15)] hover:border-[#FF5CA8] rounded-xl px-4 py-3 transition-all duration-200"
                >
                  <div className="flex items-center gap-2">
                    <Download size={14} style={{ color }} />
                    <span className="text-sm font-semibold" style={{ color }}>
                      Tải miễn phí
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-[#6B7280] group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#1F1F1F] to-[#2D2028] rounded-3xl px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">
              Muốn tất cả trong một nơi?
            </p>
            <p className="text-white/50 text-sm">
              Tải xuống cả ba tài nguyên với một biểu mẫu — và nhận lời mời tham gia webinar trực tiếp tiếp theo.
            </p>
          </div>
          <button
            onClick={() => onDownload(resources[0])}
            className="flex-shrink-0 flex items-center gap-2 bg-[#FF5CA8] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all shadow-[0_0_30px_rgba(255,92,168,0.4)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Download size={16} />
            Tải xuống Trọn bộ
          </button>
        </motion.div>
      </div>
    </section>
  );
}
