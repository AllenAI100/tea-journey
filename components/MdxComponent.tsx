import React from 'react';

interface MarkdownProps {
  html: string;
}

export function Mdx({ html }: MarkdownProps) {
  return (
    <article 
      className="
        prose prose-stone prose-lg max-w-none 
        
        /* 标题排版 */
        prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#2C2824]
        prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl prose-h2:tracking-wide
        prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-2xl prose-h3:italic prose-h3:text-[#5A5654]
        
        /* 正文与链接 */
        prose-p:leading-loose prose-p:text-[#3A3634]
        prose-a:text-[#A69078] prose-a:no-underline prose-a:border-b prose-a:border-[#A69078]/30 prose-a:transition-all hover:prose-a:border-[#A69078] hover:prose-a:text-[#8B5E3C]
        
        /* 引用块 - 杂志风格 */
        prose-blockquote:border-l-4 prose-blockquote:border-[#A69078] 
        prose-blockquote:bg-[#F9F7F4] prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg
        prose-blockquote:font-serif prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:text-[#5A5654]
        
        /* 列表 */
        prose-li:marker:text-[#A69078]
        
        /* 图片 */
        prose-img:rounded-xl prose-img:shadow-lg prose-img:shadow-[#A69078]/10
        
        /* 首字下沉 (仅对第一个 p 生效，需配合 CSS 选择器，这里用 group-first 模拟或直接写) */
        first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:text-[#A69078] first-letter:mr-3 first-letter:mt-[-6px]
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
