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
