'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TeaJournal } from 'contentlayer/generated';
import { format } from 'date-fns';

interface TeaJournalListProps {
  posts: TeaJournal[];
  categories: string[];
}

export default function TeaJournalList({ posts, categories }: TeaJournalListProps) {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredList = selectedCategory === '全部' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Categories */}
      <div className="flex justify-center flex-wrap gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 tracking-wide border ${
              selectedCategory === cat
                ? 'bg-[#58664A] text-[#F7F5F0] border-[#58664A] shadow-md transform scale-105'
                : 'bg-transparent text-[#6E6862] border-[#E6E0D4] hover:border-[#C19F6E] hover:text-[#24201D] hover:bg-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Featured Statement - 杂志引言风格 */}
      <div className="mb-20 p-8 md:p-10 bg-[#F0EDE6] rounded-xl text-center border border-[#E6E0D4] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C19F6E]/40 to-transparent"></div>
        <p className="text-[#3D3834] font-serif text-lg md:text-xl leading-relaxed italic relative z-10">
          <span className="text-[#C19F6E] font-medium not-italic block mb-3 text-sm tracking-widest uppercase">My Philosophy</span>
          “顺应天时，尊重风土。不追求工业化的标准答案，只寻找大自然的本真风味。”
        </p>
      </div>
      
      <div className="grid gap-12">
        {filteredList.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Link href={post.url} className="group block bg-white p-6 md:p-8 rounded-2xl border border-[#E6E0D4] hover:border-[#C19F6E] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(193,159,110,0.15)]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="w-full md:w-5/12">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-[#D9CDB8] shadow-inner">
                     <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      />
                     <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg z-10"></div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 text-xs tracking-widest text-[#C19F6E] uppercase font-mono font-medium">
                    <span>{format(new Date(post.date), 'yyyy.MM.dd')}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C19F6E]"></span>
                    <span>{post.category || 'Journal'}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#24201D] mb-4 group-hover:text-[#58664A] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#6E6862] font-sans font-light leading-relaxed mb-8 line-clamp-3 text-base">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#24201D] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="border-b border-[#24201D] pb-0.5 group-hover:border-[#58664A] group-hover:text-[#58664A] transition-colors">阅读全文</span>
                    <ArrowRight className="w-4 h-4 ml-2 text-[#C19F6E]" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
