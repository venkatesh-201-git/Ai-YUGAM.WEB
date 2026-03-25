import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col justify-center items-center px-4 py-20 transition-colors duration-300">
      
      <div className="text-center space-y-2 mb-10">
         <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-gray-900 dark:text-white uppercase">
            Ai-<span className="text-secondary tracking-normal not-italic">Yugam</span> Portal
         </h1>
         <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
            {isLogin ? 'Welcome Back, Developer' : 'Start Your Journey Today'}
         </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-50/50 dark:bg-gray-900/40 p-4 md:p-8 rounded-[2rem] border border-blue-100 dark:border-gray-800 shadow-xl relative overflow-hidden">
         
         {/* Toggle Overlay (Desktop only visual flair) */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--secondary)_0%,_transparent_60%)] opacity-5 pointer-events-none"></div>

         {/* Sign In Form */}
         <motion.div 
           initial={{ opacity: 0, x: -20 }} animate={{ opacity: isLogin ? 1 : 0.5, x: 0 }}
           className={`bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 transition-all duration-300 ${isLogin ? 'shadow-2xl scale-[1.02] z-10 border-blue-200 dark:border-blue-900/50' : 'scale-95 opacity-50 grayscale cursor-pointer hover:grayscale-0'}`}
           onClick={() => !isLogin && setIsLogin(true)}
         >
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">Sign In</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="email" placeholder="dev@ai-yugam.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-secondary dark:focus:border-secondary rounded-xl text-sm font-medium text-gray-900 dark:text-white transition-all outline-none" />
                  </div>
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex justify-between">
                     <span>Password</span>
                     <button type="button" className="text-secondary hover:underline">Forgot?</button>
                  </label>
                  <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-secondary dark:focus:border-secondary rounded-xl text-sm font-medium text-gray-900 dark:text-white transition-all outline-none" />
                  </div>
               </div>
               <button className="w-full py-4 mt-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-secondary dark:hover:bg-secondary dark:hover:text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group">
                  Authenticate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
         </motion.div>

         {/* Sign Up Form */}
         <motion.div 
           initial={{ opacity: 0, x: 20 }} animate={{ opacity: !isLogin ? 1 : 0.5, x: 0 }}
           className={`bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 transition-all duration-300 ${!isLogin ? 'shadow-2xl scale-[1.02] z-10 border-blue-200 dark:border-blue-900/50' : 'scale-95 opacity-50 grayscale cursor-pointer hover:grayscale-0'}`}
           onClick={() => isLogin && setIsLogin(false)}
         >
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">Create Account</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <div className="relative">
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-secondary dark:focus:border-secondary rounded-xl text-sm font-medium text-gray-900 dark:text-white transition-all outline-none" />
                  </div>
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <div className="relative">
                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="email" placeholder="new@developer.com" className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-secondary dark:focus:border-secondary rounded-xl text-sm font-medium text-gray-900 dark:text-white transition-all outline-none" />
                  </div>
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Password</label>
                  <div className="relative">
                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-secondary dark:focus:border-secondary rounded-xl text-sm font-medium text-gray-900 dark:text-white transition-all outline-none" />
                  </div>
               </div>
               <button className="w-full py-4 mt-6 bg-secondary text-white font-black uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-all shadow-lg shadow-secondary/30 active:scale-95 flex items-center justify-center gap-2 group">
                  Join Ai-Yugam <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
         </motion.div>
      </div>

    </div>
  );
};

export default Auth;
