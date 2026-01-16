'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Coffee, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// 动画变体配置
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredArticles = [
    {
      category: '做茶日记',
      title: '为什么从IT转行做茶：一个技术人的选择',
      excerpt: '在代码世界摸爬十几年，我决定换一种方式理解世界。不是冲动，是对生活方式的重新思考...',
      path: '/tea-journal/why-tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    },
    {
      category: '读书笔记',
      title: '《茶之书》笔记：东方美学的现代解读',
      excerpt: '冈仓天三的茶道哲学，在百年后的今天依然能给我们关于生活美学的启发...',
      path: '/reading/book-of-tea',
      image: 'https://images.unsplash.com/photo-1507048945892-ff6b5b762619?w=800&q=80',
    },
    {
      category: '生活随笔',
      title: '慢下来，才能看见生活的纹理',
      excerpt: '从前追求效率，现在学会等待。茶教会我的第一件事，就是耐心...',
      path: '/essays/slow-down',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80',
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* 背景层 */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-[#1A1816]/40 z-10 mix-blend-multiply" />
            <Image
              src="/images/tea-mountain.jpg"
              alt="茶山远景"
              fill
              className="object-cover animate-image-fade"
              priority
              quality={90}
            />
          </motion.div>
          {/* 渐变遮罩 - 终极版：更自然的过渡，确保文字区域有足够的对比度 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F6F2EB] opacity-100 z-10"></div>
          {/* 额外的底部光晕，专门托住文字 */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F6F2EB]/90 via-[#F6F2EB]/40 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* 内容层 */}
          <motion.div 
            className="relative z-20 max-w-4xl px-4 text-[#1A1816]"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl mb-6 font-serif tracking-tight text-[#24201D] mix-blend-multiply opacity-90">
            茶 <span className="text-[#8F7859] font-light italic">&</span> 旅
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="flex flex-col gap-2 mb-10">
            <p className="text-xl md:text-2xl text-[#24201D] font-medium tracking-wide">
              从代码世界回归<span className="font-normal text-[#24201D] border-b border-[#8F7859] pb-0.5 mx-1">山野</span>
              的探索手记
            </p>
            <p className="text-sm md:text-base text-[#6E6862] font-medium tracking-[0.2em] uppercase opacity-80 mt-4 font-sans">
              A journey from tech world to tea mountains
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link 
              href="/about" 
              className="group relative px-10 py-4 bg-[#24201D] text-[#EAE6DF] rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#24201D]/20 hover:-translate-y-1"
            >
              <span className="relative z-10 font-medium tracking-wide flex items-center gap-3 text-lg">
                阅读我的转型故事 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link 
              href="/subscribe" 
              className="group px-10 py-4 bg-transparent border border-[#24201D]/20 text-[#24201D] rounded-full hover:bg-[#24201D]/5 hover:border-[#24201D] transition-all duration-500 font-medium tracking-wide text-lg backdrop-blur-sm"
            >
              加入品茗圈
            </Link>
          </motion.div>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#A69078]"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Philosophy / Intro */}
      <section className="py-24 px-6 bg-[#F6F2EB]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-10 font-serif text-[#2C2824]">
              一场逃离算法的<br/>
              <span className="italic text-[#A69078]">回归之旅</span>
            </h2>
            <p className="text-lg text-[#5A5654] leading-relaxed mx-auto max-w-[65ch] font-light">
              在快节奏的科技世界穿行多年后，我选择放慢脚步，走进云南古老的茶山。
              <br/><br/>
              这里没有即时的 <span className="italic font-serif">Response</span>，只有需要耐心等待的 <span className="italic font-serif">Fermentation</span>（发酵）。
              TeaJourney 是我从技术思维转身，重新理解生活温度的实验记录。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#24201D] mb-2">精选专栏</h2>
              <p className="text-[#8F7859] tracking-widest uppercase text-xs font-semibold">Featured Stories</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Link href="/essays" className="group flex items-center gap-2 text-[#6E6862] hover:text-[#24201D] transition-colors">
                查看全部 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={article.path} className="group block h-full">
                  <article className="h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#D9CDB8] mb-6 relative shadow-sm group-hover:shadow-md transition-shadow duration-500">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 duration-500" />
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-px w-6 bg-[#C19F6E]"></span>
                        <span className="text-xs uppercase tracking-widest text-[#C19F6E] font-bold">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif mb-3 text-[#24201D] leading-tight group-hover:text-[#58664A] transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-[#6E6862] text-sm leading-relaxed line-clamp-3 font-light">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="md:hidden mt-12 text-center">
             <Link href="/essays" className="btn-secondary inline-flex items-center gap-2">
                查看全部 <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* Exploration Categories */}
      <section className="py-24 px-6 bg-[#F0EBE3]">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 font-serif text-[#2C2824]">
              构建你的知识库
            </h2>
            <p className="text-[#5A5654] max-w-lg mx-auto">
              就像整理代码模块一样，我将生活分为三个命名空间。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CategoryCard 
              icon={<BookOpen className="w-8 h-8" />}
              title="读书笔记"
              desc="商业、哲学与底层逻辑的重构"
              href="/reading"
              delay={0.1}
            />
            <CategoryCard 
              icon={<PenTool className="w-8 h-8" />}
              title="生活随笔"
              desc="Debug 生活，记录思考的堆栈"
              href="/essays"
              delay={0.2}
            />
            <CategoryCard 
              icon={<Coffee className="w-8 h-8" />}
              title="做茶日记"
              desc="以严谨参数定义一杯好茶"
              href="/tea-journal"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 px-6 bg-[#2C2824] text-[#F6F2EB] relative overflow-hidden">
        {/* 抽象背景 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A69078]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFFFFF]/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              每两周，<br/>
              发送一份<span className="text-[#A69078] italic">生活重构报告</span>
            </h2>
            <p className="text-lg text-[#F6F2EB]/60 mb-10 font-light max-w-xl mx-auto">
              不贩卖焦虑，只分享经过深度思考的观点、值得一读的好书，
              以及我又发现了哪款好茶。
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-[#A69078] transition-colors"
              />
              <button className="px-8 py-4 bg-[#A69078] hover:bg-[#8F7A65] text-white rounded-full font-medium transition-colors">
                订阅
              </button>
            </form>
            <p className="mt-4 text-xs text-white/30">
              * 承诺不发送垃圾邮件。随时可以 `unsubscribe`。
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// 提取的子组件
function CategoryCard({ icon, title, desc, href, delay }: { icon: React.ReactNode, title: string, desc: string, href: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link 
        href={href} 
        className="block h-full p-10 bg-white rounded-2xl border border-[#E6E0D4] hover:border-[#C19F6E] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(193,159,110,0.15)]"
      >
        <div className="w-16 h-16 bg-[#F7F5F0] rounded-2xl flex items-center justify-center text-[#24201D] mb-8 group-hover:scale-110 group-hover:bg-[#24201D] group-hover:text-[#C19F6E] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-[#24201D] group-hover:text-[#C19F6E] transition-colors">
          {title}
        </h3>
        <p className="text-[#6E6862] text-base leading-relaxed font-light">
          {desc}
        </p>
      </Link>
    </motion.div>
  );
}
