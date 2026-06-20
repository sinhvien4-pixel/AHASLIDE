"use client";

import { Mail, Link2, ExternalLink, Globe } from "lucide-react";

interface FooterProps {
  onContact: () => void;
}

export default function Footer({ onContact }: FooterProps) {
  return (
    <footer className="bg-[#1F1F1F] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5CA8] to-[#FF8BC2] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-white text-lg">AhaSlides</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-4 max-w-xs">
              Chuyển hóa Engagement từ phỏng đoán thành bằng chứng. Nền tảng được xây dựng
              dành riêng cho HR và L&D Leaders cần dữ liệu.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                <Link2 size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                <ExternalLink size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                <Globe size={14} />
              </a>
              <button onClick={onContact} className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white transition-all">
                <Mail size={14} />
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Chiến dịch</p>
            <ul className="space-y-2.5">
              {["Thư viện Dữ liệu", "Phương pháp", "ROI Demo Room", "Chuyên gia Xác nhận", "Tình huống thực tế", "Tải xuống"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">AhaSlides</p>
            <ul className="space-y-2.5">
              {["Tính năng Sản phẩm", "Bảng giá", "Doanh nghiệp lớn", "Tích hợp", "API", "Hỗ trợ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/25 text-xs">
            © 2024 AhaSlides. Chiến dịch: Bật AHA, Ra Số Liệu · Giai đoạn 2: CHỨNG MINH
          </p>
          <div className="flex items-center gap-6">
            {["Chính sách Bảo mật", "Điều khoản Dịch vụ", "Chính sách Cookie"].map((link) => (
              <a key={link} href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
