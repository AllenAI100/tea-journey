'use client';

import { motion } from 'framer-motion';
import { Terminal, Coffee, Cpu, Leaf } from 'lucide-react';

export default function DualPersonality() {
  return (
    <section className="py-16 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* 左侧：技术人格 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E1E1E] text-gray-300 p-8 md:p-12 rounded-2xl shadow-2xl font-mono text-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal size={120} />
            </div>
            
            <h3 className="text-xl text-white mb-6 flex items-center gap-3">
              <Cpu className="text-blue-400" />
              <span>The Engineer</span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-blue-400">$</span>
                <span>current_focus = ["Next.js", "Rust", "System Architecture"]</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">$</span>
                <span>obsession = "Clean Code & Performance"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">$</span>
                <span>philosophy = "DRY (Don't Repeat Yourself)"</span>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="italic opacity-70">
                "Logic is the foundation. Without structure, there is only chaos."
              </p>
            </div>
          </motion.div>

          {/* 右侧：茶人格 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#F0EBE3] text-[#2A2624] p-8 md:p-12 rounded-2xl shadow-xl font-serif relative overflow-hidden group border border-[#D4C8B5]"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-[#A69078]">
              <Coffee size={120} />
            </div>

            <h3 className="text-xl md:text-2xl text-[#1A1816] mb-6 flex items-center gap-3">
              <Leaf className="text-[#4A8B6B]" />
              <span>生活家</span>
            </h3>
            
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex gap-3 items-baseline">
                <span className="text-[#A69078] font-bold">●</span>
                <span>主修：凤凰单丛、岩茶、普洱</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-[#A69078] font-bold">●</span>
                <span>痴迷：山场气息与焙火工艺</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-[#A69078] font-bold">●</span>
                <span>哲学：一期一会，难得糊涂</span>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-[#D4C8B5]">
              <p className="italic text-[#5A5654]">
                "感性是灵魂。没有风味，世界只是一堆参数。"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
