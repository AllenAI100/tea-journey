'use client';

import Link from 'next/link';
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
    window.addEventListener('scroll', handleScroll);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className={`flex items-center gap-2 transition-colors ${
              isScrolled || pathname !== '/' ? 'text-[#6B5A48]' : 'text-white'
            }`}
          >
            <img src="/images/logo-icon.jpg" alt="茶旅" className="w-8 h-8 rounded-md" />
            <span className="text-xl font-handwriting tracking-wide">茶旅</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors tracking-wide ${
                  pathname === item.path
                    ? 'text-[#A69078]'
                    : isScrolled || pathname !== '/'
                    ? 'text-[#4A4644]/80 hover:text-[#A69078]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/subscribe"
              className={`text-sm px-5 py-2 rounded-md transition-all tracking-wide ${
                isScrolled || pathname !== '/'
                  ? 'bg-[#6B7A68] text-white hover:bg-[#4A5848]'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              订阅
            </Link>
          </div>

          <button
            className={`md:hidden p-2 ${isScrolled || pathname !== '/' ? 'text-[#4A4644]' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 bg-white/95 backdrop-blur-md border-t border-[#E0D8CC]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors px-2 py-1 tracking-wide ${
                    pathname === item.path
                      ? 'text-[#A69078]'
                      : 'text-[#4A4644]/80 hover:text-[#A69078]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/subscribe"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium px-4 py-2 bg-[#6B7A68] text-white rounded-md text-center tracking-wide"
              >
                订阅
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
