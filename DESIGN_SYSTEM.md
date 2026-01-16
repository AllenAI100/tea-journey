# TeaJourney Design System
> "顺应天时，尊重风土。"

这份文档定义了 TeaJourney 项目的核心设计语言。它是本站点的视觉宪法，任何代码变更都应遵循此标准，以保持"温润、有机、克制"的品牌调性。

## 1. 核心哲学 (Core Philosophy)

*   **Organic over Digital**: 拒绝生硬的数码感（纯黑、纯白、高饱和色）。优先选择自然界存在的颜色（苔藓、树皮、宣纸、陶土）。
*   **Tactile Materiality**: 界面不仅仅是像素的排列，更应传达物理质感。卡片要有重量，纸张要有纹理，玻璃要有厚度。
*   **Typography is Architecture**: 依靠排版（字号、字重、间距）构建结构，而不是依赖分割线和色块。
*   **Zen of Void**: 留白不是空间的浪费，而是呼吸的必要。

## 2. 色彩体系 (Color Palette)

我们使用一套源自"茶与山野"的有机配色。

### Primary (品牌色)
*   **Deep Moss (#58664A)**: 主色调。深沉的苔藓绿，用于强调文字、选中态和重要图标。替代了传统的科技蓝或数码绿。
*   **Light Moss (#7A8B69)**: 辅助绿色，用于 hover 态。

### Accent (点缀色)
*   **Champagne Gold (#C6A355)**: 香槟金/干茶色。用于高光、引言边框、日期和重要修饰。
*   **Clay Red (#D96C4E)**: 陶土红。用于代码块高亮或极少数的警告/强调，比正红色更雅致。

### Neutral (中性色)
*   **Xuan Paper (#F7F5F0)**: 宣纸白。背景色，极淡的暖灰，模拟纸张。
*   **Ink Black (#24201D)**: 墨黑。正文色，深褐黑色，避免使用纯黑 (#000000)。
*   **Stone Gray (#6E6862)**: 石灰。次级文字色。

## 3. 排版规范 (Typography)

> "字如其人，亦如其茶。" —— 我们构建了一套融合传统人文与现代屏幕美学的混合字体系统。

### 3.1 字体家族 (Font Stacks)

我们采用了 **"Web Fonts First, Local Fallback"** 的混合策略，通过国内镜像引入 Google Fonts，确保全平台一致的高级质感。

*   **标题 (Headings)**: `LXGW WenKai Screen` (霞鹜文楷)。
    *   **角色**: 替代了传统的宋体。
    *   **哲学**: 从"博物馆的严肃"转向"茶人手记的亲切"。文楷兼具楷书的书写韵味与黑体的清晰骨架，圆润温厚，如温玉在手。
*   **正文 (Body)**: `Noto Sans SC` (思源黑体)。
    *   **角色**: UI 界面、长文正文。
    *   **哲学**: 现代、中性、空气感。作为背景，不抢夺内容的注意力。
*   **阅读增强 (Reading & Quotes)**: `LXGW WenKai` (文楷)。
    *   **应用**: 文章摘要 (Excerpt)、引用块 (Blockquote)、页眉描述。
    *   **目的**: 在信息流中创造"慢下来"的视觉锚点，提示用户进入阅读模式。
*   **装饰与品牌 (Brand & Deco)**: `Ma Shan Zheng` (马善政)。
    *   **应用**: Logo、Hero Section 标语。
    *   **特点**: 苍劲有力的行楷，传递"野性"与"生命力"。采用 **本地化部署** (Self-hosted) 策略，确保核心品牌资产零依赖加载。

### 3.2 技术实现 (Implementation)

*   **CSS 变量**:
    *   `font-sans`: 界面基础。
    *   `font-serif`: 备用/传统标题（思源宋体）。
    *   `font-soft`: **新增**。专用于文楷，代表柔软、人文的语调。
    *   `font-handwriting`: 专用于书法体。
*   **Letter Spacing (关键)**:
    *   中文标题：`tracking: 0.02em`。收紧字间距，增加凝聚力。
    *   英文装饰性小字：`tracking: 0.1em`。

### 3.3 排版层级 (Hierarchy)

*   **Line Height**:
    *   正文：`leading-loose (1.85)`。提供舒适的阅读呼吸感。
    *   标题：`leading-tight (1.25)`。紧凑有力。
*   **Font Weight**:
    *   文楷标题使用 `font-bold` (700)，以弥补楷体笔画较细的视觉弱点，增加分量感。

## 4. 物理质感 (Materiality & Motion)

### 光学玻璃 (Optical Glass)
用于 Navigation 和浮层。
```css
backdrop-filter: blur(24px) saturate(150%);
background: rgba(246, 242, 235, 0.8);
border-bottom: 1px solid rgba(255, 255, 255, 0.5);
```

### 纸张纹理 (Paper Grain)
全局覆盖一层 SVG 噪点，模拟纸张的粗糙感。
```css
.grain-texture { opacity: 0.4; mix-blend-mode: overlay; }
```

### 物理卡片 (Physical Card)
卡片不仅仅是平面的，它有重量和阻尼。
```css
/* 缓动曲线：模拟物理弹簧 */
transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
duration: 500ms;

/* 悬停态：上浮 + 投影加深 */
transform: translateY(-4px);
box-shadow: 0 20px 40px -15px rgba(193, 159, 110, 0.15);
```

## 5. 组件指南 (Component DNA)

### 按钮 (Buttons)
*   **形状**: 全圆角 (Full Pill)。
*   **质感**: 避免扁平，使用微弱的内阴影或渐变边框增加立体感。

### 图片 (Images)
*   **处理**: 图片通常带有遮罩或圆角。
*   **Hero Layout**: 采用 "Editorial Split"（左图右文）布局。
    *   **Desktop**: 图片在左 (Col 7)，文字在右 (Col 5)，保持非对称美感。
    *   **Mobile**: 图片在上，文字在下。
    *   **风格**: 图片带有深邃的物理投影 (`shadow-2xl`) 和微妙的 `mix-blend-multiply` 纹理覆盖，去除多余的浮层装饰，保持画面纯净。

### 文章详情 (Article)
*   **首字下沉**: 模拟杂志排版。
*   **引用块**: 左侧金线，背景微灰，字体衬线化。
*   **代码块**: 浅色背景，避免黑底代码块破坏页面的通透感。

---

*Last Updated: 2026-01-16 by Sisyphus (Typography Overhaul)*
