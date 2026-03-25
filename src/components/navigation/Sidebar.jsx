import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ChevronLeft, Layout, Layers, Terminal, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ subject, topics, isOpen, onToggle, activeTopicId, progress = [] }) => {
  const location = useLocation();
  const percentage = Math.round((progress.length / topics.length) * 100);

  return (
    <>
      {/* Mobile Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[110] lg:hidden ${isOpen ? 'visible' : 'invisible'}`}
        onClick={onToggle}
      />

      <aside className={`fixed lg:static top-0 bottom-0 left-0 w-[320px] bg-white dark:bg-[#0d0d0d] border-r dark:border-gray-800 z-[120] lg:z-0 transform transition-transform duration-500 ease-in-out font-sans ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="p-8 pb-6 bg-gradient-to-b from-gray-50/50 dark:from-gray-900/50 to-transparent">
            <div className="flex items-center justify-between mb-6">
               <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-inner border border-secondary/10 group-hover:rotate-12 transition-transform">
                  <BookOpen className="w-6 h-6" />
               </div>
               <button onClick={onToggle} className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
               </button>
            </div>
            
            <div className="space-y-1">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
                  <Clock className="w-3 h-3" />
                  Estimated: {topics.length * 5} mins
               </div>
               <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-tight uppercase">
                 {subject.name} <span className="text-secondary tracking-widest font-light">Tutorial</span>
               </h2>
            </div>
          </div>

          {/* Progress Section */}
          <div className="px-8 pb-6">
             <div className="p-5 bg-secondary/5 dark:bg-blue-950/10 rounded-2xl border border-secondary/10 relative overflow-hidden group/progress">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                   <CheckCircle className="w-16 h-16 text-secondary" />
                </div>
                <div className="flex justify-between items-end mb-3">
                   <span className="text-xs font-black text-secondary uppercase tracking-widest">Mastery Status</span>
                   <span className="text-xl font-black text-secondary italic">{percentage}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${percentage}%` }}
                     className="h-full bg-secondary shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                   />
                </div>
             </div>
          </div>

          {/* Topics List */}
          <div className="flex-1 overflow-y-auto px-6 py-2 pb-10 custom-scrollbar-thin">
             <div className="space-y-1.5 pt-2">
                {topics.map((topic, index) => {
                  const isActive = activeTopicId === topic.id;
                  const isCompleted = progress.includes(topic.id);
                  const isFirst = index === 0;
                  const isLast = index === topics.length - 1;

                  return (
                    <Link
                      key={topic.id}
                      to={`/learn/${subject.id}/${topic.id}`}
                      onClick={() => onToggle(false)}
                      className={`group relative flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${isActive ? 'bg-secondary text-white shadow-[0_10px_25px_-10px_rgba(16,185,129,0.4)] scale-[1.02] z-10' : 'text-gray-600 dark:text-gray-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:translate-x-1'}`}
                    >
                      <div className="flex items-center gap-4">
                         <div className="relative flex flex-col items-center">
                            {!isFirst && <div className={`absolute -top-4 w-px h-4 ${isActive ? 'bg-secondary/20' : 'bg-gray-200 dark:border-gray-800'}`}></div>}
                            <div className={`w-2.5 h-2.5 rounded-full z-10 border transition-all duration-300 ${isActive ? 'bg-white border-white scale-125' : isCompleted ? 'bg-secondary border-secondary' : 'bg-gray-200 dark:bg-gray-800 border-transparent group-hover:border-secondary group-hover:scale-110'}`} />
                            {!isLast && <div className={`absolute -bottom-4 w-px h-4 ${isActive ? 'bg-secondary/20' : 'bg-gray-200 dark:border-gray-800'}`}></div>}
                         </div>
                         <div className="flex flex-col">
                            <span className={`text-xs font-black uppercase tracking-widest ${isActive ? 'text-blue-100' : 'text-gray-400/60'}`}>Lesson {index + 1}</span>
                            <span className={`text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-secondary'}`}>{topic.title}</span>
                         </div>
                      </div>
                      
                      {isCompleted && !isActive && (
                        <CheckCircle className="w-4 h-4 text-secondary/60" />
                      )}
                    </Link>
                  )
                })}
             </div>
          </div>
          
          <div className="p-8 border-t dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30">
             <button className="w-full py-4 text-[11px] font-black uppercase tracking-[0.2em] bg-gray-900 dark:bg-gray-800 text-white rounded-2xl hover:bg-black dark:hover:bg-gray-700 transition-all active:scale-95 shadow-xl shadow-gray-200/50 dark:shadow-none">
                Request Certification
             </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
