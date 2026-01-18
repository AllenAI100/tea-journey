'use client';

import { motion } from 'framer-motion';

export default function ProfileHero() {
  return (
    <section className="relative py-24 px-6 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 rounded-full overflow-hidden border border-border shadow-xl shadow-tea-brown/10"
        >
          {/* 这里应该放您的真实头像，暂时用 Unsplash 占位 */}
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" 
            alt="Allen" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight"
        >
          从 0101 到 一叶一芽
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-light font-light font-soft max-w-2xl mx-auto leading-relaxed"
        >
          我是 Allen. <br className="md:hidden"/>
          程序员 <span className="text-tea-brown mx-2">/</span> 制茶人 <span className="text-tea-brown mx-2">/</span> 生活观察者
        </motion.p>
      </div>

      {/* 背景装饰 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
    </section>
  );
}
