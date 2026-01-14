'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const readingList = [
  {
    title: '《茶之书》笔记：东方美学的现代解读',
    excerpt: '冈仓天三的茶道哲学，在百年后的今天依然能给我们关于生活美学的启发...',
    date: '2024.03.15',
    path: '/reading/book-of-tea',
    category: '茶文化/健康'
  },
  {
    title: '《思考，快与慢》',
    excerpt: '人类的思维有两套系统：快思考依赖直觉，慢思考依赖理性。了解它们如何工作，我们能做出更明智的决策...',
    date: '2024-12-28',
    path: '/reading/thinking-fast-slow',
    category: '哲学/思考'
  },
  {
    title: '《瓦尔登湖》',
    excerpt: '梭罗在瓦尔登湖畔的两年，是对简单生活的实践。做茶之后，我更能理解那种远离喧嚣、回归本真的选择...',
    date: '2024-12-15',
    path: '/reading/walden',
    category: '文学/生活'
  }
];

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      <PageHeader
        title="读书笔记"
        englishTitle="Reading Notes"
        description="在字里行间，寻找生活的注脚。阅读不是为了获取信息，而是为了唤醒思考。"
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80" // 书堆与眼镜
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-30">
        <div className="grid gap-8">
          {readingList.map((post, index) => (
            <motion.div
              key={post.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={post.path} className="group block">
                <article className="bg-white p-8 rounded-2xl border border-[#E0D8CC] hover:border-[#A69078]/50 hover:shadow-lg hover:shadow-[#A69078]/5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-widest text-[#A69078] font-bold">
                      {post.category}
                    </span>
                    <span className="h-px w-4 bg-[#E0D8CC]"></span>
                    <span className="text-sm text-[#8A8690] font-serif italic">{post.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-serif mb-3 text-[#1A1816] group-hover:text-[#A69078] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#5A5654] leading-relaxed font-light mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-[#1A1816] font-medium group-hover:text-[#A69078] transition-colors">
                    <span className="text-sm tracking-wide">阅读全文</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
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