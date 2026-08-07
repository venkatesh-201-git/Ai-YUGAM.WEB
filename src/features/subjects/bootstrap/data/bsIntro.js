export const bsIntro = {
  id: 'intro',
  title: 'BS5 Introduction',
  content: `
    <p>Bootstrap 5 is the newest version of the most popular CSS Framework. It's faster, easier to use, and focused on modern browser support.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
         <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Mobile-First</h4>
         <p class="text-[10px] text-gray-500 mt-2">Designed and built for small screens first, then scaled up.</p>
       </div>
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
         <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Customizable</h4>
         <p class="text-[10px] text-gray-500 mt-2">Easily customize colors, components, and utilities.</p>
       </div>
    </div>
  `,
  codeExample: `<!-- Latest Bootstrap 5 CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">`
};
