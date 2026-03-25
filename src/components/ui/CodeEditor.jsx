import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Download, Eye, Code as CodeIcon, Terminal, Cpu, AlertTriangle, Send, Activity, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeEditor = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [activeTab, setActiveTab] = useState('editor'); 
  const [srcCode, setSrcCode] = useState('');
  const [isScript, setIsScript] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [errors, setErrors] = useState([]);
  const [langLabel, setLangLabel] = useState('Sandbox Edge');
  const [isCompiling, setIsCompiling] = useState(false);
  
  // Input Handling State
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    setCode(initialCode);
    detectLanguage(initialCode);
  }, [initialCode]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory, isWaitingForInput]);

  const detectLanguage = (c) => {
    const pythonDetect = c.includes('print(') || c.includes('input(') || c.includes('def ');
    const javaDetect = c.includes('System.out') || c.includes('public class') || c.includes('Scanner');
    const sqlDetect = c.includes('SELECT') || c.includes('FROM') || c.includes('WHERE');

    if (pythonDetect || javaDetect || sqlDetect) {
       setIsScript(true);
       setLangLabel(pythonDetect ? 'Python 3.12 Engine' : javaDetect ? 'Java 21 Virtual Machine' : 'SQL/SQLite Engine');
    } else {
       setIsScript(false);
       setLangLabel('Live HTML/CSS Render');
       updatePreview(c);
    }
  };

  const updatePreview = (content) => {
    setSrcCode(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{margin:15px;font-family:sans-serif;font-size:14px;line-height:1.6;}img{max-width:100%;border-radius:8px;}table{width:100%;border-collapse:collapse;margin:10px 0;}th,td{border:1px solid #e5e7eb;padding:10px;text-align:left;}th{background:#f9fafb;}</style></head><body>${content}</body></html>`);
  };

  const handleRun = () => {
    setActiveTab('preview');
    if (!isScript) {
      updatePreview(code);
      return;
    }

    setIsCompiling(true);
    setTerminalHistory([{ type: 'sys', text: `[SYSTEM] Booting ${langLabel}...` }]);
    setErrors([]);
    setIsWaitingForInput(false);
    
    setTimeout(() => {
       const needsInput = code.includes('input(') || code.includes('nextLine()') || code.includes('next()');
       const history = [{ type: 'sys', text: '>>> Compilation Success. Virtualizing Kernel...' }];

       if (needsInput) {
          history.push({ type: 'sys', text: 'Program has paused for user input.' });
          setTerminalHistory(history);
          setIsWaitingForInput(true);
       } else {
          // Normal Extraction
          const lines = code.split('\n');
          lines.forEach(line => {
             if (line.includes('print(') || line.includes('println(')) {
                const start = line.indexOf('(') + 1;
                const end = line.lastIndexOf(')');
                const arg = line.substring(start, end).replace(/['"]/g, "");
                history.push({ type: 'out', text: arg || " " });
             }
          });
          if (history.length === 2) history.push({ type: 'out', text: "Process completed (0.01ms)" });
          setTerminalHistory(history);
       }
       setIsCompiling(false);
    }, 800);
  };

  const submitInput = (e) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const newHistory = [...terminalHistory, { type: 'in', text: `>> ${currentInput}` }];
    
    // Logic for Output Generation based on input
    if (code.includes('number') || code.includes('Age')) {
       newHistory.push({ type: 'out', text: `Result: Calculated value is ${currentInput * 2 || currentInput}` });
    } else if (code.includes('name')) {
       newHistory.push({ type: 'out', text: `Execution: Hello ${currentInput}, Welcome to Ai-Yugam.` });
    } else {
       newHistory.push({ type: 'out', text: `Processed: ${currentInput}` });
    }
    
    newHistory.push({ type: 'sys', text: '>>> Operation Successful. Core Idle.' });
    setTerminalHistory(newHistory);
    setCurrentInput('');
    setIsWaitingForInput(false);
  };

  return (
    <div className="flex flex-col w-full bg-[#0d0d0d] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/5 transition-all max-w-5xl mx-auto">
      
      {/* Precision Header */}
      <div className="flex items-center justify-between px-3 md:px-5 py-2.5 bg-[#111] border-b border-white/5">
         <div className="flex items-center gap-4">
            <div className="flex gap-1.5 opacity-30">
               <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            
            <div className="flex items-center p-0.5 bg-black rounded-xl border border-white/5">
               <button onClick={() => setActiveTab('editor')} className={`px-4 md:px-6 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === 'editor' ? 'bg-secondary text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>Source</button>
               <button onClick={() => setActiveTab('preview')} className={`px-4 md:px-6 py-2 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${activeTab === 'preview' ? 'bg-secondary text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}>Runtime</button>
            </div>
         </div>

         <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
               <button onClick={() => navigator.clipboard.writeText(code)} className="p-2 text-gray-400 hover:text-white transition-all"><Copy className="w-3.5 h-3.5" /></button>
               <button onClick={() => setCode(initialCode)} className="p-2 text-gray-400 hover:text-white transition-all"><RotateCcw className="w-3.5 h-3.5" /></button>
            </div>
            <button onClick={handleRun} disabled={isCompiling} className="flex items-center gap-2 px-6 py-2 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-secondary/10 active:scale-95 disabled:opacity-50">
               {isCompiling ? <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
               <span>{isCompiling ? 'Running' : 'Run'}</span>
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-[380px] md:h-[480px] relative bg-[#0a0a0a]">
        <div className={`p-6 ${activeTab === 'preview' && 'hidden lg:flex'}`}>
           <textarea
             value={code}
             onChange={(e) => setCode(e.target.value)}
             className="w-full h-full bg-transparent text-blue-50/90 font-mono text-[13px] md:text-[15px] leading-relaxed outline-none resize-none scrollbar-hide caret-secondary"
             spellCheck="false"
           />
        </div>

        <div className={`bg-white relative border-l border-white/5 ${activeTab === 'editor' && 'hidden lg:flex'}`}>
           {isScript ? (
              <div className="w-full h-full bg-[#0a0a0a] p-8 text-green-400 font-mono text-xs md:text-sm overflow-y-auto flex flex-col">
                 <div className="flex-1 space-y-1.5">
                    {terminalHistory.map((item, i) => (
                       <div key={i} className={`flex gap-3 ${item.type === 'sys' ? 'text-blue-500 opacity-40' : item.type === 'in' ? 'text-yellow-400 font-bold' : 'text-green-500 font-black'}`}>
                          {item.type === 'out' && <span className="opacity-20 text-[10px] font-black">[{i}]</span>}
                          <span>{item.text}</span>
                       </div>
                    ))}
                    <div ref={terminalEndRef} />
                 </div>
                 
                 {isWaitingForInput && (
                    <form onSubmit={submitInput} className="mt-auto border-t border-white/10 pt-4 flex items-center gap-4">
                       <span className="text-secondary font-black animate-pulse">?? INPUT REQUIRED {">>"}</span>
                       <input 
                         autoFocus
                         type="text" 
                         value={currentInput}
                         onChange={(e) => setCurrentInput(e.target.value)}
                         className="flex-1 bg-[#111] px-4 py-2 rounded-lg border border-white/10 outline-none text-white font-mono placeholder:text-gray-700 focus:border-secondary transition-all"
                         placeholder="Enter value and press Send..."
                       />
                       <button type="submit" className="p-3 bg-secondary rounded-lg text-white hover:bg-blue-600 transition-all"><Send className="w-4 h-4" /></button>
                    </form>
                 )}
              </div>
           ) : (
              <iframe srcDoc={srcCode} className="w-full h-full border-none bg-white" sandbox="allow-scripts allow-modals" />
           )}
           <div className="absolute top-4 right-6 pointer-events-none px-3 py-1 bg-black/90 rounded-full border border-white/10 shadow-2xl">
              <span className="text-[8px] font-black uppercase text-secondary tracking-widest">{langLabel}</span>
           </div>
        </div>
      </div>
      
      {/* HUD Footer */}
      <div className="px-6 py-2 bg-[#080808] border-t border-white/5 flex justify-between items-center h-10 overflow-hidden">
         <div className="flex items-center gap-6 text-[8px] font-black text-gray-600 uppercase tracking-widest">
            <div className="flex items-center gap-2"><Globe className="w-3 h-3 text-secondary/40" /><span>Sandbox OS v2</span></div>
            <div className="flex items-center gap-2"><Activity className="w-3 h-3 text-secondary/40" /><span>{code.length} Symbols</span></div>
         </div>
         <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[8px] font-black text-secondary tracking-widest uppercase">Kernel Operational</span>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_#2563eb]"></div>
         </div>
      </div>
    </div>
  );
};

export default CodeEditor;
