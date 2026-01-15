import React from 'react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import TeaJournalList from '@/components/TeaJournalList';
import { allTeaJournals } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function TeaJournalPage() {
  const categories = ['全部', '做茶日记', '茶知识', '产品故事'];

  // Server-side: Sort posts
  const posts = allTeaJournals.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-[#F6F2EB]">
      <Navigation />
      
      <PageHeader
        title="做茶日记"
        englishTitle="Tea Journal"
        description="记录每一次水与叶的相遇。在制茶与品鉴中，重新学习敬畏自然。"
        image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1600&q=80"
      />

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-6 relative z-30">
        <TeaJournalList posts={posts} categories={categories} />
      </main>
    </div>
  );
}
