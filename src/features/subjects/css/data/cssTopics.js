export const cssTopics = [
  {
    id: 'intro',
    title: 'CSS Introduction',
    content: `
      <p>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed on screen, paper, or in other media.</p>
      <div class="p-6 bg-secondary/5 border-l-4 border-secondary rounded-xl my-8">
        <h4 class="text-sm font-black text-secondary tracking-widest uppercase mb-2">Designer's Secret</h4>
        <p class="text-sm italic text-gray-600 dark:text-gray-400">CSS saves a lot of work! It can control the layout of multiple web pages all at once.</p>
      </div>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-4">Why use CSS?</h3>
      <ul class="space-y-4 text-gray-600 dark:text-gray-300">
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Visual Styling</strong>: Control colors, fonts, and spacing.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Layout Alignment</strong>: Position images, text, and sidebars exactly where you want.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Responsive Design</strong>: Adapt your website for mobile phones and tablets.</span>
        </li>
      </ul>
    `,
    codeExample: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`,
  },
  {
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
}`,
  },
  {
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
.myClass { color: green; }`,
  },
  {
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
</head>`,
  },
  {
    id: 'colors',
    title: 'CSS Colors',
    content: `
      <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
         <div class="h-16 rounded-xl bg-orange-500"></div>
         <div class="h-16 rounded-xl bg-blue-500"></div>
         <div class="h-16 rounded-xl bg-red-500"></div>
         <div class="h-16 rounded-xl bg-emerald-500"></div>
      </div>
    `,
    codeExample: `h1 {
  background-color: DodgerBlue;
  color: white;
  padding: 10px;
}`,
  },
  {
    id: 'backgrounds',
    title: 'CSS Backgrounds',
    content: `
      <p>The CSS background properties are used to define the background effects for elements.</p>
      <ul class="text-sm space-y-2 mt-6">
         <li><code>background-color</code>: Sets color</li>
         <li><code>background-image</code>: Sets image</li>
         <li><code>background-repeat</code>: Repeats image</li>
         <li><code>background-position</code>: Positions image</li>
      </ul>
    `,
    codeExample: `body {
  background-image: url("paper.gif");
  background-color: #cccccc;
}`,
  },
  {
    id: 'box-model',
    title: 'CSS Box Model',
    content: `
      <p>All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.</p>
      <div class="p-8 bg-gray-950 rounded-3xl my-10 border-8 border-secondary/20 flex items-center justify-center text-center">
         <div class="p-6 border-4 border-dashed border-gray-700 w-full">
            <span class="text-[10px] font-black uppercase text-gray-500 tracking-widest">Margin</span>
            <div class="p-6 border-4 border-secondary/40">
               <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Border</span>
               <div class="p-6 bg-secondary/10">
                  <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Padding</span>
                  <div class="p-6 bg-secondary text-white font-bold uppercase tracking-widest text-xs">Content</div>
               </div>
            </div>
         </div>
      </div>
    `,
    codeExample: `div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}`,
  },
  {
    id: 'flexbox',
    title: 'CSS Flexbox',
    content: `
      <p>The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.</p>
      <div class="flex gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl mt-10">
         <div className="flex-1 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-black">1</div>
         <div className="flex-1 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-black">2</div>
         <div className="flex-1 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-black">3</div>
      </div>
    `,
    codeExample: `.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
  },
  {
    id: 'grid',
    title: 'CSS Grid',
    content: `
      <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
    `,
    codeExample: `.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}`,
  },
  {
    id: 'animations',
    title: 'CSS Animations',
    content: `
      <p>CSS allows animation of HTML elements without using JavaScript or Flash!</p>
    `,
    codeExample: `@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}`,
  },
];
