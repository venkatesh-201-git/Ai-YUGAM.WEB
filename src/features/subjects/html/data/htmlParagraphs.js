export const htmlParagraphs = {
  id: 'paragraphs',
  title: 'HTML Paragraphs',
  content: `
    <p>The HTML <code>&lt;p&gt;</code> element defines a paragraph. Browsers automatically add some white space (a margin) before and after a paragraph.</p>
    <p class="mt-6">You can use <code>&lt;br&gt;</code> if you want a line break (a new line) without starting a new paragraph.</p>
  `,
  codeExample: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
<p>With a <br> line break.</p>`
};

export const htmlStyles = {
  id: 'styles',
  title: 'HTML Styles',
  content: `
    <p>The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
    <div class="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border dark:border-gray-800 italic text-gray-400 font-mono text-xs">
       &lt;tagname style="property:value;"&gt;
    </div>
  `,
  codeExample: `<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red; font-family:verdana;">A red paragraph.</p>`
};

export const htmlColors = {
  id: 'colors',
  title: 'HTML Colors',
  content: `
    <p>HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
       <div class="h-20 bg-tomato rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-500/20" style="background-color: Tomato;">Tomato</div>
       <div class="h-20 bg-orange rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-500/20" style="background-color: Orange;">Orange</div>
       <div class="h-20 bg-dodgerblue rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20" style="background-color: DodgerBlue;">Blue</div>
       <div class="h-20 bg-mediumseagreen rounded-2xl flex items-center justify-center text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20" style="background-color: MediumSeaGreen;">Green</div>
    </div>
  `,
  codeExample: `<h2 style="background-color:Tomato; color:white;">Tomato Color</h2>
<h2 style="background-color:DodgerBlue; color:white;">DodgerBlue Color</h2>`
};

export const htmlLinks = {
  id: 'links',
  title: 'HTML Links',
  content: `
    <p>HTML links are hyperlinks. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.</p>
    <div class="p-6 bg-secondary/5 border-l-4 border-secondary rounded-xl my-8">
      <p class="text-sm italic text-gray-600">The most important attribute of the &lt;a&gt; element is the <strong>href</strong> attribute, which indicates the link's destination.</p>
    </div>
  `,
  codeExample: `<a href="https://www.google.com" target="_blank">Search on Google</a>`
};

export const htmlImages = {
  id: 'images',
  title: 'HTML Images',
  content: `
    <p>Images can improve the design and the appearance of a web page. HTML images are defined with the <code>&lt;img&gt;</code> tag.</p>
    <p class="mt-4">The <code>&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
  `,
  codeExample: `<img src="https://picsum.photos/400/200" alt="Random Image" width="400" height="200">`
};

export const htmlTables = {
  id: 'tables',
  title: 'HTML Tables',
  content: `
    <p>HTML tables allow web developers to arrange data into rows and columns.</p>
    <ul class="space-y-3 mt-6 text-sm text-gray-600 dark:text-gray-400">
       <li><code>&lt;table&gt;</code>: Defines the table</li>
       <li><code>&lt;tr&gt;</code>: Defines a table row</li>
       <li><code>&lt;th&gt;</code>: Defines a table header</li>
       <li><code>&lt;td&gt;</code>: Defines a table cell</li>
    </ul>
  `,
  codeExample: `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>Ai-Yugam</td>
    <td>Admin</td>
  </tr>
</table>`
};

export const htmlForms = {
  id: 'forms',
  title: 'HTML Forms',
  content: `
    <p>An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
    <p class="mt-4">The <code>&lt;form&gt;</code> element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.</p>
  `,
  codeExample: `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`
};
