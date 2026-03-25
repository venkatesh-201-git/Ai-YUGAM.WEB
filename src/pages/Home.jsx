import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sections, subjects } from '../config/subjectsConfig';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    { t: "AI is the tool—You are the master.", c: "text-cyan-400" },
    { t: "Software jobs aren't dying; they're evolving.", c: "text-emerald-400" },
    { t: "Knowledge is your only true security.", c: "text-amber-400" },
    { t: "Code is the magic that shapes our future.", c: "text-purple-400" },
    { t: "AI creates the noise; You create the value.", c: "text-pink-400" },
    { t: "Don't fear the machine—be the one who built it.", c: "text-orange-400" },
    { t: "Innovation is human. Skills are your power.", c: "text-indigo-400" },
    { t: "Every line of code is a step towards freedom.", c: "text-red-400" },
    { t: "AI cannot replace human logic and creativity.", c: "text-yellow-400" },
    { t: "Your potential is greater than any algorithm.", c: "text-teal-500" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] font-sans overflow-x-hidden">

      {/* HERO - FIXED CLEAR */}
      <section className="w-full relative h-auto md:h-[85vh] overflow-hidden">
        <img
          src="/herosectionimg.png"
          alt="hero"
          className="w-full h-auto md:h-full object-cover"
        />



        {/* content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-sm md:text-2xl font-black text-white uppercase tracking-tighter italic leading-none mb-6 whitespace-nowrap">
            Master Your Digital Skills
          </h1>

          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl px-6 md:px-12 py-3 md:py-4 shadow-2xl relative">
            <div className="h-6 md:h-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`text-[9px] md:text-sm font-black uppercase tracking-[0.2em] italic ${quotes[currentQuote].c}`}
                >
                  "{quotes[currentQuote].t}"
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT BELOW HERO */}
      <div className="pt-6 pb-10 px-4 md:px-10 space-y-12">
        {sections.map((section) => (
          <section key={section.name} className="max-w-6xl mx-auto">

            {/* SECTION TITLE */}
            <div className="flex justify-center mb-8">
              <h2 className="inline-block px-8 py-2 border-2 border-blue-500/20 dark:border-gray-800 rounded-full text-lg md:text-2xl font-black uppercase tracking-tighter italic text-gray-800 dark:text-white">
                {section.name}
              </h2>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.items.map((sid) => {
                const sub = subjects.find(s => s.id === sid);
                if (!sub) return null;

                const getImage = (id) => `https://skillicons.dev/icons?i=${id}`;

                return (
                  <Link
                    key={sid}
                    to={sub.path}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 flex flex-col items-center text-center border border-gray-200 dark:border-gray-800 hover:shadow-md transition"
                  >

                    {/* IMAGE */}
                    <img
                      src={getImage(sub.id)}
                      alt={sub.name}
                      className="w-10 h-10 md:w-14 md:h-14 mb-2"
                    />

                    {/* TITLE */}
                    <h3 className="text-xs md:text-sm font-medium text-gray-800 dark:text-white">
                      {sub.name}
                    </h3>

                    {/* DESC */}
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">
                      {sub.description || 'Learn and build projects'}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* STATS */}
      <section className="bg-gray-900 text-white py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-medium">{subjects.length}</h3>
            <p className="text-xs text-gray-400">Courses</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">600+</h3>
            <p className="text-xs text-gray-400">Lessons</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">24/7</h3>
            <p className="text-xs text-gray-400">Support</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Free</h3>
            <p className="text-xs text-gray-400">Certificates</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-xl mx-auto bg-blue-600 text-white rounded-xl p-6">
          <h2 className="text-lg md:text-2xl font-medium mb-2">
            Start Learning Today
          </h2>
          <p className="text-xs md:text-sm text-blue-100">
            Build real-world skills with structured learning
          </p>

          <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full text-sm hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;