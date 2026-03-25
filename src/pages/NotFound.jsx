import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Home, ArrowLeft, RefreshCw, Layers } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center transition-colors duration-500 overflow-hidden relative">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-glow"></div>

      <div className="relative z-10 space-y-12 max-w-2xl px-4 animate-fade-in">
        
        {/* Visual Element */}
        <div className="relative inline-block max-w-full group">
           <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
           <div className="relative p-10 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-100 dark:border-gray-700 animate-float">
             <Cpu className="w-20 h-20 md:w-32 md:h-32 text-secondary" />
           </div>
           
           <div className="absolute -top-4 -right-4 bg-red-500 text-white px-5 py-2 rounded-2xl font-black text-xl md:text-2xl shadow-xl shadow-red-500/30 transform rotate-12 transition-transform group-hover:rotate-0">
             404
           </div>
        </div>

        <div className="space-y-6">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight italic font-serif">
             Lost in the <span className="text-secondary">Cloud?</span>
           </h1>
           <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-lg mx-auto">
             The page you're searching for has either been moved to another dimension or never existed in this timeline.
           </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
           <Link 
             to="/" 
             className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-secondary text-white font-black rounded-3xl hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 transition-all group"
           >
             <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
             Back to Reality
           </Link>
           <button 
             onClick={() => window.location.reload()}
             className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-black rounded-3xl hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all group"
           >
             <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
             Reconstruct Page
           </button>
        </div>
        
        {/* Navigation Shortcuts */}
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
           {[
             { name: 'HTML', path: '/learn/html' },
             { name: 'CSS', path: '/learn/css' },
             { name: 'JS', path: '/learn/javascript' },
             { name: 'AI/ML', path: '/learn/ai-ml' },
           ].map((shortcut, i) => (
             <Link 
               key={i} 
               to={shortcut.path}
               className="p-4 bg-gray-100/50 dark:bg-gray-800/30 rounded-2xl border border-transparent hover:border-blue-500/10 hover:bg-white dark:hover:bg-gray-800 transition-all text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-secondary group"
             >
                Learn {shortcut.name}
             </Link>
           ))}
        </div>
      </div>
      
      {/* Decorative Text */}
      <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-gray-100 dark:text-[#252525] select-none pointer-events-none -z-20 leading-none">
         404
      </div>
    </div>
  );
};

export default NotFound;
