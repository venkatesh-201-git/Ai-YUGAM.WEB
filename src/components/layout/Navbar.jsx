import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Search, Moon, Sun, ChevronDown, CheckCircle, Home, User,
  Code, FileCode, FileJson, Box, Atom, Coffee, Terminal, Database, Leaf, Power, CodeSquare, Settings, Shield, Layers, GitBranch, Send, Download, MonitorPlay, Server, Bot, Wrench, Command, Layout, CreditCard
} from 'lucide-react';
import { sections, subjects } from '../../config/subjectsConfig';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Code, FileCode, FileJson, Box, Atom, Coffee, Terminal, Database, Leaf, Power, CodeSquare, Settings, Shield, Layers, GitBranch, Send, Download, MonitorPlay, Server, Bot, Wrench, Layout, CreditCard
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = sections.find(s => s.name === activeCategory);

  const filteredSubjects = searchQuery.trim() === '' 
    ? [] 
    : subjects.filter(sub => 
        sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setActiveCategory(null);
    setSearchQuery('');
    setShowSearch(false);
  }, [location]);

  const handleSearchSelect = (path) => {
    navigate(path);
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <nav className="sticky top-0 z-[150] w-full bg-[#7dd3fc] border-b border-sky-400/50 transition-colors duration-300 shadow-sm">
      
      {/* Upper Navbar (Brand, Search, Portals) */}
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 h-14 sm:h-16 md:h-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center group h-8 sm:h-10 md:h-[3.8rem] bg-white dark:bg-gray-900 rounded-full border-2 border-blue-200 dark:border-gray-800 shadow-lg pr-2 sm:pr-6 md:pr-9 my-0 md:-my-1 relative z-50 transition-all duration-300 flex-shrink-0"
        >
          {/* Shared Content: Logo + Title */}
          <div className="h-7 w-7 sm:h-10 sm:w-10 md:h-full md:w-[3.8rem] flex items-center justify-center p-0 md:p-1.5 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
             <img src="/EY.png" alt="Ai-Yugam Logo" className="w-full h-full object-contain scale-[1.1] md:scale-135" />
          </div>
          <div className="flex flex-col items-start ml-1 md:ml-2">
             <span className="text-[10px] sm:text-base md:text-xl font-black tracking-wider uppercase leading-none whitespace-nowrap drop-shadow-sm flex items-center">
               <span className="font-['Audiowide'] text-black dark:text-white italic mr-0.5">Ai</span>
               <span className="text-black dark:text-white font-black mx-0.5">-</span>
               <span className="font-['Orbitron'] inline-flex">
                 <span className="text-[#1967d2]">Y</span>
                 <span className="text-[#c5221f]">u</span>
                 <span className="text-[#d97706]">g</span>
                 <span className="text-[#137333]">a</span>
                 <span className="text-[#c5221f]">m</span>
               </span>
             </span>
          </div>
        </Link>
        
        <div className="hidden md:flex flex-1 max-w-xl mx-12">
           <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 dark:text-gray-400 group-focus-within:text-secondary" />
              <input 
                type="text" 
                placeholder="Search our tutorials..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearch(true);
                }}
                onFocus={() => setShowSearch(true)}
                className="w-full pl-11 pr-4 py-2 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-600 rounded-full text-sm font-bold text-gray-900 dark:text-white placeholder:text-gray-500 placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/20 transition-all" 
              />
              
              <AnimatePresence>
                {showSearch && filteredSubjects.length > 0 && (
                  <>
                    <div className="fixed inset-0 z-[160]" onClick={() => setShowSearch(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-12 left-0 w-full bg-white dark:bg-gray-950 border-2 border-gray-900 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-[170]"
                    >
                      <div className="p-2 max-h-[400px] overflow-y-auto">
                        <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tutorials Found</div>
                        {filteredSubjects.map(sub => {
                          const Icon = iconMap[sub.icon] || Code;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleSearchSelect(sub.path)}
                              className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 text-left transition-all group/res"
                            >
                              <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 group-hover/res:bg-white/10`}>
                                <Icon className={`w-4 h-4 ${sub.color}`} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-secondary">{sub.name}</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">{sub.category}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
           </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
           <Link to="/" title="Home" className="flex items-center gap-0.5 p-1 sm:p-1.5 px-1.5 min-[320px]:px-2 md:px-3 bg-white shadow-sm dark:bg-gray-900 text-blue-900 dark:text-gray-400 rounded-lg sm:rounded-2xl hover:text-secondary border border-blue-200 dark:border-gray-800 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span className="hidden min-[320px]:inline text-[7px] sm:text-[8px] font-bold uppercase tracking-wider">Home</span>
           </Link>
           <Link to="/auth" title="Account" className="flex items-center gap-0.5 p-1 sm:p-1.5 px-1.5 min-[320px]:px-2 bg-white shadow-sm dark:bg-gray-900 text-blue-900 dark:text-gray-400 rounded-lg sm:rounded-2xl hover:text-secondary border border-blue-200 dark:border-gray-800 transition-colors">
              <User className="w-3.5 h-3.5" />
              <span className="hidden min-[320px]:inline text-[7px] sm:text-[8px] font-bold uppercase tracking-wider">Account</span>
           </Link>
           <Link to="/auth" title="Login" className="hidden sm:flex items-center justify-center px-3.5 py-1.5 bg-secondary text-white text-[8px] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-secondary/30 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all">Login</Link>
           <button onClick={() => setIsOpen(!isOpen)} title="Menu" className="lg:hidden flex items-center gap-0.5 p-1 sm:p-1.5 px-1.5 min-[320px]:px-2 bg-white shadow-sm dark:bg-gray-900 rounded-lg sm:rounded-2xl text-blue-900 dark:text-gray-300 border border-blue-200 dark:border-gray-800">
              {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
              <span className="hidden min-[320px]:inline text-[7px] sm:text-[8px] font-bold uppercase">{isOpen ? 'Close' : 'Menu'}</span>
           </button>
        </div>
      </div>

      {/* Sub-Navbar: 4K Deep Dark Curriculum Ribbon */}
      <div 
         onMouseLeave={() => setActiveCategory(null)}
         className="bg-[#080d1a] border-t-2 border-b-2 border-amber-300/80 relative z-[140] text-white shadow-sm"
      >
         <div className="max-w-screen-2xl mx-auto px-1 md:px-6 relative h-10 md:h-12 flex items-center group/ribbon">
            
            {/* Scroll Left Button (Laptop & Mobile) */}
            <button 
              aria-label="Scroll Left"
              onClick={() => document.getElementById('curriculum-scroll').scrollBy({ left: -200, behavior: 'smooth' })}
              className="absolute left-1.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#bae6fd] hover:bg-sky-100 text-sky-950 transition-all flex items-center justify-center shadow-md border border-sky-300/60 hover:scale-110 active:scale-95"
            >
               <span className="text-xs font-bold leading-none -ml-0.5">❮</span>
            </button>

            {/* Scroll Container */}
            <div 
              id="curriculum-scroll"
              className="flex items-center gap-4 md:gap-7 h-full overflow-x-auto scrollbar-hide px-9 sm:px-11 w-full"
            >
               <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-amber-400 flex-shrink-0 mr-1 md:mr-3 whitespace-nowrap">
                 Tutorials:
               </span>
               
               {sections.map((section) => {
                  const HeaderIcon = iconMap[section.icon] || Layout;
                  const isActive = activeCategory === section.name;

                  return (
                     <div 
                       key={section.name}
                       onMouseEnter={() => setActiveCategory(section.name)}
                       className="h-full flex items-center flex-shrink-0"
                     >
                        <button 
                           onClick={() => setActiveCategory(isActive ? null : section.name)}
                           className={`flex items-center gap-1.5 md:gap-2 h-8 px-2.5 rounded-md transition-all ${isActive ? 'text-amber-400 font-semibold bg-slate-900 border border-amber-400/40' : 'text-slate-100 hover:text-amber-300 font-medium'}`}
                        >
                           <HeaderIcon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-300'}`} />
                           <span className="text-xs md:text-sm font-medium tracking-wide leading-none whitespace-nowrap">{section.name}</span>
                        </button>
                     </div>
                  )
               })}
            </div>

            {/* Scroll Right Button (Laptop & Mobile) */}
            <button 
              aria-label="Scroll Right"
              onClick={() => document.getElementById('curriculum-scroll').scrollBy({ left: 200, behavior: 'smooth' })}
              className="absolute right-1.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#bae6fd] hover:bg-sky-100 text-sky-950 transition-all flex items-center justify-center shadow-md border border-sky-300/60 hover:scale-110 active:scale-95"
            >
               <span className="text-xs font-bold leading-none -mr-0.5">❯</span>
            </button>
         </div>

         {/* UNIFIED PREMIUM FLOATING OVERLAY MEGA DROPDOWN */}
         <AnimatePresence>
            {activeSection && (
               <motion.div 
                  onMouseEnter={() => setActiveCategory(activeCategory)}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-md border-b-2 border-amber-400/80 shadow-[0_20px_60px_rgba(0,0,0,0.85)] z-[300] overflow-hidden"
               >
                  <div className="max-w-screen-2xl mx-auto p-5 md:p-8">
                     <div className="flex items-center gap-3.5 mb-5 border-b border-slate-800 pb-3.5">
                        <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20">
                           {React.createElement(iconMap[activeSection.icon] || Layout, { className: `w-5 h-5 ${activeSection.color}` })}
                        </div>
                        <div>
                           <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-white leading-none">{activeSection.name}</h3>
                           <p className="text-[10px] font-medium text-amber-400/80 uppercase tracking-widest mt-1">Curriculum Core Modules</p>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
                        {activeSection.items.map((sid) => {
                           const sub = subjects.find(s => s.id === sid);
                           const SubIcon = iconMap[sub?.icon] || Code;
                           return (
                              <Link 
                                key={sid} to={sub?.path} 
                                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-amber-400/50 transition-all duration-200 group/link"
                              >
                                 <div className="p-2 rounded-lg bg-slate-950 group-hover/link:bg-amber-400/20 transition-colors">
                                    <SubIcon className={`w-4 h-4 ${sub?.color}`} />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-xs md:text-sm font-medium text-slate-100 group-hover/link:text-amber-400 transition-colors">{sub?.name}</span>
                                    <span className="text-[8px] font-normal text-slate-400 uppercase tracking-wider">Explore Module</span>
                                 </div>
                              </Link>
                           )
                        })}
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800 overflow-hidden"
          >
             <div className="p-5 space-y-6 max-h-[85vh] overflow-y-auto custom-scrollbar-thin">
                {/* Mobile Search */}
                <div className="relative group">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900 dark:text-gray-400" />
                   <input 
                     type="text" 
                     placeholder="Search tutorials..." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl text-sm font-bold text-gray-900 dark:text-white outline-none focus:border-secondary transition-all"
                   />
                   
                   {searchQuery.trim() !== '' && filteredSubjects.length > 0 && (
                     <div className="mt-4 space-y-2">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">Quick Results</div>
                        <div className="grid max-[260px]:grid-cols-1 grid-cols-2 gap-2">
                           {filteredSubjects.map(sub => {
                             const Icon = iconMap[sub.icon] || Code;
                             return (
                               <button
                                 key={sub.id}
                                 onClick={() => handleSearchSelect(sub.path)}
                                 className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border dark:border-gray-800/50 text-left"
                               >
                                 <Icon className={`w-4 h-4 ${sub.color}`} />
                                 <span className="text-sm font-bold text-gray-900 dark:text-white">{sub.name}</span>
                               </button>
                             );
                           })}
                        </div>
                     </div>
                   )}
                </div>

                {sections.map(sec => {
                  const HeaderIcon = iconMap[sec.icon] || Layout;
                  return (
                   <div key={sec.name} className="space-y-3">
                      <div className="flex items-center gap-2 border-b dark:border-gray-800 pb-1.5">
                         <HeaderIcon className={`w-3.5 h-3.5 ${sec.color}`} />
                         <h4 className={`text-[10px] font-bold uppercase tracking-[0.15em] ${sec.color}`}>{sec.name}</h4>
                      </div>
                      <div className="grid max-[260px]:grid-cols-1 grid-cols-2 gap-1.5 sm:gap-2">
                         {sec.items.map(sid => {
                            const sub = subjects.find(s => s.id === sid);
                            const ItemIcon = iconMap[sub?.icon] || Code;
                            return (
                              <Link 
                                key={sid} 
                                to={sub?.path} 
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-900/50 border dark:border-gray-800/50 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all text-gray-700 dark:text-gray-300 active:scale-95"
                              >
                                 <ItemIcon className={`w-3 h-3 flex-shrink-0 ${sub?.color}`} />
                                 <span className="truncate">{sub?.name}</span>
                              </Link>
                            )
                         })}
                      </div>
                   </div>
                  )
                })}
                <div className="h-10" />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
