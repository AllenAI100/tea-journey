'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '读书', path: '/reading' },
    { name: '随笔', path: '/essays' },
    { name: '做茶', path: '/tea-journal' },
    { name: '关于', path: '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
          isScrolled
            ? 'h-16 bg-[#F6F2EB]/95 backdrop-blur-md shadow-sm border-b border-[#E0D8CC]/50'
            : 'h-24 bg-gradient-to-b from-[#F6F2EB]/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Logo Section - 放大容器 */}
            <Link href="/" className="flex items-center gap-3 group h-full">
              {/* 从 w-32 (128px) -> w-40 (160px) */}
              <div className="relative h-12 w-40 overflow-hidden flex items-center">
                <Image
                  src="/images/new_logo.png"
                  alt="茶旅"
                  fill
                  className="object-contain object-left transition-transform duration-300 group-hover:opacity-80"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-base tracking-wide transition-all duration-500 relative group py-2 font-medium flex flex-col items-center ${
                        isActive 
                          ? 'text-[#1A1816]' 
                          : 'text-[#5A5654] hover:text-[#1A1816]'
                      }`}
                    >
                      {item.name}
                      
                      {/* 禅意交互：墨点指示器 */}
                      {/* 1. 选中态：实心茶色圆点 */}
                      {isActive && (
                        <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#A69078] shadow-[0_0_8px_rgba(166,144,120,0.6)]"></span>
                      )}
                      
                      {/* 2. 悬停态：空心/虚化圆点 (仅当未选中时显示) */}
                      {!isActive && (
                        <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#E0D8CC] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"></span>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="h-5 w-px bg-[#1A1816]/10"></div>

              <Link
                href="/subscribe"
                className={`text-sm px-6 py-2.5 rounded-full transition-all duration-500 tracking-wide font-medium border ${
                  isScrolled
                    ? 'bg-[#1A1816] text-[#F6F2EB] hover:bg-[#3A3634] border-transparent shadow-md'
                    : 'bg-white/80 backdrop-blur-md text-[#1A1816] border-white/20 hover:bg-[#F6F2EB] shadow-sm hover:shadow-md'
                }`}
              >
                订阅
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#3A3634]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#F6F2EB] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-serif text-[#1A1816] hover:text-[#A69078] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-8 w-full max-w-xs">
                <Link
                  href="/subscribe"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-4 text-center bg-[#1A1816] text-[#F6F2EB] rounded-full"
                >
                  订阅
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
