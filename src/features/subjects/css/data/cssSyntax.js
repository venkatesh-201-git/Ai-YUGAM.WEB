export const cssSyntax = {
  id: 'syntax',
  title: 'CSS Syntax',
  content: `
    <p>A CSS rule-set consists of a selector and a declaration block. The selector points to the HTML element you want to style.</p>
    <div class="p-8 bg-gray-900 text-white rounded-3xl my-10 font-mono text-xs overflow-x-auto shadow-2xl">
       <span class="text-secondary tracking-widest uppercase text-[10px] block mb-4">CSS Anatomy</span>
       <div class="flex items-center gap-4">
          <span class="p-2 bg-gray-800 rounded border border-gray-700">h1</span>
          <span class="text-gray-500">{</span>
          <span class="p-2 bg-[#252525]">color: blue;</span>
          <span class="p-2 bg-[#252525]">font-size: 12px;</span>
          <span class="text-gray-500">}</span>
       </div>
    </div>
  `,
  codeExample: `p {
  color: red;
  text-align: center;
}`
};

export const cssSelectors = {
  id: 'selectors',
  title: 'CSS Selectors',
  content: `
    <p>CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories:</p>
    <ul class="space-y-2 mt-6 text-sm text-gray-600 dark:text-gray-400">
       <li><strong>Simple selectors</strong>: Select elements based on name, id, class</li>
       <li><strong>Combinator selectors</strong>: Select elements based on a relationship</li>
       <li><strong>Pseudo-class selectors</strong>: Select elements based on a certain state</li>
       <li><strong>Pseudo-elements selectors</strong>: Select and style a part of an element</li>
       <li><strong>Attribute selectors</strong>: Select elements based on an attribute</li>
    </ul>
  `,
  codeExample: `/* Element selector */
h1 { color: blue; }

/* ID selector */
#myID { color: red; }

/* Class selector */
.myClass { color: green; }`
};

export const cssHowTo = {
  id: 'how-to',
  title: 'CSS How To',
  content: `
    <p>There are three ways of inserting a style sheet into an HTML document:</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
          <h4 class="font-black text-xs uppercase tracking-widest text-secondary">External</h4>
          <p class="text-[10px] text-gray-500 mt-2">Use a link tag in the head of your document.</p>
       </div>
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
          <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Internal</h4>
          <p class="text-[10px] text-gray-500 mt-2">Add your styles inside a &lt;style&gt; tag.</p>
       </div>
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
          <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Inline</h4>
          <p class="text-[10px] text-gray-500 mt-2">Apply style directly to HTML tags.</p>
       </div>
    </div>
  `,
  codeExample: `<head>
  <link rel="stylesheet" href="mystyle.css">
  <style>
    body { background: white; }
  </style>
</head>`
};
