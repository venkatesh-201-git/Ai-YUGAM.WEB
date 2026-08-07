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
