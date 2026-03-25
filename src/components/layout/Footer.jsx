import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { sections, subjects } from '../../config/subjectsConfig';

const Footer = () => {
  return (
    <footer className="bg-blue-100 dark:bg-gray-950 border-t border-blue-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-4 md:py-6">
        
        {/* ULTRA COMPACT TOP BAR */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-blue-200 dark:border-gray-900">
          
          {/* BRANDING: SINGLE LINE MOBILE FRIENDLY */}
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-blue-100 dark:border-gray-800">
                <img src="/aylogo.png" alt="Ai-Yugam" className="w-full h-full object-contain scale-125" />
             </div>
             <div className="flex flex-col">
                <h2 className="text-sm md:text-base font-black italic tracking-tighter text-gray-900 dark:text-white uppercase leading-none">
                  Ai-<span className="text-secondary not-italic tracking-normal">Yugam</span>
                </h2>
                <p className="text-[7px] font-black text-blue-600 dark:text-gray-500 uppercase tracking-widest leading-none mt-1">AI, Web & Data Science</p>
             </div>
          </div>

          {/* TUTORIALS: COMPACT HORIZONTAL GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 lg:gap-12 flex-1">
            {[...sections].slice(0, 4).map((section) => (
              <div key={section.name} className="flex flex-col items-start gap-1">
                <h3 className="text-[7px] font-black text-secondary uppercase tracking-[0.2em] border-b border-secondary/10 pb-0.5 w-full whitespace-nowrap overflow-hidden">{section.name}</h3>
                <div className="flex flex-wrap gap-x-2.5 gap-y-0.5">
                  {section.items.slice(0, 3).map((sid) => {
                     const subject = subjects.find(s => s.id === sid);
                     if (!subject) return null;
                     return (
                      <Link key={sid} to={subject.path} className="text-[8px] text-gray-700 dark:text-gray-400 hover:text-secondary font-black uppercase tracking-wider transition-colors whitespace-nowrap">
                        {subject.name}
                      </Link>
                     )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR: SINGLE LINE RESPONSIVE */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[7px] md:text-[8px] font-black text-gray-500 uppercase tracking-[0.25em]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <p className="whitespace-nowrap uppercase">© 2026 Ai-Yugam Education Inc.</p>
             <div className="flex gap-4 opacity-70">
                {[Facebook, Twitter, Instagram, Github, Linkedin].map((Icon, idx) => (
                  <button key={idx} className="hover:text-secondary transition-all hover:scale-125">
                    <Icon className="w-3 h-3" />
                  </button>
                ))}
             </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
            <Link to="/privacy" className="hover:text-secondary transition-colors underline decoration-secondary/30">Privacy</Link>
            <Link to="/terms" className="hover:text-secondary transition-colors underline decoration-secondary/30">Terms</Link>
            <Link to="/cookies" className="hover:text-secondary transition-colors underline decoration-secondary/30">Cookies</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors underline decoration-secondary/30">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
