'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FiDownload, FiMaximize2, FiMinimize2, FiPrinter } from "react-icons/fi";
import PasswordProtectedResume from '@/components/PasswordProtectedResume';

export default function Resume() {
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleZoom = (delta: number) => {
    setScale(prev => Math.min(Math.max(0.5, prev + delta), 2));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'f') toggleFullscreen();
    if (e.key === 'ArrowLeft') setCurrentPage(prev => Math.max(1, prev - 1));
    if (e.key === 'ArrowRight') setCurrentPage(prev => Math.min(3, prev + 1));
    if (e.key === '=' || e.key === '+') handleZoom(0.1);
    if (e.key === '-') handleZoom(-0.1);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-10 px-4 relative overflow-hidden bg-[#f5f5f5] dark:bg-slate-950">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
            >
              TSR
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        ref={cardRef}
        className="max-w-4xl mx-auto bg-white dark:bg-gradient-to-br dark:from-white/10 dark:to-white/5 shadow-2xl relative backdrop-blur-sm border border-white/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <PasswordProtectedResume resumeUrl="/images/image.png" onAuthSuccess={() => setIsAuthenticated(true)} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-8 right-8 flex gap-3 p-2 bg-black/20 backdrop-blur-lg shadow-lg rounded-lg border border-white/10"
      >
        <button
        onClick={() => isAuthenticated && window.print()}
        className={`w-12 h-12 backdrop-blur-lg flex items-center justify-center text-white transition-colors shadow-lg rounded-lg ${isAuthenticated ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5 cursor-not-allowed opacity-50'}`}
        title="Print Resume"
        >
        <FiPrinter className="w-5 h-5" />
        </button>

        <button
          onClick={() => isAuthenticated && window.open('/images/image.png', '_blank')}
          className={`w-12 h-12 backdrop-blur-lg flex items-center justify-center text-white transition-colors shadow-lg rounded-lg ${isAuthenticated ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5 cursor-not-allowed opacity-50'}`}
          title="Download PDF"
        >
          <FiDownload className="w-5 h-5" />
        </button>
        <button
          onClick={() => isAuthenticated && toggleFullscreen()}
          className={`w-12 h-12 backdrop-blur-lg flex items-center justify-center text-white transition-colors shadow-lg rounded-lg ${isAuthenticated ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5 cursor-not-allowed opacity-50'}`}
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <FiMinimize2 className="w-5 h-5" /> : <FiMaximize2 className="w-5 h-5" />}
        </button>
        <button
          onClick={() => isAuthenticated && handleZoom(-0.1)}
          className={`w-12 h-12 backdrop-blur-lg flex items-center justify-center text-white text-2xl transition-colors shadow-lg ${isAuthenticated ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5 cursor-not-allowed opacity-50'}`}
        >
          -
        </button>
        <button
          onClick={() => isAuthenticated && handleZoom(0.1)}
          className={`w-12 h-12 backdrop-blur-lg flex items-center justify-center text-white text-2xl transition-colors shadow-lg ${isAuthenticated ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5 cursor-not-allowed opacity-50'}`}
        >
          +
        </button>
      </motion.div>
    </div>
  )
}