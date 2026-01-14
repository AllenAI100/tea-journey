import React from 'react';
import ArticleLayout from '@/components/layouts/ArticleLayout';

export default function WhyTea() {
  return (
    <ArticleLayout
      title="为什么从IT转行做茶：一个技术人的选择"
      category="做茶日记"
      date="2024.01.10"
      image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80"
    >
      <p className="lead text-xl text-[#5A5654] mb-8 font-light italic border-l-4 border-[#A69078] pl-4">
        在代码世界摸爬十几年，我决定换一种方式理解世界。不是冲动，是对生活方式的重新思考。
      </p>

      <p>
        我曾经以为，世界上最复杂的逻辑都在 Linux 内核里，最难解的 Bug 都在并发线程中。直到我遇到了一片树叶——普洱茶。
      </p>

      <h3>变量与不可变性</h3>
      <p>
        做软件时，我们追求 "Immutability"（不可变性），希望输入 A 永远得到输出 B。但在做茶的过程中，唯一的常量就是"变化"。
      </p>
      <p>
        同样的茶园，今年的雨水多了一点，香气就变得高扬但汤水变薄；同样的杀青锅温，手法的轻重略有不同，苦涩化的速度就截然不同。
      </p>
      
      <blockquote>
        茶，是自然界最复杂的模拟信号。而我试图用数字化的思维去记录它，这本身就是一场有趣的冲突与和解。
      </blockquote>

      <h3>从 `console.log` 到 `Tasting Notes`</h3>
      <p>
        以前我的记录是 Log 文件，全是 Error 和 Info。现在我的记录是审评表：
      </p>
      <ul>
        <li><strong>外观：</strong> 紧结条索，色泽墨绿</li>
        <li><strong>汤色：</strong> 金黄明亮</li>
        <li><strong>香气：</strong> 兰花香伴随蜜韵</li>
        <li><strong>滋味：</strong> 入口微苦，秒化回甘</li>
      </ul>

      <p>
        这不仅仅是职业的转换，更是感官的觉醒。我开始重新通过嗅觉、味觉和触觉去感知这个世界，而不是仅仅通过屏幕上的像素点。
      </p>
    </ArticleLayout>
  );
}