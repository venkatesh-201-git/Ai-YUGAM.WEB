import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Home, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Pagination = ({ prevTopic, nextTopic, subjectId }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-12 border-t dark:border-gray-800 gap-8 group/pagination relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 p-2 bg-gray-50/50 dark:bg-gray-900/50 rounded-full border dark:border-gray-800 shadow-inner group-hover/pagination:scale-110 transition-transform">
         <Home className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors" />
      </div>

      {prevTopic ? (
        <Link
          to={`/learn/${subjectId}/${prevTopic.id}`}
          className="flex flex-col items-center sm:items-start group/prev w-full sm:w-auto"
        >
          <motion.div 
            whileHover={{ x: -6 }}
            className="flex items-center gap-6 px-10 py-6 bg-white dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 font-black rounded-3xl border dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl transition-all relative overflow-hidden"
          >
             <div className="absolute top-1/2 left-0 w-1.5 h-1/2 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 group-hover/prev:bg-secondary transition-colors" />
             <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 group-hover/prev:text-secondary transition-colors">
                <ChevronLeft className="w-6 h-6" />
             </div>
             <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black group-hover/prev:text-secondary/60">Previous Lesson</span>
                <span className="text-lg tracking-tighter group-hover/prev:text-secondary transition-colors truncate max-w-[120px] md:max-w-none">{prevTopic.title}</span>
             </div>
          </motion.div>
        </Link>
      ) : <div className="hidden sm:block min-w-[280px]" />}

      {nextTopic ? (
        <Link
          to={`/learn/${subjectId}/${nextTopic.id}`}
          className="flex flex-col items-center sm:items-end group/next w-full sm:w-auto"
        >
          <motion.div 
            whileHover={{ x: 6 }}
            className="flex items-center gap-6 px-10 py-6 bg-secondary text-white font-black rounded-3xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 hover:bg-blue-600 transition-all relative overflow-hidden group/next-btn"
          >
             <div className="absolute top-1/2 right-0 w-1.5 h-1/2 bg-white/20 -translate-y-1/2 group-hover/next:bg-white transition-colors" />
             <div className="flex flex-col text-right">
                <span className="text-[10px] text-blue-100 uppercase tracking-[0.3em] font-black group-hover/next:text-white/60">Next Up</span>
                <span className="text-lg tracking-tighter text-white truncate max-w-[120px] md:max-w-none">{nextTopic.title}</span>
             </div>
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white/50 group-hover/next-btn:text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
             </div>
          </motion.div>
        </Link>
      ) : (
        <div className="flex flex-col items-center sm:items-end group/complete w-full sm:w-auto p-1 bg-gradient-to-br from-blue-500 to-blue-400 rounded-[calc(1.5rem+4px)] shadow-2xl">
           <div className="bg-white dark:bg-[#0d0d0d] rounded-3xl px-12 py-7 flex items-center gap-6 border dark:border-gray-800">
             <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
                <CheckCircle className="w-6 h-6" />
             </div>
             <div className="flex flex-col text-right">
                <span className="text-[10px] text-secondary uppercase tracking-[0.3em] font-black">Level Complete</span>
                <span className="text-lg tracking-tighter text-gray-900 dark:text-white">Full Mastery</span>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
