"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Play } from "lucide-react";
import AnalyticsDashboard from "@/components/ui/AnalyticsDashboard";

interface HeroProps {
  onExplore: () => void;
  onBookDemo: () => void;
}

export default function Hero({ onExplore, onBookDemo }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1F1F1F]"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/4xyVd-qWTxs?autoplay=1&mute=1&loop=1&playlist=4xyVd-qWTxs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
          title="Background video"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: "scale(1.1)",
            filter: "blur(6px) brightness(0.35) saturate(0.6)",
          }}
          allow="autoplay"
          frameBorder="0"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F]/80 via-[#1F1F1F]/60 to-[rgba(255,92,168,0.15)]" />
        {/* Pink gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#1F1F1F]/90 to-transparent" />
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FF5CA8, transparent)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #FF8BC2, transparent)" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5CA8] animate-pulse" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                Chi phí ẩn của sự thiếu tương tác
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Bạn đang đo{" "}
              <span className="text-[#FF5CA8]">Điểm danh.</span>
              <br />
              Không phải{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Engagement.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF5CA8] to-[#FF8BC2] origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-lg"
            >
              Điểm danh cho bạn biết ai đến.{" "}
              <span className="text-white/85 font-medium">
                Dữ liệu Engagement cho bạn biết ai thực sự tham gia, học được gì và đóng góp như thế nào.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onExplore}
                className="group inline-flex items-center justify-center gap-2 bg-[#FF5CA8] text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-[#FF8BC2] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(255,92,168,0.5)] hover:-translate-y-0.5"
              >
                <Play size={16} className="fill-white group-hover:scale-110 transition-transform" />
                Khám phá dữ liệu
              </button>
              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-xl font-semibold text-base border border-white/25 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Đăng ký ROI Demo Room
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-6 mt-10"
            >
              <div className="flex -space-x-2">
                {["H", "L", "T", "M"].map((char, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#1F1F1F] flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? "#FF5CA8" : "#6B7280"}, ${i % 2 === 0 ? "#FF8BC2" : "#9CA3AF"})`,
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50">
                <span className="text-white/80 font-semibold">500+</span> HR Leaders đã đo lường Engagement
              </p>
            </motion.div>
          </div>

          {/* Right: Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <AnalyticsDashboard />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
