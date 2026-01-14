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
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      <PageHeader
        title="生活随笔"
        englishTitle="Essays & Thoughts"
        description="在喧嚣之外，重建内心的秩序。记录那些不一定正确，但一定真实的思考片段。"
        image="https://images.unsplash.com/photo-1499750310159-5b5f3d47c5d7?w=1600&q=80" // 晨雾与书写
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-30">
        <div className="grid gap-8">
          {essaysList.map((post, index) => (
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