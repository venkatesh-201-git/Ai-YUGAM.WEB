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
