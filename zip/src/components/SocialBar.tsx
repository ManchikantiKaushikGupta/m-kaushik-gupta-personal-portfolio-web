import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialBar() {
  return (
    <div className="hidden md:flex fixed top-0 left-4 lg:left-8 h-full flex-col items-center justify-start z-40 pt-8">
      <div className="w-px h-32 bg-[#abb2bf] mb-4"></div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ManchikantiKaushikGupta" target="_blank" rel="noreferrer" className="text-[#abb2bf] hover:text-[#c778dd] hover:-translate-y-1 transition-all">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/m-kaushik-gupta" target="_blank" rel="noreferrer" className="text-[#abb2bf] hover:text-[#c778dd] hover:-translate-y-1 transition-all">
          <Linkedin size={24} />
        </a>
        <a href="mailto:manchikanti.kaushikgupta@gmail.com" className="text-[#abb2bf] hover:text-[#c778dd] hover:-translate-y-1 transition-all">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
}
