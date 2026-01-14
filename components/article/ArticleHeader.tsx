'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleHeaderProps {
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
}

export default function ArticleHeader({
  title,
  subtitle,
  category,
  date,
  readTime,
  coverImage
}: ArticleHeaderProps) {
  return (
    <div className="relative w-full mb-12">
      {/* 返回按钮 - 绝对定位 */}
      <div className="absolute top-0 left-0 z-20 p-6 md:p-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">返回首页</span>
        </Link>
      </div>

      {/* Hero Image 区域 */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {/* 图片层 */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* 渐变遮罩：底部黑色渐变保证文字可读性 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        </motion.div>

        {/* 标题内容 */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto text-white"
          >
            {/* 分类标签 */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#A69078] text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-widest">
                {category}
              </span>
            </div>

            {/* 主标题 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-4 text-shadow-sm">
              {title}
            </h1>

            {/* 副标题 */}
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 font-light mb-6 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* 元数据 */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
