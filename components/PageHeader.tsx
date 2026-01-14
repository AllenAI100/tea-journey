'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description: string;
  englishTitle?: string;
  image: string;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  englishTitle,
  image,
  className
}: PageHeaderProps) {
  return (
    <section className={cn("relative h-[45vh] min-h-[400px] flex items-end pb-16 justify-center text-center px-6 overflow-hidden grain-texture", className)}>
      {/* Background Image - 找回通透感 */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-[0.85] saturate-[0.9] animate-image-fade" 
          priority
          sizes="100vw"
        />
        
        {/* 智能渐变系统：放弃全局压暗，改为"上透下深" */}
        
        {/* 1. 顶部微弱遮罩 (30%)：仅防止高光过曝，保留天空/光影细节 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent h-1/3"></div>

        {/* 2. 底部功能性遮罩 (80% -> 0%)：平滑过渡，专门为文字提供深色舞台 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-[#0F0E0D]/60 to-transparent top-1/3"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 w-full flex flex-col items-center text-center pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* English Tag */}
          {englishTitle && (
            <motion.div 
              className="inline-flex items-center gap-3 mb-6 opacity-0 animate-fade-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="h-px w-10 bg-[#A69078]"></span>
              <span className="text-xs md:text-sm text-[#D4C8B5] tracking-[0.3em] uppercase font-sans font-medium drop-shadow-md" style={{ color: '#D4C8B5' }}>
                {englishTitle}
              </span>
              <span className="h-px w-10 bg-[#A69078]"></span>
            </motion.div>
          )}

          {/* Main Title - 强制白色内联样式 */}
          <h1 className="text-5xl md:text-7xl mb-6 font-serif tracking-tight text-white drop-shadow-2xl" style={{ color: '#FFFFFF', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-xl text-[#E6E0D6] max-w-2xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-lg opacity-90" style={{ color: '#E6E0D6' }}>
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
