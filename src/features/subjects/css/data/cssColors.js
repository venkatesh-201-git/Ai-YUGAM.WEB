export const cssColors = {
  id: 'colors',
  title: 'CSS Colors',
  content: `
    <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
       <div class="h-16 rounded-xl bg-orange-500"></div>
       <div class="h-16 rounded-xl bg-blue-500"></div>
       <div class="h-16 rounded-xl bg-red-500"></div>
       <div class="h-16 rounded-xl bg-emerald-500"></div>
    </div>
  `,
  codeExample: `h1 {
  background-color: DodgerBlue;
  color: white;
  padding: 10px;
}`
};

export const cssBackgrounds = {
  id: 'backgrounds',
  title: 'CSS Backgrounds',
  content: `
    <p>The CSS background properties are used to define the background effects for elements.</p>
    <ul class="text-sm space-y-2 mt-6">
       <li><code>background-color</code>: Sets color</li>
       <li><code>background-image</code>: Sets image</li>
       <li><code>background-repeat</code>: Repeats image</li>
       <li><code>background-position</code>: Positions image</li>
    </ul>
  `,
  codeExample: `body {
  background-image: url("paper.gif");
  background-color: #cccccc;
}`
};

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

export const cssGrid = {
  id: 'grid',
  title: 'CSS Grid',
  content: `
    <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
  `,
  codeExample: `.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}`
};

export const cssAnimations = {
  id: 'animations',
  title: 'CSS Animations',
  content: `
    <p>CSS allows animation of HTML elements without using JavaScript or Flash!</p>
  `,
  codeExample: `@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}`
};
