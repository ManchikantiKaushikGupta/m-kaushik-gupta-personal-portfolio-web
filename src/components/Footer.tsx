import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center border-t border-[#abb2bf]/20 mt-24 py-8 relative">
      <div className="w-full max-w-[1024px] px-4 md:px-8 flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold text-xl flex items-center gap-2">
              <svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" fill="none" stroke="#c778dd" strokeWidth="2" />
                <path d="M10 10 L22 22 M22 10 L10 22" stroke="#c778dd" strokeWidth="2" />
              </svg>
              Kaushik
            </span>
            <a href="mailto:manchikanti.kaushikgupta@gmail.com" className="text-[#abb2bf] hover:text-white transition-colors">
              manchikanti.kaushikgupta@gmail.com
            </a>
          </div>
          <p className="text-[#abb2bf]">Computer Science Student | AI & Machine Learning Enthusiast</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-xl">Media</h3>
          <div className="flex gap-4">
            <a href="https://github.com/ManchikantiKaushikGupta" target="_blank" rel="noreferrer" className="text-[#abb2bf] hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/m-kaushik-gupta" target="_blank" rel="noreferrer" className="text-[#abb2bf] hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center w-full text-[#abb2bf]">
        © 2026 Kaushik Gupta. Built with React and TailwindCSS.
      </div>
    </footer>
  );
}
