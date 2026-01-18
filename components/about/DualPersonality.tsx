'use client';

import { motion } from 'framer-motion';
import { Code2, Leaf } from 'lucide-react';

export default function DualPersonality() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            理性的骨架，感性的血肉
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto font-soft">
            我并不认为技术与生活是对立的。它们是我的一体两面。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: The Tech Side - 冷色调，Mono字体 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-2xl bg-bg-soft border border-border relative group hover:border-primary/20 transition-colors overflow-hidden"
          >
            {/* 背景装饰：代码雨/矩阵感 */}
            <div className="absolute top-0 right-0 p-32 bg-gradient-radial from-blue-500/5 to-transparent opacity-50 blur-3xl -z-10"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/80 rounded-lg shadow-sm text-text-light group-hover:text-primary transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                曾经，我相信 <span className="font-mono text-primary">Code</span>
              </h3>
            </div>

            <p className="text-text-light leading-relaxed font-light mb-8">
              我追求极致的效率，信奉 "Don't Repeat Yourself"。
              我用 AI 优化工作流，用算法量化决策。
              在 0 和 1 的世界里，确定性给我安全感。
            </p>
            
            <div className="p-5 bg-white rounded-lg border border-border font-mono text-xs text-text-light shadow-inner">
              <span className="text-blue-600">const</span> <span className="text-purple-600">life</span> = <span className="text-blue-600">await</span> optimize(<span className="text-orange-600">now</span>);<br/>
              <span className="text-text-faint">// TODO: Fix anxiety bug</span>
            </div>
          </motion.div>

          {/* Right: The Tea Side - 暖色调，Serif/Soft字体 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 rounded-2xl bg-bg-warm border border-border relative group hover:border-tea-brown/20 transition-colors overflow-hidden"
          >
            {/* 背景装饰：茶汤光晕 */}
            <div className="absolute top-0 left-0 p-32 bg-gradient-radial from-tea-brown/10 to-transparent opacity-50 blur-3xl -z-10"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/80 rounded-lg shadow-sm text-tea-brown group-hover:text-tea-deep transition-colors">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                现在，我敬畏 <span className="font-soft text-tea-brown text-2xl">天时</span>
              </h3>
            </div>

            <p className="text-text-light leading-relaxed font-light mb-8">
              茶教会我，最好的风味往往来自不可控的 "发酵"。
              等待一泡茶汤转甜，和等待一个孩子长大一样，
              无法加速，只能陪伴。
            </p>
            
            <div className="p-5 bg-white/60 rounded-lg border border-border font-soft text-sm text-text-main italic shadow-sm border-l-4 border-l-tea-brown">
              "好茶知时节，当春乃发生。<br/>
              急不得，慢不得。"
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
