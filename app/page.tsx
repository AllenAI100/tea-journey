import Link from 'next/link';

export default function Home() {
  const featuredArticles = [
    {
      category: '做茶日记',
      title: '为什么从IT转行做茶：一个技术人的选择',
      excerpt: '在代码世界摸爬十几年，我决定换一种方式理解世界。不是冲动，是对生活方式的重新思考...',
      date: '2025-01-08',
      path: '/tea-journal/why-tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    },
    {
      category: '读书笔记',
      title: '《茶之书》笔记：东方美学的现代解读',
      excerpt: '冈仓天三的茶道哲学，在百年后的今天依然能给我们关于生活美学的启发...',
      date: '2025-01-05',
      path: '/reading/book-of-tea',
      image: 'https://images.unsplash.com/photo-1507048945892-ff6b5b762619?w=800&q=80',
    },
    {
      category: '生活随笔',
      title: '慢下来，才能看见生活的纹理',
      excerpt: '从前追求效率，现在学会等待。茶教会我的第一件事，就是耐心...',
      date: '2025-01-03',
      path: '/essays/slow-down',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80',
    },
  ];

  return (
    <div>
      {/* Hero Section - 使用生成的茶山图片 */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tea-mountain.jpg"
            alt="茶山"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F2EB]/30 via-[#F6F2EB]/50 to-[#F6F2EB]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="mb-8">
            <img src="/images/logo-icon.jpg" alt="茶旅" className="w-20 h-20 mx-auto rounded-xl shadow-lg" />
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 font-handwriting tracking-wider text-[#2A2624]">
            茶旅
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[#4A4644]/90 tracking-wide">
            IT人的茶生活
          </p>
          <p className="text-lg text-[#4A4644]/80 max-w-2xl mx-auto leading-relaxed mb-12">
            用技术人的严谨，做一杯好茶。用文字记录生活与思考。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary inline-block">
              了解更多
            </Link>
            <Link href="/subscribe" className="btn-secondary inline-block">
              订阅更新
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-[#F6F2EB]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-[#2A2624]">
            一个记录与分享的空间
          </h2>
          <p className="text-lg text-[#7A7674] leading-relaxed mx-auto max-w-[65ch]">
            茶旅是一个探索想法、寻找灵感、发现新视角的空间。
            从做茶日常到读书心得，从生活感悟到茶文化分享，
            这里记录着我的思考与实践。
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#2A2624]">
              精选文章
            </h2>
            <p className="text-[#7A7674]">关于茶、书与生活的思考</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.path}
                href={article.path}
                className="group"
              >
                <article className="card h-full overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-[#D4C8B5]">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs uppercase tracking-widest text-[#A69078]">
                      {article.category}
                    </span>
                    <h3 className="text-xl mt-3 mb-3 group-hover:text-[#A69078] transition-colors text-[#2A2624]">
                      {article.title}
                    </h3>
                    <p className="text-[#7A7674] text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/essays"
              className="text-[#A69078] hover:text-[#6B5A48] font-medium inline-flex items-center gap-2 tracking-wide"
            >
              查看全部文章
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-[#F0EBE3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-16 text-center text-[#2A2624]">
            探索内容
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/reading" className="card p-10 text-center group border border-transparent hover:border-[#A8B8A8]/50 bg-white">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl mb-3 group-hover:text-[#A69078] transition-colors text-[#2A2624]">
                读书笔记
              </h3>
              <p className="text-[#7A7674] text-sm leading-relaxed">
                商业、哲学、文学与生活，用技术人的视角梳理思维脉络
              </p>
            </Link>

            <Link href="/essays" className="card p-10 text-center group border border-transparent hover:border-[#A8B8A8]/50 bg-white">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl mb-3 group-hover:text-[#A69078] transition-colors text-[#2A2624]">
                生活随笔
              </h3>
              <p className="text-[#7A7674] text-sm leading-relaxed">
                转型心路、日常感悟，记录一个IT人的思考与成长
              </p>
            </Link>

            <Link href="/tea-journal" className="card p-10 text-center group border border-transparent hover:border-[#A8B8A8]/50 bg-white">
              <div className="text-4xl mb-4">🍵</div>
              <h3 className="text-xl mb-3 group-hover:text-[#A69078] transition-colors text-[#2A2624]">
                做茶日记
              </h3>
              <p className="text-[#7A7674] text-sm leading-relaxed">
                从选茶到制茶，用严谨的态度做一杯好茶
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 px-6 bg-[#6B5A48] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 font-light">
            保持连接
          </h2>
          <p className="text-lg text-white/90 mb-10 font-light">
            订阅更新，一起探索茶、书与生活的可能性
          </p>
          <Link
            href="/subscribe"
            className="btn-coral inline-block"
          >
            立即订阅
          </Link>
        </div>
      </section>
    </div>
  );
}
