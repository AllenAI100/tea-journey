'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import AudioPlayer from '@/components/AudioPlayer';
import { motion } from 'framer-motion';
import { Mic, Play, Headphones, Radio, Film, Video } from 'lucide-react';
import { episodes } from '@/lib/podcast-data';
import Link from 'next/link';

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-background grain-texture">
      <Navigation />
      
      <PageHeader
        title="茶与白噪音"
        englishTitle="Tea & White Noise"
        description="声音是比文字更直接的温度。用一杯茶的时间，听见内心的声音。"
        className="bg-bg-soft" // 覆盖默认背景
      />

      <main className="max-w-5xl mx-auto px-6 py-16 -mt-20 relative z-30">
        
        {/* Intro Card - 模拟录音室氛围 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-xl shadow-tea-brown/5 mb-20 text-center relative overflow-hidden"
        >
          {/* 背景声波装饰 */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center gap-1">
             {[...Array(20)].map((_, i) => (
                <div key={i} className="w-2 bg-foreground animate-pulse" style={{ height: `${Math.random() * 60 + 20}%`, animationDuration: `${Math.random() * 1 + 0.5}s` }}></div>
             ))}
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-bg-warm rounded-full flex items-center justify-center mx-auto mb-6 text-tea-brown">
               <Mic className="w-6 h-6" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              为什么要开始这档播客？
            </h2>
            <p className="text-text-light leading-relaxed max-w-2xl mx-auto mb-10 font-soft text-lg">
              在短视频充斥的时代，我们失去了“长谈”的耐心。
              <br />
              这里没有倍速，只有真实的思考与煮水声。
            </p>
            
            {/* Latest Episode Player (播放最新一期) - 增加阴影和层级 */}
            <div className="max-w-2xl mx-auto bg-bg-soft rounded-2xl p-2 border border-border shadow-inner">
               <AudioPlayer 
                 src={episodes[0].audioUrl} 
                 title={`最新单集: ${episodes[0].title}`}
               />
            </div>
          </div>
        </motion.div>

        {/* Episode List (节目列表) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Radio className="w-6 h-6 text-tea-brown" />
              往期节目
            </h2>
            <div className="h-px flex-1 bg-border ml-6 opacity-50"></div>
          </div>
          
          <div className="grid gap-8">
            {episodes.map((ep, index) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/podcast/${ep.slug}`} className="group block">
                  <article className="flex flex-col md:flex-row gap-8 bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-tea-brown/50 hover:shadow-lg hover:shadow-tea-brown/5 transition-all duration-500 group-hover:-translate-y-1">
                    {/* 封面图 - 唱片/胶片质感 */}
                    <div className="w-full md:w-48 aspect-square rounded-xl overflow-hidden flex-shrink-0 bg-bg-warm relative shadow-md group-hover:shadow-xl transition-all duration-500">
                      <img 
                        src={ep.coverImage} 
                        alt={ep.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      />
                      
                      {/* 媒体类型装饰 */}
                      {ep.type === 'video' ? (
                        <>
                          {/* 胶片齿孔装饰 (上下) */}
                          <div className="absolute top-0 left-0 w-full h-3 bg-black/80 flex justify-between px-1 items-center">
                             {[...Array(6)].map((_,i) => <div key={i} className="w-2 h-1.5 bg-white/50 rounded-sm"></div>)}
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-3 bg-black/80 flex justify-between px-1 items-center">
                             {[...Array(6)].map((_,i) => <div key={i} className="w-2 h-1.5 bg-white/50 rounded-sm"></div>)}
                          </div>
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </>
                      ) : (
                        /* 唱片光泽 (音频) */
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                      )}

                      {/* 播放按钮 */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white">
                          {ep.type === 'video' ? <Film className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-xs text-tea-brown font-mono mb-3 uppercase tracking-wider font-bold">
                        <span className="bg-tea-brown/10 px-2 py-1 rounded">VOL.{ep.slug.split('-')[0].replace('ep','')}</span>
                        <span>{ep.date}</span>
                        <span className="w-1 h-1 bg-tea-brown rounded-full"></span>
                        <span className="flex items-center gap-1">
                          {ep.type === 'video' ? <Video className="w-3 h-3"/> : <Headphones className="w-3 h-3"/>} 
                          {ep.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {ep.title}
                      </h3>
                      
                      <p className="text-text-light text-base font-soft leading-relaxed mb-6 line-clamp-2">
                        {ep.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm font-medium text-foreground mt-auto group-hover:translate-x-2 transition-transform duration-300">
                        <span className="border-b border-foreground pb-0.5 group-hover:border-primary group-hover:text-primary transition-colors">查看详情 & 收听</span>
                        <Play className="w-3 h-3 ml-2 text-tea-brown fill-current" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subscribe / Footer CTA */}
        <div className="text-center bg-foreground text-background rounded-3xl p-12 relative overflow-hidden border border-border/10">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 font-soft">想要第一时间收听？</h3>
            <p className="text-white/60 text-base mb-8 max-w-lg mx-auto font-light">
              节目正在筹备中。订阅邮件，上线时我会通知你。
              <br/>
              也可以在 Apple Podcast 和 小宇宙 搜索 "Tea Journey"。
            </p>
            <button className="px-8 py-4 bg-tea-brown hover:bg-tea-deep text-white rounded-full font-medium transition-colors text-sm shadow-lg shadow-tea-brown/20">
              订阅更新通知
            </button>
          </div>
          {/* 装饰背景 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-tea-brown/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
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
