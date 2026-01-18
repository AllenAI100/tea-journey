# TeaJourney Design System
> "顺应天时，尊重风土。"

这份文档定义了 TeaJourney 项目的核心设计语言。它是本站点的视觉宪法，任何代码变更都应遵循此标准，以保持"温润、有机、克制"的品牌调性。

## 1. 核心哲学 (Core Philosophy)

> **"即便是生活，我们也在用系统的思维去经营，但用感性的方式去表达。"**
> 
> TeaJourney 是一个"技术人"的生活实验报告。我们连接了两个世界：
> *   **理性内核**: 用 Debug 的思维审视制茶工艺，用重构的视角打磨生活方式。
> *   **感性表达**: 顺应天时，尊重风土，寻找数据之外的温度。

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

### 5.2 内容卡片模式 (Content Card Patterns)

我们为不同的内容类型定制了专属的视觉模式，以区分阅读体验。

#### 读书笔记 (Reading) - "数字书架" (Digital Bookshelf)
*   **布局**: Flex Row (左图右文)。
*   **视觉核心**: 拟真的书籍封面。
    *   `aspect-ratio: 2/3`
    *   **书脊效果**: 使用左侧光影渐变 (`bg-gradient-to-r`) 模拟书脊弧度。
    *   **阴影**: 独立的 `shadow-md`，不随卡片悬停而大幅变化（像静置的书）。

#### 随笔/思考 (Essays) - "杂志引言" (Editorial Quote)
*   **布局**: 纯文字卡片，Grid 布局。
*   **视觉核心**: 巨大的引号装饰与排版。
    *   **背景**: 使用 `bg-paper` + `grain-texture` 模拟信纸质感。
    *   **装饰**: 左上角巨大的淡色引号水印 (`opacity-5`)。
    *   **层级**: 摘要 (Excerpt) 使用大字号文楷 (`font-soft`) 作为主视觉，标题退居次席作为署名。

#### 习茶笔记 (Tea Notes) - "沉浸画廊" (Immersive Gallery)
*   **布局**: Zig-zag 交错布局 (左图右文 -> 右图左文)。
*   **视觉核心**: 大尺寸场景摄影。
    *   `aspect-ratio: 3/2` (宽幅)。
    *   **沉浸感**: 图片占据主导地位，文字作为旁白。
    *   **节奏**: 通过左右交替打破长列表的单调感，模拟漫步茶山的体验。

## 6. 开发规范 (Dev Guidelines)
*   **首字下沉**: 模拟杂志排版。
*   **引用块**: 左侧金线，背景微灰，字体衬线化。
*   **代码块**: 浅色背景，避免黑底代码块破坏页面的通透感。

---

*Last Updated: 2026-01-16 by Sisyphus (Layout Patterns Update)*
