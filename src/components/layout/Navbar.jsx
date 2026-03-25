import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Search, Moon, Sun, ChevronDown, CheckCircle, Home, User,
  Code, FileCode, FileJson, Box, Atom, Coffee, Terminal, Database, Leaf, Power, CodeSquare, Settings, Shield, Layers, GitBranch, Send, Download, MonitorPlay, Server, Bot, Wrench, Command, Layout
} from 'lucide-react';
import { sections, subjects } from '../../config/subjectsConfig';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Code, FileCode, FileJson, Box, Atom, Coffee, Terminal, Database, Leaf, Power, CodeSquare, Settings, Shield, Layers, GitBranch, Send, Download, MonitorPlay, Server, Bot, Wrench, Layout
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
    <nav className="sticky top-0 z-[150] w-full bg-blue-100 dark:bg-gray-950 border-b border-blue-200 dark:border-gray-900 transition-colors duration-300 shadow-sm">
      
      {/* Upper Navbar (Brand, Search, Portals) */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center group h-10 md:h-[3.8rem] bg-white dark:bg-gray-900 rounded-full border-2 border-blue-200 dark:border-gray-800 shadow-lg pr-6 md:pr-9 my-0 md:-my-1 relative z-50 transition-all duration-300"
        >
          {/* Shared Content: Logo + Title */}
          <div className="h-10 w-10 md:h-full md:w-[3.8rem] flex items-center justify-center p-0 md:p-1.5 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
             <img src="/aylogo.png" alt="Ai-Yugam Logo" className="w-full h-full object-contain scale-[1.2] md:scale-135" />
          </div>
          <div className="flex flex-col items-start ml-1 md:ml-0">
             <span className="text-lg md:text-xl font-black tracking-tighter italic text-gray-900 dark:text-white leading-none whitespace-nowrap">
               Ai-<span className="text-secondary not-italic tracking-normal font-bold">Yugam</span>
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

        <div className="flex items-center gap-3">
           <Link to="/" className="flex items-center gap-2 p-2 px-2 md:px-4 bg-white shadow-sm dark:bg-gray-900 text-blue-900 dark:text-gray-400 rounded-xl md:rounded-2xl hover:text-secondary border border-blue-200 dark:border-gray-800 transition-colors">
              <Home className="w-5 h-5 md:w-4 md:h-4" />
              <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">Home</span>
           </Link>
           <Link to="/auth" className="p-2.5 bg-white shadow-sm dark:bg-gray-900 text-blue-900 dark:text-gray-400 rounded-2xl hover:text-secondary border border-blue-200 dark:border-gray-800 transition-colors">
              <User className="w-5 h-5" />
           </Link>
           <Link to="/auth" className="hidden sm:block px-6 py-2 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-secondary/30 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all">Login</Link>
           <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2.5 bg-white shadow-sm dark:bg-gray-900 rounded-2xl text-blue-900 dark:text-gray-300 border border-blue-200 dark:border-gray-800">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* Sub-Navbar: The Main Curriculum Ribbon - Black Background */}
      <div 
         onMouseLeave={() => setActiveCategory(null)}
         className="bg-black border-b border-gray-900 relative z-[140]"
      >
         <div className="max-w-screen-2xl mx-auto px-1 md:px-6 relative h-10 md:h-12 flex items-center group/ribbon">
            
            <button 
              onClick={() => document.getElementById('curriculum-scroll').scrollBy({ left: -120, behavior: 'smooth' })}
              className="absolute left-0 z-20 h-full px-2 bg-black/90 text-gray-400 hover:text-white transition-all md:hidden"
            >
               <span className="text-xs font-black">❮</span>
            </button>

            <div 
              id="curriculum-scroll"
              className="flex items-center gap-6 md:gap-10 h-full overflow-x-auto md:overflow-visible scrollbar-hide px-8 md:px-0"
            >
               <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-secondary/60 flex-shrink-0 animate-pulse mr-2 md:mr-6 whitespace-nowrap">Tutorials:</span>
               
               {sections.map((section) => {
                  const HeaderIcon = iconMap[section.icon] || Layout;
                  const isActive = activeCategory === section.name;

                  return (
                     <div 
                       key={section.name}
                       onMouseEnter={() => setActiveCategory(section.name)}
                       className="relative h-full flex items-center group/cat flex-shrink-0"
                     >
                        <button 
                           onClick={() => setActiveCategory(isActive ? null : section.name)}
                           className={`flex items-center gap-1.5 md:gap-2 h-full transition-all ${isActive ? 'text-secondary' : 'text-gray-400 hover:text-white'}`}
                        >
                           <HeaderIcon className={`w-3 md:w-3.5 h-3 md:h-3.5 ${section.color}`} />
                           <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none mt-0.5 whitespace-nowrap">{section.name}</span>
                        </button>

                         {/* Desktop Localized Dropdown */}
                         <AnimatePresence>
                            {isActive && (
                               <motion.div 
                                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                                  className={`hidden md:block absolute top-full left-0 ${section.items.length > 6 ? 'min-w-[480px]' : 'min-w-[240px]'} bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.6)] rounded-b-2xl z-[200] overflow-hidden`}
                               >
                                  <div className={`p-4 grid ${section.items.length > 6 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-6 gap-y-1`}>
                                     {section.items.map((sid) => {
                                        const sub = subjects.find(s => s.id === sid);
                                        const SubIcon = iconMap[sub?.icon] || Code;
                                        return (
                                           <Link 
                                             key={sid} to={sub?.path} 
                                             className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-[9.5px] md:text-[11px] font-black text-gray-800 dark:text-gray-300 group/link"
                                           >
                                              <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover/link:bg-secondary/10 transition-colors">
                                                 <SubIcon className={`w-3 md:w-3.5 h-3 md:h-3.5 ${sub?.color}`} />
                                              </div>
                                              <span className="group-hover/link:text-secondary tracking-tight whitespace-nowrap">{sub?.name}</span>
                                           </Link>
                                        )
                                     })}
                                  </div>
                               </motion.div>
                            )}
                         </AnimatePresence>
                     </div>
                  )
               })}
            </div>

            <button 
              onClick={() => document.getElementById('curriculum-scroll').scrollBy({ left: 120, behavior: 'smooth' })}
              className="absolute right-0 z-20 h-full px-2 bg-black/90 text-gray-400 hover:text-white transition-all md:hidden"
            >
               <span className="text-xs font-black">❯</span>
            </button>
         </div>

         {/* Unified Global Dropdown for Subnavbar - Mega Menu Style */}
         <AnimatePresence>
            {activeSection && (
               <motion.div 
                  onMouseEnter={() => setActiveCategory(activeCategory)}
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] z-[200] overflow-hidden"
               >
                  <div className="max-w-screen-2xl mx-auto p-6 md:p-10">
                     <div className="flex items-center gap-4 mb-6 border-b dark:border-gray-800 pb-4">
                        <div className={`p-3 rounded-2xl bg-secondary/10`}>
                           {React.createElement(iconMap[activeSection.icon] || Layout, { className: `w-6 h-6 ${activeSection.color}` })}
                        </div>
                        <div>
                           <h3 className="text-xl font-black uppercase tracking-tighter italic text-gray-900 dark:text-white leading-none">{activeSection.name}</h3>
                           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Curriculum Core Modules</p>
                        </div>
                     </div>

                     <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6`}>
                        {activeSection.items.map((sid) => {
                           const sub = subjects.find(s => s.id === sid);
                           const SubIcon = iconMap[sub?.icon] || Code;
                           return (
                              <Link 
                                key={sid} to={sub?.path} 
                                className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-secondary/5 border border-transparent hover:border-secondary/20 transition-all group/link"
                              >
                                 <div className="p-2 rounded-xl bg-white dark:bg-gray-800 shadow-sm group-hover/link:bg-secondary/10 transition-colors">
                                    <SubIcon className={`w-4 h-4 md:w-5 md:h-5 ${sub?.color}`} />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-[11px] md:text-sm font-black text-gray-800 dark:text-gray-200 group-hover/link:text-secondary transition-colors underline-offset-4 group-hover/link:underline">{sub?.name}</span>
                                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter">Learn Now</span>
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
                        <div className="grid grid-cols-1 gap-2">
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
                      <div className="grid grid-cols-2 gap-2">
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
