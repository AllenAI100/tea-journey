import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生活随笔 | 茶旅',
  description: '转型心路、日常感悟，记录一个IT人的思考与成长',
};

const essays = [
  {
    title: '慢下来，才能看见生活的纹理',
    date: '2025-01-03',
    category: '日常感悟',
    excerpt: '从前追求效率，现在学会等待。茶教会我的第一件事，就是耐心。水温要够，时间要对，才能泡出一杯好茶。生活也是如此...',
    tags: ['生活', '思考'],
    path: '/essays/slow-down',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
  },
  {
    title: '为什么从IT转行做茶',
    date: '2024-12-25',
    category: '转型心路',
    excerpt: '在代码世界摸爬十几年，我决定换一种方式理解世界。不是因为厌倦技术，而是想用不同的方式创造价值...',
    tags: ['转型', '选择'],
    path: '/essays/why-career-change',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80',
  },
  {
    title: '技术思维与茶：意外的契合',
    date: '2024-12-18',
    category: '日常感悟',
    excerpt: '做茶和写代码，看似不相关，实则都需要严谨的逻辑和持续的优化。温度、时间、投茶量，每个参数都影响最终结果...',
    tags: ['技术', '茶'],
    path: '/essays/tech-thinking-tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
  },
  {
    title: '独处的价值',
    date: '2024-12-10',
    category: '日常感悟',
    excerpt: '在城市里，我们习惯了被信息填满。但独处时，泡一杯茶，什么都不做，才能真正听见自己的声音...',
    tags: ['独处', '内省'],
    path: '/essays/value-of-solitude',
    image: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=800&q=80',
  },
  {
    title: '关于"好生活"的思考',
    date: '2024-12-05',
    category: '价值观',
    excerpt: '什么样的人生值得过？这个问题没有标准答案。但对我来说，是有选择权，能做自己相信的事...',
    tags: ['价值观', '人生'],
    path: '/essays/what-is-good-life',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
];

const categories = ['全部', '转型心路', '日常感悟', '价值观'];

export default function EssaysPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-handwriting text-[#2A2624] mb-6">
            生活随笔
          </h1>
          <p className="text-lg text-[#7A7674] max-w-xl mx-auto">
            记录思考，分享感悟，寻找共鸣
          </p>
        </div>

        {/* Quote */}
        <div className="mb-16 p-8 bg-[#F0EBE3] rounded-2xl text-center border border-[#E0D8CC]">
          <p className="text-[#4A4644] text-lg font-serif italic leading-relaxed">
            "写作是一种整理思维的方式。当我把想法写下来，它们才真正属于我。"
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10 flex justify-center flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-md text-sm transition-all tracking-wide ${
                cat === '全部'
                  ? 'bg-[#6B7A68] text-white'
                  : 'bg-white text-[#7A7674] border border-[#E0D8CC] hover:border-[#A69078] hover:text-[#A69078]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Essay List */}
        <div className="space-y-6">
          {essays.map((essay) => (
            <Link
              key={essay.path}
              href={essay.path}
              className="block group"
            >
              <article className="card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 aspect-[16/9] md:aspect-auto overflow-hidden bg-[#D4C8B5]">
                    <img
                      src={essay.image}
                      alt={essay.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-[#A8B8A8]/20 text-[#6B7A68]">
                        {essay.category}
                      </span>
                      <span className="text-xs text-[#A6A2A0]">{essay.date}</span>
                    </div>
                    <h2 className="text-xl font-serif mb-2 group-hover:text-[#A69078] transition-colors text-[#2A2624]">
                      {essay.title}
                    </h2>
                    <p className="text-[#7A7674] leading-relaxed line-clamp-2">
                      {essay.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
