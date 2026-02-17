import React, { useState } from "react"; import { motion, AnimatePresence } from "framer-motion"; import { Github, Linkedin } from "lucide-react";

const nav = ["Home","About","Projects","Skills","Contact"];

const projects = [ { title:"Rapid Car Booking", tag:"FullStack", tech:["TypeScript","Java","MySQL","Spring Boot","Angular"], desc:"Full‑stack car rental system with responsive Angular frontend, Spring Boot backend and JWT authentication." }, { title:"AI Tutor – Adaptive Learning System", tag:"AI", tech:["Python","Django","TensorFlow","MongoDB"], desc:"Adaptive learning platform with analytics dashboard and real‑time feedback." }, { title:"Online Examination System", tag:"FullStack", tech:["Angular","Spring Boot","MySQL"], desc:"Secure exam platform with MCQ evaluation and reporting." }, { title:"College Event Management System", tag:"Web", tech:["PHP","MySQL","HTML","CSS"], desc:"Centralized event registration and scheduling system." }, { title:"Hand Sign Recognition", tag:"AI", tech:["Python","OpenCV","TensorFlow","Mediapipe"], desc:"ASL gesture recognition converting signs into text and speech." }, { title:"Animal Image Classification", tag:"AI", tech:["Python","CNN","Keras","Streamlit"], desc:"CNN model using pretrained networks for species identification." }, ];

const skills = { Languages:["Python","Java","C","SQL","JavaScript","PHP"], Frameworks:["Django","AngularJS","TensorFlow","Keras","OpenCV","Mediapipe"], Tools:["Git","GitHub","AWS","MySQL","Pandas","Scikit‑learn"], };

export default function App(){ const [filter,setFilter]=useState("All");

const filtered = filter==="All"?projects:projects.filter(p=>p.tag===filter);

return ( <div className="bg-black text-white min-h-screen font-sans scroll-smooth">

{/* NAVBAR */}
  <nav className="fixed top-0 w-full backdrop-blur bg-black/40 border-b border-white/10 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <span className="font-bold text-xl tracking-wider">Prashanth</span>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-sm">
        {nav.map(n=> (
          <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-cyan-400 transition">{n}</a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button onClick={()=>setFilter(f=>f)} className="md:hidden flex flex-col gap-1">
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>
    </div>

    {/* Mobile Menu */}
    <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm">
      {nav.map(n=> (
        <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-cyan-400 transition">{n}</a>
      ))}
    </div>
  </nav>

  {/* HERO */}
  <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6">
    <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">Prashanth D M</motion.h1>
    <p className="mt-6 text-gray-300">Software Engineer • AI Enthusiast • Full Stack Developer</p>
    <div className="flex gap-6 mt-8">
      <a href="https://github.com/prashanth-106" target="_blank" rel="noopener noreferrer"><Github className="hover:scale-125 transition"/></a>
      <a href="https://www.linkedin.com/in/prashanth-d-m" target="_blank" rel="noopener noreferrer"><Linkedin className="hover:scale-125 transition"/></a>
      <a href="https://leetcode.com/u/prashanthdm/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" className="w-6 invert hover:scale-125 transition"/></a>
    </div>
  </section>

  {/* ABOUT */}
  <section id="about" className="py-28 max-w-4xl mx-auto text-center px-6">
    <h2 className="text-4xl font-semibold mb-8">About Me</h2>
    <p className="text-gray-300 leading-relaxed">Passionate developer focused on AI powered applications and scalable web platforms. I enjoy solving algorithmic challenges and building user‑centric products.</p>
  </section>

  {/* PROJECTS */}
  <section id="projects" className="py-28 bg-neutral-950 px-6">
    <h2 className="text-4xl font-semibold text-center mb-10">Projects</h2>
    <div className="flex justify-center gap-4 mb-10">
      {["All","AI","FullStack","Web"].map(t=> (
        <button key={t} onClick={()=>setFilter(t)} className={`px-4 py-2 rounded-full border ${filter===t?"bg-cyan-500 text-black":"border-white/20"}`}>{t}</button>
      ))}
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <AnimatePresence>
      {filtered.map((p,i)=>(
        <motion.div key={p.title} layout initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} exit={{opacity:0}} whileHover={{y:-10}} className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow-xl">
          <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
          <p className="text-gray-400 mb-4 text-sm">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map(t=>(<span key={t} className="bg-neutral-800 px-3 py-1 rounded-full text-xs">{t}</span>))}
          </div>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  </section>

  {/* SKILLS */}
  <section id="skills" className="py-28 px-6">
    <h2 className="text-4xl font-semibold text-center mb-16">Skills</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
      {Object.entries(skills).map(([group,list])=> (
        <div key={group}>
          <h3 className="text-cyan-400 mb-4">{group}</h3>
          <div className="space-y-3">
            {list.map(skill=>(
              <motion.div key={skill} initial={{width:0}} whileInView={{width:"100%"}} viewport={{once:true}} className="bg-neutral-900 border border-white/10 rounded-xl p-3">{skill}</motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="py-28 text-center">
    <h2 className="text-4xl font-semibold mb-6">Let's Connect</h2>
    <a href="mailto:1rn21is106.prashanthdm@gmail.com" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition inline-block">Contact Me</a>
  </section>
</div>

); }
