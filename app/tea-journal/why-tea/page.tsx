import ArticleHeader from '@/components/article/ArticleHeader';
import ArticleContent from '@/components/article/ArticleContent';

export default function WhyTeaPage() {
  return (
    <div className="bg-white min-h-screen">
      <ArticleHeader
        title="为什么从IT转行做茶：一个技术人的选择"
        subtitle="在代码世界摸爬十几年，我决定换一种方式理解世界。不是冲动，是对生活方式的重新思考。"
        category="做茶日记"
        date="2025年1月8日"
        readTime="8 分钟阅读"
        coverImage="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1600&q=80"
      />

      <ArticleContent>
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px] first-letter:text-[#A69078]">
          2024年的一个深夜，我盯着屏幕上第 427 行的报错，手里握着一杯已经凉透的速溶咖啡。屏幕的蓝光映在眼镜片上，窗外是北京凌晨三点的寂静。
        </p>

        <p>
          那是一个典型的 Stack Overflow 溢出错误，也是我心态溢出的临界点。我突然问了自己一个问题：<strong>“如果明天服务器全部关停，我这十年的工作，还剩下什么？”</strong>
        </p>

        <p>
          答案令人恐慌。代码是虚拟的，构建在别人的沙箱里。我渴望一种“实体感”，渴望指尖能触碰到真实的纹理，渴望嗅觉能捕捉到季节的变化。
        </p>

        <h2>从 0 和 1 到 100°C 的开水</h2>

        <p>
          第一次被茶打动，是在潮州。朋友递给我一杯凤凰单丛“鸭屎香”。
        </p>

        <p>
          在此之前，茶对我来说只是含咖啡因的棕色液体。但那一杯不同。它带着栀子花的香气，入口有细腻的奶韵，回甘像是在口腔里放了一场慢动作的烟花。
        </p>

        <blockquote>
          “这茶怎么做的？”我问。
          <br/>
          “看天，看地，看师傅的手。”朋友答。
        </blockquote>

        <p>
          这对一个习惯了 `if-else` 确定性逻辑的程序员来说，简直是某种玄学暴击。代码是确定性的：输入 A，必然输出 B。但茶充满了变量：土壤的酸碱度、采摘那天的湿度、摇青时的力度、焙火时的温度曲线……
        </p>

        <p>
          每一个变量的微小抖动，都会导致最终风味的巨大分叉（Fork）。这不正是一个极其复杂的分布式系统吗？
        </p>

        <img 
          src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=1200&q=80" 
          alt="茶叶制作过程"
        />
        <p className="text-sm text-center text-gray-500 mt-[-20px] mb-8 italic">制茶，是一场与时间的博弈</p>

        <h2>用 Git 思维管理制茶工艺</h2>

        <p>
          决定转行后，我没有丢掉我的技术背景。相反，我发现程序员的思维是做茶最好的工具。
        </p>

        <p>
          我开始建立我的“制茶数据库”。传统师傅靠经验（Experience），我靠数据（Data）。
        </p>

        <ul>
          <li><strong>Version Control (版本控制)</strong>：每一次试制都是一次 Commit。我记录下当天的温湿度、发酵时长、焙火温度。</li>
          <li><strong>A/B Testing (灰度测试)</strong>：同一批鲜叶，分两组处理，一组重摇青，一组轻摇青，对比风味差异。</li>
          <li><strong>Refactoring (重构)</strong>：当发现某款茶苦涩度过高时，我不怪“运气”，而是去重构我的“杀青”流程。</li>
        </ul>

        <p>
          慢慢地，我发现“玄学”变少了，“科学”变多了。茶不再是不可捉摸的神谕，而是可以被理解、被优化的自然作品。
        </p>

        <h2>Debug 生活</h2>

        <p>
          现在，我依然在 Debug。不过对象不再是代码，而是生活本身。
        </p>

        <p>
          做茶教会我最重要的一件事是：<strong>等待（Latency）</strong>。
        </p>

        <p>
          以前我追求毫秒级的响应速度。但在茶的世界里，急不来。发酵需要时间，焙火后的退火需要时间（甚至长达半年）。你必须学会与时间共处，而不是试图战胜它。
        </p>

        <p>
          如果你也感到疲惫，不妨停下来，给自己泡一杯茶。不用管什么茶道礼仪，只需要热水注入的那一刻，看着茶叶舒展。
        </p>

        <p>
          那是生活给你的 <code>Hello, World</code>。
        </p>
      </ArticleContent>
    </div>
  );
}
