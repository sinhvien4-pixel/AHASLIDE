"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ThumbsUp, MessageCircle, Share2, Link2 as LinkedinPlaceholder, Users } from "lucide-react";

interface CommunityProofProps {
  onJoin: () => void;
}

const posts = [
  {
    platform: "LinkedIn",
    author: "Phương Trần",
    role: "L&D Manager · TechVN Corp",
    avatar: "PT",
    avatarColor: "from-[#0077B5] to-[#005885]",
    content:
      "Vừa chạy buổi AhaSlides đầu tiên với theo dõi Engagement theo thời gian thực. Kết quả? Điểm danh 94% như thường lệ... nhưng chỉ có 51% tham gia thực sự. Dữ liệu này đi thẳng vào cuộc họp thiết kế lại đào tạo của chúng tôi tuần tới. Số liệu không nói dối.",
    likes: 234,
    comments: 41,
    time: "2 ngày trước",
    tag: "#L&D #TrainingData",
  },
  {
    platform: "LinkedIn",
    author: "Michael H.",
    role: "CHRO · Retail Group Asia",
    avatar: "MH",
    avatarColor: "from-[#FF5CA8] to-[#FF8BC2]",
    content:
      "Hôm nay có một cuộc trò chuyện thú vị với CEO của chúng tôi. Bà ấy hỏi tại sao ROI đào tạo chưa bao giờ được báo cáo cho hội đồng quản trị. Câu trả lời của tôi: vì chúng tôi chưa bao giờ có dữ liệu. Điều đó thay đổi từ bây giờ. AhaSlides đã cho chúng tôi Dashboard Engagement thực sự đầu tiên vào quý trước.",
    likes: 512,
    comments: 87,
    time: "5 ngày trước",
    tag: "#HRLeadership #TrainingROI",
  },
  {
    platform: "HR Community",
    author: "Linh Ngô",
    role: "Talent Development · Banking Sector",
    avatar: "LN",
    avatarColor: "from-[#6B7280] to-[#9CA3AF]",
    content:
      "Câu hỏi cho cộng đồng: Có ai đã thành công trình bày ROI đào tạo cho CFO chưa? Chúng tôi vừa làm điều đó lần đầu tiên bằng dữ liệu Engagement từ các buổi AhaSlides Q2. Phản ứng hoàn toàn khác với các báo cáo điểm danh thông thường.",
    likes: 389,
    comments: 126,
    time: "1 tuần trước",
    tag: "#HRCommunity",
  },
  {
    platform: "Câu chuyện thành công",
    author: "Đức Nguyễn",
    role: "Training Director · Manufacturing",
    avatar: "DN",
    avatarColor: "from-[#FF8BC2] to-[#FF5CA8]",
    content:
      "6 tháng trước: 'Buổi đào tạo tuyệt vời! Điểm danh 95%!' Hôm nay: 'Điểm Engagement 78%, Lưu giữ Kiến thức 71%, ROI 3.4x giá trị dự kiến.' Cùng đội. Cùng nội dung. Câu chuyện dữ liệu hoàn toàn khác. Đây là Engagement có thể đo lường.",
    likes: 678,
    comments: 94,
    time: "2 tuần trước",
    tag: "#EngagementData #Proof",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function CommunityProof({ onJoin }: CommunityProofProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24 md:py-36 bg-[#FFF8FC]" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#FF5CA8] uppercase tracking-widest mb-4 block">
              Phần 09 — Cộng đồng xác thực
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
              Cuộc trò chuyện{" "}
              <span className="text-gradient">đang diễn ra</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Các HR Leader và chuyên gia L&D đang chia sẻ những khám phá về Engagement
              có thể đo lường trên các mạng chuyên nghiệp — và kết quả là không thể phủ nhận.
            </p>
          </div>

          <button
            onClick={onJoin}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF5CA8] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all shadow-lg hover:-translate-y-0.5"
          >
            <Users size={16} />
            Tham gia Thảo luận
          </button>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border border-[rgba(255,92,168,0.1)] card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Platform badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-[#0077B5]">
                  <LinkedinPlaceholder size={12} />
                  {post.platform}
                </span>
                <span className="text-xs text-[#6B7280]">{post.time}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.avatarColor} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                >
                  {post.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1F1F1F] text-sm">{post.author}</p>
                  <p className="text-[#6B7280] text-xs">{post.role}</p>
                </div>
              </div>

              {/* Content */}
              <p className="text-sm text-[#1F1F1F]/80 leading-relaxed mb-3">
                {post.content}
              </p>

              <span className="text-xs font-semibold text-[#FF5CA8]">{post.tag}</span>

              {/* Engagement bar */}
              <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[rgba(255,92,168,0.08)]">
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors">
                  <ThumbsUp size={12} />
                  {post.likes.toLocaleString()}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors">
                  <MessageCircle size={12} />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#FF5CA8] transition-colors ml-auto">
                  <Share2 size={12} />
                  Chia sẻ
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-[#6B7280] text-sm mb-5">
            Tham gia cùng <span className="font-semibold text-[#1F1F1F]">2.400+</span> HR và L&D professionals trong cộng đồng đo lường Engagement
          </p>
          <button
            onClick={onJoin}
            className="inline-flex items-center gap-2 text-[#FF5CA8] border border-[#FF5CA8] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#FCE7F3] transition-all"
          >
            <Users size={16} />
            Tham gia Cộng đồng HR Engagement →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
