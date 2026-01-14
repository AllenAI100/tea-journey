'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const journalList = [
  {
    title: '为什么从IT转行做茶：一个技术人的选择',
    excerpt: '在代码世界摸爬十几年，我决定换一种方式理解世界。不是冲动，是对生活方式的重新思考...',
    date: '2024.01.10',
    path: '/tea-journal/why-tea',
    category: '做茶日记'
  },
  {
    title: '寻茶记：武夷山的三天',
    excerpt: '为了找到合适的大红袍，我在武夷山待了三天。上山、看厂、试茶，每一步都不能省...',
    date: '2024.12.22',
    path: '/tea-journal/wuyi-trip',
    category: '产品故事'
  },
  {
    title: '岩茶是怎么做出来的',
    excerpt: '从采摘到成品，岩茶需要经过十几道工序。每一步都影响着最终的香气和口感...',
    date: '2024.12.15',
    path: '/tea-journal/how-yancha-made',
    category: '茶知识'
  }
];

const categories = ['全部', '做茶日记', '产品故事', '茶知识'];

export default function TeaJournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredList = selectedCategory === '全部'
    ? journalList
    : journalList.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      <PageHeader
        title="做茶日记"
        englishTitle="Tea Journal"
        description="记录每一次水与叶的相遇。在制茶与品鉴中，重新学习敬畏自然。"
        image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1600&q=80" // 茶席特写
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-6 relative z-30">
        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all tracking-wide shadow-sm ${
                selectedCategory === cat
                  ? 'bg-[#1A1816] text-[#F6F2EB]'
                  : 'bg-white text-[#5A5654] border border-[#E0D8CC] hover:border-[#A69078] hover:text-[#A69078]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Featured Statement */}
        <div className="mb-16 p-6 bg-[#F0EBE3] rounded-2xl text-center border border-[#E0D8CC] reveal">
          <p className="text-[#3A3634] font-serif text-base leading-relaxed">
            <span className="text-[#A69078] font-medium">我的做茶理念：</span>
            顺应天时，尊重风土。不追求工业化的标准答案，只寻找大自然的本真风味。
          </p>
        </div>
        
        <div className="grid gap-8">
          {filteredList.map((post, index) => (
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