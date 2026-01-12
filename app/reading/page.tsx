import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '读书笔记 | 茶旅',
  description: '商业、创业、茶文化、哲学、文学与生活，用技术人的视角梳理思维脉络',
};

const books = [
  {
    title: '《茶之书》',
    author: '冈仓天三',
    category: '茶文化/健康',
    date: '2025-01-05',
    excerpt: '茶道之于东方，如雕塑之于希腊，哥特式建筑之于欧洲。它是东方美学的结晶，是一种生活哲学的体现...',
    keyPoints: ['茶道与禅宗的关联', '茶室的空间美学', '一期一会的哲学'],
    path: '/reading/book-of-tea',
    image: 'https://images.unsplash.com/photo-1507048945892-ff6b5b762619?w=800&q=80',
  },
  {
    title: '《思考，快与慢》',
    author: '丹尼尔·卡尼曼',
    category: '哲学/思考',
    date: '2024-12-28',
    excerpt: '人类的思维有两套系统：快思考依赖直觉，慢思考依赖理性。了解它们如何工作，我们能做出更明智的决策...',
    keyPoints: ['系统1与系统2', '锚定效应与偏见', '如何在生活中应用'],
    path: '/reading/thinking-fast-slow',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
  },
  {
    title: '《从0到1》',
    author: '彼得·蒂尔',
    category: '商业/创业',
    date: '2024-12-20',
    excerpt: '从0到1是创新，从1到N是复制。在创业做茶的过程中，我对书中的很多观点有了新的理解...',
    keyPoints: ['垄断与竞争', '幂次法则', '特立独行的价值'],
    path: '/reading/zero-to-one',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
  },
  {
    title: '《瓦尔登湖》',
    author: '亨利·梭罗',
    category: '文学/生活',
    date: '2024-12-15',
    excerpt: '梭罗在瓦尔登湖畔的两年，是对简单生活的实践。做茶之后，我更能理解那种远离喧嚣、回归本真的选择...',
    keyPoints: ['极简生活的意义', '与自然的关系', '时间的价值'],
    path: '/reading/walden',
    image: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=800&q=80',
  },
  {
    title: '《中国茶文化》',
    author: '陈宗懋',
    category: '茶文化/健康',
    date: '2024-12-10',
    excerpt: '系统了解中国茶的历史、种类与冲泡方法。这是我转行做茶的入门书籍，也是我经常翻阅的参考书...',
    keyPoints: ['六大茶类的区别', '茶的冲泡要领', '茶与健康的关系'],
    path: '/reading/chinese-tea-culture',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=800&q=80',
  },
];

const categories = ['全部', '商业/创业', '茶文化/健康', '哲学/思考', '文学/生活'];

export default function ReadingPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-handwriting text-[#2A2624] mb-6">
            读书笔记
          </h1>
          <p className="text-lg text-[#7A7674] max-w-2xl mx-auto">
            用技术人的视角阅读，梳理思维脉络，连接书本与生活
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex justify-center flex-wrap gap-3">
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

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Link
              key={book.path}
              href={book.path}
              className="group"
            >
              <article className="card h-full overflow-hidden">
                <div className="aspect-[3/2] overflow-hidden bg-[#D4C8B5]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-[#A69078]">
                    {book.category}
                  </span>
                  <h2 className="text-lg font-serif mt-2 mb-1 group-hover:text-[#A69078] transition-colors text-[#2A2624]">
                    {book.title}
                  </h2>
                  <p className="text-sm text-[#A6A2A0] mb-3">{book.author}</p>
                  <p className="text-sm text-[#7A7674] leading-relaxed line-clamp-2">
                    {book.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
