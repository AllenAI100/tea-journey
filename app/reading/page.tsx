'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const readingList = [
  {
    title: '《茶之书》笔记：东方美学的现代解读',
    excerpt: '冈仓天三的茶道哲学，在百年后的今天依然能给我们关于生活美学的启发...',
    date: '2024.03.15',
    path: '/reading/book-of-tea',
    category: '茶文化/健康',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80'
  },
  {
    title: '《思考，快与慢》',
    excerpt: '人类的思维有两套系统：快思考依赖直觉，慢思考依赖理性。了解它们如何工作，我们能做出更明智的决策...',
    date: '2024-12-28',
    path: '/reading/thinking-fast-slow',
    category: '哲学/思考',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80'
  },
  {
    title: '《瓦尔登湖》',
    excerpt: '梭罗在瓦尔登湖畔的两年，是对简单生活的实践。做茶之后，我更能理解那种远离喧嚣、回归本真的选择...',
    date: '2024-12-15',
    path: '/reading/walden',
    category: '文学/生活',
    image: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=400&q=80'
  }
];

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHeader
        title="读书笔记"
        englishTitle="Reading Notes"
        description="在字里行间，寻找生活的注脚。阅读不是为了获取信息，而是为了唤醒思考。"
      />

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-30">
        <div className="grid gap-10">
          {readingList.map((post, index) => (
            <motion.div
              key={post.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link href={post.path} className="group block">
                <article className="bg-card p-6 rounded-2xl border border-border hover:border-tea-brown hover:shadow-[0_20px_40px_-15px_rgba(193,159,110,0.15)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  
                  {/* 封面图区域 - 模拟实体书 */}
                  <div className="w-full md:w-32 lg:w-40 flex-shrink-0 aspect-[2/3] relative rounded shadow-md overflow-hidden bg-tea-warm/20 group-hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* 书脊光影效果 */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-white/40 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded"></div>
                  </div>

                  {/* 内容区域 */}
                  <div className="flex-1 py-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-widest text-tea-brown font-bold font-mono">
                        {post.category}
                      </span>
                      <span className="h-px w-4 bg-border"></span>
                      <span className="text-sm text-text-faint font-mono">{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-text-light font-soft leading-relaxed font-light mb-6 line-clamp-3 text-base">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm tracking-wide border-b border-foreground pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors">阅读全文</span>
                      <ArrowRight className="w-4 h-4 ml-2 text-tea-brown" />
                    </div>
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