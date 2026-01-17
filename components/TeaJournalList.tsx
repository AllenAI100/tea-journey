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
                ? 'bg-primary text-background border-primary shadow-md transform scale-105'
                : 'bg-transparent text-text-light border-border hover:border-tea-brown hover:text-foreground hover:bg-card'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="grid gap-20">
        {filteredList.map((post, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link href={post.url} className="group block">
                <article className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-3/5">
                    <div className="aspect-[3/2] relative overflow-hidden rounded-2xl shadow-xl shadow-tea-brown/10 group-hover:shadow-2xl group-hover:shadow-tea-brown/20 transition-all duration-500">
                       <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                        />
                       {/* 叠加微弱的纹理，增加质感 */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-50"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
                    <div className={`flex items-center gap-3 mb-6 text-xs tracking-[0.2em] text-tea-brown uppercase font-mono font-medium justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      <span>{format(new Date(post.date), 'yyyy.MM.dd')}</span>
                      <span className="w-1 h-1 rounded-full bg-tea-brown"></span>
                      <span>{post.category || 'Journal'}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-text-light font-soft text-lg leading-relaxed mb-8 line-clamp-4 font-light">
                      {post.excerpt}
                    </p>
                    
                    <div className={`flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform duration-300 justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      <span className="text-sm tracking-widest border-b border-foreground pb-1 group-hover:border-primary group-hover:text-primary transition-colors">READ MORE</span>
                      <ArrowRight className="w-4 h-4 ml-3 text-tea-brown" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
