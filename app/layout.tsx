import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC, Ma_Shan_Zheng } from 'next/font/google';
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

// 配置字体
const notoSerifSC = Noto_Serif_SC({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  // 注意：Google Fonts 的 SC 子集可能需要 preload: false，如果 Next.js 报错再调整
  preload: false, 
});

const notoSansSC = Noto_Sans_SC({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: false,
});

const maShanZheng = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "茶旅 | IT人的茶生活",
  description: "用技术人的严谨做一杯好茶，用文字记录生活与思考。分享读书心得、生活感悟、做茶日常与茶文化。",
  keywords: ["茶文化", "读书笔记", "生活随笔", "IT转型", "茶产品", "健康生活"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSerifSC.variable} ${notoSansSC.variable} ${maShanZheng.variable}`}>
      <body className={cn(
        "antialiased bg-[#F6F2EB] text-[#2A2624] grain-texture",
        // 默认使用无衬线体，标题显式使用 serif
        "font-sans" 
      )}>
        <Navigation />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
