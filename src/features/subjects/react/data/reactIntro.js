export const reactIntro = {
  id: 'intro',
  title: 'React Introduction',
  content: `
    <p>React is a JavaScript library for building user interfaces. It is used to build single-page applications and allows us to create reusable UI components.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
         <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Components</h4>
         <p class="text-[10px] text-gray-500 mt-2">Break complex UIs into small, manageable pieces.</p>
       </div>
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
         <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Virtual DOM</h4>
         <p class="text-[10px] text-gray-500 mt-2">Efficiently updates exactly what needs changing.</p>
       </div>
    </div>
  `,
  codeExample: `import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  return <h1>Hello Ai-Yugam!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));`
};
