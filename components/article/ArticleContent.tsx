'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ArticleContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArticleContent({ children, className }: ArticleContentProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={cn(
        "max-w-[680px] mx-auto px-6 pb-24", // 限制宽度以提升阅读体验
        "text-lg text-[#2A2624] leading-relaxed", // 基础文字样式
        
        // 段落样式
        "[&_p]:mb-8 [&_p]:font-light [&_p]:tracking-wide",
        
        // 标题样式
        "[&_h2]:text-2xl [&_h2]:font-serif [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-[#1A1816] [&_h2]:font-medium",
        "[&_h3]:text-xl [&_h3]:font-serif [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-[#1A1816]",
        
        // 引用块样式
        "[&_blockquote]:border-l-4 [&_blockquote]:border-[#A69078] [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-10 [&_blockquote]:bg-[#F6F2EB] [&_blockquote]:italic [&_blockquote]:text-[#5A5654]",
        
        // 列表样式
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-2 [&_li]:text-[#2A2624]",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-8 [&_ol]:space-y-2",
        
        // 强调样式
        "[&_strong]:font-semibold [&_strong]:text-[#1A1816]",
        
        // 代码块简单的样式 (如果需要)
        "[&_code]:bg-[#F0EBE3] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[#8B755D] [&_code]:text-base [&_code]:font-mono",
        
        // 图片容器
        "[&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:w-full",
        
        // 分割线
        "[&_hr]:my-12 [&_hr]:border-[#E0D8CC]",

        className
      )}
    >
      {/* 首字下沉效果，仅对第一个 p 生效，需要手动添加 class 或通过 JS 控制，这里暂不强制 */}
      {children}
    </motion.article>
  );
}
