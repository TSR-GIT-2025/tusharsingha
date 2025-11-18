'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Software Engineer',
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, textArray, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-12">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto mb-12 lg:mb-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-purple-500/30 overflow-hidden">
              <Image
                src=""
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="max-w-3xl">
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="inline-block py-1 px-3 rounded-full border border-gray-700 text-gray-400 text-sm">
                Welcome to my portfolio
              </div>
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tushar Singha</span>
            </motion.h1>

            {/* Dynamic text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl text-gray-400 mb-8"
            >
              I'm a {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {text}
              </span>
              <span className="animate-blink">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 text-lg mb-12 max-w-2xl text-justify"
            >
              Passionate about crafting innovative digital experiences, specializing in modern web technologies and user-focused design solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#Contact"
                className="px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-gray-800/50 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}