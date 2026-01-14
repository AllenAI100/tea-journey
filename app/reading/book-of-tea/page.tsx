import React from 'react';
import ArticleLayout from '@/components/layouts/ArticleLayout';

export default function BookOfTea() {
  return (
    <ArticleLayout
      title="《茶之书》笔记：东方美学的现代解读"
      category="读书笔记"
      date="2024.03.15"
      image="https://images.unsplash.com/photo-1507048945892-ff6b5b762619?w=800&q=80"
    >
      <p className="lead text-xl text-[#5A5654] mb-8 font-light italic border-l-4 border-[#A69078] pl-4">
        "茶道是一种对残缺的崇拜，是在我们都明白不可能完美的生命中，为了成就某种可能的完美，所进行的温柔试探。" —— 冈仓天心
      </p>
      
      <p>
        在代码的世界里，我们追求完美：Zero Bugs，100% Coverage，Pixel Perfect。但在茶的世界里，冈仓天心告诉我，美存在于"不完美"之中。
      </p>

      <h3>茶室与数据中心</h3>
      <p>
        现代人习惯了数据中心的整齐划一，服务器闪烁着冰冷的蓝光。而茶室（Sukiya）是"空之屋"。它不追求永恒，甚至是用易损的材料建成的。这让我想到了微服务架构——不是为了建造一座永恒的单体巨石，而是接受组件的短暂和迭代。
      </p>

      <h3>关于"残缺"的美学</h3>
      <p>
        如果我们把这种思维带回产品设计中呢？不再强迫用户走完一个完美的 Happy Path，而是允许错误的发生，设计优雅的 Fallback（就像茶碗上的金缮修补）。
      </p>
      
      <blockquote>
        真正的美，只能被那些在这个并不完美的世界里，完成了心理建设的人所发现。
      </blockquote>

      <p>
        这周，我试着在 Code Review 时少了一些对他人的苛责，多了一份对"残缺"的包容。这或许就是茶道给我的第一份重构方案。
      </p>
    </ArticleLayout>
  );
}