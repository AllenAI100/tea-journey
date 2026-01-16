'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-30">
        <div className="grid gap-10">
          {essaysList.map((post, index) => (
            <motion.div
              key={post.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link href={post.path} className="group block">
                <article className="bg-card p-8 md:p-10 rounded-2xl border border-border hover:border-tea-brown hover:shadow-[0_20px_40px_-15px_rgba(193,159,110,0.15)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs uppercase tracking-widest text-tea-brown font-bold font-mono">
                      {post.category}
                    </span>
                    <span className="h-px w-4 bg-border"></span>
                    <span className="text-sm text-text-faint font-mono">{post.date}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-text-light font-soft leading-relaxed font-light mb-8 line-clamp-2 text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm tracking-wide border-b border-foreground pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors">阅读全文</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-tea-brown" />
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