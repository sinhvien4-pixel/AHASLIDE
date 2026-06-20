"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Link2, Globe } from "lucide-react";

const experts = [
  {
    name: "Sarah Chen",
    role: "Chief People Officer",
    company: "Unilever SEA",
    category: "HR Leader",
    avatar: "SC",
    avatarColor: "from-[#FF5CA8] to-[#FF8BC2]",
    quote:
      "Chúng tôi mất nhiều năm đo số người trong phòng đào tạo. Khi cuối cùng bắt đầu đo chất lượng Engagement, chúng tôi phát hiện ra các buổi đông người nhất lại có tỷ lệ truyền đạt kiến thức thấp nhất. Dữ liệu đó thay đổi tất cả.",
    stat: "↑ 340% ROI",
  },
  {
    name: "Marcus Reinhardt",
    role: "Global Head of L&D",
    company: "Bosch Vietnam",
    category: "L&D Manager",
    avatar: "MR",
    avatarColor: "from-[#6B7280] to-[#9CA3AF]",
    quote:
      "Ngành đang chuyển dịch từ 'họ có đến không?' sang 'họ có học được không?' Những tổ chức thực hiện chuyển đổi này trước sẽ có lợi thế cạnh tranh đáng kể trong phát triển nhân tài.",
    stat: "↑ 52% Lưu giữ KT",
  },
  {
    name: "TS. Linh Nguyễn",
    role: "Chuyên gia Đào tạo & Tác giả",
    company: "L&D Insight Asia",
    category: "Chuyên gia Đào tạo",
    avatar: "LN",
    avatarColor: "from-[#FF8BC2] to-[#FF5CA8]",
    quote:
      "Mọi tổ chức tôi làm việc cùng đều có bảng tính hiển thị tỷ lệ điểm danh trên 90% — và tất cả đều ngạc nhiên khi chúng tôi cho thấy Engagement thực tế chỉ bằng một nửa con số đó. Khoảng cách này là phổ biến.",
    stat: "8 Năm Nghiên cứu",
  },
  {
    name: "James Okonkwo",
    role: "CHRO & Diễn giả",
    company: "HR Asia Conference",
    category: "Diễn giả",
    avatar: "JO",
    avatarColor: "from-[#1F1F1F] to-[#4B5563]",
    quote:
      "Số liệu điểm danh là diễn kịch của tổ chức. Những L&D Leader thực sự đã ngừng đo ai đến và bắt đầu đo ai thực sự phát triển. Sự khác biệt đó là ranh giới giữa trung tâm chi phí và người tạo ra giá trị.",
    stat: "50+ Hội nghị",
  },
];

const categoryColors: Record<string, string> = {
  "HR Leader": "bg-[#FCE7F3] text-[#FF5CA8]",
  "L&D Manager": "bg-blue-50 text-blue-600",
  "Chuyên gia Đào tạo": "bg-purple-50 text-purple-600",
  "Diễn giả": "bg-[#1F1F1F] text-white",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function ExpertValidation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experts" className="py-24 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
            Phần 06 — Chuyên gia xác nhận
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
            Ngành đang chuyển dịch{" "}
            <span className="text-gradient">vượt ra ngoài điểm danh</span>
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Các chuyên gia dẫn đầu trong HR, L&D và phát triển tổ chức đều
            thống nhất một điểm: số liệu hiện diện không còn đủ nữa.
          </p>
        </motion.div>

        {/* Expert cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="group relative bg-white rounded-2xl p-8 border border-[rgba(255,92,168,0.1)] card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                size={32}
                className="text-[#FCE7F3] mb-4 group-hover:text-[#FF5CA8] transition-colors"
              />

              <blockquote className="text-[#1F1F1F] text-base leading-relaxed mb-7 font-medium">
                &ldquo;{expert.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${expert.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {expert.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F1F1F] text-sm">
                      {expert.name}
                    </p>
                    <p className="text-[#6B7280] text-xs">{expert.role}</p>
                    <p className="text-[#6B7280] text-xs">{expert.company}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[expert.category] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {expert.category}
                  </span>
                  <span className="text-xs font-bold text-[#FF5CA8]">
                    {expert.stat}
                  </span>
                </div>
              </div>

              {/* Bottom action row */}
              <div className="mt-6 pt-4 border-t border-[rgba(255,92,168,0.08)] flex items-center gap-3">
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors">
                  <Link2 size={12} />
                  Kết nối
                </button>
                <span className="text-[#6B7280]/30">·</span>
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors">
                  <Globe size={12} />
                  Hồ sơ
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,92,168,0.1)] rounded-2xl overflow-hidden"
        >
          {[
            { value: "200+", label: "Chuyên gia Ngành" },
            { value: "50+", label: "Quốc gia" },
            { value: "1M+", label: "Nhân viên được tác động" },
            { value: "$4.2B", label: "Ngân sách Đào tạo Tối ưu" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-8 py-6 text-center">
              <p className="text-3xl font-bold text-gradient mb-1">{item.value}</p>
              <p className="text-sm text-[#6B7280]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
