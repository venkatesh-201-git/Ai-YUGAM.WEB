import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Layout, Terminal, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Breadcrumbs = ({ subject, topicTitle }) => {
  return (
    <nav className="flex items-center space-x-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-400 group/breadcrumbs py-4 px-6 md:px-10 bg-white/40 dark:bg-[#1a1a1a]/40 backdrop-blur-xl border-b dark:border-gray-800 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 hover:text-secondary transition-colors group-hover/breadcrumbs:scale-105 transform origin-left">
         <Home className="w-3.5 h-3.5" />
         <span className="hidden sm:inline">Portal</span>
      </Link>
      
      <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700" />
      
      <Link to={`/learn/${subject.id}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
         <Code className="w-3.5 h-3.5" />
         <span className="whitespace-nowrap">{subject.name}</span>
      </Link>
      
      <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700" />
      
      <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 italic transition-all truncate min-w-0">
         <Terminal className="w-3.5 h-3.5 text-secondary shrink-0" />
         <span className="truncate">{topicTitle}</span>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
