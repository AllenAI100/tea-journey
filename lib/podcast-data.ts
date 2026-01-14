export interface PodcastEpisode {
  slug: string;
  title: string;
  date: string;
  duration: string;
  excerpt: string;
  coverImage: string;
  audioUrl: string;
  content: string; // 这里模拟 Show Notes 的 HTML/Markdown 内容
}

export const episodes: PodcastEpisode[] = [
  {
    slug: 'ep01-hello-world',
    title: 'Ep.01 当程序员决定去卖茶',
    date: '2024.03.20',
    duration: '45:12',
    excerpt: '第一期节目，聊聊为什么放弃百万年薪，跑去云南大山里做"茶农"。是逃避，还是觉醒？',
    coverImage: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1600&q=80', // 电脑与茶
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/24/audio_c8c8a73467.mp3?filename=pouring-tea-10377.mp3', // 暂时用白噪音替代
    content: `
      <h2>本期简介</h2>
      <p>这是 Tea Journey 的第一期播客。录制于北京的一个深夜，窗外下着雨。</p>
      <p>很多人问我：<strong>“写代码和做茶，到底有什么共同点？”</strong></p>
      <p>在我看来，它们都是在构建系统。代码是在硅基芯片上构建逻辑，做茶是在碳基树叶上构建风味。</p>
      
      <h2>时间轴</h2>
      <ul>
        <li>02:15 - 那个让我决定辞职的 Stack Overflow 报错</li>
        <li>15:30 - 第一次喝到鸭屎香的震撼</li>
        <li>28:40 - 为什么说制茶是更高级的编程？</li>
        <li>40:10 - 给想转行的技术人的建议</li>
      </ul>

      <h2>延伸阅读</h2>
      <p>本期提到的书：《禅与摩托车维修艺术》</p>
    `
  },
  {
    slug: 'ep02-white-noise',
    title: 'Ep.02 声音纪录片：武夷山的雨声',
    date: '2024.04.05',
    duration: '22:30',
    excerpt: '没有对话，只有声音。带上耳机，跟我一起走进武夷山的三坑两涧，听听岩茶生长的声音。',
    coverImage: 'https://images.unsplash.com/photo-1504542982818-1a6ca87030e2?w=1600&q=80', // 山雨
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/24/audio_c8c8a73467.mp3?filename=pouring-tea-10377.mp3',
    content: `
      <h2>声音导览</h2>
      <p>这是一期特别节目。我不说话，只做大自然的搬运工。</p>
      <p>你将听到：</p>
      <ul>
        <li>清晨 5 点，牛栏坑的鸟鸣</li>
        <li>采茶工踩在落叶上的沙沙声</li>
        <li>焙茶间里，炭火轻微的爆裂声</li>
      </ul>
    `
  }
];

export function getEpisodeBySlug(slug: string): PodcastEpisode | undefined {
  return episodes.find(ep => ep.slug === slug);
}
