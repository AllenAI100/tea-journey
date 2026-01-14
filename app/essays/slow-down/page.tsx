import React from 'react';
import ArticleLayout from '@/components/layouts/ArticleLayout';

export default function SlowDown() {
  return (
    <ArticleLayout
      title="慢下来，才能看见生活的纹理"
      category="生活随笔"
      date="2024.03.28"
      image="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80"
    >
      <p className="lead text-xl text-[#5A5654] mb-8 font-light">
        以前我的时间单位是毫秒（ms），现在我的时间单位是"一泡"。
      </p>
      
      <p>
        做程序员的时候，等待是最痛苦的事。Loading spinner 是敌人，Latency 是梦魇。我们优化算法，为了把 200ms 压缩到 50ms。
      </p>

      <h3>开水的温度</h3>
      <p>
        刚开始泡茶时，我总是很急。水一开就往壶里冲，希望能最快速度喝到嘴里。结果往往是烫嘴，且苦涩。
      </p>
      
      <p>
        后来老茶客告诉我，水烧开后要"静"一下。不同的茶需要不同的温度。绿茶要 80 度，那意味着你要看着水汽慢慢变小，甚至要用手背去感受壶壁的温度。
      </p>
      
      <blockquote>
        等待不是空转（Idle），由于等待，水温在变化，化学反应在酝酿。等待本身就是过程的一部分。
      </blockquote>

      <h3>Debug 生活</h3>
      <p>
        这让我反思我的生活。我是不是太急着要一个 Result？
        
        <ul>
          <li>看书，急着要干货总结；</li>
          <li>旅行，急着打卡拍照；</li>
          <li>聊天，急着打断对方输出观点。</li>
        </ul>
        
        现在的我，尝试把那种"等待水温降低"的心态带入生活。慢下来，生活的高分辨率纹理才会显现出来。就像高分屏下的字体，只有凑近了、静止了，才能看到边缘的细节。
      </p>
    </ArticleLayout>
  );
}