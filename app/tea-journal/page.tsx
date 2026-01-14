'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';

const journals = [
  {
    title: '为什么从IT转行做茶：一个技术人的选择',
    date: '2025-01-08',
    category: '产品故事',
    excerpt: '在代码世界摸爬十几年，我决定换一种方式理解世界。做茶和写代码，都需要严谨的逻辑和对细节的执着。这不是简单的职业转换，而是用技术人的思维方式去理解茶的世界...',
    path: '/tea-journal/why-tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    isFeatured: true,
  },
  {
    title: '寻茶记：武夷山的三天',
    date: '2024-12-22',
    category: '产品故事',
    excerpt: '为了找到合适的大红袍，我在武夷山待了三天。上山、看厂、试茶，每一步都不能省...',
    path: '/tea-journal/wuyi-trip',
    image: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80',
  },
  {
    title: '岩茶是怎么做出来的',
    date: '2024-12-15',
    category: '茶知识',
    excerpt: '从采摘到成品，岩茶需要经过十几道工序。每一步都影响着最终的香气和口感...',
    path: '/tea-journal/how-yancha-made',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: '为什么选这款茶：产品逻辑',
    date: '2024-12-08',
    category: '产品故事',
    excerpt: '市面上的茶那么多，为什么我选择这几款？从产地、工艺到口感，每一款都有它的理由...',
    path: '/tea-journal/why-this-tea',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
  },
  {
    title: '茶与健康的科学依据',
    date: '2024-12-01',
    category: '健康与茶',
    excerpt: '茶多酚、咖啡因、茶氨酸。科学研究表明，适量饮茶确实对健康有益。但怎么喝、喝多少，也有讲究...',
    path: '/tea-journal/tea-and-health',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80',
  },
  {
    title: '泡茶的技术参数',
    date: '2024-11-20',
    category: '茶知识',
    excerpt: '水温、投茶量、冲泡时间。用工程师的视角，我把泡茶过程拆解成可优化的参数...',
    path: '/tea-journal/brewing-parameters',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=800&q=80',
  },
];

const categories = ['全部', '产品故事', '茶知识', '健康与茶'];

export default function TeaJournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredJournals = selectedCategory === '全部'
    ? journals
    : journals.filter(journal => journal.category === selectedCategory);

  // 滚动触发动画
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div>
      <PageHeader
        title="做茶日记"
        englishTitle="Tea Journal"
        description="用技术人的严谨，做一杯好茶。记录从选茶、制茶到品鉴的全链路思考。"
        image="/images/tea-header-gen.jpg"
      />

      {/* Content Section */}
      <section className="py-20 px-6 bg-[#F6F2EB]">
        <div className="max-w-6xl mx-auto">

          {/* Featured Statement */}
          <div className="mb-16 p-6 bg-[#F0EBE3] rounded-2xl text-center border border-[#E0D8CC] reveal">
            <p className="text-[#3A3634] font-serif text-base leading-relaxed">
              <span className="text-[#A69078] font-medium">我的做茶理念：</span>
              不做玄学，只做确定的事。产地可溯源，工艺可追溯，品质可稳定。
            </p>
          </div>

          {/* Categories */}
          <div className="mb-10 flex justify-center flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-md text-sm transition-all tracking-wide ${
                  selectedCategory === cat
                    ? 'bg-[#4A8B6B] text-white shadow-md'
                    : 'bg-white text-[#5A5654] border border-[#E0D8CC] hover:border-[#D4A853] hover:text-[#D4A853]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Journal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJournals.map((journal) => (
              <Link
                key={journal.path}
                href={journal.path}
                className="group reveal"
              >
                <article className="card h-full overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-[#D4C8B5]">
                    <img
                      src={journal.image}
                      alt={journal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`text-xs px-2 py-1 rounded-md ${
                      journal.category === '产品故事' ? 'bg-[#C9A85C]/15 text-[#9A8040]' :
                      journal.category === '茶知识' ? 'bg-[#A8B8A8]/15 text-[#6B7A68]' :
                      'bg-[#D4C8B5]/30 text-[#8A8690]'
                    }`}>
                      {journal.category}
                    </span>
                    <h2 className="text-lg font-serif mt-3 mb-2 group-hover:text-[#A69078] transition-colors text-[#1A1816]">
                      {journal.title}
                    </h2>
                    <p className="text-xs text-[#8A8690] mb-3">{journal.date}</p>
                    <p className="text-sm text-[#5A5654] leading-relaxed line-clamp-2">
                      {journal.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Tea Products Preview */}
          <div className="mt-16 p-8 bg-[#E8E2D8] rounded-2xl border border-[#D4C8B5] reveal">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif text-[#1A1816] mb-2">当前茶品</h3>
              <p className="text-[#5A5654]">产地可溯源，品质可稳定</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-serif text-lg text-[#1A1816] mb-1">武夷岩茶 · 大红袍</h4>
                <p className="text-sm text-[#5A5654] mb-3">岩韵明显，回甘持久</p>
                <p className="text-[#A69078] font-medium">¥168/份</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-serif text-lg text-[#1A1816] mb-1">正山小种</h4>
                <p className="text-sm text-[#5A5654] mb-3">松烟香气，醇厚甘甜</p>
                <p className="text-[#A69078] font-medium">¥128/份</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/subscribe"
                className="text-[#A69078] hover:text-[#6B5A48] font-medium inline-flex items-center gap-2"
              >
                了解如何购买
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
