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
