export const cssFlexbox = {
  id: 'flexbox',
  title: 'CSS Flexbox',
  content: `
    <p>The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.</p>
    <div class="flex gap-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl mt-10">
       <div class="flex-1 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-black">1</div>
       <div class="flex-1 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-black">2</div>
       <div class="flex-1 h-20 bg-secondary rounded-xl flex items-center justify-center text-white font-black">3</div>
    </div>
  `,
  codeExample: `.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}`
};
