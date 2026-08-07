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
