import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我 | 茶旅',
  description: '了解我是谁，我在做什么，我相信什么',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-20">
          <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#C9A85C]/20 to-[#A8B8A8]/20 flex items-center justify-center shadow-lg overflow-hidden">
            <img src="/images/logo-icon.jpg" alt="茶旅" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-6xl font-handwriting text-[#2A2624] mb-4">
            Allen
          </h1>
          <p className="text-lg text-[#7A7674]">
            前IT工程师 · 现在做茶人
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-[#2A2624] mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#F6F2EB] flex items-center justify-center text-sm">📖</span>
            我的故事
          </h2>
          <div className="prose prose-lg max-w-none text-[#4A4644]">
            <p className="leading-relaxed">
              在互联网行业工作了十几年，从程序员做到技术管理者，经历过创业公司的激情，也体验过大厂的节奏。代码教会我逻辑思考，产品思维让我学会理解用户。
            </p>
            <p className="leading-relaxed">
              2024年，我决定换一种生活方式。不是因为厌倦技术，而是想用不同的方式创造价值。于是我开始做茶——用技术人的严谨，选好茶、做好茶。
            </p>
            <p className="leading-relaxed">
              这个网站记录我的思考和生活。如果你喜欢茶，喜欢思考，或者也在考虑人生的另一种可能，也许我们能成为朋友。
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-[#2A2624] mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#F6F2EB] flex items-center justify-center text-sm">💎</span>
            我相信的
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: '慢即是快', desc: '把事情做对，比把事情做快更重要' },
              { title: '真诚连接', desc: '与其有一万次点赞，不如有一次真诚的对话' },
              { title: '持续学习', desc: '世界很大，保持好奇和谦逊' },
              { title: '务实理想', desc: '有理想，但也要脚踏实地' },
            ].map((value) => (
              <div key={value.title} className="card p-6 border border-[#E0D8CC]">
                <h3 className="font-serif text-lg text-[#2A2624] mb-2">{value.title}</h3>
                <p className="text-[#7A7674] text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-serif text-[#2A2624] mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#F0EBE3] flex items-center justify-center text-sm">🔧</span>
            我在做什么
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8 bg-gradient-to-br from-[#C9A85C]/10 to-white border border-[#C9A85C]/20">
              <h3 className="font-serif text-xl text-[#2A2624] mb-3">选茶·制茶</h3>
              <p className="text-[#7A7674] leading-relaxed">
                亲自去产地，选可靠的茶农，做品质稳定的茶。不做玄学，只做可验证的事。
              </p>
            </div>
            <div className="card p-8 bg-gradient-to-br from-[#A8B8A8]/10 to-white border border-[#A8B8A8]/20">
              <h3 className="font-serif text-xl text-[#2A2624] mb-3">写作·分享</h3>
              <p className="text-[#7A7674] leading-relaxed">
                记录思考过程，分享读书心得，连接同频的人。让文字成为连接彼此的桥梁。
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="p-10 bg-[#F0EBE3] rounded-2xl border border-[#E0D8CC] text-center">
          <h2 className="text-2xl font-serif text-[#2A2624] mb-4">
            想认识我？
          </h2>
          <p className="text-[#7A7674] mb-8 max-w-md mx-auto">
            如果你觉得我们价值观相似，或者对我的茶感兴趣，欢迎联系
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/subscribe"
              className="btn-primary inline-block"
            >
              订阅我的更新
            </Link>
            <a
              href="mailto:hello@teajourney.com"
              className="btn-secondary inline-block"
            >
              发邮件给我
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
