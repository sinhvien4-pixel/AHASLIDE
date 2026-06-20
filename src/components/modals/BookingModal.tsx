"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2, CalendarCheck, User, Building2, Clock } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

type Step1 = { name: string; email: string; company: string; role: string };
type Step2 = { teamSize: string; trainingFrequency: string; challenges: string };
type Step3 = { date: string; time: string; timezone: string };

const TIMES = [
  "09:00", "09:30", "10:00", "10:30", "11:00",
  "14:00", "14:30", "15:00", "15:30", "16:00",
];

const DATES = Array.from({ length: 14 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  if (d.getDay() === 0 || d.getDay() === 6) return null;
  return d;
}).filter(Boolean) as Date[];

const stepLabels = ["Personal Info", "Team Context", "Book Session"];
const stepIcons = [User, Building2, CalendarCheck];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState(0);
  const [step1, setStep1] = useState<Step1>({ name: "", email: "", company: "", role: "" });
  const [step2, setStep2] = useState<Step2>({ teamSize: "", trainingFrequency: "", challenges: "" });
  const [step3, setStep3] = useState<Step3>({ date: "", time: "", timezone: "Asia/Ho_Chi_Minh" });
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBook = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setBooked(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(0); setBooked(false); setLoading(false);
      setStep1({ name: "", email: "", company: "", role: "" });
      setStep2({ teamSize: "", trainingFrequency: "", challenges: "" });
      setStep3({ date: "", time: "", timezone: "Asia/Ho_Chi_Minh" });
    }, 400);
  };

  const canProceed1 = step1.name && step1.email && step1.company && step1.role;
  const canProceed2 = step2.teamSize && step2.trainingFrequency;
  const canProceed3 = step3.date && step3.time;

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
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#1F1F1F] to-[#2D1F2B] px-8 pt-7 pb-8 flex-shrink-0">
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={14} />
              </button>
              <div className="w-10 h-10 rounded-2xl bg-[rgba(255,92,168,0.2)] flex items-center justify-center mb-4">
                <CalendarCheck size={18} className="text-[#FF5CA8]" />
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Book ROI Demo Room</h2>
              <p className="text-white/50 text-sm">
                45-minute personalized session · Free · No commitment
              </p>

              {/* Step progress */}
              {!booked && (
                <div className="flex items-center gap-0 mt-6">
                  {stepLabels.map((label, i) => {
                    const StepIcon = stepIcons[i];
                    const active = step === i;
                    const done = step > i;
                    return (
                      <div key={label} className="flex items-center flex-1 last:flex-none">
                        <div className={`flex items-center gap-1.5 flex-shrink-0 ${active ? "opacity-100" : done ? "opacity-70" : "opacity-30"}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${done ? "bg-[#FF5CA8]" : active ? "bg-white" : "bg-white/20"} ${done || active ? "text-[#1F1F1F]" : "text-white"}`}>
                            {done ? "✓" : <StepIcon size={12} />}
                          </div>
                          <span className="text-[10px] text-white/70 hidden sm:block">{label}</span>
                        </div>
                        {i < 2 && (
                          <div className={`flex-1 h-px mx-2 ${done ? "bg-[#FF5CA8]" : "bg-white/20"}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-8 py-7">
              {booked ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-[#FCE7F3] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={40} className="text-[#FF5CA8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-3">
                    Demo Booked Successfully!
                  </h3>
                  <p className="text-[#6B7280] mb-5">
                    Your ROI Demo Room session has been confirmed.
                  </p>
                  <div className="bg-[#FFF8FC] rounded-2xl p-5 text-left space-y-3 border border-[rgba(255,92,168,0.15)]">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Name</span>
                      <span className="font-semibold text-[#1F1F1F]">{step1.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Date</span>
                      <span className="font-semibold text-[#1F1F1F]">{step3.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#6B7280]">Time</span>
                      <span className="font-semibold text-[#1F1F1F]">{step3.time} ({step3.timezone.replace("Asia/", "")})</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-4">
                    A confirmation email has been sent to {step1.email}
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 text-sm font-semibold text-[#FF5CA8] hover:underline"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <h3 className="text-lg font-bold text-[#1F1F1F] mb-5">About You</h3>
                      {[
                        { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                        { key: "email", label: "Business Email", type: "email", placeholder: "you@company.com" },
                        { key: "company", label: "Company", type: "text", placeholder: "Your company" },
                      ].map(({ key, label, type, placeholder }) => (
                        <div key={key}>
                          <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">{label} *</label>
                          <input
                            type={type}
                            required
                            value={step1[key as keyof Step1]}
                            onChange={(e) => setStep1({ ...step1, [key]: e.target.value })}
                            placeholder={placeholder}
                            className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] transition-all"
                          />
                        </div>
                      ))}
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Role *</label>
                        <select
                          required
                          value={step1.role}
                          onChange={(e) => setStep1({ ...step1, role: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white transition-all"
                        >
                          <option value="">Select your role</option>
                          <option>HR Manager / Director</option>
                          <option>L&D Manager / Director</option>
                          <option>CHRO / Chief People Officer</option>
                          <option>Training Consultant</option>
                          <option>Internal Comms Lead</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <h3 className="text-lg font-bold text-[#1F1F1F] mb-5">Your Team Context</h3>
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Team Size *</label>
                        <select
                          value={step2.teamSize}
                          onChange={(e) => setStep2({ ...step2, teamSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white"
                        >
                          <option value="">Select team size</option>
                          <option>1–50 employees</option>
                          <option>51–200 employees</option>
                          <option>201–1,000 employees</option>
                          <option>1,001–5,000 employees</option>
                          <option>5,000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Training Frequency *</label>
                        <select
                          value={step2.trainingFrequency}
                          onChange={(e) => setStep2({ ...step2, trainingFrequency: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white"
                        >
                          <option value="">How often do you train?</option>
                          <option>Weekly</option>
                          <option>Bi-weekly</option>
                          <option>Monthly</option>
                          <option>Quarterly</option>
                          <option>Ad-hoc / Project-based</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Current Challenges</label>
                        <textarea
                          rows={3}
                          value={step2.challenges}
                          onChange={(e) => setStep2({ ...step2, challenges: e.target.value })}
                          placeholder="What engagement or measurement challenges are you facing? (optional)"
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] focus:ring-2 focus:ring-[rgba(255,92,168,0.1)] outline-none text-sm text-[#1F1F1F] placeholder:text-[#9CA3AF] resize-none transition-all"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                      <h3 className="text-lg font-bold text-[#1F1F1F] mb-5">Pick Your Session</h3>

                      {/* Date picker */}
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-3">
                          Select Date *
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {DATES.slice(0, 8).map((d) => {
                            const key = d.toISOString().split("T")[0];
                            const label = d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });
                            return (
                              <button
                                key={key}
                                onClick={() => setStep3({ ...step3, date: label })}
                                className={`p-2 rounded-xl text-center text-xs font-medium border transition-all ${
                                  step3.date === label
                                    ? "bg-[#FF5CA8] text-white border-[#FF5CA8]"
                                    : "bg-white text-[#1F1F1F] border-[rgba(255,92,168,0.2)] hover:border-[#FF5CA8]"
                                }`}
                              >
                                <div className="text-[9px] opacity-70">{label.split(", ")[0]}</div>
                                <div className="font-bold">{label.split(", ")[1]?.split(" ")[1]}</div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time picker */}
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-3">
                          Select Time *
                        </label>
                        <div className="grid grid-cols-5 gap-2">
                          {TIMES.map((t) => (
                            <button
                              key={t}
                              onClick={() => setStep3({ ...step3, time: t })}
                              className={`p-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1 ${
                                step3.time === t
                                  ? "bg-[#FF5CA8] text-white border-[#FF5CA8]"
                                  : "bg-white text-[#1F1F1F] border-[rgba(255,92,168,0.2)] hover:border-[#FF5CA8]"
                              }`}
                            >
                              <Clock size={10} />
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Timezone */}
                      <div>
                        <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider block mb-1.5">Timezone</label>
                        <select
                          value={step3.timezone}
                          onChange={(e) => setStep3({ ...step3, timezone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[rgba(255,92,168,0.2)] focus:border-[#FF5CA8] outline-none text-sm text-[#1F1F1F] bg-white"
                        >
                          <option value="Asia/Ho_Chi_Minh">Vietnam (GMT+7)</option>
                          <option value="Asia/Bangkok">Thailand (GMT+7)</option>
                          <option value="Asia/Singapore">Singapore (GMT+8)</option>
                          <option value="Asia/Jakarta">Indonesia (GMT+7)</option>
                          <option value="Asia/Tokyo">Japan (GMT+9)</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {!booked && (
              <div className="px-8 py-5 border-t border-[rgba(255,92,168,0.1)] flex items-center justify-between flex-shrink-0">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#1F1F1F] transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Back
                  </button>
                ) : (
                  <button
                    onClick={handleClose}
                    className="text-sm font-medium text-[#6B7280] hover:text-[#1F1F1F] transition-colors"
                  >
                    Cancel
                  </button>
                )}

                {step < 2 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={step === 0 ? !canProceed1 : !canProceed2}
                    className="flex items-center gap-2 bg-[#FF5CA8] text-white px-6 py-2.5 rounded-xl font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF8BC2] transition-all"
                  >
                    Continue
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleBook}
                    disabled={!canProceed3 || loading}
                    className="flex items-center gap-2 bg-[#FF5CA8] text-white px-6 py-2.5 rounded-xl font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FF8BC2] transition-all"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <CalendarCheck size={14} />
                        Confirm Booking
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
