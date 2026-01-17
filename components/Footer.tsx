import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-body relative overflow-hidden">
      {/* 顶部装饰线 */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-tea-brown/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-32 h-10 flex items-center justify-start">
                 <Image
                    src="/images/new_logo.png"
                    alt="茶旅 Logo"
                    fill
                    className="object-contain object-left"
                  />
              </div>
            </Link>
            
            <p className="text-[#5A5654] text-sm leading-7 max-w-sm font-light mb-8">
              A journey from tech world to tea mountains.
              <br/>
              记录从代码世界回归山野的旅程。在慢下来的时光里，重新发现生活的温度。
            </p>

            <div className="flex gap-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="#" icon={<MessageCircle className="w-5 h-5" />} label="WeChat" />
            </div>
          </div>

          {/* 2. Navigation Section (占 4/12) */}
          <div className="md:col-span-4 md:pl-8">
            <h4 className="font-bold text-foreground mb-6">探索</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-3 text-sm">
                <FooterLink href="/reading" label="读书笔记" />
                <FooterLink href="/essays" label="生活随笔" />
                <FooterLink href="/tea-journal" label="做茶日记" />
              </div>
              <div className="flex flex-col space-y-3 text-sm">
                <FooterLink href="/about" label="关于作者" />
                <FooterLink href="/subscribe" label="订阅更新" />
              </div>
            </div>
          </div>

          {/* 3. Newsletter/CTA (占 3/12) */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-foreground mb-6">保持联络</h4>
             <p className="text-xs text-text-light mb-4 leading-relaxed">
               每两周发送一次生活重构报告。
               <br/>不贩卖焦虑，只分享思考。
             </p>
             <Link 
               href="/subscribe"
               className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#1A1816] text-[#F6F2EB] text-sm font-medium rounded-lg hover:bg-[#3A3634] transition-all duration-300 group"
             >
               订阅 Newsletter
               <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1A1816]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A8690]">
          <p>© {currentYear} TeaJourney. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-[#A69078] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#A69078] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-[#5A5654] hover:text-[#A69078] transition-colors duration-200 hover:translate-x-1 inline-block transform">
      {label}
    </Link>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E0D8CC] text-[#5A5654] hover:border-[#A69078] hover:text-[#A69078] hover:bg-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
