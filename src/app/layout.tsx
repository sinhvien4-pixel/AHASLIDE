import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bật AHA, Ra Số Liệu | AhaSlides",
  description:
    "Chuyển hóa Engagement từ phỏng đoán thành bằng chứng. AhaSlides biến mọi tương tác đào tạo thành dữ liệu kinh doanh có thể đo lường.",
  openGraph: {
    title: "Bật AHA, Ra Số Liệu | AhaSlides",
    description:
      "Ngừng đo điểm danh. Bắt đầu đo Engagement. Khám phá cách AhaSlides biến các tương tác đào tạo thành thông tin kinh doanh có thể hành động.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
