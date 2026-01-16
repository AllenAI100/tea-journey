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
        prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#24201D]
        prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-3xl prose-h2:tracking-tight prose-h2:leading-tight
        prose-h3:mt-10 prose-h3:mb-6 prose-h3:text-2xl prose-h3:italic prose-h3:text-[#58664A] prose-h3:font-serif
        
        /* 正文与链接 */
        prose-p:leading-loose prose-p:text-[#3D3834] prose-p:mb-8
        prose-a:text-[#58664A] prose-a:no-underline prose-a:border-b prose-a:border-[#58664A]/30 prose-a:transition-all hover:prose-a:border-[#58664A] hover:prose-a:text-[#3D4A30] hover:prose-a:bg-[#58664A]/5
        
        /* 引用块 - 杂志风格 */
        prose-blockquote:border-l-[3px] prose-blockquote:border-[#C6A355] 
        prose-blockquote:bg-[#F0EDE6] prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:my-10
        prose-blockquote:font-serif prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:text-[#6E6862] prose-blockquote:leading-relaxed
        
        /* 列表 */
        prose-li:marker:text-[#C19F6E] prose-li:text-[#3D3834] prose-li:my-2
        
        /* 图片 */
        prose-img:rounded-lg prose-img:shadow-lg prose-img:shadow-[#24201D]/5 prose-img:my-10 prose-img:border prose-img:border-[#E6E0D4]
        
        /* 代码块 */
        prose-code:text-[#D96C4E] prose-code:bg-[#F0EDE6] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        
        /* 强调用色 */
        prose-strong:text-[#24201D] prose-strong:font-semibold
        
        /* 首字下沉 (仅对第一个 p 生效，需配合 CSS 选择器，这里用 group-first 模拟或直接写) */
        first-letter:float-left first-letter:text-[4rem] first-letter:line-height-[1] first-letter:font-serif first-letter:text-[#C6A355] first-letter:mr-3 first-letter:mt-[-4px] first-letter:font-medium
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
