'use client';

import { motion } from 'framer-motion';
import { Leaf, Coffee, BookOpen, Calendar } from 'lucide-react';

const stats = [
  {
    label: '重启生活',
    value: '365',
    unit: '天',
    icon: Calendar,
    desc: 'Since 2024.01.01',
    color: 'text-[#A69078]',
    bg: 'bg-[#A69078]/10'
  },
  {
    label: '今日味蕾',
    value: '布朗',
    unit: '生普',
    icon: Coffee,
    desc: '苦尽甘来的滋味',
    color: 'text-[#4A8B6B]',
    bg: 'bg-[#4A8B6B]/10'
  },
  {
    label: '茶山足迹',
    value: '82',
    unit: 'km',
    icon: Leaf,
    desc: '用脚步丈量风土',
    color: 'text-[#E85D04]',
    bg: 'bg-[#E85D04]/10'
  },
  {
    label: '精神补给',
    value: '茶之书',
    unit: '在读',
    icon: BookOpen,
    desc: '冈仓天心',
    color: 'text-[#5A5654]',
    bg: 'bg-[#1A1816]/5'
  }
];

export default function TeaStats() {
  return (
    <section className="py-12 border-y border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold tracking-wide text-foreground">
              当下的<span className="text-tea-brown italic font-normal">生活切片</span>
            </h3>
          </div>
          <p className="text-xs text-text-light mt-2 md:mt-0 font-light italic">
            "Slicing moments out of time."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-5 rounded-xl border border-border bg-card hover:border-tea-brown/50 hover:shadow-lg hover:shadow-tea-brown/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="mb-2 flex items-baseline">
                  <span className="text-2xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="ml-2 text-xs text-tea-brown uppercase font-medium">
                    {stat.unit}
                  </span>
                </div>
                
                <h4 className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </h4>
                <p className="text-sm text-text-light font-light font-handwriting tracking-wide">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
