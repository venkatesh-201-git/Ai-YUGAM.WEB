export const cssBoxModel = {
  id: 'box-model',
  title: 'CSS Box Model',
  content: `
    <p>All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.</p>
    <div class="p-8 bg-gray-950 rounded-3xl my-10 border-8 border-secondary/20 flex items-center justify-center text-center">
       <div class="p-6 border-4 border-dashed border-gray-700 w-full">
          <span class="text-[10px] font-black uppercase text-gray-500 tracking-widest">Margin</span>
          <div class="p-6 border-4 border-secondary/40">
             <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Border</span>
             <div class="p-6 bg-secondary/10">
                <span class="text-[10px] font-black uppercase text-secondary tracking-widest">Padding</span>
                <div class="p-6 bg-secondary text-white font-bold uppercase tracking-widest text-xs">Content</div>
             </div>
          </div>
       </div>
    </div>
  `,
  codeExample: `div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}`
};
