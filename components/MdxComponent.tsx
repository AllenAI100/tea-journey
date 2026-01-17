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
        prose-headings:font-bold prose-headings:text-foreground
        prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-3xl prose-h2:tracking-tight prose-h2:leading-tight
        prose-h3:mt-10 prose-h3:mb-6 prose-h3:text-2xl prose-h3:italic prose-h3:text-primary
        
        /* 正文与链接 */
        prose-p:leading-loose prose-p:text-text-body prose-p:mb-8
        prose-a:text-primary prose-a:no-underline prose-a:border-b prose-a:border-primary/30 prose-a:transition-all hover:prose-a:border-primary hover:prose-a:text-primary-dark hover:prose-a:bg-primary/5
        
        /* 引用块 - 杂志风格 */
        prose-blockquote:border-l-[3px] prose-blockquote:border-accent-gold 
        prose-blockquote:bg-bg-soft prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:my-10
        prose-blockquote:font-soft prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:text-text-light prose-blockquote:leading-relaxed
        
        /* 列表 */
        prose-li:marker:text-tea-brown prose-li:text-text-body prose-li:my-2
        
        /* 图片 */
        prose-img:rounded-lg prose-img:shadow-lg prose-img:shadow-foreground/5 prose-img:my-10 prose-img:border prose-img:border-border
        
        /* 代码块 */
        prose-code:text-accent-coral prose-code:bg-bg-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        
        /* 强调用色 */
        prose-strong:text-foreground prose-strong:font-semibold
        
        /* 首字下沉 */
        first-letter:float-left first-letter:text-[4rem] first-letter:line-height-[1] first-letter:font-soft first-letter:text-accent-gold first-letter:mr-3 first-letter:mt-[-4px] first-letter:font-medium
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
