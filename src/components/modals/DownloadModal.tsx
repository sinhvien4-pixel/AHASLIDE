"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle2, FileText } from "lucide-react";
import type { DownloadResource } from "@/types";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
  resource: DownloadResource | null;
}

export default function DownloadModal({ open, onClose, resource }: DownloadModalProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setLoading(false);
      setForm({ name: "", email: "", company: "", role: "" });
    }, 400);
  };

  const isValid = form.name && form.email && form.company;

  if (!resource) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:bg-[#E5E7EB] transition-colors"
            >
              <X size={14} />
            </button>

            {/* Resource preview */}
            <div className="bg-[#FFF8FC] px-8 pt-8 pb-7 border-b border-[rgba(255,92,168,0.1)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCE7F3] flex items-center justify-center flex-shrink-0">
                  <FileText size={22} className="text-[#FF5CA8]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-wider">
                    {resource.type}
                  </span>
                  <h3 className="font-bold text-[#1F1F1F] text-base mt-0.5 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1">{resource.size}</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-7">
              {!submitted ? (
                <>
                  <h2 className="text-lg font-bold text-[#1F1F1F] mb-1">
                    Tải xuống Tài nguyên Miễn phí
                  </h2>
                  <p className="text-sm text-[#6B7280] mb-5">
                    Nhập thông tin để truy cập ngay lập tức.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { key: "name", label: "Họ và tên", type: "text", placeholder: "Họ và tên" },
                      { key: "email", label: "Email công việc", type: "email", placeholder: "ban@congty.com" },
                      { key: "company", label: "Doanh nghiệp", type: "text", placeholder: "Tên doanh nghiệp" },
                    ].map(({ key, label, type, placeholder }) => (
                      <div key={key}>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">
                          {label} *
                        </label>
                        <input
                          type={type}
                          required
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          placeholder={placeholder}
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">
                        Chức danh
                      </label>
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white"
                      >
                        <option value="">Chọn chức danh (tuỳ chọn)</option>
                        <option>HR Manager / Giám đốc HR</option>
                        <option>L&D Manager / Giám đốc L&D</option>
                        <option>CHRO / Chief People Officer</option>
                        <option>Chuyên gia Đào tạo</option>
                        <option>Khác</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid || loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#FF5CA8] text-white py-3.5 rounded-xl font-semibold text-sm disabled:opacity-50 hover:bg-[#FF8BC2] transition-all shadow-[0_4px_20px_rgba(255,92,168,0.35)] mt-1"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Download size={16} />
                          Tải xuống ngay — Miễn phí
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                    Đang tải xuống!
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-5">
                    Bản sao của &ldquo;{resource.title}&rdquo; đang được tải xuống.
                    Một bản sao cũng đã được gửi đến {form.email}.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleClose(); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF5CA8] hover:underline"
                  >
                    <Download size={14} />
                    Nhấn vào đây nếu tải xuống chưa bắt đầu
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
