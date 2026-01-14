'use client';

import { motion } from 'framer-motion';

const events = [
  {
    year: '2014',
    title: 'Hello World',
    desc: '写下了第一行代码。那时以为技术是改变世界的唯一杠杆，在逻辑的迷宫里乐此不疲。',
    side: 'left',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' // Coding setup
  },
  {
    year: '2019',
    title: '内心的转向',
    desc: '在城市的高速运转中感到疲惫。开始反思：除了效率和增长，生活是否还有另一种可能？',
    side: 'left',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80' // City night
  },
  {
    year: '2021',
    title: '初遇',
    desc: '一次偶然的潮州之行。被一杯鸭屎香的香气击中，那是无需编译、直抵人心的感动。',
    side: 'right',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80' // Tea pouring
  },
  {
    year: '2023',
    title: '归零',
    desc: '辞去工作，背起行囊。深入云南与福建茶山，向老茶农学习看天做茶，重新做回学生。',
    side: 'right',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80' // Tea mountain
  },
  {
    year: '2024',
    title: 'Tea Journey',
    desc: '创立茶旅。不再寻找标准答案，而是开始享受探索本身。',
    side: 'center',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80' // Tea table
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
                <div className={`w-full md:w-[45%] ${event.side === 'center' ? 'md:w-full z-10 py-8' : ''}`}>
                  <div className={`bg-white p-5 md:p-6 rounded-xl shadow-md border border-[#F0EBE3] hover:shadow-lg transition-shadow duration-300 ${event.side === 'center' ? 'max-w-xl mx-auto border-[#A69078] shadow-lg' : ''}`}>
                    {/* 图片区域 */}
                    <div className="mb-4 overflow-hidden rounded-lg aspect-[3/2]">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    
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
