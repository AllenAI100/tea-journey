'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SubscribePage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl overflow-hidden shadow-md">
            <img src="/images/tea-cup.jpg" alt="茶" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-handwriting text-foreground mb-6">
            订阅更新
          </h1>
          <p className="text-lg text-text-light">
            一起探索茶、书与生活的可能性
          </p>
        </div>

        {/* Subscribe Form */}
        <div className="card p-10 mb-12 border border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            邮件订阅
          </h2>
          <p className="text-text-light mb-8">
            每周1-2封，分享新文章、做茶动态和思考片段。无广告，随时可退订。
          </p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                邮箱地址
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                昵称（可选）
              </label>
              <input
                type="text"
                id="name"
                placeholder="怎么称呼你"
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-background"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-primary"
            >
              订阅
            </button>
          </form>

          <p className="text-xs text-text-faint mt-6 text-center">
            订阅即表示你同意接收邮件更新。你可以随时退订。
          </p>
        </div>

        {/* What You Get */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            你会收到什么
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '📝', title: '新文章通知', desc: '读书笔记、生活随笔、做茶日记' },
              { icon: '🍵', title: '做茶动态', desc: '新品发布、寻茶故事、制茶过程' },
              { icon: '💭', title: '思考片段', desc: '邮件里独有的短内容分享' },
              { icon: '🎁', title: '订阅者专属', desc: '优先购买、限时优惠、样品试用' },
            ].map((item) => (
              <div key={item.title} className="card p-6 border border-border bg-card">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-bold text-lg text-foreground mt-3 mb-1">{item.title}</h3>
                <p className="text-sm text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tea Products */}
        <div className="p-8 bg-bg-warm rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              对我的茶感兴趣？
            </h2>
            <p className="text-text-light">
              产地可靠、工艺正宗、品质稳定
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-bold text-lg text-foreground mb-1">
                武夷岩茶 · 大红袍
              </h3>
              <p className="text-sm text-text-light mb-3">岩韵明显，回甘持久</p>
              <p className="text-tea-brown font-medium">¥168/份</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-bold text-lg text-foreground mb-1">
                正山小种
              </h3>
              <p className="text-sm text-text-light mb-3">松烟香气，醇厚甘甜</p>
              <p className="text-tea-brown font-medium">¥128/份</p>
            </div>
          </div>
            ))}
          </div>
        </div>

        {/* Tea Products */}
        <div className="p-8 bg-bg-warm rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-foreground mb-2">
              对我的茶感兴趣？
            </h2>
            <p className="text-text-light">
              产地可靠、工艺正宗、品质稳定
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-serif text-lg text-foreground mb-1">
                武夷岩茶 · 大红袍
              </h3>
              <p className="text-sm text-text-light mb-3">岩韵明显，回甘持久</p>
              <p className="text-tea-brown font-medium">¥168/份</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-serif text-lg text-foreground mb-1">
                正山小种
              </h3>
              <p className="text-sm text-text-light mb-3">松烟香气，醇厚甘甜</p>
              <p className="text-tea-brown font-medium">¥128/份</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:hello@teajourney.com?subject=想了解你的茶"
              className="btn-primary inline-block"
            >
              发邮件询问
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
