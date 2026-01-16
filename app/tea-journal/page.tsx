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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHeader
        title="做茶日记"
        englishTitle="Tea Journal"
        description="记录每一次水与叶的相遇。在制茶与品鉴中，重新学习敬畏自然。"
      />

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-30">
        <TeaJournalList posts={posts} categories={categories} />
      </main>
    </div>
  );
}
