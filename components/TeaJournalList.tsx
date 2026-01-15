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
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm transition-all tracking-wide shadow-sm ${
              selectedCategory === cat
                ? 'bg-[#2C2824] text-[#F6F2EB]'
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
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={post.url} className="group block bg-white p-8 rounded-2xl border border-transparent hover:border-[#A69078]/30 hover:shadow-lg hover:shadow-[#A69078]/5 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-[#E0D8CC]">
                     <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3 text-xs tracking-widest text-[#A69078] uppercase font-mono">
                    <span>{format(new Date(post.date), 'yyyy.MM.dd')}</span>
                    <span>•</span>
                    <span>{post.category || 'Journal'}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-[#2C2824] mb-4 group-hover:text-[#A69078] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#5A5654] font-light leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#2C2824] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    阅读全文 <ArrowRight className="w-4 h-4 ml-2" />
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
