export const cssSelectors = {
  id: 'selectors',
  title: 'CSS Selectors',
  content: `
    <p>CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories:</p>
    <ul class="space-y-2 mt-6 text-sm text-gray-600 dark:text-gray-400">
       <li><strong>Simple selectors</strong>: Select elements based on name, id, class</li>
       <li><strong>Combinator selectors</strong>: Select elements based on a relationship</li>
       <li><strong>Pseudo-class selectors</strong>: Select elements based on a certain state</li>
       <li><strong>Pseudo-elements selectors</strong>: Select and style a part of an element</li>
       <li><strong>Attribute selectors</strong>: Select elements based on an attribute</li>
    </ul>
  `,
  codeExample: `/* Element selector */
h1 { color: blue; }

/* ID selector */
#myID { color: red; }

/* Class selector */
.myClass { color: green; }`
};
