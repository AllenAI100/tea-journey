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

*   **Font Family**:
    *   `font-serif`: Noto Serif SC。用于标题 (H1-H6)、引言、日期。
    *   `font-sans`: Noto Sans SC。用于正文、UI 控件。
*   **Letter Spacing (关键)**:
    *   中文衬线体标题：`tracking: 0.02em`。收紧字间距，增加凝聚力。
    *   英文装饰性小字：`tracking: 0.1em`。
*   **Line Height**:
    *   正文：`leading-loose (1.85)`。提供舒适的阅读呼吸感。
    *   标题：`leading-tight (1.25)`。

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
*   **混合**: 在 Hero 区域，图片与背景通过 `mix-blend-mode` 融合，而不是生硬的叠加。

### 文章详情 (Article)
*   **首字下沉**: 模拟杂志排版。
*   **引用块**: 左侧金线，背景微灰，字体衬线化。
*   **代码块**: 浅色背景，避免黑底代码块破坏页面的通透感。

---

*Last Updated: 2026-01-16 by Designer Skill*
