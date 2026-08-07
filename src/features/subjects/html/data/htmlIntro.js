export const htmlIntro = {
  id: 'intro',
  title: 'HTML Introduction',
  content: `<h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">What is HTML?</h3>
    <p class="text-sm sm:text-base text-gray-900 dark:text-gray-100 leading-relaxed">HTML is the standard markup language for creating Web pages. It describes the structure of a Web page and consists of a series of elements.</p>
    <ul class="space-y-3.5 text-gray-900 dark:text-gray-100 text-sm sm:text-base font-normal my-4">
      <li class="flex items-start gap-3">
        <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
        <span><strong class="font-bold text-gray-900 dark:text-white">Hyper Text Markup Language</strong>: The primary language of the web.</span>
      </li>
      <li class="flex items-start gap-3">
        <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
        <span><strong class="font-bold text-gray-900 dark:text-white">Web Page Structure</strong>: It defines where headings, paragraphs, and images go.</span>
      </li>
      <li class="flex items-start gap-3">
        <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0"></div>
        <span><strong class="font-bold text-gray-900 dark:text-white">Browser Communication</strong>: It tells Chrome/Safari how to display content.</span>
      </li>
    </ul>
    <div class="p-5 sm:p-6 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border-l-4 border-secondary rounded-2xl my-8 shadow-sm dark:bg-emerald-950/20 space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-base">💡</span>
        <h4 class="text-xs sm:text-sm font-bold text-secondary dark:text-emerald-400 tracking-wide m-0">Editor's Tip</h4>
      </div>
      
      <p class="text-sm sm:text-base font-medium italic text-gray-900 dark:text-gray-100 m-0 leading-relaxed">
        Think of HTML as the skeleton of your webpage. Without it, there's no structure!
      </p>

      <div class="space-y-1.5 pt-2 border-t border-emerald-500/20 text-xs sm:text-sm font-mono text-gray-900 dark:text-gray-100">
        <div><strong class="text-emerald-600 dark:text-emerald-400 font-bold">HTML</strong> → Structure</div>
        <div><strong class="text-blue-600 dark:text-blue-400 font-bold">CSS</strong> → Design / Style</div>
        <div><strong class="text-amber-600 dark:text-amber-400 font-bold">JavaScript</strong> → Behavior / Functionality</div>
      </div>

      <div class="pt-2 border-t border-emerald-500/20">
        <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0">
          <strong class="text-secondary dark:text-emerald-400 font-bold tracking-wide text-xs block mb-1">Interview Answer:</strong>
          HTML is a markup language used to create and structure the content of web pages.
        </p>
      </div>
    </div>
    
    <div class="my-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md bg-white dark:bg-gray-900 p-3 sm:p-5">
      <img src="/htmlvscssvsjs.png" alt="HTML vs CSS vs JavaScript" class="w-full h-auto rounded-xl object-contain max-h-[550px] sm:max-h-[650px] mx-auto" />
    </div>

    <div class="mt-8 mb-3">
      <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight m-0">HTML is used for:</h3>
    </div>

    <!-- Mobile Stacked Card View (Jio Phone 2 & Mobile Friendly) -->
    <div class="block sm:hidden space-y-3 my-4">
      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">📝 Text</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Element</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Displays and organizes text such as headings, paragraphs, lists, etc.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;h1&gt;Hello&lt;/h1&gt;</code></div>
      </div>

      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">🖼️ Images</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Media</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Adds images to a web page.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;img src="photo.jpg"&gt;</code></div>
      </div>

      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">🔗 Links</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Navigation</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Creates clickable links to other pages, websites, files, or sections.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;a href="https://example.com"&gt;Visit&lt;/a&gt;</code></div>
      </div>

      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">🔘 Buttons</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Interactive</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Creates buttons that users can click. HTML provides the button element; JavaScript can add actions.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;button&gt;Login&lt;/button&gt;</code></div>
      </div>

      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">📋 Forms</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">User Input</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Creates forms to collect user input, such as name, email, password, etc.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;form&gt;...&lt;/form&gt;</code></div>
      </div>

      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">📑 Tables</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Data</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Displays data in rows and columns.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;table&gt;...&lt;/table&gt;</code></div>
      </div>

      <div class="p-3.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs text-gray-900 dark:text-white">📦 Page Structure</span>
          <span class="text-[9px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">Layout</span>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-300 m-0 leading-relaxed">Defines the structure and meaning of different parts of a webpage, such as header, navigation, main content, and footer.</p>
        <div class="pt-1"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-mono text-[11px] block text-center">&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</code></div>
      </div>
    </div>

    <!-- Desktop & Tablet Table View (With Horizontal Scroll Support) -->
    <div class="hidden sm:block my-6 w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
      <div class="hidden sm:flex lg:hidden items-center justify-end p-2 bg-gray-50/80 dark:bg-gray-800/40 border-b border-gray-200 dark:border-gray-800">
        <span class="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-500/20">
          <span>↔️</span> Swipe / Scroll horizontally
        </span>
      </div>
      <table class="w-full text-left text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-collapse min-w-[500px]">
        <thead class="bg-gray-100/80 dark:bg-gray-800/80 uppercase tracking-wider text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
          <tr>
            <th scope="col" class="py-3 px-3 sm:px-4 w-1/4">HTML Use</th>
            <th scope="col" class="py-3 px-3 sm:px-4 w-1/2">Short Explanation</th>
            <th scope="col" class="py-3 px-3 sm:px-4 w-1/4">Example</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800/60">
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">📝 Text</td>
            <td class="py-3 px-3 sm:px-4">Displays and organizes text such as headings, paragraphs, lists, etc.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;h1&gt;Hello&lt;/h1&gt;</code></td>
          </tr>
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">🖼️ Images</td>
            <td class="py-3 px-3 sm:px-4">Adds images to a web page.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;img src="photo.jpg"&gt;</code></td>
          </tr>
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">🔗 Links</td>
            <td class="py-3 px-3 sm:px-4">Creates clickable links to other pages, websites, files, or sections.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;a href="https://example.com"&gt;Visit&lt;/a&gt;</code></td>
          </tr>
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">🔘 Buttons</td>
            <td class="py-3 px-3 sm:px-4">Creates buttons that users can click. HTML provides the button element; JavaScript can add actions.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;button&gt;Login&lt;/button&gt;</code></td>
          </tr>
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">📋 Forms</td>
            <td class="py-3 px-3 sm:px-4">Creates forms to collect user input, such as name, email, password, etc.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;form&gt;...&lt;/form&gt;</code></td>
          </tr>
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">📑 Tables</td>
            <td class="py-3 px-3 sm:px-4">Displays data in rows and columns.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;table&gt;...&lt;/table&gt;</code></td>
          </tr>
          <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
            <td class="py-3 px-3 sm:px-4 font-semibold text-gray-900 dark:text-white whitespace-nowrap">📦 Page Structure</td>
            <td class="py-3 px-3 sm:px-4">Defines the structure and meaning of different parts of a webpage, such as header, navigation, main content, and footer.</td>
            <td class="py-3 px-3 sm:px-4"><code class="bg-gray-100 dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs">&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</code></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="my-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md bg-white dark:bg-gray-900 p-3 sm:p-5">
      <img src="/htmluse.png" alt="HTML Use Diagram" class="w-full h-auto rounded-xl object-contain max-h-[550px] sm:max-h-[650px] mx-auto" />
    </div>
  `,
  codeExample: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`,
  extraContent: `
    <div class="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 space-y-8">
      <h2 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
        HTML Document Structure (Beginner Friendly)
      </h2>

      <div class="space-y-6">
        <!-- Point 1 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">1</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;!DOCTYPE html&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> It tells the browser that this is an HTML5 document.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>It helps the browser display the web page correctly.</li>
                <li>It is always written on the first line of an HTML file.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5">
            <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
            <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;!DOCTYPE html&gt;</code></pre>
          </div>
        </div>

        <!-- Point 2 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">2</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;html&gt; ... &lt;/html&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> The <code>&lt;html&gt;</code> tag is the root (main) tag of an HTML document.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>It contains all the HTML code.</li>
                <li>Every HTML page starts with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5">
            <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
            <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;html&gt;
  ...
&lt;/html&gt;</code></pre>
          </div>
        </div>

        <!-- Point 3 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">3</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;head&gt; ... &lt;/head&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> The <code>&lt;head&gt;</code> tag contains information about the web page. This information is not shown on the page.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>To set the page title.</li>
                <li>To add CSS files.</li>
                <li>To add JavaScript files.</li>
                <li>To include other page settings.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5">
            <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
            <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;head&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;</code></pre>
          </div>
        </div>

        <!-- Point 4 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">4</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;title&gt; ... &lt;/title&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> The <code>&lt;title&gt;</code> tag sets the name of the web page.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>It appears on the browser tab.</li>
                <li>It helps users identify the page.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
              <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;title&gt;Page Title&lt;/title&gt;</code></pre>
            </div>
            <div>
              <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Output (Browser Tab):</span>
              <div class="p-2 sm:p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Page Title</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Point 5 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">5</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;body&gt; ... &lt;/body&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> The <code>&lt;body&gt;</code> tag contains everything that is visible on the web page.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>To display headings.</li>
                <li>To display paragraphs.</li>
                <li>To display images, buttons, links, tables, and more.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5">
            <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
            <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;body&gt;
  ...
&lt;/body&gt;</code></pre>
          </div>
        </div>

        <!-- Point 6 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">6</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;h1&gt; ... &lt;/h1&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> The <code>&lt;h1&gt;</code> tag creates the largest heading on the page.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>To write the main title of the page.</li>
                <li>There should usually be one main <code>&lt;h1&gt;</code> on a page.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
              <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;h1&gt;My First Heading&lt;/h1&gt;</code></pre>
            </div>
            <div>
              <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Output:</span>
              <div class="p-2 sm:p-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h1 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white m-0">My First Heading</h1>
              </div>
            </div>
          </div>
        </div>

        <!-- Point 7 -->
        <div class="p-3 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
          <div class="flex items-center gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px] flex items-center justify-center border border-emerald-500/20 shrink-0">7</span>
            <code class="text-secondary dark:text-emerald-400 font-mono font-bold text-xs sm:text-base break-words">&lt;p&gt; ... &lt;/p&gt;</code>
          </div>
          <div class="space-y-2 text-xs sm:text-sm text-gray-900 dark:text-gray-100">
            <p class="m-0"><strong class="font-bold text-gray-900 dark:text-white">Definition:</strong> The <code>&lt;p&gt;</code> tag is used to write a paragraph.</p>
            <div>
              <strong class="block mb-1 font-bold text-gray-900 dark:text-white">Why do we use it?</strong>
              <ul class="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200 pl-1">
                <li>To display normal text.</li>
                <li>To write descriptions or information.</li>
              </ul>
            </div>
          </div>
          <div class="pt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Example:</span>
              <pre class="bg-gray-900 text-emerald-400 font-mono p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-xs overflow-x-auto m-0"><code>&lt;p&gt;My first paragraph.&lt;/p&gt;</code></pre>
            </div>
            <div>
              <span class="text-[10px] font-semibold text-gray-500 dark:text-gray-400 block mb-1">Output:</span>
              <div class="p-2 sm:p-2.5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0">My first paragraph.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Complete HTML Example -->
      <div class="mt-8 p-4 sm:p-6 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg text-white space-y-3">
        <h3 class="text-base sm:text-lg font-bold text-emerald-400 tracking-tight m-0 flex items-center gap-2">
          <span>📄</span> Complete HTML Example
        </h3>
        <pre class="bg-black/60 p-3 sm:p-4 rounded-xl font-mono text-[11px] sm:text-sm text-emerald-300 overflow-x-auto border border-white/5 m-0"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;h1&gt;My First Heading&lt;/h1&gt;
    &lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <!-- What each line does Section -->
      <div class="mt-8">
        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight mb-4">What each line does</h3>
        
        <!-- Mobile Cards View for Jio Phone 2 & Mobile -->
        <div class="block sm:hidden space-y-2 my-4">
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;!DOCTYPE html&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Tells the browser this is an HTML5 document.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;html&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Starts the HTML document.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;head&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Contains page information.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;title&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Sets the page name shown in the browser tab.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;body&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Contains everything visible on the web page.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;h1&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Displays the main heading.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;p&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Displays a paragraph.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;/body&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Ends the body section.</p>
          </div>
          <div class="p-2.5 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <code class="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold break-all">&lt;/html&gt;</code>
            <p class="text-xs text-gray-900 dark:text-gray-100 m-0">Ends the HTML document.</p>
          </div>
        </div>

        <!-- Desktop & Tablet Table View -->
        <div class="hidden sm:block my-6 w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
          <table class="w-full text-left text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-collapse min-w-[400px]">
            <thead class="bg-gray-100/80 dark:bg-gray-800/80 uppercase tracking-wider text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th scope="col" class="py-3 px-3 sm:px-4 w-1/3">HTML Code</th>
                <th scope="col" class="py-3 px-3 sm:px-4 w-2/3">Purpose</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-800/60 font-mono text-xs">
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;!DOCTYPE html&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Tells the browser this is an HTML5 document.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;html&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Starts the HTML document.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;head&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Contains page information.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;title&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Sets the page name shown in the browser tab.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;body&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Contains everything visible on the web page.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;h1&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Displays the main heading.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;p&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Displays a paragraph.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;/body&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Ends the body section.</td>
              </tr>
              <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                <td class="py-3 px-3 sm:px-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">&lt;/html&gt;</td>
                <td class="py-3 px-3 sm:px-4 font-sans text-gray-700 dark:text-gray-300">Ends the HTML document.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- HTML History Section -->
      <div class="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 space-y-6">
        <!-- Friendly Note Banner -->
        <div class="p-3.5 sm:p-4 bg-sky-500/10 border-l-4 border-sky-500 rounded-xl text-xs sm:text-sm text-sky-900 dark:text-sky-200 font-medium flex items-start gap-2.5">
          <span class="text-base shrink-0">ℹ️</span>
          <div>
            <strong class="font-bold block mb-0.5">Quick Note:</strong>
            Not important to memorize! Just good to know for general knowledge.
          </div>
        </div>

        <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight m-0">
          HTML History (Beginner Friendly)
        </h3>

        <!-- Who Invented HTML Card -->
        <div class="p-3.5 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
          <h4 class="text-sm sm:text-base font-bold text-gray-900 dark:text-white m-0 flex items-center gap-2">
            <span>👤</span> Who Invented HTML?
          </h4>
          <ul class="space-y-1.5 text-xs sm:text-sm text-gray-900 dark:text-gray-100 list-none p-0 m-0">
            <li><strong class="text-gray-900 dark:text-white font-bold">Inventor:</strong> Tim Berners-Lee</li>
            <li><strong class="text-gray-900 dark:text-white font-bold">Year:</strong> 1991</li>
            <li><strong class="text-gray-900 dark:text-white font-bold">Country:</strong> England (United Kingdom)</li>
            <li class="pt-1"><strong class="text-gray-900 dark:text-white font-bold">Why?</strong> He created HTML to help people share and read documents on the World Wide Web (WWW).</li>
          </ul>
        </div>

        <!-- Full Form & Definition Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-3.5 sm:p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1.5">
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white m-0">What is the Full Form of HTML?</h4>
            <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0">
              HTML stands for <strong class="text-secondary dark:text-emerald-400 font-bold">HyperText Markup Language</strong>.
            </p>
          </div>

          <div class="p-3.5 sm:p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1.5">
            <h4 class="text-xs sm:text-sm font-bold text-gray-900 dark:text-white m-0">What is HTML?</h4>
            <p class="text-xs sm:text-sm text-gray-900 dark:text-gray-100 m-0">
              HTML is the standard markup language used to create web pages.
            </p>
          </div>
        </div>

        <!-- HTML Evolution (History) -->
        <div class="space-y-3 pt-2">
          <h4 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight m-0">
            HTML Evolution (History)
          </h4>

          <!-- Mobile Cards View for Jio Phone 2 & Mobile -->
          <div class="block sm:hidden space-y-2.5 my-3">
            <div class="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">HTML 1.0</span>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400">1991</span>
              </div>
              <p class="text-xs text-gray-900 dark:text-gray-100 m-0 leading-relaxed">The first version created by Tim Berners-Lee.</p>
            </div>

            <div class="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">HTML 2.0</span>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400">1995</span>
              </div>
              <p class="text-xs text-gray-900 dark:text-gray-100 m-0 leading-relaxed">The first official HTML standard.</p>
            </div>

            <div class="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">HTML 3.2</span>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400">1997</span>
              </div>
              <p class="text-xs text-gray-900 dark:text-gray-100 m-0 leading-relaxed">Added support for tables, applets, and more features.</p>
            </div>

            <div class="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">HTML 4.01</span>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400">1999</span>
              </div>
              <p class="text-xs text-gray-900 dark:text-gray-100 m-0 leading-relaxed">Improved forms, styles, and scripting support.</p>
            </div>

            <div class="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">HTML5</span>
                <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400">2014</span>
              </div>
              <p class="text-xs text-gray-900 dark:text-gray-100 m-0 leading-relaxed">Added audio, video, canvas, semantic tags, and modern web features. It is the current standard.</p>
            </div>
          </div>

          <!-- Desktop & Tablet Table View -->
          <div class="hidden sm:block my-4 w-full overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900">
            <table class="w-full text-left text-xs sm:text-sm text-gray-700 dark:text-gray-300 border-collapse min-w-[450px]">
              <thead class="bg-gray-100/80 dark:bg-gray-800/80 uppercase tracking-wider text-[10px] sm:text-xs font-bold text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th scope="col" class="py-3 px-3 sm:px-4 w-1/4">Version</th>
                  <th scope="col" class="py-3 px-3 sm:px-4 w-1/6">Year</th>
                  <th scope="col" class="py-3 px-3 sm:px-4 w-7/12">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100 dark:divide-gray-800/60 text-xs">
                <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                  <td class="py-3 px-3 sm:px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">HTML 1.0</td>
                  <td class="py-3 px-3 sm:px-4 font-mono text-gray-900 dark:text-gray-100">1991</td>
                  <td class="py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100">The first version created by Tim Berners-Lee.</td>
                </tr>
                <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                  <td class="py-3 px-3 sm:px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">HTML 2.0</td>
                  <td class="py-3 px-3 sm:px-4 font-mono text-gray-900 dark:text-gray-100">1995</td>
                  <td class="py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100">The first official HTML standard.</td>
                </tr>
                <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                  <td class="py-3 px-3 sm:px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">HTML 3.2</td>
                  <td class="py-3 px-3 sm:px-4 font-mono text-gray-900 dark:text-gray-100">1997</td>
                  <td class="py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Added support for tables, applets, and more features.</td>
                </tr>
                <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                  <td class="py-3 px-3 sm:px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">HTML 4.01</td>
                  <td class="py-3 px-3 sm:px-4 font-mono text-gray-900 dark:text-gray-100">1999</td>
                  <td class="py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Improved forms, styles, and scripting support.</td>
                </tr>
                <tr class="hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors">
                  <td class="py-3 px-3 sm:px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">HTML5</td>
                  <td class="py-3 px-3 sm:px-4 font-mono text-gray-900 dark:text-gray-100">2014</td>
                  <td class="py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100">Added audio, video, canvas, semantic tags, and modern web features. It is the current standard.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `
};
