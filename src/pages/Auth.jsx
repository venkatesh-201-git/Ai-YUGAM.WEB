import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col justify-center items-center px-2.5 sm:px-4 py-6 sm:py-12 transition-colors duration-300">
      
      {/* Top Header */}
      <div className="text-center space-y-1 sm:space-y-2 mb-4 sm:mb-8 max-w-md px-2">
         <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wider uppercase drop-shadow-sm flex items-center justify-center gap-1">
            <span className="font-['Audiowide'] text-black dark:text-white italic">Ai</span>
            <span className="text-black dark:text-white font-black">-</span>
            <span className="font-['Orbitron'] inline-flex">
              <span className="text-[#1967d2]">Y</span>
              <span className="text-[#c5221f]">u</span>
              <span className="text-[#d97706]">g</span>
              <span className="text-[#137333]">a</span>
              <span className="text-[#c5221f]">m</span>
            </span> <span className="text-gray-900 dark:text-white font-['Orbitron'] ml-1">Portal</span>
         </h1>
         <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
            {isLogin ? 'Existing User Login' : 'New User Registration'}
         </p>
      </div>

      {/* Main Auth Container */}
      <div className="w-full max-w-md bg-sky-50/50 dark:bg-gray-900/40 p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-sky-100 dark:border-gray-800 shadow-lg relative overflow-hidden">
         
         {/* Toggle Selector Tabs (Clear Distinction) */}
         <div className="flex bg-gray-200/70 dark:bg-gray-800 p-1 rounded-xl mb-4 sm:mb-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
                isLogin 
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm font-bold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
               Existing User (Login)
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold rounded-lg transition-all ${
                !isLogin 
                  ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm font-bold' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
               New User (Register / Sign Up)
            </button>
         </div>

         <AnimatePresence mode="wait">
            {isLogin ? (
               /* LOGIN FORM (Existing User) */
               <motion.div 
                 key="login"
                 initial={{ opacity: 0, y: 8 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -8 }}
                 transition={{ duration: 0.2 }}
                 className="bg-white dark:bg-gray-950 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
               >
                  <div className="mb-4 space-y-0.5">
                     <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Existing User Login</h2>
                     <p className="text-[10px] text-gray-500 dark:text-gray-400">Enter your credentials to access your portal</p>
                  </div>

                  <form className="space-y-3.5" onSubmit={e => e.preventDefault()}>
                     <div className="space-y-1">
                        <label className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                        <div className="relative">
                           <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                           <input type="email" placeholder="dev@ai-yugam.com" className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-secondary rounded-lg text-xs font-medium text-gray-900 dark:text-white outline-none transition-all" />
                        </div>
                     </div>

                     <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                           <span>Password</span>
                           <button type="button" className="text-secondary hover:underline lowercase font-normal">Forgot password?</button>
                        </div>
                        <div className="relative">
                           <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                           <input type="password" placeholder="••••••••" className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-secondary rounded-lg text-xs font-medium text-gray-900 dark:text-white outline-none transition-all" />
                        </div>
                     </div>

                     <button className="w-full py-3 mt-2 bg-secondary text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs rounded-xl hover:opacity-95 transition-all shadow-md shadow-secondary/20 active:scale-95 flex items-center justify-center gap-1.5 group">
                        Login to Account <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </form>

                  {/* Switch Helper */}
                  <div className="mt-4 pt-3 border-t dark:border-gray-800 text-center">
                     <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        New to Ai-Yugam?{' '}
                        <button type="button" onClick={() => setIsLogin(false)} className="text-secondary font-bold hover:underline">
                           Register / Sign Up here
                        </button>
                     </p>
                  </div>
               </motion.div>
            ) : (
               /* REGISTER FORM (New User) */
               <motion.div 
                 key="register"
                 initial={{ opacity: 0, y: 8 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -8 }}
                 transition={{ duration: 0.2 }}
                 className="bg-white dark:bg-gray-950 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
               >
                  <div className="mb-4 space-y-0.5">
                     <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">New User Registration</h2>
                     <p className="text-[10px] text-gray-500 dark:text-gray-400">Create a new account to start learning</p>
                  </div>

                  <form className="space-y-3.5" onSubmit={e => e.preventDefault()}>
                     <div className="space-y-1">
                        <label className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500">Full Name</label>
                        <div className="relative">
                           <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                           <input type="text" placeholder="John Doe" className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-secondary rounded-lg text-xs font-medium text-gray-900 dark:text-white outline-none transition-all" />
                        </div>
                     </div>

                     <div className="space-y-1">
                        <label className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                        <div className="relative">
                           <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                           <input type="email" placeholder="new@developer.com" className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-secondary rounded-lg text-xs font-medium text-gray-900 dark:text-white outline-none transition-all" />
                        </div>
                     </div>

                     <div className="space-y-1">
                        <label className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gray-500">Password</label>
                        <div className="relative">
                           <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                           <input type="password" placeholder="••••••••" className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:border-secondary rounded-lg text-xs font-medium text-gray-900 dark:text-white outline-none transition-all" />
                        </div>
                     </div>

                     <button className="w-full py-3 mt-2 bg-emerald-600 text-white font-bold uppercase tracking-wider text-[10px] sm:text-xs rounded-xl hover:opacity-95 transition-all shadow-md shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-1.5 group">
                        Register & Create Account <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </form>

                  {/* Switch Helper */}
                  <div className="mt-4 pt-3 border-t dark:border-gray-800 text-center">
                     <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        Already have an account?{' '}
                        <button type="button" onClick={() => setIsLogin(true)} className="text-secondary font-bold hover:underline">
                           Login / Sign In here
                        </button>
                     </p>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

      </div>

   </div>
  );
};

export default Auth;
