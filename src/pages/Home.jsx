import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { sections, subjects } from '../config/subjectsConfig';
import { motion, AnimatePresence } from 'framer-motion';

// ANIMATED AI NEURAL & FLOWING WAVE CANVAS COMPONENT
const NeuralWaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const isMobile = window.innerWidth < 640;
    const numPoints = isMobile ? 20 : 42;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 300),
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2.2 + 1.2,
        pulse: Math.random() * Math.PI * 2
      });
    }

    let waveOffset = 0;

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveOffset += 0.025;

      // Draw Flowing Electric Wave 1
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      for (let x = 0; x < canvas.width; x += 8) {
        const y1 = Math.sin(x * 0.009 + waveOffset) * 18 + canvas.height * 0.35;
        if (x === 0) ctx.moveTo(x, y1);
        else ctx.lineTo(x, y1);
      }
      const waveGrad1 = ctx.createLinearGradient(0, 0, canvas.width, 0);
      waveGrad1.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
      waveGrad1.addColorStop(0.5, 'rgba(168, 85, 247, 0.5)');
      waveGrad1.addColorStop(1, 'rgba(236, 72, 153, 0.4)');
      ctx.strokeStyle = waveGrad1;
      ctx.stroke();

      // Draw Flowing Electric Wave 2
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      for (let x = 0; x < canvas.width; x += 8) {
        const y2 = Math.cos(x * 0.007 - waveOffset * 1.2) * 22 + canvas.height * 0.68;
        if (x === 0) ctx.moveTo(x, y2);
        else ctx.lineTo(x, y2);
      }
      const waveGrad2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
      waveGrad2.addColorStop(0, 'rgba(245, 158, 11, 0.4)');
      waveGrad2.addColorStop(0.5, 'rgba(16, 185, 129, 0.5)');
      waveGrad2.addColorStop(1, 'rgba(14, 165, 233, 0.4)');
      ctx.strokeStyle = waveGrad2;
      ctx.stroke();

      // Update and Draw Points & Connected Neural Mesh Lines
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.pulse += 0.05;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isMobile ? 85 : 125;

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / maxDist) * 0.5;
            ctx.strokeStyle = i % 2 === 0 ? `rgba(56, 189, 248, ${alpha})` : `rgba(236, 72, 153, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw Neural Node Dots
        ctx.beginPath();
        const r = p1.radius + Math.sin(p1.pulse) * 0.8;
        ctx.arc(p1.x, p1.y, Math.max(1, r), 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a855f7' : '#f59e0b';
        ctx.shadowBlur = 10;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85"
    />
  );
};

const Home = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [certDataUrl, setCertDataUrl] = useState(null);
  const [isCertGenerating, setIsCertGenerating] = useState(true);

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

  // 4K DYNAMIC CANVAS CERTIFICATE GENERATOR WITH DYNAMIC NAME
  useEffect(() => {
    let isMounted = true;
    setIsCertGenerating(true);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const bgImg = new Image();
    bgImg.crossOrigin = 'anonymous';

    let bgLoaded = false;

    const renderCertificate = () => {
      if (!bgLoaded || !isMounted) return;

      const w = bgImg.naturalWidth || 1920;
      const h = bgImg.naturalHeight || 1358;
      canvas.width = w;
      canvas.height = h;

      // 1. Draw Base Certificate Template
      ctx.drawImage(bgImg, 0, 0, w, h);

      // 2. Render Dynamic Student Name in Place of "John Doe"
      const nameToDisplay = (studentName && studentName.trim() !== '') ? studentName.trim() : 'JOHN DOE';
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Dynamic Font Scaling for Long/Short Names
      let fontSize = Math.floor(w * 0.038);
      if (nameToDisplay.length > 25) fontSize = Math.floor(w * 0.026);
      else if (nameToDisplay.length > 18) fontSize = Math.floor(w * 0.032);

      ctx.font = `bold italic ${fontSize}px "Outfit", "Inter", "Georgia", serif`;
      ctx.fillStyle = '#0f172a'; // High contrast deep navy
      ctx.shadowColor = 'rgba(0, 0, 0, 0.18)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 2;

      // Draw Name on Certificate Baseline
      ctx.fillText(nameToDisplay, w / 2, h * 0.495);
      ctx.restore();

      // 3. Draw Dynamic Verification Code & Issue Date
      ctx.save();
      ctx.font = `bold ${Math.floor(w * 0.012)}px "Inter", sans-serif`;
      ctx.fillStyle = '#334155';
      const cleanName = nameToDisplay.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 6) || 'SAMPLE';
      ctx.fillText(`VERIFIED ID: AY-2026-${cleanName}`, w * 0.22, h * 0.88);
      ctx.fillText(`ISSUED: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`, w * 0.78, h * 0.88);
      ctx.restore();

      // Export 4K PNG Data URL
      const dataUrl = canvas.toDataURL('image/png', 1.0);
      if (isMounted) {
        setCertDataUrl(dataUrl);
        setIsCertGenerating(false);
      }
    };

    bgImg.onload = () => { bgLoaded = true; renderCertificate(); };
    bgImg.src = '/certificate.png';

    return () => {
      isMounted = false;
    };
  }, [studentName]);

  const handleDownloadCertificate = (e) => {
    if (e) e.preventDefault();
    if (!certDataUrl) return;

    const safeName = (studentName && studentName.trim() !== '')
      ? studentName.trim().replace(/[^a-zA-Z0-9]/g, '_')
      : 'John_Doe';

    const link = document.createElement('a');
    link.download = `Ai_Yugam_Certificate_${safeName}.png`;
    link.href = certDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-300 via-amber-200 to-amber-300 dark:from-[#181305] dark:via-[#1f1a08] dark:to-[#181305] font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="w-full relative h-auto overflow-hidden leading-none p-0 m-0 border-0">
        <img
          src="/herosectionimg.png"
          alt="hero"
          className="w-full h-auto object-cover block m-0 p-0 border-0"
        />
      </section>

      {/* MOTIVATIONAL QUOTES BANNER (4K HD & MOBILE FRIENDLY) */}
      <div className="w-full bg-slate-950 py-3 px-2 sm:px-4 border-b-2 border-amber-400/80 shadow-md m-0 -mt-[1px] overflow-hidden backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-center text-center px-1">
          <div className="h-6 sm:h-7 flex items-center justify-center overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`text-[9px] min-[280px]:text-[10px] min-[360px]:text-xs sm:text-sm md:text-base font-black uppercase tracking-wider italic whitespace-nowrap leading-none w-full text-center drop-shadow-md ${quotes[currentQuote].c}`}
              >
                "{quotes[currentQuote].t}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CERTIFICATE SHOWCASE SECTION - 4K HD GOLD BG */}
      <section className="w-full py-8 sm:py-12 px-3 sm:px-6 md:px-8 border-b-2 border-amber-400/60 dark:border-slate-800/80 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* SINGLE STRAIGHT LINE HEADING */}
          <div className="w-full overflow-x-auto no-scrollbar text-center mb-4 sm:mb-6">
            <h2 className="inline-block px-5 sm:px-8 py-2 sm:py-2.5 border-2 border-amber-500/80 dark:border-amber-400/80 rounded-full text-xs min-[280px]:text-sm sm:text-lg md:text-xl font-black uppercase tracking-wider italic text-slate-900 dark:text-amber-400 bg-white/95 dark:bg-slate-900/95 shadow-lg backdrop-blur-xl whitespace-nowrap">
              Official Certification – Earn Verified Course Certificates
            </h2>
          </div>

          {/* SUBTITLE */}
          <p className="text-xs sm:text-base text-slate-900 dark:text-slate-100 text-center max-w-2xl mx-auto mb-6 leading-relaxed font-bold drop-shadow-sm">
            Type your name below to watch your dynamic certificate update live!
          </p>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 items-center">

            {/* LEFT: CERTIFICATE PREVIEW & ACTIONS */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div
                onClick={() => setIsCertModalOpen(true)}
                className="relative group w-full max-w-lg rounded-2xl p-2 sm:p-2.5 bg-white/95 dark:bg-slate-900/95 border-2 border-slate-900/20 dark:border-slate-700 shadow-xl cursor-pointer hover:shadow-2xl hover:border-amber-500 transition-all duration-300"
              >
                {/* Dynamic 4K Certificate Canvas Image */}
                <div className="overflow-hidden rounded-xl bg-slate-950 min-h-[200px] flex items-center justify-center relative">
                  {certDataUrl ? (
                    <img
                      src={certDataUrl}
                      alt="Ai-Yugam Dynamic Certificate of Completion"
                      className="w-full h-auto object-cover rounded-xl crisp-img group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  ) : (
                    <div className="p-8 text-amber-400 text-xs font-black uppercase tracking-widest animate-pulse">
                      Generating Dynamic Certificate...
                    </div>
                  )}
                </div>

                {/* Click Overlay Hint */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center backdrop-blur-xs">
                  <span className="text-xs sm:text-sm font-black text-amber-300 bg-slate-900/95 px-4 py-2 rounded-xl border-2 border-amber-400 shadow-lg uppercase tracking-wider">
                    Click to View 4K Full Size
                  </span>
                </div>
              </div>

              {/* Student Name Live Preview Box */}
              <div className="mt-3 w-full max-w-lg p-2.5 bg-white/95 dark:bg-slate-900/95 border-2 border-amber-400 dark:border-slate-700 rounded-xl text-center shadow-md flex items-center justify-center gap-2">
                <span className="text-xs text-slate-700 dark:text-slate-300 uppercase font-bold">Dynamic Name on Certificate: </span>
                <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-amber-400 italic">
                  "{studentName && studentName.trim() !== '' ? studentName.trim() : 'JOHN DOE'}"
                </span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex items-center justify-center gap-3 mt-4 w-full max-w-lg">
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="flex-1 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-amber-400 dark:text-slate-950 text-xs sm:text-sm font-black rounded-xl transition-all cursor-pointer text-center uppercase tracking-wider border border-amber-400/40 shadow-md hover:scale-105 active:scale-95"
                >
                  Preview 4K Certificate
                </button>

                <button
                  onClick={handleDownloadCertificate}
                  className="flex-1 px-4 py-2.5 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border-2 border-slate-900/20 dark:border-slate-700 text-xs sm:text-sm font-black rounded-xl transition-all text-center uppercase tracking-wider shadow-md hover:scale-105 active:scale-95"
                >
                  Download Certificate
                </button>
              </div>
            </div>

            {/* RIGHT: PERSONALIZER & BENEFIT LIST */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-3.5">

              {/* Name Input Box */}
              <div className="p-4 bg-white/95 dark:bg-slate-900/95 border-2 border-slate-900/20 dark:border-slate-700 rounded-2xl shadow-md">
                <label className="block text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                  Type Your Name To Personalize Certificate
                </label>
                <input
                  type="text"
                  placeholder="Enter your name (e.g. Alex Johnson)"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-950 border-2 border-slate-900/30 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all"
                />
              </div>

              {/* Benefit Cards with high-definition text visibility */}
              <div className="space-y-2.5">
                <div className="p-3.5 bg-white/95 dark:bg-slate-900/95 border-2 border-slate-900/10 dark:border-slate-800 rounded-2xl shadow-sm hover:border-amber-400 transition-all">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">Real-Time Name Rendering</h4>
                  <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 leading-snug font-bold">
                    Replaces sample name with your exact name in real time with custom calligraphic serif typography.
                  </p>
                </div>

                <div className="p-3.5 bg-white/95 dark:bg-slate-900/95 border-2 border-slate-900/10 dark:border-slate-800 rounded-2xl shadow-sm hover:border-amber-400 transition-all">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">LinkedIn & Resume Ready</h4>
                  <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 leading-snug font-bold">
                    Share your achievement on LinkedIn, GitHub, and your professional portfolio in one click.
                  </p>
                </div>

                <div className="p-3.5 bg-white/95 dark:bg-slate-900/95 border-2 border-slate-900/10 dark:border-slate-800 rounded-2xl shadow-sm hover:border-amber-400 transition-all">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wide">100% Free & Automated</h4>
                  <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 leading-snug font-bold">
                    Instantly unlocked upon course completion with unique verification ID.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FULLSCREEN CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {isCertModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/85 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center overflow-y-auto"
            onClick={() => setIsCertModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b-2 border-slate-200 dark:border-slate-800 pb-3 mb-4">
                <div>
                   <h3 className="text-xs sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider">
                     Ai-Yugam Official Verified Certificate Preview
                   </h3>
                   <p className="text-[10px] sm:text-xs font-bold text-amber-500 uppercase tracking-widest mt-0.5">
                     Student: {studentName && studentName.trim() !== '' ? studentName.trim() : 'JOHN DOE'}
                   </p>
                </div>
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-xs font-black uppercase transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Full Dynamic Certificate Image View */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border-2 border-slate-900 dark:border-slate-800 flex items-center justify-center min-h-[250px]">
                {certDataUrl ? (
                  <img
                    src={certDataUrl}
                    alt="Ai-Yugam Sample Certificate Full View"
                    className="w-full h-auto max-h-[75vh] object-contain mx-auto crisp-img"
                  />
                ) : (
                  <div className="p-8 text-amber-400 text-xs font-black uppercase tracking-widest animate-pulse">
                    Rendering High-Res Preview...
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t-2 border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-800 dark:text-slate-200 font-bold">
                  Awarded to students upon 100% course completion.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownloadCertificate}
                    className="px-4.5 py-2.5 bg-slate-900 dark:bg-amber-400 hover:bg-slate-800 dark:hover:bg-amber-300 text-amber-400 dark:text-slate-950 text-xs font-black uppercase rounded-xl transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    Download Customized Certificate (PNG)
                  </button>
                  <button
                    onClick={() => setIsCertModalOpen(false)}
                    className="px-4 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-black uppercase rounded-xl transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ANIMATED AI NEURAL & WAVE BANNER SECTION */}
      <section className="relative w-full bg-slate-950 py-5 sm:py-8 px-3 sm:px-6 border-b border-indigo-500/30 overflow-hidden flex items-center justify-center">
        {/* Animated Gradient Ambient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-amber-900/30 animate-pulse pointer-events-none" />

        {/* Dynamic Canvas with Moving Dots, AI Neural Connections & Electric Waves */}
        <NeuralWaveCanvas />

        {/* 3D Floating Container for new.png */}
        <div className="relative z-10 max-w-md sm:max-w-xl md:max-w-3xl w-full mx-auto flex items-center justify-center p-2 sm:p-4">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.4, -0.4, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative group w-full rounded-2xl p-2 sm:p-3 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-amber-500/30 border border-cyan-400/50 shadow-2xl shadow-cyan-500/20 backdrop-blur-md hover:border-cyan-400 transition-all duration-300"
          >
            {/* Glowing Neon Ring Backdrop */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse" />

            <div className="relative overflow-hidden rounded-xl bg-slate-900/95 shadow-inner flex items-center justify-center p-1 sm:p-2">
              <img
                src="/new.png"
                alt="Ai-Yugam AI & Tech Feature Banner"
                className="w-full max-h-[200px] min-[360px]:max-h-[260px] sm:max-h-[340px] md:max-h-[400px] object-contain block mx-auto rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT BELOW HERO - ALTERNATING GOLD & WHITE SECTIONS */}
      <div className="w-full">
        {sections.map((section, secIdx) => {
          const sectionGoogleColors = ['border-[#4285F4]/40 text-[#4285F4]', 'border-[#EA4335]/40 text-[#EA4335]', 'border-[#FBBC05]/40 text-[#FBBC05]', 'border-[#34A853]/40 text-[#34A853]'];
          const secColor = sectionGoogleColors[secIdx % 4];
          const isGoldSection = true;
          const sectionBg = 'bg-[#fcd34d] dark:bg-[#1f1a08]';

          return (
            <div key={section.name} className={`w-full py-8 sm:py-12 px-2 sm:px-4 md:px-10 border-b border-amber-300/60 dark:border-gray-800/60 ${sectionBg}`}>
              <section className="max-w-6xl mx-auto">

                {/* SECTION TITLE WITH GOOGLE BRAND COLOR BORDER */}
                <div className="flex justify-center mb-4 sm:mb-8">
                  <h2 className={`inline-block px-4 sm:px-8 py-1.5 sm:py-2 border-2 ${secColor} rounded-full text-xs sm:text-lg md:text-2xl font-black uppercase tracking-tighter italic text-gray-800 dark:text-white bg-white/70 dark:bg-gray-900/70 shadow-sm`}>
                    {section.name}
                  </h2>
                </div>

                {/* GRID - OPTIMIZED FOR JIOPHONE 2 (240px) & MOBILE */}
                <div className="grid grid-cols-2 max-[260px]:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                  {section.items.map((sid, idx) => {
                    const sub = subjects.find(s => s.id === sid);
                    if (!sub) return null;

                    const googleAccents = [
                      // Google Blue
                      {
                        bg: isGoldSection ? 'bg-white/80 dark:bg-blue-950/40' : 'bg-blue-50/70 dark:bg-blue-950/30',
                        border: 'border-blue-200 dark:border-blue-800/50 hover:border-[#4285F4]',
                        text: 'text-blue-950 dark:text-blue-100 group-hover:text-[#4285F4]',
                        shadow: 'hover:shadow-blue-500/20'
                      },
                      // Google Red
                      {
                        bg: isGoldSection ? 'bg-white/80 dark:bg-red-950/40' : 'bg-red-50/70 dark:bg-red-950/30',
                        border: 'border-red-200 dark:border-red-800/50 hover:border-[#EA4335]',
                        text: 'text-red-950 dark:text-red-100 group-hover:text-[#EA4335]',
                        shadow: 'hover:shadow-red-500/20'
                      },
                      // Google Yellow / Amber
                      {
                        bg: isGoldSection ? 'bg-white/80 dark:bg-amber-950/40' : 'bg-amber-50/70 dark:bg-amber-950/30',
                        border: 'border-amber-200 dark:border-amber-800/50 hover:border-[#FBBC05]',
                        text: 'text-amber-950 dark:text-amber-100 group-hover:text-[#d97706]',
                        shadow: 'hover:shadow-amber-500/20'
                      },
                      // Google Green
                      {
                        bg: isGoldSection ? 'bg-white/80 dark:bg-emerald-950/40' : 'bg-emerald-50/70 dark:bg-emerald-950/30',
                        border: 'border-emerald-200 dark:border-emerald-800/50 hover:border-[#34A853]',
                        text: 'text-emerald-950 dark:text-emerald-100 group-hover:text-[#34A853]',
                        shadow: 'hover:shadow-emerald-500/20'
                      }
                    ];

                    const g = googleAccents[idx % 4];

                    const courseImageMap = {
                      // Frontend
                      html: 'https://skillicons.dev/icons?i=html',
                      css: 'https://skillicons.dev/icons?i=css',
                      javascript: 'https://skillicons.dev/icons?i=js',
                      bootstrap: 'https://skillicons.dev/icons?i=bootstrap',
                      react: 'https://skillicons.dev/icons?i=react',
                      jquery: 'https://skillicons.dev/icons?i=jquery',
                      sass: 'https://skillicons.dev/icons?i=sass',
                      vue: 'https://skillicons.dev/icons?i=vue',
                      angular: 'https://skillicons.dev/icons?i=angular',
                      angularjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
                      typescript: 'https://skillicons.dev/icons?i=ts',
                      json: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
                      icons: 'https://cdn-icons-png.flaticon.com/512/1085/1085790.png',
                      rwd: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',
                      graphics: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                      svg: 'https://skillicons.dev/icons?i=svg',
                      canvas: 'https://skillicons.dev/icons?i=html',
                      colors: 'https://cdn-icons-png.flaticon.com/512/1043/1043474.png',
                      appml: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',

                      // Backend
                      java: 'https://skillicons.dev/icons?i=java',
                      python: 'https://skillicons.dev/icons?i=py',
                      php: 'https://skillicons.dev/icons?i=php',
                      c: 'https://skillicons.dev/icons?i=c',
                      cpp: 'https://skillicons.dev/icons?i=cpp',
                      csharp: 'https://skillicons.dev/icons?i=cs',
                      go: 'https://skillicons.dev/icons?i=go',
                      kotlin: 'https://skillicons.dev/icons?i=kotlin',
                      swift: 'https://skillicons.dev/icons?i=swift',
                      rust: 'https://skillicons.dev/icons?i=rust',
                      nodejs: 'https://skillicons.dev/icons?i=nodejs',
                      django: 'https://skillicons.dev/icons?i=django',
                      asp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',

                      // Database
                      sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                      mongodb: 'https://skillicons.dev/icons?i=mongodb',
                      mysql: 'https://skillicons.dev/icons?i=mysql',
                      postgresql: 'https://skillicons.dev/icons?i=postgres',

                      // AI & Data Science
                      datascience: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
                      numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
                      pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
                      scipy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scipy/scipy-original.svg',
                      matplotlib: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
                      machinelearning: 'https://cdn-icons-png.flaticon.com/512/8618/8618886.png',
                      ai: 'https://cdn-icons-png.flaticon.com/512/8618/8618886.png',
                      genai: 'https://cdn-icons-png.flaticon.com/512/11865/11865326.png',
                      statistics: 'https://cdn-icons-png.flaticon.com/512/3554/3554625.png',
                      r: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',

                      // Tools & Infra
                      git: 'https://skillicons.dev/icons?i=git',
                      postman: 'https://skillicons.dev/icons?i=postman',
                      excel: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
                      xml: 'https://cdn-icons-png.flaticon.com/512/136/136526.png',
                      bash: 'https://skillicons.dev/icons?i=bash',
                      aws: 'https://skillicons.dev/icons?i=aws',
                      cybersecurity: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png',
                      rpi: 'https://skillicons.dev/icons?i=raspberrypi',
                      downloads: 'https://cdn-icons-png.flaticon.com/512/724/724933.png',

                      // Logic & Fundamentals
                      dsa: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',
                      programming_intro: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',
                      web_intro: 'https://skillicons.dev/icons?i=html',
                      howto: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                      spaces: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png',
                      typing_speed: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',

                      // Development Modules
                      payment_integration: 'https://cdn-icons-png.flaticon.com/512/893/893081.png',

                      // Enterprise ERP & SAP
                      sap_s4hana: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                      sap_abap: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                      sap_fiori: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                      sap_hana: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                      sap_fico: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                      sap_mm: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
                      sap_sd: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',

                      // Enterprise Platforms & ITSM
                      servicenow: 'https://cdn-icons-png.flaticon.com/512/5969/5969012.png',
                      salesforce: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
                      workday: 'https://cdn-icons-png.flaticon.com/512/5969/5969032.png',

                      // Integration & Middleware
                      mulesoft: 'https://cdn-icons-png.flaticon.com/512/888/888857.png',
                      boomi: 'https://cdn-icons-png.flaticon.com/512/888/888857.png',
                      kafka: 'https://skillicons.dev/icons?i=kafka',

                      // Cloud & DevOps
                      docker: 'https://skillicons.dev/icons?i=docker',
                      kubernetes: 'https://skillicons.dev/icons?i=kubernetes',
                      azure: 'https://skillicons.dev/icons?i=azure',
                      gcp: 'https://skillicons.dev/icons?i=gcp',
                      snowflake: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg',

                      // BI & Business Analytics
                      powerbi: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
                      tableau: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg'
                    };

                    const imageSrc = courseImageMap[sub.id] || `https://skillicons.dev/icons?i=${sub.id}`;

                    return (
                      <Link
                        key={sid}
                        to={sub.path}
                        className={`group relative ${g.bg} rounded-xl p-2.5 sm:p-4 flex flex-col items-center text-center border ${g.border} ${g.shadow} hover:shadow-xl transition-all duration-300 active:scale-95 overflow-hidden`}
                      >
                        {/* Top Accent Line in Google Brand Color */}
                        <div className={`absolute top-0 left-0 right-0 h-1 ${g.topBar} opacity-80 group-hover:opacity-100 transition-opacity`} />

                        {/* IMAGE WITH SITE LOGO FALLBACK */}
                        <img
                          src={imageSrc}
                          alt={sub.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/eyee-removebg-preview.png';
                          }}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1.5 sm:mb-2 object-contain group-hover:scale-110 transition-transform duration-300"
                        />

                        {/* TITLE */}
                        <h3 className={`text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 dark:text-white leading-tight ${g.text} transition-colors`}>
                          {sub.name}
                        </h3>

                        {/* DESC */}
                        <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight line-clamp-2">
                          {sub.description || 'Learn and build projects'}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;