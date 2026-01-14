import ProfileHero from '@/components/about/ProfileHero';
import DualPersonality from '@/components/about/DualPersonality';
import Timeline from '@/components/about/Timeline';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#F6F2EB] grain-texture min-h-screen overflow-x-hidden">
      {/* 1. Hero: 我是谁 */}
      <ProfileHero />

      {/* 2. Duality: 两种灵魂的碰撞 */}
      <DualPersonality />

      {/* 3. Journey: 时间轴 */}
      <Timeline />
      
      {/* 4. Values: 核心价值观 (保留并美化) */}
      <section className="py-24 px-6 bg-white grain-texture border-y border-[#E0D8CC]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#1A1816] mb-16">我相信的原则</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⏳", title: '慢即是快', desc: 'Latency is acceptable if consistency is high.' },
              { icon: "🔗", title: '真诚连接', desc: 'Peer-to-Peer without middleware.' },
              { icon: "🌱", title: '长期主义', desc: 'Long-term support (LTS) for life.' },
              { icon: "🔨", title: '知行合一', desc: 'Compile success is not enough, runtime matters.' },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#F9F7F4] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#E0D8CC] group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="font-serif text-lg text-[#1A1816] mb-3 font-bold">{value.title}</h3>
                <p className="text-[#5A5654] text-sm font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer CTA: 召唤行动 */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#A69078]/10 to-transparent rounded-full -z-10"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-[#1A1816]">
            准备好开始探索了吗？
          </h2>
          <p className="text-lg text-[#5A5654] mb-12 font-light leading-relaxed">
            我不定期更新关于技术与茶的深度文章。
            <br className="hidden md:block" />
            如果你也对这两种看似矛盾的生活感兴趣，欢迎加入我的邮件组。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/subscribe" 
              className="btn-primary flex items-center gap-2 group"
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
