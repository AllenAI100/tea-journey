import { allTeaJournals } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import { Mdx } from '@/components/MdxComponent';
import { format } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allTeaJournals.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allTeaJournals.find((post) => post.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tea Journey`,
    description: post.excerpt,
  };
}

export default async function TeaJournalPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allTeaJournals.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      {/* 顶部占位，防止导航栏遮挡内容 (因为 Navigation 是 fixed 的) */}
      <div className="h-24"></div>

      <main className="max-w-3xl mx-auto px-6 py-12 relative z-10">
        
        {/* Article Header - 杂志风格 */}
        <header className="text-center mb-16">
          {/* Top Meta */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full border border-[#A69078]/30 text-[#A69078] text-xs font-medium tracking-widest uppercase bg-[#A69078]/5">
              {post.category}
            </span>
            <span className="text-[#8A8690] text-sm font-mono">{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif text-[#2C2824] leading-tight mb-8">
            {post.title}
          </h1>
          
          {/* Excerpt / Lead Paragraph */}
          <p className="text-[#5A5654] text-xl font-light italic max-w-2xl mx-auto leading-relaxed border-y border-[#E0D8CC] py-6">
            "{post.excerpt}"
          </p>
        </header>

        {/* Featured Image */}
        <figure className="relative w-full mb-16 group">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#A69078]/10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <figcaption className="text-center text-xs text-[#8A8690] mt-4 font-mono">
            Photo via Unsplash · The Visual Journey
          </figcaption>
        </figure>

        {/* Article Body */}
        <div className="bg-white px-8 py-12 md:p-16 rounded-3xl shadow-[0_4px_30px_rgba(166,144,120,0.08)] border border-[#E0D8CC]/50 relative overflow-hidden">
          {/* 顶部装饰线 */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A69078]/20 to-transparent"></div>
          
          <Mdx html={post.body.html} />

          {/* Footer Signature */}
          <div className="mt-20 pt-10 border-t border-[#E0D8CC] flex flex-col items-center text-center">
            <div className="w-8 h-8 mb-4 opacity-50">
              <svg viewBox="0 0 24 24" fill="none" stroke="#A69078" strokeWidth="1">
                <path d="M12 21C12 21 6 14 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 14 12 21 12 21Z" />
                <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" />
              </svg>
            </div>
            <p className="font-serif text-[#1A1816] mb-6">Tea Journey</p>
            <Link href="/tea-journal" className="flex items-center gap-2 text-[#A69078] hover:text-[#8B5E3C] transition-colors group text-sm font-medium tracking-wide uppercase">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Journal
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
