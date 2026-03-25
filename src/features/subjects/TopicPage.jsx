import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Play, Bookmark, Share2, 
  CheckCircle, ArrowRight, BookOpen, Menu, Layout, Layers, Terminal, X, Search
} from 'lucide-react';
import { subjects } from '../../config/subjectsConfig';
import { allTopics } from '../../data/allTopics';
import CodeEditor from '../../components/ui/CodeEditor';

const TopicPage = () => {
  const { subjectId, topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-white dark:bg-[#1a1a1a] transition-all duration-300">
      
      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Traditional W3 Style */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-[260px] md:w-[280px] bg-[#f8f9fa] dark:bg-[#111111] border-r dark:border-gray-800 z-[70] lg:z-0 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full font-sans">
          
          <div className="p-6 border-b dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900">
            <div className="flex flex-col">
               <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mb-1">{subject.category} Tutorial</span>
               <h2 className="text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">{subject.name}</h2>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
               <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/50 dark:bg-transparent">
             {/* Progress mini bar */}
             <div className="px-6 py-4 border-b dark:border-gray-800 bg-blue-50/30 dark:bg-blue-950/10">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[10px] font-black uppercase text-secondary tracking-widest">Your Mastery</span>
                   <span className="text-xs font-black text-secondary italic">{progressPercentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: `${progressPercentage}%` }} className="h-full bg-secondary" />
                </div>
             </div>

             <nav className="py-2">
                {topics.map((topic, index) => {
                   const isActive = activeTopic?.id === topic.id;
                   const isCompleted = progress.includes(topic.id);
                   return (
                     <Link
                       key={topic.id}
                       to={`/learn/${subjectId}/${topic.id}`}
                       onClick={() => setIsSidebarOpen(false)}
                       className={`flex items-center justify-between px-6 py-2.5 text-sm transition-all duration-150 ${isActive ? 'bg-secondary text-white font-bold' : 'text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'}`}
                     >
                       <span className="truncate pr-2">{topic.title}</span>
                       {isCompleted && !isActive && <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />}
                     </Link>
                   )
                })}
             </nav>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center bg-white dark:bg-[#1a1a1a] transition-all relative font-sans">
        
        {/* Navigation Bar/Breadcrumb (Classic) */}
        <header className="sticky top-0 z-[50] w-full bg-white dark:bg-[#1a1a1a] border-b dark:border-gray-800 px-4 py-2 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" />
             </button>
             <nav className="flex items-center text-[9px] font-black text-gray-400 gap-1.5 uppercase tracking-widest whitespace-nowrap overflow-hidden">
                <Link to="/" className="hover:text-secondary">Portal</Link>
                <ChevronRight className="w-3 h-3 opacity-30" />
                <span className="text-gray-900 dark:text-white truncate max-w-[100px]">{subject.name}</span>
             </nav>
          </div>
          <div className="text-[8px] font-black italic text-gray-400 uppercase tracking-[0.2em] hidden sm:block">
             SYS_READY // V.2026
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTopic ? (
            <motion.article 
              key={activeTopic.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-4xl px-8 py-10 md:py-16 space-y-12"
            >
              <div className="space-y-4">
                 <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                   {activeTopic.title}
                 </h1>
                 <div className="h-1 w-20 bg-secondary rounded-full" />
              </div>

              {/* Next/Prev Buttons (Top - Traditional) */}
              <div className="flex justify-between items-center py-4 border-y dark:border-gray-800">
                 {prevTopic ? (
                   <Link to={`/learn/${subjectId}/${prevTopic.id}`} className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-sm rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-all">
                     <ChevronLeft className="w-4 h-4" /> Previous
                   </Link>
                 ) : <div />}
                 {nextTopic ? (
                   <Link to={`/learn/${subjectId}/${nextTopic.id}`} className="px-8 py-2.5 bg-secondary text-white font-bold text-sm rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20">
                     Next <ChevronRight className="w-4 h-4" />
                   </Link>
                 ) : (
                    <span className="px-6 py-2.5 bg-gray-50 text-gray-300 border font-bold text-sm rounded-lg">Completed!</span>
                 )}
              </div>

              <div 
                className="prose prose-zinc prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter"
                dangerouslySetInnerHTML={{ __html: activeTopic.content }} 
              />

              {activeTopic.codeExample && (
                <div className="pt-10 space-y-8">
                   <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase flex items-center gap-3">
                      <Terminal className="w-6 h-6 text-secondary" />
                      Try It Yourself Example
                   </h3>
                   <CodeEditor initialCode={activeTopic.codeExample} />
                </div>
              )}

              {/* Bottom Pagination (Classic) - Hidden on mobile */}
              <div className="hidden md:flex justify-between items-center pt-20 pb-10">
                 {prevTopic ? (
                   <Link to={`/learn/${subjectId}/${prevTopic.id}`} className="flex flex-col items-start gap-1 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800 hover:bg-gray-100 transition-all min-w-[200px]">
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Previous Topic</span>
                      <span className="font-bold text-gray-800 dark:text-white truncate max-w-[150px]">{prevTopic.title}</span>
                   </Link>
                 ) : <div />}
                 {nextTopic ? (
                   <Link to={`/learn/${subjectId}/${nextTopic.id}`} className="flex flex-col items-end gap-1 p-6 bg-secondary text-white rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all min-w-[200px] text-right">
                      <span className="text-[10px] font-black uppercase text-blue-100 tracking-widest">Next Topic</span>
                      <span className="font-bold truncate max-w-[150px]">{nextTopic.title}</span>
                   </Link>
                 ) : (
                    <div className="p-6 bg-blue-500/10 border border-secondary/20 rounded-2xl text-secondary font-black text-right min-w-[200px]">
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
