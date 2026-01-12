import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
