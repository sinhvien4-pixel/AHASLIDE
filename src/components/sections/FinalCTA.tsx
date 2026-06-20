"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Download, ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onBookDemo: () => void;
  onDownload: () => void;
}

export default function FinalCTA({ onBookDemo, onDownload }: FinalCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="final-cta" className="py-24 md:py-40 bg-[#1F1F1F] relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,92,168,0.3), transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,92,168,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,168,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5CA8] animate-pulse" />
            <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
              Thời điểm Quyết định
            </span>
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
        >
          Biến Engagement{" "}
          <span className="text-gradient">thành dữ liệu chứng minh</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-white/50 font-light">
            Ngừng phỏng đoán.
          </p>
          <p className="text-xl md:text-2xl text-white/80 font-semibold">
            Bắt đầu đo lường.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={onBookDemo}
            className="group inline-flex items-center justify-center gap-3 bg-[#FF5CA8] text-white px-8 py-5 rounded-2xl font-bold text-base hover:bg-[#FF8BC2] transition-all shadow-[0_0_40px_rgba(255,92,168,0.5)] hover:shadow-[0_0_60px_rgba(255,92,168,0.7)] hover:-translate-y-1"
          >
            <CalendarCheck size={18} />
            Đăng ký ROI Demo Room
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onDownload}
            className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-base border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1"
          >
            <Download size={18} />
            Tải báo cáo
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
        >
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> ROI Demo Miễn phí
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Không cần Thẻ tín dụng
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Cá nhân hóa theo Ngành
          </span>
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span> Buổi demo 45 phút
          </span>
        </motion.div>
      </div>
    </section>
  );
}
