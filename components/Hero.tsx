  // components/Hero.tsx
  'use client'

  import { motion } from 'framer-motion'
  import { ChevronDown, Code, Sparkles } from 'lucide-react'

  export default function Hero() {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-green-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-100"
          >
            <Sparkles className="w-4 h-4" />
            Available for new projects
          </motion.div>

          {/* Main Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Hafiz Pratama
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-gray-600 mb-6"
          >
            Adithya
          </motion.h2>

          {/* Title dengan Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <Code className="w-6 h-6 text-gray-400" />
            <span className="text-xl text-gray-500 font-mono border-b-2 border-gray-300 pb-1">
              Software Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >Halo! Saya Hafiz Pratama Adithya, pelajar SMK Plus Pelita Nusantara berusia 16 tahun. Saya sedang belajar menjadi seorang front-end developer dengan fokus pada Next.js. Saya suka membuat tampilan web yang menarik, sederhana, dan nyaman digunakan.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              View My Work
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-all">
              Lets Talk
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>
    )
  }