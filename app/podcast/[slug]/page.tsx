'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import AudioPlayer from '@/components/AudioPlayer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { notFound, useParams } from 'next/navigation';
import { getEpisodeBySlug } from '@/lib/podcast-data';
import { Clock, ArrowLeft, Share2 } from 'lucide-react';

export default function EpisodePage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      {/* 1. Cinematic Header: 节目封面作为头图 */}
      <PageHeader
        title={episode.title}
        englishTitle={`Episode ${slug.split('-')[0].replace('ep', '')}`}
        description={episode.excerpt}
        image={episode.coverImage}
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-16 relative z-30">
        
        {/* 2. Player Section: 悬浮感的播放器 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <AudioPlayer 
            src={episode.audioUrl} 
            title={episode.title} 
            className="shadow-xl shadow-[#A69078]/10 bg-white"
          />
        </motion.div>

        {/* 3. Show Notes: 深度阅读区 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 左侧：文章内容 (占 8/12) */}
          <article className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8 text-sm text-[#8A8690] font-mono border-b border-[#E0D8CC] pb-4">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {episode.duration}
              </span>
              <span>•</span>
              <span>{episode.date}</span>
            </div>

            {/* Render HTML Content (模拟 MDX 渲染) */}
            <div 
              className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-[#A69078] prose-blockquote:border-l-[#A69078] prose-blockquote:bg-[#F0EBE3]/30 prose-blockquote:py-2 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: episode.content }}
            />
            
            {/* Navigation Footer */}
            <div className="mt-16 pt-8 border-t border-[#E0D8CC] flex justify-between items-center">
              <Link href="/podcast" className="flex items-center gap-2 text-[#5A5654] hover:text-[#1A1816] transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                返回节目列表
              </Link>
              <button className="flex items-center gap-2 text-[#5A5654] hover:text-[#A69078] transition-colors">
                <Share2 className="w-4 h-4" /> 分享本期
              </button>
            </div>
          </article>

          {/* 右侧：订阅与互动 (占 4/12) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E0D8CC] sticky top-24">
              <h3 className="font-serif text-lg mb-4 text-[#1A1816]">订阅节目</h3>
              <p className="text-sm text-[#5A5654] mb-6 font-light">
                不错过任何一次深谈。支持 Apple Podcast, Spotify 及任意泛用型客户端。
              </p>
              <div className="flex flex-col gap-3">
                <button className="w-full py-2 px-4 rounded-lg bg-[#1A1816] text-[#F6F2EB] text-sm hover:bg-[#3A3634] transition-colors">
                  RSS 订阅链接
                </button>
                <button className="w-full py-2 px-4 rounded-lg border border-[#E0D8CC] text-[#5A5654] text-sm hover:border-[#A69078] hover:text-[#A69078] transition-colors">
                  Apple Podcasts
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
