export const cssIntro = {
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
}`
};
