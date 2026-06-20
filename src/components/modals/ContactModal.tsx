"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2, Send } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
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
    setTimeout(() => { setSubmitted(false); setLoading(false); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }, 400);
  };

  const isValid = form.name && form.email && form.message;

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }} className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-8 pt-7 pb-6 border-b border-[rgba(255,92,168,0.1)] flex-shrink-0">
              <button onClick={handleClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280] hover:bg-[#E5E7EB] transition-colors"><X size={14} /></button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FCE7F3] flex items-center justify-center"><Mail size={18} className="text-[#FF5CA8]" /></div>
                <div>
                  <h2 className="text-lg font-bold text-[#1F1F1F]">Get in Touch</h2>
                  <p className="text-xs text-[#6B7280]">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Company</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Subject</label>
                    <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white">
                      <option value="">Select a topic</option>
                      <option>ROI Demo Room inquiry</option>
                      <option>Pricing & Plans</option>
                      <option>Enterprise / Large teams</option>
                      <option>Technical support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Message *</label>
                    <textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] resize-none transition-all" />
                  </div>
                  <button type="submit" disabled={!isValid || loading} className="w-full flex items-center justify-center gap-2 bg-[#FF5CA8] text-white py-3.5 rounded-xl font-semibold text-sm disabled:opacity-50 hover:bg-[#FF8BC2] transition-all shadow-[0_4px_20px_rgba(255,92,168,0.35)]">
                    {loading ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} className="text-green-500" /></div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Message Sent!</h3>
                  <p className="text-[#6B7280] text-sm mb-6">Thank you, {form.name}. We&apos;ll respond to {form.email} within 24 hours.</p>
                  <button onClick={handleClose} className="text-sm font-semibold text-[#FF5CA8] hover:underline">Close</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
