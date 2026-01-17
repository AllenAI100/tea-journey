'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const essaysList = [
  {
    title: '慢下来，才能看见生活的纹理',
    excerpt: '从前追求效率，现在学会等待。茶教会我的第一件事，就是耐心...',
    date: '2024.03.28',
    path: '/essays/slow-down',
    category: '生活随笔'
  },
  {
    title: '独处的价值',
    excerpt: '在城市里，我们习惯了被信息填满。但独处时，泡一杯茶，什么都不做，才能真正听见自己的声音...',
    date: '2024.12.10',
    path: '/essays/value-of-solitude',
    category: '日常感悟'
  },
  {
    title: '关于"好生活"的思考',
    excerpt: '什么样的人生值得过？这个问题没有标准答案。但对我来说，是有选择权，能做自己相信的事...',
    date: '2024.12.05',
    path: '/essays/what-is-good-life',
    category: '价值观'
  }
];

export default function EssaysPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHeader
        title="生活随笔"
        englishTitle="Essays & Thoughts"
        description="在喧嚣之外，重建内心的秩序。记录那些不一定正确，但一定真实的思考片段。"
      />

      <main className="max-w-6xl mx-auto px-6 py-20 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {essaysList.map((post, index) => (
            <motion.div
              key={post.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link href={post.path} className="group block h-full">
                <article className="h-full bg-card p-8 md:p-10 rounded-2xl border border-border hover:border-tea-brown hover:shadow-[0_20px_40px_-15px_rgba(193,159,110,0.15)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col relative overflow-hidden">
                  
                  {/* 装饰背景：巨大的引号水印 */}
                  <Quote className="absolute top-6 right-8 w-24 h-24 text-tea-brown/5 rotate-180 pointer-events-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                  
                  {/* 顶部元数据 */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span className="text-xs uppercase tracking-widest text-tea-brown font-bold font-mono py-1 px-3 border border-tea-brown/20 rounded-full bg-tea-brown/5">
                      {post.category}
                    </span>
                    <time className="text-xs text-text-faint font-mono tracking-wider">
                      {post.date}
                    </time>
                  </div>
                  
                  {/* 核心内容：引言式摘要 */}
                  <div className="flex-1 mb-8 relative z-10">
                    <p className="text-xl md:text-2xl text-foreground font-soft font-light leading-relaxed line-clamp-4 group-hover:text-primary transition-colors duration-300">
                      “{post.excerpt}”
                    </p>
                  </div>
                  
                  {/* 底部署名/标题 */}
                  <div className="pt-6 border-t border-border mt-auto relative z-10 flex items-center justify-between group-hover:border-primary/20 transition-colors">
                    <h2 className="text-sm font-bold tracking-wide text-text-light group-hover:text-foreground transition-colors">
                      {post.title}
                    </h2>
                    <ArrowRight className="w-4 h-4 text-tea-brown opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}