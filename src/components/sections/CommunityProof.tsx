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
      "Just ran our first AhaSlides session with real-time engagement tracking. The result? 94% attendance as usual... but only 51% active participation. This data is going straight to our training redesign meeting next week. The numbers don't lie.",
    likes: 234,
    comments: 41,
    time: "2 days ago",
    tag: "#L&D #TrainingData",
  },
  {
    platform: "LinkedIn",
    author: "Michael H.",
    role: "CHRO · Retail Group Asia",
    avatar: "MH",
    avatarColor: "from-[#FF5CA8] to-[#FF8BC2]",
    content:
      "Had an interesting conversation with our CEO today. She asked why training ROI is never reported to the board. My answer: because we never had the data. That changes now. AhaSlides gave us our first real engagement dashboard last quarter.",
    likes: 512,
    comments: 87,
    time: "5 days ago",
    tag: "#HRLeadership #TrainingROI",
  },
  {
    platform: "HR Community",
    author: "Linh Ngô",
    role: "Talent Development · Banking Sector",
    avatar: "LN",
    avatarColor: "from-[#6B7280] to-[#9CA3AF]",
    content:
      "Question for the community: Has anyone successfully presented training ROI to a CFO? We just did it for the first time using engagement data from our Q2 AhaSlides sessions. The reaction was completely different from our usual attendance reports.",
    likes: 389,
    comments: 126,
    time: "1 week ago",
    tag: "#HRCommunity",
  },
  {
    platform: "Success Story",
    author: "Đức Nguyễn",
    role: "Training Director · Manufacturing",
    avatar: "DN",
    avatarColor: "from-[#FF8BC2] to-[#FF5CA8]",
    content:
      "6 months ago: 'Great training day! 95% attendance!' Today: 'Engagement Score 78%, Knowledge Retention 71%, ROI 3.4x projected value.' Same team. Same content. Completely different data story. This is what measurable engagement looks like.",
    likes: 678,
    comments: 94,
    time: "2 weeks ago",
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
              Section 09 — Community Proof
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight mb-4">
              The Conversation Is{" "}
              <span className="text-gradient">Already Happening</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              HR leaders and L&D professionals are sharing their measurable
              engagement discoveries across professional networks — and the
              results are undeniable.
            </p>
          </div>

          <button
            onClick={onJoin}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF5CA8] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#FF8BC2] transition-all shadow-lg hover:-translate-y-0.5"
          >
            <Users size={16} />
            Join the Discussion
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
                  Share
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
            Join <span className="font-semibold text-[#1F1F1F]">2,400+</span> HR and L&D professionals in our engagement measurement community
          </p>
          <button
            onClick={onJoin}
            className="inline-flex items-center gap-2 text-[#FF5CA8] border border-[#FF5CA8] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#FCE7F3] transition-all"
          >
            <Users size={16} />
            Join HR Engagement Community →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
