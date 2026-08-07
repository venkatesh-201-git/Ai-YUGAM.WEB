export const htmlBasic = {
  id: 'basic',
  title: 'HTML Basic',
  content: `
    <p>Every HTML document must start with <code>&lt;!DOCTYPE html&gt;</code>. This declares the document type is HTML5.</p>
    <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-4 tracking-tight">Essential Tags</h3>
    <div class="space-y-6">
       <div class="flex gap-6">
          <div class="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
             <span class="text-sm font-black text-secondary">H1</span>
          </div>
          <div>
             <h4 class="font-bold">Headings</h4>
             <p class="text-sm text-gray-500 mt-1">Defines titles or importance levels from h1 to h6.</p>
          </div>
       </div>
       <div class="flex gap-6">
          <div class="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
             <span class="text-sm font-black text-secondary">P</span>
          </div>
          <div>
             <h4 class="font-bold">Paragraphs</h4>
             <p class="text-sm text-gray-500 mt-1">Used for blocks of text and body content.</p>
          </div>
       </div>
    </div>
  `,
  codeExample: `<!DOCTYPE html>
<html>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`
};

export const htmlElements = {
  id: 'elements',
  title: 'HTML Elements',
  content: `
    <p>An HTML element is defined by a start tag, some content, and an end tag. Elements can also be nested, meaning they can contain other elements.</p>
    <div class="p-8 bg-gray-900 text-white rounded-3xl my-10 font-mono text-xs overflow-x-auto shadow-2xl">
       <span class="text-secondary tracking-widest uppercase text-[10px] block mb-4">Structure Diagram</span>
       <div class="flex items-center gap-4">
          <span class="p-2 bg-gray-800 rounded border border-gray-700">&lt;tagname&gt;</span>
          <span class="text-gray-500">→</span>
          <span class="p-2 bg-[#252525] italic opacity-50">Content goes here</span>
          <span class="text-gray-500">→</span>
          <span class="p-2 bg-gray-800 rounded border border-gray-700">&lt;/tagname&gt;</span>
       </div>
    </div>
  `,
  codeExample: `<p>This is a <strong>nested</strong> element.</p>`
};

export const htmlAttributes = {
  id: 'attributes',
  title: 'HTML Attributes',
  content: `
    <p>Attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like: <code>name="value"</code>.</p>
    <h3 class="text-2xl font-black text-gray-900 dark:text-white mt-10 mb-6 tracking-tight">Common Attributes</h3>
    <table class="w-full text-left border-collapse rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-900">
       <thead class="bg-gray-100 dark:bg-gray-800">
          <tr>
             <th class="p-4 text-[10px] font-black tracking-widest uppercase opacity-40">Attribute</th>
             <th class="p-4 text-[10px] font-black tracking-widest uppercase opacity-40">Description</th>
          </tr>
       </thead>
       <tbody class="text-sm">
          <tr class="border-t dark:border-gray-800">
             <td class="p-4 font-mono text-secondary">href</td>
             <td class="p-4 text-gray-600 dark:text-gray-400">Specifies the URL for a link</td>
          </tr>
          <tr class="border-t dark:border-gray-800">
             <td class="p-4 font-mono text-secondary">src</td>
             <td class="p-4 text-gray-600 dark:text-gray-400">Specifies the path to an image</td>
          </tr>
          <tr class="border-t dark:border-gray-800">
             <td class="p-4 font-mono text-secondary">alt</td>
             <td class="p-4 text-gray-600 dark:text-gray-400">Specifies alternate text for an image</td>
          </tr>
       </tbody>
    </table>
  `,
  codeExample: `<a href="https://aiyugam.com">Visit Ai-Yugam</a>`
};
