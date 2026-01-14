# Tea Journey - 产品设计指南 (Product Design Guide)

## 1. 核心定位 (Core Positioning)
**Tea Journey** 是一个以 **Lifestyle (生活方式)** 为主题的个人博客站点。
它记录了一位前 IT 技术人转型做茶的心路历程、生活感悟与哲学思考。

*   **核心叙事**: "从代码世界回归生活本质"。
*   **关键词**: 慢生活 (Slow Living)、内省 (Introspection)、茶文化 (Tea Culture)、真实 (Authenticity)。
*   **非核心**: 这是一个生活博客，**不是**技术博客。

## 2. 内容策略 (Content Strategy)

### ✅ 鼓励的内容 (Focus Areas)
*   **职业转型 (Career Transition)**: 分享从高压互联网行业转身投入传统茶行业的真实心路历程，迷茫与收获。
*   **做茶日常 (Tea Making)**: 记录制茶、评茶的过程，强调对感官（味觉、嗅觉）的重新唤醒。
*   **阅读与思考 (Reading & Thinking)**: 分享人文、哲学、商业类书籍的阅读感悟。
*   **生活哲学 (Life Philosophy)**: 关于"慢下来"、"独处"、"选择权"的深度思考。
*   **播客节目 (Podcast)**: 
    *   **定位**: 声音版的“慢生活”记录，强调陪伴感与沉浸感。
    *   **栏目名**: 《茶与白噪音》 (Tea & White Noise)。
    *   **形式**: 深度对谈、声音纪录片（ASMR）、个人独白。

### ⚠️ 限制的内容 (Constraints)
*   **技术/代码 (Tech/Code)**: 
    *   **占比**: 严格控制在 **10% 以下**。
    *   **形式**: 仅作为背景或思维方式的补充（如"用逻辑思维解构茶"），**避免**直接展示代码块、技术教程或过于晦涩的极客术语 (Jargon)。
    *   **场景**: 偶尔分享 AI 等前沿科技对生活的启发，但落脚点必须是"生活"。

## 3. 设计原则 (Design Principles)

### 视觉风格 (Visual Style)
*   **Zen & Clean**: 保持大量留白，使用温润的大地色系（茶色、米色、暖灰）。
*   **人文感**: 字体排版优先考虑衬线体 (Serif) 的优雅感，避免过于硬朗的工业风/科技风。
*   **去科技化**: 避免使用"终端 (Terminal)"、"代码高亮"、"霓虹灯"等典型的 Tech 视觉元素。

### 交互体验 (UX)
*   **沉浸式阅读**: 没有任何干扰阅读的弹窗或复杂的 Dashboard。
*   **情感化**: 交互动效应该是舒缓的 (Ease-out)、柔和的，模拟水流或烟雾的质感，而非机械的弹跳。

## 4. 技术架构备忘 (Tech Stack Notes)

### 播客系统 (Podcast System)
*   **当前方案 (v1.1)**: "MDX-like" 静态数据驱动。
    *   数据源: `lib/podcast-data.ts` (Mock Data)。
    *   播放器: 自研 `AudioPlayer` 组件 (HTML5 Audio)。
    *   详情页: `app/podcast/[slug]/page.tsx` 动态路由。
*   **未来规划 (Roadmap)**: 迁移至 Contentlayer 或 RSS 自动化抓取。

---

> **产品经理备注**: 
> 本站点的最终目标是展现一个**鲜活的人**，而不是展示一个**技术极客**。
> 所有设计决策都应问自己："这是否传达了'慢生活'的松弛感？"
