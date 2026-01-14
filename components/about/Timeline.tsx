'use client';

import { motion } from 'framer-motion';

const events = [
  {
    year: '2014',
    title: 'Hello World',
    desc: '写下了第一行代码。从此以为世界只有 0 和 1。',
    side: 'left'
  },
  {
    year: '2016',
    title: '全栈工程师',
    desc: '在北上广的写字楼里，见过每一座城市的凌晨四点。',
    side: 'left'
  },
  {
    year: '2019',
    title: '架构师的瓶颈',
    desc: '系统越来越复杂，快乐却越来越少。开始思考技术的边界。',
    side: 'left'
  },
  {
    year: '2021',
    title: '遇见单丛',
    desc: '一次偶然的潮州之行。被一杯鸭屎香的香气击中，那是代码无法编译出的感动。',
    side: 'right'
  },
  {
    year: '2023',
    title: '茶山游学',
    desc: '深入云南与福建茶山。向老茶农学习看天做茶。',
    side: 'right'
  },
  {
    year: '2024',
    title: '创立茶旅',
    desc: '试图融合两者。用理性的工具，去探索感性的生活。',
    side: 'center'
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16">我的旅程</h2>
        
        <div className="relative">
          {/* 中轴线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#D4C8B5]"></div>

          <div className="space-y-12 md:space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center justify-between ${
                  event.side === 'left' ? 'flex-row-reverse' : ''
                } ${event.side === 'center' ? 'flex-col !justify-center text-center' : ''}`}
              >
                {/* 内容块 */}
                <div className={`w-full md:w-[45%] ${event.side === 'center' ? 'md:w-full z-10 bg-[#F6F2EB] py-8' : ''}`}>
                  <div className={`bg-white p-6 md:p-8 rounded-xl shadow-md border border-[#F0EBE3] ${event.side === 'center' ? 'max-w-xl mx-auto border-[#A69078] shadow-lg' : ''}`}>
                    <span className="text-[#A69078] font-bold text-lg block mb-2 font-serif">{event.year}</span>
                    <h3 className="text-xl font-bold mb-3 text-[#1A1816]">{event.title}</h3>
                    <p className="text-[#5A5654] text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>

                {/* 中心点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#A69078] rounded-full border-4 border-[#F6F2EB] z-10 shadow-sm"></div>

                {/* 占位块 (保持布局平衡) */}
                {event.side !== 'center' && <div className="w-full md:w-[45%]"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
