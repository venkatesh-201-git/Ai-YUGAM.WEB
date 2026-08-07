export const htmlEditors = {
  id: 'editors',
  title: 'HTML Editors & IDEs',
  content: `
    <p class="text-sm sm:text-base text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
      Before writing HTML, you need a program where you can write and save your code.
    </p>

    <div class="mt-8 space-y-8">
      <!-- What is an Editor -->
      <div class="p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
          <span>📝</span> What is an Editor?
        </h3>
        <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0">
          <strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> An Editor is a simple program used to write code.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <strong class="block mb-1 text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Features:</strong>
            <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-800 dark:text-gray-200 pl-1">
              <li>Write code</li>
              <li>Save files</li>
              <li>Edit code</li>
              <li>Lightweight and fast</li>
            </ul>
          </div>
          <div>
            <strong class="block mb-1 text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Examples:</strong>
            <div class="flex flex-wrap gap-1.5 pt-0.5">
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Notepad</span>
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Notepad++</span>
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Sublime Text</span>
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">EditPlus</span>
            </div>
          </div>
        </div>

        <div class="pt-2 border-t border-gray-100 dark:border-gray-800">
          <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-2">Simple Diagram:</span>
          <div class="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
            <span class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-500/20">Open Editor</span>
            <span>➔</span>
            <span class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-500/20">Write HTML Code</span>
            <span>➔</span>
            <span class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-500/20">Save File</span>
            <span>➔</span>
            <span class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-500/20">Open in Browser</span>
          </div>
        </div>

        <!-- Writing & Saving HTML in Notepad Guide -->
        <div class="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white m-0">
            How to Write and Save HTML in Notepad
          </h4>

          <!-- Step 1 & 2: Write Code in Notepad -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs rounded border border-emerald-500/20">Step 1 & 2</span>
              <strong class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Open Notepad & Write HTML Code</strong>
            </div>
            <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0 leading-relaxed">
              Open Notepad on your computer (PC) and write or copy your HTML code inside the text editor:
            </p>
            <div class="my-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md bg-gray-900 max-w-xl mx-auto">
              <img src="/notepadcode.png" alt="Writing HTML Code in Notepad Editor" class="w-full max-h-[300px] sm:max-h-[380px] object-contain block mx-auto py-2 px-2" />
            </div>
          </div>

          <!-- Step 3: Save the HTML Page -->
          <div class="space-y-2 pt-2">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs rounded border border-emerald-500/20">Step 3</span>
              <strong class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Save the HTML Page</strong>
            </div>
            <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0 leading-relaxed">
              Save the file on your computer. Select <strong>File ➔ Save as</strong> in the Notepad menu.
            </p>
            <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-800 dark:text-gray-200 pl-1">
              <li>Name the file <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">"index.htm"</code> (or <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">"index.html"</code>).</li>
              <li>Set <strong>Save as type</strong> to <strong>All Files (*.*)</strong>.</li>
              <li>Set the <strong>encoding</strong> to <strong>UTF-8</strong> (which is the preferred encoding for HTML files).</li>
            </ul>

            <div class="my-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md bg-gray-900 max-w-xl mx-auto">
              <img src="/notepadsave.png" alt="Saving HTML File in Notepad as index.htm with UTF-8 Encoding" class="w-full max-h-[260px] sm:max-h-[320px] object-contain block mx-auto py-2 px-2" />
            </div>
          </div>

          <!-- Step 4: View HTML Page in Browser -->
          <div class="space-y-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs rounded border border-emerald-500/20">Step 4</span>
              <strong class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">View HTML Page in Your Web Browser</strong>
            </div>
            <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0 leading-relaxed">
              Open your saved HTML file in your favorite web browser (Google Chrome, Microsoft Edge, Firefox, or Safari):
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
                <strong class="block text-gray-900 dark:text-white font-bold">Option A: Double-Click File</strong>
                <p class="text-gray-800 dark:text-gray-200 m-0">Go to your folder and double-click <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">index.htm</code> to open it directly in your default browser.</p>
              </div>

              <div class="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
                <strong class="block text-gray-900 dark:text-white font-bold">Option B: Right-Click ➔ Open With</strong>
                <p class="text-gray-800 dark:text-gray-200 m-0">Right-click <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">index.htm</code> ➔ select <strong>Open with</strong> ➔ choose <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong>.</p>
              </div>
            </div>

            <!-- Realistic Browser Preview Window -->
            <div class="my-3 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900 max-w-xl mx-auto">
              <!-- Browser Header Address Bar -->
              <div class="bg-gray-100 dark:bg-gray-800 px-3 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <div class="flex items-center gap-1.5 shrink-0">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
                </div>
                <div class="flex-1 bg-white dark:bg-gray-900 rounded-lg px-2.5 py-1 text-[11px] font-mono text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 truncate flex items-center gap-1.5">
                  <span class="text-emerald-500">🔒</span>
                  <span>file:///C:/Users/Desktop/index.htm</span>
                </div>
              </div>
              
              <!-- Browser Content Body Output -->
              <div class="p-4 sm:p-6 space-y-3 bg-white dark:bg-gray-950 text-left">
                <h1 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white m-0">My First Heading</h1>
                <p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200 m-0">My first paragraph.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- What is an IDE -->
      <div class="p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
          <span>⚡</span> What is an IDE?
        </h3>
        <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0 leading-relaxed">
          <strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> IDE stands for <strong>Integrated Development Environment</strong>. It is software that helps you write, edit, run, and manage code easily.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <strong class="block mb-1 text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Features:</strong>
            <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-800 dark:text-gray-200 pl-1">
              <li>Code suggestions</li>
              <li>Auto complete</li>
              <li>Error highlighting</li>
              <li>Extensions & File explorer</li>
              <li>Built-in terminal & Debugging</li>
            </ul>
          </div>
          <div>
            <strong class="block mb-1 text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Examples:</strong>
            <div class="flex flex-wrap gap-1.5 pt-0.5">
              <span class="px-2.5 py-1 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-lg text-xs font-semibold border border-sky-500/20">Visual Studio Code (VS Code)</span>
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">WebStorm</span>
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Dreamweaver</span>
              <span class="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">Visual Studio</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Editor vs IDE Comparison -->
      <div class="space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight m-0">
          Editor vs IDE
        </h3>

        <div class="p-3.5 sm:p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-xl text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-semibold">
          💡 <strong>Important Point:</strong> Both editors and IDEs are used to write application code.
        </div>

        <!-- Mobile Stacked Cards View for Jio Phone 2 & Mobile -->
        <div class="block sm:hidden space-y-2.5 my-3">
          <div class="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1.5">
            <div class="flex items-center justify-between text-xs font-bold border-b border-gray-100 dark:border-gray-800 pb-1">
              <span class="text-gray-700 dark:text-gray-300">Editor: Simple</span>
              <span class="text-secondary dark:text-emerald-400">IDE: Advanced</span>
            </div>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0"><strong>Examples:</strong> Notepad, Notepad++, Sublime Text, EditPlus... vs VS Code (VSC), Dreamweaver, WebStorm...</p>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0"><strong>Size:</strong> Small size (Editor) vs Bigger size (IDE)</p>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0"><strong>Scope:</strong> Write code only vs Write + Debug + Manage</p>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0"><strong>Features:</strong> Few features vs Many features</p>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0"><strong>Best For:</strong> Beginners vs Big projects</p>
          </div>
        </div>

        <!-- Desktop & Tablet Table View -->
        <div class="hidden sm:block my-4 w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
          <table class="w-full text-left text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-collapse min-w-[400px]">
            <thead class="bg-gray-100/80 dark:bg-gray-800/80 uppercase tracking-wider text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th scope="col" class="py-3 px-3 sm:px-4 w-1/2">Editor</th>
                <th scope="col" class="py-3 px-3 sm:px-4 w-1/2">IDE (Integrated Development Environment)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800/60 text-xs">
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-2.5 px-3 sm:px-4 font-semibold text-gray-900 dark:text-gray-100">Simple</td>
                <td class="py-2.5 px-3 sm:px-4 font-semibold text-secondary dark:text-emerald-400">Advanced</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100"><strong class="font-bold">Examples:</strong> Notepad, Notepad++, Sublime Text, EditPlus... etc.</td>
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100"><strong class="font-bold">Examples:</strong> Visual Studio Code (VSC), Dreamweaver, WebStorm... etc.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Small size</td>
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Bigger size</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Write code only</td>
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Write + Debug + Manage</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Few features</td>
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Many features</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Good for beginners</td>
                <td class="py-2.5 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Good for big projects</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Note Card -->
        <div class="p-3.5 sm:p-4 bg-sky-500/10 border-l-4 border-sky-500 rounded-xl text-xs sm:text-sm text-sky-900 dark:text-sky-200 space-y-1">
          <strong class="font-bold block text-sky-950 dark:text-sky-100">📌 Note:</strong>
          <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1 m-0">
            <li>In an <strong>Editor</strong>, you have to write all the code manually.</li>
            <li>In an <strong>IDE</strong>, you get features like code suggestions, auto-completion, and code generation.</li>
          </ul>
        </div>
      </div>

      <!-- Which One Should Beginners Use -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border-l-4 border-secondary rounded-2xl shadow-sm dark:bg-emerald-950/20 space-y-2">
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white m-0">
          Which One Should Beginners Use?
        </h3>
        <p class="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 m-0 flex items-center gap-1.5">
          <span>✅ Best Choice</span> ➔ Visual Studio Code (VS Code)
        </p>
        <div class="pt-1">
          <strong class="block text-xs font-bold text-gray-900 dark:text-white mb-1">Why?</strong>
          <div class="flex flex-wrap gap-1.5 text-xs font-medium">
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-500/20">Free</span>
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-500/20">Easy</span>
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-500/20">Fast</span>
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-500/20">Most popular</span>
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-500/20">Auto suggestions</span>
            <span class="px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-500/20">Extensions</span>
          </div>
        </div>
      </div>

      <!-- Install VS Code Steps -->
      <div class="p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
          <span>📥</span> Install VS Code
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-secondary block">Step 1</span>
            <p class="m-0 font-medium">Open 👉 <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" class="text-secondary dark:text-emerald-400 font-bold underline">code.visualstudio.com</a></p>
          </div>

          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-secondary block">Step 2</span>
            <p class="m-0 font-medium">Click <strong class="text-emerald-600 dark:text-emerald-400">Download</strong></p>
          </div>

          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-secondary block">Step 3</span>
            <p class="m-0 font-medium">Open downloaded installer file</p>
          </div>

          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <span class="text-[10px] font-bold uppercase tracking-wider text-secondary block">Step 4</span>
            <p class="m-0 font-medium leading-snug">Click Next ➔ I Accept ➔ Next ➔ Install ➔ Finish 🎉</p>
          </div>
        </div>

        <div class="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
          <span>Open VS Code: Double Click "Visual Studio Code" icon on Desktop</span>
          <span class="text-base">✨</span>
        </div>
      </div>

      <!-- VS Code Screen Layout Diagram -->
      <div class="p-4 sm:p-5 bg-gray-900 rounded-2xl border border-gray-800 shadow-md text-white space-y-4">
        <h4 class="text-sm sm:text-base font-bold text-emerald-400 m-0">🖥️ VS Code Screen Layout</h4>
        <div class="font-mono text-xs text-gray-300 space-y-1 bg-black/50 p-3 sm:p-4 rounded-xl border border-white/5 overflow-x-auto">
          <div class="border border-gray-700 p-2 text-center bg-gray-800/80 font-bold text-emerald-400 mb-2">Menu Bar (File, Edit, Selection, View, Go, Run...)</div>
          <div class="grid grid-cols-3 gap-2">
            <div class="border border-gray-700 p-3 bg-gray-800/40 text-center flex flex-col justify-center">
              <span class="font-bold text-emerald-400">Explorer</span>
              <span class="text-[10px] text-gray-400 mt-1">Files & Folders</span>
            </div>
            <div class="col-span-2 border border-gray-700 p-4 bg-gray-800/60 text-center flex flex-col justify-center min-h-[90px]">
              <span class="font-bold text-white">Code Area</span>
              <span class="text-[10px] text-gray-400 mt-1">Write your HTML code here</span>
            </div>
          </div>
          <div class="border border-gray-700 p-2 text-center bg-gray-800/80 text-[11px] text-gray-400 mt-2">Status Bar</div>
        </div>

        <!-- Large Clear VS Code Image -->
        <div class="pt-2">
          <span class="text-[10px] font-semibold text-gray-400 block mb-2">Visual Interface Overview:</span>
          <div class="rounded-2xl overflow-hidden border border-gray-700 shadow-xl bg-black max-w-3xl mx-auto">
            <img src="/vscodeimage.png" alt="VS Code Screen Layout and Visual Interface" class="w-full max-h-[500px] sm:max-h-[600px] object-contain block mx-auto py-2 px-2" />
          </div>
        </div>
      </div>

      <!-- Steps 1 to 5 Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3.5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
          <span class="text-[10px] font-bold uppercase text-secondary">1. Create Folder</span>
          <p class="text-xs text-gray-900 dark:text-gray-100 m-0 font-medium">Desktop ➔ Right Click ➔ New Folder ➔ Name <strong class="text-emerald-600 dark:text-emerald-400">MyWebsite</strong></p>
        </div>

        <div class="p-3.5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
          <span class="text-[10px] font-bold uppercase text-secondary">2. Open Folder</span>
          <p class="text-xs text-gray-900 dark:text-gray-100 m-0 font-medium">In VS Code: Click File ➔ Open Folder ➔ Select <strong class="text-emerald-600 dark:text-emerald-400">MyWebsite</strong> ➔ Select Folder</p>
        </div>

        <div class="p-3.5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
          <span class="text-[10px] font-bold uppercase text-secondary">3. Create HTML File</span>
          <p class="text-xs text-gray-900 dark:text-gray-100 m-0 font-medium">Click New File icon ➔ Name <strong class="text-emerald-600 dark:text-emerald-400">index.html</strong> ➔ Press Enter</p>
        </div>
      </div>

      <!-- Write Code & Save -->
      <div class="p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
        <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white m-0">4. Write HTML Code in index.html</h4>
        <pre class="bg-gray-900 text-emerald-400 font-mono p-3.5 rounded-xl text-xs overflow-x-auto m-0"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;

&lt;h1&gt;Hello World&lt;/h1&gt;

&lt;p&gt;Welcome to HTML.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <strong class="block text-xs font-bold text-gray-900 dark:text-white">Save File:</strong>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Click File ➔ Save <strong class="text-secondary dark:text-emerald-400 font-mono font-bold">OR</strong> Press <kbd class="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded font-mono text-[11px]">Ctrl + S</kbd></p>
          </div>

          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <strong class="block text-xs font-bold text-gray-900 dark:text-white">HTML Extension:</strong>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">
              Correct: <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">index.html</code> | Recommended: <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">index.html</code>
            </p>
          </div>
        </div>
      </div>

      <!-- Run HTML & Output -->
      <div class="p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
        <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white m-0">5. Run HTML in Browser</h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <strong class="block text-xs font-bold text-gray-900 dark:text-white">Method 1:</strong>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Open Folder ➔ Double Click <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">index.html</code></p>
          </div>
          <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <strong class="block text-xs font-bold text-gray-900 dark:text-white">Method 2:</strong>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Right Click ➔ Open With ➔ Choose Chrome / Edge / Firefox</p>
          </div>
        </div>

        <div class="pt-2">
          <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Browser Output Preview:</span>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 space-y-1">
            <h1 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white m-0">Hello World</h1>
            <p class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 m-0">Welcome to HTML.</p>
          </div>
        </div>
      </div>

      <!-- Make Changes & Check Errors -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white m-0">🔄 Make Changes & Refresh</h4>
          <p class="text-xs text-gray-900 dark:text-gray-100 m-0 leading-relaxed">
            Change <code>Hello World</code> to <code>Learning HTML</code> ➔ Save (<kbd class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px]">Ctrl+S</kbd>) ➔ Go Browser ➔ Press <kbd class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px]">F5</kbd> or Refresh.
          </p>
        </div>

        <div class="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white m-0">✔️ Check Errors</h4>
          <ul class="space-y-1 text-xs text-gray-900 dark:text-gray-100 list-none p-0 m-0">
            <li>✔ Saved file?</li>
            <li>✔ Extension is <code>.html</code>?</li>
            <li>✔ Tags closed? (Correct: <code>&lt;p&gt;Hello&lt;/p&gt;</code>)</li>
          </ul>
        </div>
      </div>

      <!-- Inspect Page & Live Server -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white m-0">🔍 Inspect Page</h4>
          <p class="text-xs text-gray-900 dark:text-gray-100 m-0">
            Right Click webpage ➔ <strong class="text-secondary dark:text-emerald-400">Inspect</strong> (Shortcut: <kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px]">F12</kbd> or <kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px]">Ctrl+Shift+I</kbd>)
          </p>
          <p class="text-[11px] text-gray-600 dark:text-gray-400 m-0">Helps you View HTML, View CSS, Find errors, and Test changes live.</p>
        </div>

        <div class="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white m-0">🚀 Live Server (Recommended)</h4>
          <p class="text-xs text-gray-900 dark:text-gray-100 m-0">
            Install <strong>Live Server</strong> Extension in VS Code ➔ Right Click <code class="text-emerald-600 dark:text-emerald-400 font-mono font-bold">index.html</code> ➔ <strong>Open with Live Server</strong>.
          </p>
          <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium m-0">Whenever you save (<kbd class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px]">Ctrl+S</kbd>), the browser refreshes automatically!</p>
        </div>
      </div>

      <!-- Keyboard Shortcuts -->
      <div>
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight mb-3">
          ⌨️ Keyboard Shortcuts
        </h3>

        <!-- Mobile View for Jio Phone 2 & Mobile -->
        <div class="block sm:hidden grid grid-cols-2 gap-2 my-3">
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + S</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Save</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + C</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Copy</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + V</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Paste</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + X</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Cut</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + Z</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Undo</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + Y</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Redo</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + A</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Select All</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + F</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Find</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl + H</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Replace</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">F5</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Refresh</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">F12</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Inspect</span></div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between"><kbd class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Ctrl+Shift+I</kbd><span class="text-[11px] font-medium text-gray-900 dark:text-gray-100">Inspect</span></div>
        </div>

        <!-- Desktop Table View -->
        <div class="hidden sm:block my-4 w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
          <table class="w-full text-left text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-collapse min-w-[400px]">
            <thead class="bg-gray-100/80 dark:bg-gray-800/80 uppercase tracking-wider text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th scope="col" class="py-3 px-3 sm:px-4 w-1/2">Shortcut</th>
                <th scope="col" class="py-3 px-3 sm:px-4 w-1/2">Work</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800/60 text-xs">
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + S</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Save</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + C</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Copy</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + V</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Paste</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + X</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Cut</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + Z</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Undo</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + Y</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Redo</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + A</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Select All</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + F</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Find</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + H</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Replace</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">F5</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Refresh Browser</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">F12</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Inspect</td></tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"><td class="py-2 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">Ctrl + Shift + I</td><td class="py-2 px-4 text-gray-900 dark:text-gray-100">Open Inspect</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Complete Flow Diagram -->
      <div class="p-4 sm:p-5 bg-gray-900 rounded-2xl border border-gray-800 shadow-md text-white space-y-3">
        <h3 class="text-base sm:text-lg font-bold text-emerald-400 m-0">🔄 Complete Workflow Diagram</h3>
        <div class="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-200 p-3 bg-black/50 rounded-xl border border-white/5 leading-relaxed">
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Install VS Code</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Open VS Code</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Create Folder</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Create index.html</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Write HTML</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Save (Ctrl+S)</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Open in Browser</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Check Output</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Edit Code</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Save Again</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Refresh Browser (F5)</span>
          <span>➔</span>
          <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">Inspect (F12) / Fix Errors</span>
        </div>
      </div>
    </div>
  `,
  codeExample: `<!-- Use VS Code or Notepad to save this as index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Welcome to HTML.</p>
</body>
</html>`
};
