'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -10; // Offset to account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => setIsMobileMenuOpen(false), 500); // Close menu after scrolling starts
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-1 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="https://youtube.com/@tusharlegacy?si=b9AY5JTpAfAlkzJt"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
           <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="32px" stroke="url(#grad)" strokeWidth="30" fill="url(#grad)"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:"rgb(99,102,241)"}} /><stop offset="50%" style={{stopColor:"rgb(168,85,247)"}} /><stop offset="100%" style={{stopColor:"rgb(236,72,153)"}} /></linearGradient></defs><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
            <span>𝐓𝐒𝐑</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/resume"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[15px] font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all tracking-wide"
            >
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <span className="sr-only">Open menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/resume"
              className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:shadow-lg hover:shadow-purple-500/30 transition-all mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
