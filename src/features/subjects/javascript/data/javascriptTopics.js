export const javascriptTopics = [
  {
    id: 'intro',
    title: 'JS Introduction',
    content: `
      <p>JavaScript is the world's most popular programming language. It is the programming language of the Web, and it is easy to learn.</p>
      <div class="p-6 bg-secondary/5 border-l-4 border-secondary rounded-xl my-8">
        <h4 class="text-sm font-black text-secondary tracking-widest uppercase mb-2">Power Move</h4>
        <p class="text-sm italic text-gray-600 dark:text-gray-400">JavaScript can change HTML content, attribute values, and CSS styles directly in the browser.</p>
      </div>
      <h3 class="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-4">Why study JavaScript?</h3>
      <ul class="space-y-4 text-gray-600 dark:text-gray-300">
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Dynamic Interaction</strong>: Create buttons that do things, forms that validate, and menus that slide.</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
          <span><strong>Full-Stack Potential</strong>: Use it on the frontend with React/Vue and backend with Node.js.</span>
        </li>
      </ul>
    `,
    codeExample: `document.getElementById("demo").innerHTML = "Hello Ai-Yugam!";`,
  },
  {
    id: 'variables',
    title: 'JS Variables',
    content: `
      <p>Variables are containers for storing data. In modern JavaScript, we use <code>let</code> and <code>const</code>.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">let</h4>
           <p class="text-[10px] text-gray-500 mt-2">Use when you expect the value to change later.</p>
         </div>
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">const</h4>
           <p class="text-[10px] text-gray-500 mt-2">Use when the value should stay constant.</p>
         </div>
      </div>
    `,
    codeExample: `const price = 100;
let quantity = 5;
let total = price * quantity;
console.log(total);`,
  },
  {
    id: 'functions',
    title: 'JS Functions',
    content: `
      <p>A JavaScript function is a block of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).</p>
    `,
    codeExample: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Developer"));`,
  },
  {
    id: 'operators',
    title: 'JS Operators',
    content: `
      <p>JavaScript uses arithmetic, assignment, comparison, and logical operators to perform calculations and logic.</p>
    `,
    codeExample: `let x = 10;
let y = 3;
console.log(x % y); // Remainder operator`,
  },
];
