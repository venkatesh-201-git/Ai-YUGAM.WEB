export const bootstrapTopics = [
  {
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
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">`,
  },
  {
    id: 'grid',
    title: 'BS5 Grid System',
    content: `
      <p>Bootstrap's grid system builds responsive layouts using a 12-column system, with rows and columns. It's based on flexbox!</p>
    `,
    codeExample: `<!-- A simple 2-column layout -->
<div class="container overflow-hidden">
  <div class="row g-2">
    <div class="col-6 p-3 bg-primary text-white">1 of 2</div>
    <div class="col-6 p-3 bg-secondary text-white">2 of 2</div>
  </div>
</div>`,
  },
  {
    id: 'cards',
    title: 'BS5 Cards',
    content: `
      <p>A card in Bootstrap 5 is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, and contextual background colors.</p>
    `,
    codeExample: `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Ai-Yugam Card</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`,
  },
  {
    id: 'alerts',
    title: 'BS5 Alerts',
    content: `
      <p>Alert clips are used for providing contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
    `,
    codeExample: `<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>`,
  },
];
