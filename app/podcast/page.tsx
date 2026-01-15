'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import AudioPlayer from '@/components/AudioPlayer';
import { motion } from 'framer-motion';
import { Mic, Play } from 'lucide-react';
import { episodes } from '@/lib/podcast-data';
import Link from 'next/link';

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      <PageHeader
        title="茶与白噪音"
        englishTitle="Podcast"
        description="声音是比文字更直接的温度。用一杯茶的时间，听见内心的声音。"
        image="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=1600&q=80"
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-30">
        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-[#E0D8CC] shadow-xl shadow-[#A69078]/5 mb-16 text-center"
        >
          <Mic className="w-8 h-8 text-[#A69078] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif text-[#2C2824] mb-6">
            为什么要开始这档播客？
          </h2>
          <p className="text-[#5A5654] leading-relaxed max-w-2xl mx-auto mb-10">
            在短视频充斥的时代，我们失去了“长谈”的耐心。
            <br />
            这里没有倍速，只有真实的思考与煮水声。
          </p>
          
          {/* Latest Episode Player (播放最新一期) */}
          <AudioPlayer 
            src={episodes[0].audioUrl} 
            title={`最新单集: ${episodes[0].title}`}
          />
        </motion.div>

        {/* Episode List (节目列表) */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-serif text-[#2C2824]">往期节目</h2>
            <div className="h-px flex-1 bg-[#E0D8CC]"></div>
          </div>
          
          <div className="grid gap-6">
            {episodes.map((ep, index) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/podcast/${ep.slug}`} className="group block">
                  <article className="flex flex-col md:flex-row gap-6 bg-[#F9F7F4] p-6 rounded-2xl border border-transparent hover:border-[#A69078]/30 hover:bg-white hover:shadow-md transition-all duration-300">
                    {/* 封面图 */}
                    <div className="w-full md:w-48 aspect-square rounded-xl overflow-hidden flex-shrink-0 bg-[#E0D8CC]">
                      <img 
                        src={ep.coverImage} 
                        alt={ep.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-[#A69078] font-mono mb-2 uppercase tracking-wider">
                        <span>{ep.date}</span>
                        <span>•</span>
                        <span>{ep.duration}</span>
                      </div>
                      <h3 className="text-xl font-serif text-[#2C2824] mb-3 group-hover:text-[#A69078] transition-colors">
                        {ep.title}
                      </h3>
                      <p className="text-[#5A5654] text-sm leading-relaxed mb-4 line-clamp-2">
                        {ep.excerpt}
                      </p>
                      <div className="flex items-center text-sm font-medium text-[#2C2824] mt-auto">
                        <div className="w-8 h-8 rounded-full bg-[#2C2824] text-white flex items-center justify-center mr-3 group-hover:bg-[#A69078] transition-colors">
                          <Play className="w-3 h-3 ml-0.5" />
                        </div>
                        收听 / 阅读详情
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div className="text-center bg-[#2C2824] text-[#F6F2EB] rounded-2xl p-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-serif mb-4">想要第一时间收听？</h3>
            <p className="text-white/60 text-sm mb-6">
              节目正在筹备中。订阅邮件，上线时我会通知你。
            </p>
            <button className="px-8 py-3 bg-[#A69078] hover:bg-[#8F7A65] text-white rounded-full font-medium transition-colors text-sm">
              订阅通知
            </button>
          </div>
          {/* 装饰圆 */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10"></div>
        </div>
      </main>
    </div>
  );
}

function PlanCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 bg-[#F0EBE3] rounded-2xl border border-[#E0D8CC] hover:bg-white hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 bg-[#A69078]/10 text-[#A69078] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#1A1816] mb-2">{title}</h3>
      <p className="text-[#5A5654] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
