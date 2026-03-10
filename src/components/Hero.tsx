import { motion } from 'motion/react';
import { Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-12 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 md:w-1/2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Kaushik Gupta is a <span className="text-[#c778dd]">Computer Science Student</span> and <span className="text-[#c778dd]">AI & Machine Learning Enthusiast</span>
        </h1>
        <p className="text-[#abb2bf] text-lg leading-relaxed">
          Third-year Computer Science student at Keshav Memorial Engineering College in Hyderabad. Passionate about building intelligent systems using machine learning, AI APIs, and full-stack development.
          <br /><br />
          Open to Software Engineering and AI/ML Internship Opportunities.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="#projects" className="px-6 py-2 border border-[#c778dd] text-white hover:bg-[#c778dd]/20 transition-colors">
            View Projects
          </a>
          <a href="https://github.com/ManchikantiKaushikGupta" target="_blank" rel="noreferrer" className="px-6 py-2 border border-[#abb2bf] text-[#abb2bf] hover:text-white hover:border-white transition-colors flex items-center gap-2">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/m-kaushik-gupta" target="_blank" rel="noreferrer" className="px-6 py-2 border border-[#abb2bf] text-[#abb2bf] hover:text-white hover:border-white transition-colors flex items-center gap-2">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="#" className="px-6 py-2 border border-[#abb2bf] text-[#abb2bf] hover:text-white hover:border-white transition-colors flex items-center gap-2">
            <Download size={20} /> Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 flex flex-col items-center relative -mt-12 md:-mt-32"
      >
        <div className="relative w-full max-w-[550px] aspect-square border-b border-[#c778dd] flex items-end justify-center">
          {/* Abstract geometric shape for hero image placeholder */}
          <svg viewBox="0 0 200 200" className="absolute w-[110%] h-[110%] -bottom-4 text-[#c778dd] opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20 L180 180 L20 180 Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="120" r="40" stroke="currentColor" strokeWidth="2" />
            <rect x="80" y="40" width="40" height="40" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Profile Image Overlay */}
          <img
            src="/my-photo.png"
            alt="Kaushik Gupta"
            className="absolute z-10 w-full h-full object-contain object-bottom"
          />

          {/* Decorative dots */}
          <svg className="absolute top-10 left-0 w-16 h-16 text-[#abb2bf]" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0, 20, 40, 60, 80].map(x =>
              [0, 20, 40, 60, 80].map(y =>
                <circle key={`${x}-${y}`} cx={x + 2} cy={y + 2} r="2" fill="currentColor" />
              )
            )}
          </svg>
        </div>
        <div className="mt-6 border border-[#abb2bf] p-2 flex items-center gap-2 text-[#abb2bf] bg-[#282c33] z-10 w-full max-w-sm">
          <div className="w-4 h-4 bg-[#c778dd]"></div>
          <span>Currently working on <span className="text-white font-bold">AI Models</span></span>
        </div>
      </motion.div>
    </section>
  );
}
