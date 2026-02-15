import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Tutor – Adaptive Learning System",
    desc: "Personalized learning platform with real-time feedback, analytics dashboard, and adaptive content delivery.",
    tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
  },
  {
    title: "Online Examination System",
    desc: "Full-stack exam platform with MCQ evaluation, authentication, and performance reports.",
    tech: ["Angular", "Spring Boot", "MySQL"],
  },
  {
    title: "College Event Management System",
    desc: "Centralized platform for managing college events, schedules and registrations.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
  },
];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Prashanth D M
        </motion.h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          Software Engineer • AI Enthusiast • Full Stack Developer
        </p>

        <div className="flex gap-6 mt-10">
          <a href="https://github.com/prashanth-106" target="_blank" rel="noopener noreferrer">
            <Github className="hover:scale-125 transition duration-300" size={28} />
          </a>

          <a href="https://www.linkedin.com/in/prashanth-d-m" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:scale-125 transition duration-300" size={28} />
          </a>

          <a href="https://leetcode.com/u/prashanthdm/" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="hover:scale-125 transition duration-300" size={28} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Passionate developer focused on building intelligent systems and scalable applications.
          I love solving algorithmic challenges, designing user-friendly interfaces, and developing
          real-world software solutions powered by AI and modern web technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-neutral-950 px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-neutral-900 rounded-2xl p-6 shadow-xl border border-neutral-800 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="bg-neutral-800 px-3 py-1 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-8">
          Open to collaborations, opportunities and exciting projects.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition duration-300 inline-block"
        >
          Contact Me
        </a>
      </section>

    </div>
  );
}
