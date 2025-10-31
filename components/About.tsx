'use client'

import { motion } from 'framer-motion'
import { 
  SiLaravel, 
  SiPython, 
  SiNextdotjs, 
  SiMysql,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs
} from 'react-icons/si'

const skills = [
  {
    icon: <SiLaravel className="w-8 h-8" />,
    title: "Laravel Development",
    description: "Backend development dengan PHP Laravel framework",
    color: "text-red-500"
  },
  {
    icon: <SiPython className="w-8 h-8" />,
    title: "Python Programming", 
    description: "Python untuk web development, automation, dan data analysis",
    color: "text-blue-500"
  },
  {
    icon: <SiNextdotjs className="w-8 h-8" />,
    title: "Next.js Development",
    description: "Modern React framework untuk production-ready applications",
    color: "text-black"
  },
  {
    icon: <SiFlask className="w-8 h-8" />,
    title: "Flask Framework",
    description: "Python micro-framework untuk web development",
    color: "text-gray-600"
  },
  {
    icon: <SiMysql className="w-8 h-8" />,
    title: "MySQL Database",
    description: "Database management dan query optimization",
    color: "text-blue-600"
  },
  {
    icon: <SiJavascript className="w-8 h-8" />,
    title: "JavaScript",
    description: "Frontend development dengan modern JavaScript",
    color: "text-yellow-500"
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi web modern dan scalable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-50 p-8 rounded-2xl text-center group hover:bg-purple-50 transition-all duration-300 border border-slate-200"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                {skill.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-900">
            Other Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <SiHtml5 className="w-10 h-10 text-orange-500" />, name: "HTML5" },
              { icon: <SiCss3 className="w-10 h-10 text-blue-500" />, name: "CSS3" },
              { icon: <SiReact className="w-10 h-10 text-cyan-500" />, name: "React" },
              { icon: <SiNodedotjs className="w-10 h-10 text-green-500" />, name: "Node.js" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                {tech.icon}
                <span className="text-sm text-slate-600 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}