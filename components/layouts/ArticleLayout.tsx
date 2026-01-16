'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  category: string;
  date?: string;
  image?: string;
}

export default function ArticleLayout({ 
  children, 
  title, 
  category, 
  date = '2024.03.20', // Default date if not provided
  image 
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-tea-brown"></span>
              <span className="text-sm uppercase tracking-widest text-tea-brown font-bold">
                {category}
              </span>
              <span className="h-px w-8 bg-tea-brown"></span>
            </div>
            
            <h1 className="text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              {title}
            </h1>
            
            <time className="text-text-light italic text-sm">
              {date}
            </time>
          </motion.header>

          {/* Featured Image (Optional) */}
          {image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-16 rounded-xl overflow-hidden shadow-xl shadow-foreground/10"
            >
              <img 
                src={image} 
                alt={title}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="prose prose-stone prose-lg md:prose-xl mx-auto font-light
              prose-headings:text-foreground prose-headings:font-bold
              prose-p:text-text-body prose-p:leading-relaxed
              prose-strong:text-foreground prose-strong:font-medium
              prose-blockquote:border-l-tea-brown prose-blockquote:bg-white/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic
              prose-a:text-tea-brown prose-a:no-underline hover:prose-a:text-tea-deep prose-a:transition-colors
              prose-img:rounded-lg prose-img:shadow-md
            "
          >
            {children}
          </motion.div>
          
          {/* Divider */}
          <div className="section-divider mt-16 mb-16"></div>
          
          {/* Author/Footer for Article */}
          <div className="text-center">
             <p className="text-text-faint text-sm italic">
               TeaJourney - 记录 IT 人的茶生活
             </p>
          </div>
        </article>
      </main>
    </div>
  );
}