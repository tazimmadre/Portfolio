import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Code, Layout, Database, Terminal } from 'lucide-react';
import SEO from './components/SEO';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    {
      title: "E-Auction Dekho",
      subtitle: "Nuxt and strapi",
      description: "Online auction platform built with Nuxt.js and Strapi, featuring real-time bidding and auctions.",
      images: ["/auction.png"],
      tags: ["Nuxt.js", "Strapi", "Real-time"],
      link: "https://www.eauctiondekho.com/",
      level: "Advanced"
    },
    {
      title: "Delivery App",
      subtitle: "NextJS",
      description: "Delivery application built with Next.js, featuring real-time tracking and order management.",
      images: ["/pideuva.png"],
      tags: ["Next.js", "Real-time", "Delivery"],
      link: "https://www.pideuva.com/",
      level: "Advanced"
    },
    {
      title: "Produce",
      subtitle: "NextJS",
      description: "E-commerce platform for produce built with Next.js, featuring server-side rendering and dynamic routing.",
      images: ["/produce.png"],
      tags: ["Next.js", "SSR", "E-commerce"],
      link: "https://puertoricoproduce.com/",
      level: "Intermediate"
    },
    {
      title: "Playmas",
      subtitle: "Vuejs",
      description: "Interactive web application built with Vue.js, showcasing modern UI/UX design principles.",
      images: ["/playmas.png"],
      tags: ["Vue.js", "UI/UX", "SPA"],
      link: "https://www.playmas.app/",
      level: "Intermediate"
    },
    {
      title: "Train Running Status",
      subtitle: "React",
      description: "Train running status application built with React, featuring real-time tracking and status updates.",
      images: ["/train.png"],
      tags: ["React", "API Integration", "Real-time"],
      link: "https://train-status-app-tazimmadres-projects.vercel.app/train-status/12052?date=08+Jan+2025",
      level: "Intermediate",
    },
    {
      title: "Youtube Lite App",
      subtitle: "React",
      description: "A lightweight YouTube clone built with React, featuring video playback, search, and recommendations.",
      images: ["/youtube.png"],
      tags: ["React", "YouTube API", "Tailwind CSS"],
      link: "https://videos-gray-ten.vercel.app/",
      level: "Beginner"
    },
    // {
    //   title: "TRW",
    //   subtitle: "MERN Stack",
    //   description: "A full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js).",
    //   images: ["/trw.png"],
    //   tags: ["MongoDB", "Express.js", "React", "Node.js"],
    //   link: null,
    //   level: "Intermediate"
    // },
    {
      title: "Super Chat App",
      subtitle: "React and Firebase",
      description: "Real-time chat application built with React and Firebase, featuring instant messaging and authentication.",
      images: ["/chat.png"],
      tags: ["React", "Firebase", "Real-time"],
      link: "https://superchat-22eaa.firebaseapp.com/",
      level: "Beginner"
    },
    {
      title: "RC Details",
      subtitle: "Nextjs",
      description: "Vehicle registration details application built with Next.js",
      images: ["/rcdetails1.png", "/rcdetails.png"],
      tags: ["Next.js", "API Integration"],
      link: null,
      level: "Beginner"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8 mb-4" />,
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
    },
    {
      category: "Backend Development",
      icon: <Terminal className="w-8 h-8 mb-4" />,
      technologies: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
      category: "Database & Cloud",
      icon: <Database className="w-8 h-8 mb-4" />,
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker", "Redis"]
    },
    {
      category: "Tools & Others",
      icon: <Code className="w-8 h-8 mb-4" />,
      technologies: ["Git", "Webpack", "Jest", "CI/CD", "Agile/Scrum", "UI/UX Design"]
    }
  ];

  function openLink(url: string) {
    window.open(url, "_blank");
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <SEO />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tazim Madre
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer & UI/UX Designer
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Github size={24} onClick={()=>openLink('https://github.com/tazimmadre')} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin size={24} onClick={()=>openLink('https://www.linkedin.com/in/tazim-madre/')} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Mail size={24} onClick={()=>openLink('mailto:tazimmadre5041@gmail.com')} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-gray-600 mb-8">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I specialize in building scalable web applications using React, Node.js, and various modern frameworks.
                With a keen eye for design and a deep understanding of both frontend and backend technologies,
                I create solutions that are both beautiful and functional.
              </p>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center mx-auto hover:bg-gray-800 transition-colors"
                onClick={() => openLink('https://drive.google.com/file/d/1OqzKRHUhtZR08xm9I04wNvrFsqYdsYak/view?usp=drive_link')}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                >
                  <div className="text-gray-800 mb-2">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-center mb-2">{skill.category}</h3>
                  <ul className="space-y-1 text-center text-sm">
                    {skill.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="text-gray-600">{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out if you'd like to collaborate or discuss potential opportunities!
              </p>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Tazim Madre. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;