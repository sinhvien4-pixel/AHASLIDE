"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Unlock } from "lucide-react";

interface ExploreModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ExploreModal({ open, onClose, onSuccess }: ExploreModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    jobTitle: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      onSuccess();
      onClose();
      setSubmitted(false);
      setForm({ fullName: "", company: "", email: "", jobTitle: "" });
    }, 2000);
  };

  const isValid = form.fullName && form.email && form.company && form.jobTitle;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Pink header */}
            <div className="bg-gradient-to-br from-[#FF5CA8] to-[#FF3D9A] px-8 pt-8 pb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }}
              />
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={14} />
              </button>
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Unlock size={18} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Explore the Evidence</h2>
              <p className="text-white/70 text-sm">
                Get free access to AhaSlides&apos; full Knowledge Hub — research, reports, and frameworks.
              </p>
            </div>

            <div className="px-8 py-7 -mt-4 relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">
                      Job Title *
                    </label>
                    <select
                      required
                      value={form.jobTitle}
                      onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] bg-white transition-all"
                    >
                      <option value="">Select your role</option>
                      <option>HR Manager / Director</option>
                      <option>L&D Manager / Director</option>
                      <option>Talent Development Manager</option>
                      <option>Internal Communications Lead</option>
                      <option>CHRO / Chief People Officer</option>
                      <option>Training Consultant</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#FF5CA8] text-white py-3.5 rounded-xl font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FF8BC2] transition-all shadow-[0_4px_20px_rgba(255,92,168,0.4)] hover:shadow-[0_8px_30px_rgba(255,92,168,0.5)] mt-2"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Unlock Knowledge Hub
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-[#9CA3AF]">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                    Knowledge Hub Unlocked!
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    You now have full access to all research, reports and frameworks.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
