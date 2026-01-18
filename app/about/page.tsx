import ProfileHero from '@/components/about/ProfileHero';
import DualPersonality from '@/components/about/DualPersonality';
import Timeline from '@/components/about/Timeline';
import Link from 'next/link';
import { ArrowRight, Mail, Clock, Heart, Anchor, Sun } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background grain-texture min-h-screen overflow-x-hidden">
      {/* 1. Hero: 我是谁 + 哲学 */}
      <ProfileHero />

      {/* 2. Dual Personality: 核心叙事 (算法 vs 茶) */}
      <DualPersonality />

      {/* 4. Journey: 时间轴 */}
      <Timeline />
      
      {/* 5. Footer CTA: 召唤行动 */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-tea-brown/10 to-transparent rounded-full -z-10"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            如果你也在这里寻找共鸣...
          </h2>
          <p className="text-lg text-text-light mb-12 font-light leading-relaxed font-soft">
            生活本身就是一场没有终点的实验。
            <br className="hidden md:block" />
            欢迎写信给我，或者订阅周刊。我不保证秒回，但一定真诚。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/subscribe" 
              className="btn-primary flex items-center gap-2 group !bg-foreground hover:!bg-tea-brown"
            >
              订阅我的周刊 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="mailto:allen@teajourney.com"
              className="btn-secondary flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4" /> 发邮件给我
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
