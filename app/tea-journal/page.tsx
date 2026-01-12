import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '做茶日记 | 茶旅',
  description: '从选茶到制茶，用严谨的态度做一杯好茶',
};

const journals = [
  {
    title: '为什么从IT转行做茶：一个技术人的选择',
    date: '2025-01-08',
    category: '产品故事',
    excerpt: '在代码世界摸爬十几年，我决定换一种方式理解世界。做茶和写代码，都需要严谨的逻辑和对细节的执着...',
    path: '/tea-journal/why-tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
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
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-handwriting text-[#1A1A1A] mb-6">
            做茶日记
          </h1>
          <p className="text-lg text-[#3A3A3A]/60 max-w-xl mx-auto">
            用技术人的严谨，做一杯好茶。记录从选茶到制茶的过程与思考
          </p>
        </div>

        {/* Featured Statement */}
        <div className="mb-16 p-8 bg-[#A8C5B0]/15 rounded-2xl text-center border border-[#A8C5B0]/30">
          <p className="text-[#3A3A3A] font-serif text-lg">
            <span className="text-[#9A7B4F] font-medium">我的做茶理念：</span>
            不做玄学，只做确定的事。产地可溯源，工艺可追溯，品质可稳定。
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10 flex justify-center flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-md text-sm transition-all tracking-wide ${
                cat === '全部'
                  ? 'bg-[#3A5142] text-white'
                  : 'bg-white text-[#3A3A3A]/60 border border-[#D8D0C0] hover:border-[#9A7B4F] hover:text-[#9A7B4F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journals.map((journal) => (
            <Link
              key={journal.path}
              href={journal.path}
              className="group"
            >
              <article className="card h-full overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-[#D8D0C0]">
                  <img
                    src={journal.image}
                    alt={journal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className={`text-xs px-2 py-1 rounded-md ${
                    journal.category === '产品故事' ? 'bg-[#D4B86A]/15 text-[#A08040]' :
                    journal.category === '茶知识' ? 'bg-[#A8C5B0]/15 text-[#3A5142]' :
                    'bg-[#D8D0C0]/50 text-[#6B6B6B]'
                  }`}>
                    {journal.category}
                  </span>
                  <h2 className="text-lg font-serif mt-3 mb-2 group-hover:text-[#9A7B4F] transition-colors">
                    {journal.title}
                  </h2>
                  <p className="text-xs text-[#6B6B6B] mb-3">{journal.date}</p>
                  <p className="text-sm text-[#3A3A3A]/60 leading-relaxed line-clamp-2">
                    {journal.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Tea Products Preview */}
        <div className="mt-20 p-10 bg-[#E6DFD2] rounded-2xl border border-[#D0C8B8]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">当前茶品</h3>
            <p className="text-[#3A3A3A]/60">产地可溯源，品质可稳定</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-lg text-[#1A1A1A] mb-1">武夷岩茶 · 大红袍</h4>
              <p className="text-sm text-[#3A3A3A]/60 mb-3">岩韵明显，回甘持久</p>
              <p className="text-[#9A7B4F] font-medium">¥168/份</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-lg text-[#1A1A1A] mb-1">正山小种</h4>
              <p className="text-sm text-[#3A3A3A]/60 mb-3">松烟香气，醇厚甘甜</p>
              <p className="text-[#9A7B4F] font-medium">¥128/份</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/subscribe"
              className="text-[#9A7B4F] hover:text-[#7A5B3F] font-medium inline-flex items-center gap-2"
            >
              了解如何购买
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
