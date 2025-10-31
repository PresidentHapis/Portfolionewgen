// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const navItems = ['About', 'Projects', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - SELURUHNYA hidden saat belum scroll */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => scrollToSection('hero')}
              >
                {/* Logo Code */}
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-black transition-colors">
                  <Code className="w-5 h-5 text-white" />
                </div>

                {/* Nama Hafiz */}
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-gray-900">
                    Halo Masbro
                  </span>
                  <span className="text-xs text-gray-600">
                    NULL
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Placeholder untuk spacing saat logo hidden */}
          {!isScrolled && <div className="flex-1"></div>}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-all duration-300 hover:text-gray-900 relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-900 text-white hover:bg-black shadow-lg' 
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
            }`}
          >
            <span>Get In Touch</span>
          </motion.button>

          {/* Mobile Menu Button - Selalu visible tapi transparan saat belum scroll */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${
            isScrolled ? 'bg-white' : 'bg-gray-900/95 backdrop-blur-lg'
          } rounded-lg mt-4 shadow-lg`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`w-full text-left px-6 py-3 font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`w-full text-left px-6 py-3 font-medium transition-colors ${
                isScrolled 
                  ? 'bg-gray-900 text-white hover:bg-black' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}