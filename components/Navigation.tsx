'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-md shadow-[#6B5A48]/5'
        : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className={`flex items-center gap-2.5 transition-all duration-300 group ${
              isScrolled || pathname !== '/' ? 'text-[#8B755D]' : 'text-[#1A1816]'
            }`}
          >
            <div className="relative h-10 w-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="茶旅"
                width={40}
                height={40}
                className={`w-full h-full object-contain transition-all duration-500 ${
                  isScrolled 
                    ? 'opacity-90 sepia-[.5] brightness-75 contrast-125'  // 滚动后：偏暖棕色，呼应文字颜色
                    : 'opacity-85 sepia-[.2] brightness-50 contrast-125'  // 初始状态：深暖炭色，呼应深色标题
                }`}
                style={{ mixBlendMode: 'multiply' }}
                priority
              />
            </div>
            <span className="text-xl font-handwriting tracking-wide transition-opacity duration-300">
              茶旅
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="nav-link relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                 <span className={`relative z-10 transition-colors duration-300 ${
                   pathname === item.path
                     ? 'text-[#D4A853]'
                     : 'text-[#3A3634]/80 hover:text-[#D4A853]'
                 }`}>
                  {item.name}
                </span>
                {pathname === item.path && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D4A853] rounded-full nav-underline"></span>
                )}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className="ml-4 text-sm px-5 py-2 rounded-full bg-[#1A1816] text-[#F6F2EB] hover:bg-[#3A3634] hover:shadow-lg hover:shadow-[#1A1816]/20 hover:-translate-y-0.5 transition-all duration-300 tracking-wide relative overflow-hidden group border border-[#3A3634]/10"
            >
              <span className="relative z-10 font-medium">订阅</span>
              <span className="absolute inset-0 bg-[#A69078] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 transition-colors duration-300 text-[#3A3634]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 bg-white/95 backdrop-blur-md border-t border-[#E0D8CC]">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2.5 tracking-wide rounded-lg ${
                    pathname === item.path
                      ? 'text-[#D4A853] bg-[#F6F2EB]'
                      : 'text-[#3A3634]/80 hover:text-[#D4A853] hover:bg-[#F6F2EB]/50'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/subscribe"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 text-sm font-medium px-4 py-2.5 bg-[#1A1816] text-[#F6F2EB] rounded-lg text-center tracking-wide hover:bg-[#3A3634] transition-all duration-300"
                style={{ transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms' }}
              >
                订阅
              </Link>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}
