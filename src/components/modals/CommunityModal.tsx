"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, CheckCircle2 } from "lucide-react";

interface CommunityModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CommunityModal({ open, onClose }: CommunityModalProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", focus: "" });
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
    setTimeout(() => { setSubmitted(false); setLoading(false); setForm({ name: "", email: "", company: "", focus: "" }); }, 400);
  };

  const isValid = form.name && form.email;

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#2D2028] px-8 pt-8 pb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #FF5CA8, transparent)", transform: "translate(30%, -30%)" }} />
              <button onClick={handleClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><X size={14} /></button>
              <div className="w-10 h-10 rounded-2xl bg-[rgba(255,92,168,0.2)] flex items-center justify-center mb-4"><Users size={18} className="text-[#FF5CA8]" /></div>
              <h2 className="text-xl font-bold text-white mb-1">Tham gia Thảo luận</h2>
              <p className="text-white/50 text-sm">Kết nối với 2.400+ HR và L&D professionals đang đo lường Engagement.</p>
            </div>

            <div className="px-8 py-7">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "name", label: "Họ và tên", type: "text", placeholder: "Họ và tên", required: true },
                    { key: "email", label: "Email", type: "email", placeholder: "ban@congty.com", required: true },
                    { key: "company", label: "Doanh nghiệp", type: "text", placeholder: "Tên doanh nghiệp", required: false },
                  ].map(({ key, label, type, placeholder, required }) => (
                    <div key={key}>
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">{label}{required && " *"}</label>
                      <input type={type} required={required} value={form[key as keyof typeof form]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all" />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Mục tiêu chính</label>
                    <select value={form.focus} onChange={(e) => setForm({ ...form, focus: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white">
                      <option value="">Mục tiêu của bạn là gì?</option>
                      <option>Đo lường ROI đào tạo</option>
                      <option>Cải thiện tỷ lệ Engagement</option>
                      <option>Xây dựng luận cứ kinh doanh cho L&D</option>
                      <option>So sánh với chuẩn mực ngành</option>
                      <option>Học hỏi chung</option>
                    </select>
                  </div>
                  <button type="submit" disabled={!isValid || loading} className="w-full flex items-center justify-center gap-2 bg-[#FF5CA8] text-white py-3.5 rounded-xl font-semibold text-sm disabled:opacity-50 hover:bg-[#FF8BC2] transition-all shadow-[0_4px_20px_rgba(255,92,168,0.35)] mt-1">
                    {loading ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><Users size={15} /> Tham gia Cộng đồng — Miễn phí</>}
                  </button>
                  <p className="text-center text-xs text-[#9CA3AF]">Miễn phí mãi mãi · Không spam · Rời bất cứ lúc nào</p>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#FCE7F3] flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} className="text-[#FF5CA8]" /></div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Chào mừng đến Cộng đồng!</h3>
                  <p className="text-[#6B7280] text-sm mb-4">Bạn đã tham gia cùng 2.400+ HR và L&D professionals. Kiểm tra email để nhận liên kết mời.</p>
                  <button onClick={handleClose} className="text-sm font-semibold text-[#FF5CA8] hover:underline">Bắt đầu khám phá ���</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
