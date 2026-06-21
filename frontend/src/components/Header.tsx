'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PasswordProtectedResume from './PasswordProtectedResume'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 min-h-[82px] flex items-center ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-8">
        <div className="relative">
          <div className="flex items-center justify-between w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="https://youtube.com/@tech_tsr_2024?si=9h4D4G9V3PlyUfKF" 
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                𝐓𝐒𝐑
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                className="ml-4"
              >
                <PasswordProtectedResume resumeUrl="https://drive.google.com/file/d/1kYCqfv8_vf5UjF_pdQi-jAqJYGcSxLy7/view?usp=drive_link" />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/#${item.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  >
                    <a
                      href="https://drive.google.com/file/d/1kYCqfv8_vf5UjF_pdQi-jAqJYGcSxLy7/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resume
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
