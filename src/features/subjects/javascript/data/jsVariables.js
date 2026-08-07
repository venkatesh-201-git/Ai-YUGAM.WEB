export const jsVariables = {
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
console.log(total);`
};
