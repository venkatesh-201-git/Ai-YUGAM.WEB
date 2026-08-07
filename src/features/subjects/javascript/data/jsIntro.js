export const jsIntro = {
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
  codeExample: `document.getElementById("demo").innerHTML = "Hello Ai-Yugam!";`
};
