'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function SubscribePage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-background grain-texture relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tea-brown/5 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header: The Invitation */}
        <div className="text-center mb-16 relative">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg shadow-tea-brown/10 rotate-3 border-4 border-white">
            <Image 
              src="/images/tea-cup.jpg" 
              alt="茶" 
              width={100}
              height={100}
              className="w-full h-full object-cover" 
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-soft font-bold text-foreground mb-6 leading-tight">
            每周一封，<br/>
            关于<span className="text-tea-brown italic">生活重构</span>的思考。
          </h1>
          <p className="text-xl text-text-light font-light max-w-2xl mx-auto leading-relaxed">
            在这个充满噪音的世界，我们只发送信号。
            <br/>
            没有算法推荐，只有我写给你的一对一信件。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left: Value Proposition (权益) */}
          <div className="md:col-span-7 space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Mail className="w-5 h-5 text-tea-brown" />
                你将收到什么
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "深度阅读笔记", desc: "不是书单，而是经过咀嚼和反刍的思维模型。" },
                  { title: "未公开的思考", desc: "博客上不会发布的、更私密的个人观察与纠结。" },
                  { title: "制茶幕后", desc: "关于风土、工艺与失败的真实记录。" },
                  { title: "生活实验", desc: "数字游民、极简主义、抗焦虑的实践报告。" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium text-sm">{item.title}</h4>
                      <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Invitation (社群) */}
            <div className="p-8 bg-tea-warm/20 rounded-2xl border border-tea-brown/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tea-brown/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  寻找同路人
                </h3>
                <p className="text-text-light text-sm mb-6 leading-relaxed">
                  如果你也喜欢探讨茶、禅与生活，欢迎加入我们的读者社群。
                  <br/>
                  在这里，我们只谈风味与感悟，不谈 K 线与焦虑。
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-white p-2 rounded-xl shadow-sm border border-border flex-shrink-0">
                    {/* 这里替换为真实的二维码图片 */}
                    <div className="w-full h-full bg-foreground/5 rounded-lg flex items-center justify-center text-xs text-text-faint font-mono text-center">
                      QR Code
                    </div>
                  </div>
                  <div className="text-xs text-text-light">
                    <p className="font-bold text-foreground mb-1">扫码加入</p>
                    <p>验证暗号：<span className="font-mono text-tea-brown">TEA JOURNEY</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Subscribe Form (邀请函) */}
          <div className="md:col-span-5 sticky top-24">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-xl shadow-tea-brown/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-tea-brown/40"></div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2 font-soft">
                加入旅程
              </h2>
              <p className="text-text-light text-sm mb-8">
                加入 2,000+ 位订阅者，开始你的生活重构。
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg-soft/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground placeholder:text-text-faint"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary group flex items-center justify-center gap-2 py-4 text-base"
                >
                  发送给我 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-xs text-text-faint mt-6 text-center leading-relaxed">
                * 承诺不发送垃圾邮件。<br/>
                随时可以点击底部的 `Unsubscribe` 退订。
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
