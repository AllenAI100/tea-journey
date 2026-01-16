import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

// 配置本地手写字体 (请确保 app/fonts/MaShanZheng-Regular.ttf 存在)
const maShanZheng = localFont({
  src: './fonts/MaShanZheng-Regular.ttf',
  variable: '--font-handwriting',
  display: 'swap',
  // 如果字体文件还没下载好，可以暂时注释掉下面这行，防止报错
  weight: '400', 
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
    <html lang="zh-CN">
      <head>
        {/* Google Fonts Mirror (Loli.net) */}
        <link rel="preconnect" href="https://fonts.loli.net" />
        <link rel="preconnect" href="https://gstatic.loli.net" crossOrigin="anonymous" />
        <link 
          href="https://fonts.loli.net/css2?family=LXGW+WenKai+Screen:wght@400;700&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+SC:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={cn(
        "antialiased bg-background text-foreground grain-texture",
        // 注入字体变量
        maShanZheng.variable, 
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
