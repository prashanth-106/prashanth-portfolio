import React, { useState, useEffect, useRef } from "react"; import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion"; import { Github, Linkedin, Moon, Sun } from "lucide-react";

const nav = ["Home","About","Projects","Skills","Contact"];

const projects = [ { title:"Rapid Car Booking", tag:"FullStack", tech:["TypeScript","Node.js","MySQL","Spring Boot","Angular"], desc:"Full-stack car rental system with Angular frontend and Spring Boot backend." }, { title:"AI Tutor", tag:"AI", tech:["React","TensorFlow","MongoDB"], desc:"Adaptive learning system with analytics dashboard." }, { title:"Hand Sign Recognition", tag:"AI", tech:["Python","OpenCV","CNN"], desc:"ASL gesture recognition using deep learning." }, ];

export default function App(){ const [dark,setDark]=useState(true); const [menuOpen,setMenuOpen]=useState(false); const [active,setActive]=useState("Home"); const cursorRef=useRef(null);

const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress,{ stiffness:100,damping:30});

const yHero = useTransform(scrollYProgress,[0,1],[0,-200]);

useEffect(()=>{ const move=(e)=>{ if(cursorRef.current){ cursorRef.current.style.left=e.clientX+"px"; cursorRef.current.style.top=e.clientY+"px"; } }; window.addEventListener("mousemove",move); return()=>window.removeEventListener("mousemove",move); },[]);

useEffect(()=>{ const handleScroll=()=>{ nav.forEach(n=>{ const sec=document.getElementById(n.toLowerCase()); if(sec){ const top=sec.offsetTop; if(window.scrollY>=top-200) setActive(n); } }); }; window.addEventListener("scroll",handleScroll); return()=>window.removeEventListener("scroll",handleScroll); },[]);

return ( <div className={${dark?"bg-black text-white":"bg-white text-black"} min-h-screen relative overflow-x-hidden transition-colors duration-500}>

{/* Cursor Glow */}
  <div ref={cursorRef} className="fixed w-40 h-40 rounded-full pointer-events-none bg-cyan-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-50" />

  {/* Scroll Progress */}
  <motion.div style={{scaleX}} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 origin-left z-[60]" />

  {/* Animated Gradient Mesh */}
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
  </div>

  {/* Navbar */}
  <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-40">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <span className="font-bold text-xl">Prashanth</span>

      <div className="hidden md:flex gap-8">
        {nav.map(n=> (
          <a key={n} href={`#${n.toLowerCase()}`} className={`relative ${active===n?"text-cyan-400":""}`}>
            {n}
            {active===n && <motion.span layoutId="underline" className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400"/>}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={()=>setDark(!dark)}>
          {dark?<Sun size={20}/>:<Moon size={20}/>}
        </button>
        <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden">
          ☰
        </button>
      </div>
    </div>

    <AnimatePresence>
    {menuOpen && (
      <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="md:hidden bg-black/90">
        <div className="flex flex-col items-center gap-6 py-6">
          {nav.map(n=> (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{n}</a>
          ))}
        </div>
      </motion.div>
    )}
    </AnimatePresence>
  </nav>

  {/* Hero */}
  <section id="home" className="h-screen flex flex-col items-center justify-center text-center">
    <motion.h1 style={{y:yHero}} className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      Prashanth D M
    </motion.h1>
    <p className="mt-6 opacity-70">Ultra Premium Portfolio</p>
  </section>

  {/* Projects */}
  <section id="projects" className="py-28 px-6">
    <h2 className="text-4xl text-center mb-16">Projects</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {projects.map(p=> (
        <motion.div
          key={p.title}
          whileHover={{rotateX:10,rotateY:-10}}
          transition={{type:"spring",stiffness:200}}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          <h3 className="text-xl mb-3">{p.title}</h3>
          <p className="text-sm opacity-70 mb-4">{p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map(t=>(<span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="py-28 text-center">
    <h2 className="text-4xl mb-6">Let's Connect</h2>
    <div className="flex justify-center gap-6">
      <Github/>
      <Linkedin/>
    </div>
  </section>
</div>

); }
