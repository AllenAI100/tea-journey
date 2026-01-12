import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E0D8CC] mt-20 bg-[#F6F2EB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo-icon.jpg" alt="茶旅" className="w-10 h-10 rounded-md" />
              <h3 className="text-xl font-handwriting text-[#2A2624]">茶旅</h3>
            </div>
            <p className="text-[#7A7674] text-sm max-w-sm leading-relaxed">
              用技术人的严谨，做一杯好茶。用文字记录生活与思考。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#2A2624] mb-4">内容</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/reading" className="text-[#7A7674] hover:text-[#A69078] transition-colors">读书笔记</Link>
              <Link href="/essays" className="text-[#7A7674] hover:text-[#A69078] transition-colors">生活随笔</Link>
              <Link href="/tea-journal" className="text-[#7A7674] hover:text-[#A69078] transition-colors">做茶日记</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#2A2624] mb-4">连接</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/about" className="text-[#7A7674] hover:text-[#A69078] transition-colors">关于我</Link>
              <Link href="/subscribe" className="text-[#7A7674] hover:text-[#A69078] transition-colors">订阅更新</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E0D8CC] text-center text-sm text-[#A6A2A0]">
          <p>© {new Date().getFullYear()} 茶旅 · IT人的茶生活</p>
        </div>
      </div>
    </footer>
  );
}
