'use client'

import {motion} from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
    {
        title: "E Book Platform",
        description: "Perpustakaan digital, dan anda bisa memilih banyak buku sesuai dengan yang ada mau",
        tech: ["Laravel", "Mysql", "Blade"],
        github: "#",
        live: "#",
        image: "/image/project1.jpg",
        featured:true
    },
      {
        title: "QR Code generate",
        description: "Kirim URL lalu anda akan mendapatkan QRcode berbentuk gambar",
        tech: ["Python", "Flask", "HTML"],
        github: "#",
        live: "#",
        image: "/image/project2.jpg",
        featured: true
    },
      {
        title: "News App",
        description: "Web berita mudah, Update terus karena pakai News API",
        tech: ["Python", "HTML", "Flask"],
        github: "#",
        live: "#",
        image: "/image/project3.jpg",
        featured: true
    },
     {
        title: "Quiz App",
        description: "Web Quiz unik berbasis python, Soal tentang keberagaman di Indonesia",
        tech: ["Python", "HTML", "Flask"],
        github: "#",
        live: "#",
        image: "/image/project4.jpg",
        featured: true
    }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Proyek Saya
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
Berikut beberapa proyek terbaru saya yang menunjukkan kemampuan dan pengalaman saya dalam pengembangan web. Under Development!          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                project.featured ? 'h-80' : 'h-60'
              }`}>
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project Image</span>
                </div>
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 bg-white text-slate-900 p-3 rounded-full shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-100 bg-white text-slate-900 p-3 rounded-full shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium transition-colors"
                  >
                    Source Code <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}