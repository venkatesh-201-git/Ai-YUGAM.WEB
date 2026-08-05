import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* GEOMETRIC RIBBON CONTAINER */}
      <div className="w-full relative flex items-center min-h-[80px] md:min-h-[90px]">
        {/* SVG BACKGROUND DIVIDER */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Left Blue Bar (Matching Navbar #7dd3fc) */}
          <polygon
            points="0,0 425,0 380,90 0,90"
            fill="#7dd3fc"
          />
          {/* Center Light Gold Hexagonal Banner */}
          <polygon
            points="433,0 767,0 812,90 388,90"
            fill="#fcd34d"
          />
          {/* Right Blue Bar (Matching Navbar #7dd3fc) */}
          <polygon
            points="775,0 1200,0 1200,90 820,90"
            fill="#7dd3fc"
          />
        </svg>

        {/* BANNER CONTENT CONTAINER */}
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-2.5 sm:gap-3">
          
          {/* LEFT: COPYRIGHT TEXT (On Light Blue #7dd3fc) */}
          <div className="flex-1 flex justify-center md:justify-start items-center text-center md:text-left">
            <p className="text-slate-900 font-bold text-[9px] min-[320px]:text-[11px] sm:text-xs md:text-sm tracking-wide leading-tight">
              © 2026 Ai-Yugam Education Inc. All rights reserved.
            </p>
          </div>

          {/* CENTER: LOGO & SOCIAL ICONS (On Yellow) */}
          <div className="flex flex-col items-center justify-center gap-1 px-2">
            {/* LOGO */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img src="/eyee-removebg-preview.png" alt="Ai-Yugam" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
              <h2 className="text-[11px] sm:text-sm md:text-base font-extrabold tracking-wider uppercase leading-none flex items-center">
                <span className="font-['Audiowide'] text-black italic mr-0.5">Ai</span>
                <span className="text-black font-black mx-0.5">-</span>
                <span className="font-['Orbitron'] inline-flex">
                  <span className="text-[#1967d2]">Y</span>
                  <span className="text-[#c5221f]">u</span>
                  <span className="text-[#d97706]">g</span>
                  <span className="text-[#137333]">a</span>
                  <span className="text-[#c5221f]">m</span>
                </span>
              </h2>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2 sm:gap-3 mt-0.5">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Github, href: '#', label: 'Github' },
                { Icon: Linkedin, href: '#', label: 'Linkedin' },
              ].map(({ Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="text-slate-900 hover:text-blue-900 hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: LEGAL LINKS (On Light Blue #7dd3fc) */}
          <div className="flex-1 flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-4 md:gap-5 text-slate-900 font-bold text-[9px] min-[320px]:text-[11px] sm:text-xs md:text-sm tracking-wide">
            <Link to="/privacy" className="hover:text-blue-800 transition-colors hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-800 transition-colors hover:underline">Terms</Link>
            <Link to="/cookies" className="hover:text-blue-800 transition-colors hover:underline">Cookies</Link>
            <Link to="/contact" className="hover:text-blue-800 transition-colors hover:underline">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
