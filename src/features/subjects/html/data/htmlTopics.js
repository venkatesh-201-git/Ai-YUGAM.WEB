export const htmlTopics = [
  {
    id: 'intro',
    title: 'HTML Introduction',
    content: `
      <p>HTML is the standard markup language for creating Web pages. It describes the structure of a Web page and consists of a series of elements.</p>
      <div class="p-6 bg-secondary/5 border-l-4 border-secondary rounded-xl my-8">
        <h4 class="text-sm font-black text-secondary tracking-widest uppercase mb-2">Editor's Tip</h4>
        <p class="text-sm italic text-gray-600 dark:text-gray-400">Think of HTML as the skeleton of your webpage. Without it, there's no structure!</p>
      </div>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-4">What is HTML?</h3>
      <ul class="space-y-4 text-gray-600 dark:text-gray-300">
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Hyper Text Markup Language</strong>: The primary language of the web.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Web Page Structure</strong>: It defines where headings, paragraphs, and images go.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Browser Communication</strong>: It tells Chrome/Safari how to display content.</span>
        </li>
      </ul>
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
  },
  {
    id: 'editors',
    title: 'HTML Editors',
    content: `
      <p>Web pages can be created and modified by using professional HTML editors. However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
      <p class="mt-6">Using a simple text editor is a good way to learn HTML step by step.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
         <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800">
            <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Recommended</span>
            <h4 class="text-lg font-bold mt-2">VS Code</h4>
            <p class="text-sm text-gray-500 mt-2">The most popular editor for modern web development.</p>
         </div>
         <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800">
            <span class="text-[10px] font-black uppercase text-gray-400 tracking-widest">Standard</span>
            <h4 class="text-lg font-bold mt-2">Notepad++</h4>
            <p class="text-sm text-gray-500 mt-2">Lightweight and very powerful for beginners.</p>
         </div>
      </div>
    `,
    codeExample: `<!-- Use Notepad to save this as index.html -->
<h1>Learning is fun!</h1>
<p>I am coding in Ai-Yugam.</p>`,
  },
  {
    id: 'basic',
    title: 'HTML Basic',
    content: `
      <p>Every HTML document must start with <code>&lt;!DOCTYPE html&gt;</code>. This declares the document type is HTML5.</p>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">Essential Tags</h3>
      <div class="space-y-6">
         <div class="flex gap-6">
            <div class="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
               <span class="text-sm font-black text-secondary">H1</span>
            </div>
            <div>
               <h4 class="font-bold">Headings</h4>
               <p class="text-sm text-gray-500 mt-1">Defines titles or importance levels from h1 to h6.</p>
            </div>
         </div>
         <div class="flex gap-6">
            <div class="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
               <span class="text-sm font-black text-secondary">P</span>
            </div>
            <div>
               <h4 class="font-bold">Paragraphs</h4>
               <p class="text-sm text-gray-500 mt-1">Used for blocks of text and body content.</p>
            </div>
         </div>
      </div>
    `,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
  },
  {
    id: 'elements',
    title: 'HTML Elements',
    content: `
      <p>An HTML element is defined by a start tag, some content, and an end tag. Elements can also be nested, meaning they can contain other elements.</p>
      <div class="p-8 bg-gray-900 text-white rounded-3xl my-10 font-mono text-xs overflow-x-auto shadow-2xl">
         <span class="text-secondary tracking-widest uppercase text-[10px] block mb-4">Structure Diagram</span>
         <div class="flex items-center gap-4">
            <span class="p-2 bg-gray-800 rounded border border-gray-700">&lt;tagname&gt;</span>
            <span class="text-gray-500">→</span>
            <span class="p-2 bg-[#252525] italic opacity-50">Content goes here</span>
            <span class="text-gray-500">→</span>
            <span class="p-2 bg-gray-800 rounded border border-gray-700">&lt;/tagname&gt;</span>
         </div>
      </div>
    `,
    codeExample: `<p>This is a <strong>nested</strong> element.</p>`,
  },
  {
    id: 'attributes',
    title: 'HTML Attributes',
    content: `
      <p>Attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like: <code>name="value"</code>.</p>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-6 tracking-tight">Common Attributes</h3>
      <table class="w-full text-left border-collapse rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900">
         <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
               <th class="p-4 text-[10px] font-black tracking-widest uppercase opacity-40">Attribute</th>
               <th class="p-4 text-[10px] font-black tracking-widest uppercase opacity-40">Description</th>
            </tr>
         </thead>
         <tbody class="text-sm">
            <tr class="border-t dark:border-gray-800">
               <td class="p-4 font-mono text-secondary">href</td>
               <td class="p-4 text-gray-600 dark:text-gray-400">Specifies the URL for a link</td>
            </tr>
            <tr class="border-t dark:border-gray-800">
               <td class="p-4 font-mono text-secondary">src</td>
               <td class="p-4 text-gray-600 dark:text-gray-400">Specifies the path to an image</td>
            </tr>
            <tr class="border-t dark:border-gray-800">
               <td class="p-4 font-mono text-secondary">alt</td>
               <td class="p-4 text-gray-600 dark:text-gray-400">Specifies alternate text for an image</td>
            </tr>
         </tbody>
      </table>
    `,
    codeExample: `<a href="https://aiyugam.com">Visit Ai-Yugam</a>`,
  },
  {
    id: 'headings',
    title: 'HTML Headings',
    content: `
      <p>HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. <code>&lt;h1&gt;</code> defines the most important heading, while <code>&lt;h6&gt;</code> defines the least important.</p>
      <div class="space-y-4 py-10">
         <h1 class="text-4xl font-black">Heading Level 1</h1>
         <h2 class="text-3xl font-black">Heading Level 2</h2>
         <h3 class="text-2xl font-black text-gray-700">Heading Level 3</h3>
         <h4 class="text-xl font-bold text-gray-500 italic">Heading Level 4</h4>
      </div>
    `,
    codeExample: `<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>`,
  },
  {
    id: 'paragraphs',
    title: 'HTML Paragraphs',
    content: `
      <p>The HTML <code>&lt;p&gt;</code> element defines a paragraph. Browsers automatically add some white space (a margin) before and after a paragraph.</p>
      <p class="mt-6">You can use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph.</p>
    `,
    codeExample: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>With a <br> line break.</p>`,
  },
  {
    id: 'styles',
    title: 'HTML Styles',
    content: `
      <p>The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
      <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800 italic text-gray-400 font-mono text-xs">
         &lt;tagname style="property:value;"&gt;
      </div>
    `,
    codeExample: `<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red; font-family:verdana;">A red paragraph.</p>`,
  },
  {
    id: 'colors',
    title: 'HTML Colors',
    content: `
      <p>HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
         <div class="h-20 bg-tomato rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-500/20" style="background-color: Tomato;">Tomato</div>
         <div class="h-20 bg-orange rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20" style="background-color: Orange;">Orange</div>
         <div class="h-20 bg-dodgerblue rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20" style="background-color: DodgerBlue;">Blue</div>
         <div class="h-20 bg-mediumseagreen rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20" style="background-color: MediumSeaGreen;">Green</div>
      </div>
    `,
    codeExample: `<h2 style="background-color:Tomato; color:white;">Tomato Color</h2>
<h2 style="background-color:DodgerBlue; color:white;">DodgerBlue Color</h2>`,
  },
  {
    id: 'links',
    title: 'HTML Links',
    content: `
      <p>HTML links are hyperlinks. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.</p>
      <div class="p-6 bg-secondary/5 border-l-4 border-secondary rounded-xl my-8">
        <p class="text-sm italic text-gray-600">The most important attribute of the &lt;a&gt; element is the <strong>href</strong> attribute, which indicates the link's destination.</p>
      </div>
    `,
    codeExample: `<a href="https://www.google.com" target="_blank">Search on Google</a>`,
  },
  {
    id: 'images',
    title: 'HTML Images',
    content: `
      <p>Images can improve the design and the appearance of a web page. HTML images are defined with the <code>&lt;img&gt;</code> tag.</p>
      <p class="mt-4">The <code>&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
    `,
    codeExample: `<img src="https://picsum.photos/400/200" alt="Random Image" width="400" height="200">`,
  },
  {
    id: 'tables',
    title: 'HTML Tables',
    content: `
      <p>HTML tables allow web developers to arrange data into rows and columns.</p>
      <ul class="space-y-3 mt-6 text-sm text-gray-600 dark:text-gray-400">
         <li><code>&lt;table&gt;</code>: Defines the table</li>
         <li><code>&lt;tr&gt;</code>: Defines a table row</li>
         <li><code>&lt;th&gt;</code>: Defines a table header</li>
         <li><code>&lt;td&gt;</code>: Defines a table cell</li>
      </ul>
    `,
    codeExample: `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>Ai-Yugam</td>
    <td>Admin</td>
  </tr>
</table>`,
  },
];
