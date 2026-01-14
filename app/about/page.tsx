import ProfileHero from '@/components/about/ProfileHero';
import Timeline from '@/components/about/Timeline';
import Link from 'next/link';
import { ArrowRight, Mail, Clock, Heart, Anchor, Sun } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#F6F2EB] grain-texture min-h-screen overflow-x-hidden">
      {/* 1. Hero: 我是谁 */}
      <ProfileHero />

      {/* 2. Journey: 时间轴 */}
      <Timeline />
      
      {/* 3. Values: 核心价值观 (重构为纯生活哲学) */}
      <section className="py-24 px-6 bg-white grain-texture border-y border-[#E0D8CC]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#1A1816] mb-4">我相信的原则</h2>
          <p className="text-[#8A8690] mb-16 max-w-2xl mx-auto font-light">
             在快与慢之间，寻找内心的恒量。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: '时间复利', desc: '好茶需要陈化，人生需要沉淀。做时间的朋友，不争朝夕。' },
              { icon: Heart, title: '真诚真实', desc: '去伪存真。无论是做人还是做茶，真实永远是最高级的风味。' },
              { icon: Anchor, title: '长期主义', desc: '不为短期的流量焦虑。专注于创造那些能穿越周期的价值。' },
              { icon: Sun, title: '知行合一', desc: '读万卷书，更要行万里路。用脚步去丈量茶山，用身体去感知世界。' },
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-xl bg-[#F9F7F4] hover:bg-white hover:shadow-xl hover:shadow-[#A69078]/10 transition-all duration-300 border border-transparent hover:border-[#E0D8CC] group text-left">
                <div className="mb-6 p-3 bg-[#E8DFD2]/30 rounded-lg w-fit group-hover:bg-[#A69078] group-hover:text-white transition-colors duration-300 text-[#A69078]">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg text-[#1A1816] mb-3 font-bold group-hover:text-[#A69078] transition-colors">{value.title}</h3>
                <p className="text-[#5A5654] text-sm font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer CTA: 召唤行动 */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#A69078]/10 to-transparent rounded-full -z-10"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-[#1A1816]">
            准备好开始探索了吗？
          </h2>
          <p className="text-lg text-[#5A5654] mb-12 font-light leading-relaxed">
            生活本身就是一场没有终点的旅程。
            <br className="hidden md:block" />
            期待与你在文字与茶香中相遇。
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
