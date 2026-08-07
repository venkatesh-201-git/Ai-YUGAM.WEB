import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Play, Bookmark, Share2, 
  CheckCircle, ArrowRight, BookOpen, Menu, Layout, Layers, Terminal, X, Search,
  Maximize2, Minimize2
} from 'lucide-react';
import { subjects } from '../../config/subjectsConfig';
import { allTopics } from '../../data/allTopics';
import CodeEditor from '../../components/ui/CodeEditor';

const TopicPage = () => {
  const { subjectId, topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const topics = useMemo(() => allTopics[subjectId] || [], [subjectId]);
  const subject = useMemo(() => subjects.find(s => s.id === subjectId), [subjectId]);

  // Current Topic Logic
  const activeTopic = useMemo(() => {
    if (!topicId) return topics[0];
    return topics.find(t => t.id === topicId) || topics[0];
  }, [topicId, topics]);

  const topicIndex = topics.findIndex(t => t.id === activeTopic?.id);
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

  // Track Progress
  const [progress, setProgress] = useState([]);
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`ai_yugam_progress_${subjectId}`) || '[]');
    setProgress(saved);
  }, [subjectId]);

  useEffect(() => {
    if (activeTopic && !progress.includes(activeTopic.id)) {
      const newProgress = [...progress, activeTopic.id];
      setProgress(newProgress);
      localStorage.setItem(`ai_yugam_progress_${subjectId}`, JSON.stringify(newProgress));
    }
  }, [activeTopic, progress, subjectId]);

  // Redirect if no topic
  useEffect(() => {
    if (subject && !topicId && topics.length > 0) {
      if (!location.pathname.endsWith(topics[0].id)) {
         navigate(`/learn/${subjectId}/${topics[0].id}`, { replace: true });
      }
    }
  }, [subjectId, topicId, topics, navigate, subject, location]);

  if (!subject) return <div className="p-20 text-center font-bold">Subject Not Found</div>;

  const progressPercentage = Math.round((progress.length / topics.length) * 100);

  return (
    <div className={`flex ${isFullScreen ? 'fixed inset-0 z-[500] bg-white dark:bg-[#0f172a] h-screen w-screen overflow-hidden' : 'h-[calc(100vh-64px)] overflow-hidden bg-white dark:bg-[#1a1a1a]'} transition-all duration-300`}>
      
      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[520] lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Accessible in Full Screen & Normal Mode */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-[240px] sm:w-[260px] md:w-[280px] bg-[#f8f9fa] dark:bg-[#111111] border-r dark:border-gray-800 z-[530] lg:z-auto transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full font-sans">
          
          <div className="p-4 sm:p-6 border-b dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900">
            <div className="flex flex-col">
               <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mb-1">{subject.category} Tutorial</span>
               <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">{subject.name}</h2>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
               <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/50 dark:bg-transparent">
             {/* Progress mini bar */}
             <div className="px-4 sm:px-6 py-3 sm:py-4 border-b dark:border-gray-800 bg-blue-50/30 dark:bg-blue-950/10">
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                   <span className="text-[9px] sm:text-[10px] font-black uppercase text-secondary tracking-widest">Your Mastery</span>
                   <span className="text-xs font-black text-secondary italic">{progressPercentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: `${progressPercentage}%` }} className="h-full bg-secondary" />
                </div>
             </div>

              <nav className="py-2 space-y-0.5 px-2">
                {topics.map((topic, index) => {
                   const isActive = activeTopic?.id === topic.id;
                   const isCompleted = progress.includes(topic.id);
                   return (
                     <Link
                       key={topic.id}
                       to={`/learn/${subjectId}/${topic.id}`}
                       onClick={() => setIsSidebarOpen(false)}
                       className={`flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs leading-snug rounded-lg transition-all duration-200 ${
                         isActive 
                           ? 'bg-gradient-to-r from-secondary to-emerald-600 text-white font-bold shadow-md shadow-emerald-500/20 scale-[1.01]' 
                           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-800/70 font-medium'
                       }`}
                     >
                       <span className="break-words pr-2 leading-tight">{topic.title}</span>
                       {isCompleted && !isActive && <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />}
                     </Link>
                   )
                })}
             </nav>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center bg-white dark:bg-[#1a1a1a] transition-all relative font-sans w-full">
        
        {/* Fixed Header Bar with FULLSCREEN Toggle & Topics Menu */}
        <header className="sticky top-0 z-[50] w-full bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md border-b dark:border-gray-800 px-3 sm:px-6 py-2 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
             <button onClick={() => setIsSidebarOpen(true)} title="Open Topics Menu" className="lg:hidden flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold transition-colors">
                <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                <span>Topics</span>
             </button>
          </div>

          {/* Fullscreen Toggle Button */}
          <button 
            onClick={() => setIsFullScreen(!isFullScreen)}
            aria-label="Toggle Full Screen Reading Mode"
            title={isFullScreen ? "Exit Fullscreen Mode" : "Enter Fullscreen Mode"}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-700 dark:text-sky-300 rounded-xl border border-sky-400/30 text-xs font-semibold transition-all active:scale-95 shadow-sm"
          >
             {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
             <span>{isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
          </button>
        </header>

        <AnimatePresence mode="wait">
          {activeTopic ? (
            <motion.article 
              key={activeTopic.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-4xl px-2.5 sm:px-8 py-4 sm:py-6 md:py-10 space-y-5 sm:space-y-6 md:space-y-8"
            >
              <div className="space-y-2">
                 <h1 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-600 dark:from-white dark:via-emerald-400 dark:to-teal-300 bg-clip-text text-transparent break-words">
                   {activeTopic.title}
                 </h1>
                 <motion.div 
                   initial={{ scaleX: 0 }} 
                   animate={{ scaleX: 1 }} 
                   transition={{ duration: 0.3, ease: 'easeOut' }} 
                   className="h-1 w-16 bg-gradient-to-r from-secondary to-teal-400 rounded-full origin-left shadow-sm" 
                 />
              </div>

              {/* Next/Prev Buttons (Top - Traditional) */}
              <div className="flex flex-wrap justify-between items-center py-2.5 sm:py-3 border-y dark:border-gray-800 gap-2">
                 {prevTopic ? (
                   <Link to={`/learn/${subjectId}/${prevTopic.id}`} title="Go to Previous Topic" className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold text-[7px] sm:text-[8px] rounded-lg flex items-center gap-1 transition-all">
                     <ChevronLeft className="w-3.5 h-3.5" /> <span className="uppercase tracking-wider">Prev Topic</span>
                   </Link>
                 ) : <div />}
                 {nextTopic ? (
                   <Link to={`/learn/${subjectId}/${nextTopic.id}`} title="Go to Next Topic" className="px-3 sm:px-5 py-1 sm:py-1.5 bg-gradient-to-r from-secondary to-emerald-600 text-white font-bold text-[7px] sm:text-[8px] rounded-lg flex items-center gap-1 hover:opacity-95 transition-all shadow-md shadow-emerald-500/20 active:scale-95">
                     <span className="uppercase tracking-wider">Next Topic</span> <ChevronRight className="w-3.5 h-3.5" />
                   </Link>
                 ) : (
                    <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-gray-50 dark:bg-gray-900 text-gray-400 border dark:border-gray-800 font-bold text-[7px] sm:text-[8px]">Completed!</span>
                 )}
              </div>

              <div 
                className="prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-lg sm:prose-h1:text-xl prose-h2:text-base sm:prose-h2:text-lg prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-1.5 prose-h3:text-sm sm:prose-h3:text-base prose-h3:font-semibold prose-h3:text-secondary dark:prose-h3:text-emerald-400 prose-h3:mt-4 prose-h3:mb-2 prose-h4:text-xs sm:prose-h4:text-sm prose-h4:font-semibold prose-p:text-sm sm:prose-p:text-base prose-p:text-gray-900 dark:prose-p:text-gray-100 prose-p:leading-relaxed prose-li:text-sm sm:prose-li:text-base prose-li:text-gray-900 dark:prose-li:text-gray-100"
                dangerouslySetInnerHTML={{ __html: activeTopic.content }} 
              />

              {activeTopic.codeExample && (
                <div className="pt-6 space-y-3">
                   <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="p-1 rounded-md bg-secondary/10 text-secondary">
                        <Terminal className="w-4 h-4" />
                      </div>
                      Try It Yourself Example
                   </h3>
                   <CodeEditor initialCode={activeTopic.codeExample} />
                </div>
              )}

              {activeTopic.extraContent && (
                <div 
                  className="prose prose-sm sm:prose-base dark:prose-invert max-w-none pt-8 prose-headings:font-bold prose-h1:text-lg sm:prose-h1:text-xl prose-h2:text-base sm:prose-h2:text-lg prose-h2:font-semibold prose-h2:mt-6 prose-h2:mb-3 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-800 prose-h2:pb-1.5 prose-h3:text-sm sm:prose-h3:text-base prose-h3:font-semibold prose-h3:text-secondary dark:prose-h3:text-emerald-400 prose-h3:mt-4 prose-h3:mb-2 prose-h4:text-xs sm:prose-h4:text-sm prose-h4:font-semibold prose-p:text-sm sm:prose-p:text-base prose-p:text-gray-900 dark:prose-p:text-gray-100 prose-p:leading-relaxed prose-li:text-sm sm:prose-li:text-base prose-li:text-gray-900 dark:prose-li:text-gray-100"
                  dangerouslySetInnerHTML={{ __html: activeTopic.extraContent }} 
                />
              )}

              {/* Bottom Pagination (Classic) - Hidden on mobile */}
              <div className="hidden md:flex justify-between items-center pt-12 pb-8 border-t dark:border-gray-800 gap-4">
                 {prevTopic ? (
                   <Link to={`/learn/${subjectId}/${prevTopic.id}`} className="flex flex-col items-start gap-1 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all min-w-[180px] max-w-[280px]">
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Previous Topic</span>
                      <span className="font-bold text-xs text-gray-800 dark:text-white break-words">{prevTopic.title}</span>
                   </Link>
                 ) : <div />}
                 {nextTopic ? (
                   <Link to={`/learn/${subjectId}/${nextTopic.id}`} className="flex flex-col items-end gap-1 p-4 bg-gradient-to-r from-secondary to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all min-w-[180px] max-w-[280px] text-right">
                      <span className="text-[10px] font-black uppercase text-emerald-100 tracking-widest">Next Topic</span>
                      <span className="font-bold text-xs break-words">{nextTopic.title}</span>
                   </Link>
                 ) : (
                    <div className="p-4 bg-emerald-500/10 border border-secondary/20 rounded-xl text-secondary font-black text-right min-w-[180px]">
                       <span className="text-[10px] uppercase tracking-widest block opacity-60">Status</span>
                       PATH MASTERED
                    </div>
                 )}
              </div>
              
              <div className="h-20" />
            </motion.article>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
               <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
               <p className="font-bold text-gray-400 animate-pulse">Initializing Path...</p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default TopicPage;
