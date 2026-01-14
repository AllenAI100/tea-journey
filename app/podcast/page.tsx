'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import AudioPlayer from '@/components/AudioPlayer';
import { motion } from 'framer-motion';
import { Mic, Headphones, Coffee } from 'lucide-react';

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      <PageHeader
        title="茶与白噪音"
        englishTitle="Podcast"
        description="声音是比文字更直接的温度。用一杯茶的时间，听见内心的声音。"
        image="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=1600&q=80" // 麦克风与氛围
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-30">
        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-[#E0D8CC] shadow-xl shadow-[#A69078]/5 mb-16 text-center"
        >
          <Mic className="w-8 h-8 text-[#A69078] mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif text-[#1A1816] mb-6">
            为什么要开始这档播客？
          </h2>
          <p className="text-[#5A5654] leading-relaxed max-w-2xl mx-auto mb-10">
            在短视频充斥的时代，我们失去了“长谈”的耐心。
            <br className="hidden md:block" />
            我希望创建一个声音空间，这里没有算法推荐，没有倍速播放。
            <br />
            只有真实的煮水声，和关于技术、生活、哲学的深度对话。
          </p>
          
          {/* Audio Player Demo */}
          <AudioPlayer />
        </motion.div>

        {/* Future Plan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <PlanCard 
            icon={<Headphones />}
            title="沉浸式对谈"
            desc="邀请设计师、程序员、手艺人，在茶桌旁聊聊他们的'慢生活'哲学。"
          />
          <PlanCard 
            icon={<Coffee />}
            title="声音纪录片"
            desc="带上录音笔走进茶山。采茶的沙沙声，炒茶的噼啪声，都是大自然的白噪音。"
          />
        </div>

        {/* Subscribe */}
        <div className="text-center bg-[#1A1816] text-[#F6F2EB] rounded-2xl p-10 relative overflow-hidden">
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
