import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 flex flex-col justify-center items-center md:px-8 bg-[#282c33]">
      <div className="w-full max-w-[1024px] pt-8 pb-2 flex items-center justify-between gap-4">
        <Link to="/" className="text-base font-bold flex items-center gap-2 text-white">
          <svg viewBox="0 0 32 32" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" fill="none" stroke="#c778dd" strokeWidth="2" />
            <path d="M10 10 L22 22 M22 10 L10 22" stroke="#c778dd" strokeWidth="2" />
          </svg>
          Kaushik
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {['home', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <li key={item}>
                <a href={`/#${item}`} className="text-[#abb2bf] hover:text-white transition-colors">
                  <span className="text-[#c778dd]">#</span>{item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-[#abb2bf]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#282c33] border-t border-[#abb2bf]/20 py-4 absolute top-full left-0">
          <ul className="flex flex-col items-center gap-4">
            {['home', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <li key={item} className="w-full text-center">
                <a 
                  href={`/#${item}`} 
                  className="block w-full py-2 text-[#abb2bf] hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[#c778dd]">#</span>{item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
