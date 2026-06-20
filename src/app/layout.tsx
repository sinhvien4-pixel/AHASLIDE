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
  title: "Bật AHA, Ra Số Liệu | Turn on AHA, Get the Data",
  description:
    "Transform engagement from assumptions into evidence. AhaSlides turns every training interaction into measurable business data.",
  openGraph: {
    title: "Bật AHA, Ra Số Liệu | AhaSlides",
    description:
      "Stop measuring attendance. Start measuring engagement. Discover how AhaSlides turns training interactions into actionable business insights.",
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
