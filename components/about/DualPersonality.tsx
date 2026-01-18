'use client';

import { motion } from 'framer-motion';
import { Code2, Leaf } from 'lucide-react';

export default function DualPersonality() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            理性做茶，感性生活
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto font-soft">
            代码给了我理解世界的逻辑，而茶，教会了我如何感受当下的温度。
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
                用理性构建 <span className="font-mono text-primary">系统</span>
              </h3>
            </div>

            <p className="text-text-light leading-relaxed font-light mb-8">
              多年的技术训练，给了我<strong>解构复杂</strong>的能力。
              面对复杂的制茶工艺，我不迷信玄学，而是寻找变量与结果之间的逻辑。
              这是技术留给我的宝贵财富。
            </p>
            
            <div className="p-5 bg-white rounded-lg border border-border font-mono text-xs text-text-light shadow-inner">
              <span className="text-blue-600">const</span> <span className="text-purple-600">makeTea</span> = <span className="text-blue-600">await</span> craft(<span className="text-orange-600">data</span>);<br/>
              <span className="text-text-faint">// Function: Make complex things simple.</span>
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
                用感性感知 <span className="font-soft text-tea-brown text-2xl">当下</span>
              </h3>
            </div>

            <p className="text-text-light leading-relaxed font-light mb-8">
              但数据无法穷尽风味。茶教会我打开感官，去闻、去尝、去感受空气的湿度。
              在这些无法量化的瞬间里，我找到了久违的宁静。
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
