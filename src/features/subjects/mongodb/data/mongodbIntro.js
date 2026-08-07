export const mongodbIntro = {
  id: 'intro',
  title: 'MongoDB Introduction',
  content: `
    <p>MongoDB is an open-source NoSQL database management system. It's a document-oriented database that's designed to be fast, scalable, and easy to use.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
         <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Document-Based</h4>
         <p class="text-[10px] text-gray-500 mt-2">Data is stored in JSON-like documents (BSON), which makes it flexible.</p>
       </div>
       <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
         <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Scalable</h4>
         <p class="text-[10px] text-gray-500 mt-2">Designed to be distributed across servers with horizontal scaling.</p>
       </div>
    </div>
  `,
  codeExample: `{
  "name": "Ai-Yugam",
  "category": "Education",
  "rating": 5.0
}`
};
