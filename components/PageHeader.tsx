'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  englishTitle?: string;
  // image 属性保留但设为可选，以便兼容旧代码，但新设计中我们主要使用纯色/纹理模式
  image?: string; 
  className?: string;
}

export default function PageHeader({
  title,
  description,
  englishTitle,
  className
}: PageHeaderProps) {
  return (
    <section className={cn(
      "relative min-h-[35vh] flex items-center justify-center text-center px-6 overflow-hidden pt-24 pb-16 bg-bg-soft",
      className
    )}>
      {/* 背景纹理 */}
      <div className="absolute inset-0 grain-texture opacity-60 pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col items-center"
        >
          {/* English Tag */}
          {englishTitle && (
            <motion.div 
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-xs md:text-sm text-primary tracking-[0.2em] uppercase font-sans font-medium px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
                {englishTitle}
              </span>
            </motion.div>
          )}

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl mb-6 tracking-tight text-foreground leading-tight">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg text-text-light font-soft max-w-xl mx-auto leading-relaxed font-light">
            {description}
          </p>
          
          {/* 装饰性分割线 */}
          <div className="mt-8 w-16 h-px bg-tea-brown"></div>
        </motion.div>
      </div>
    </section>
  );
}
