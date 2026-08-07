export const reactProps = {
  id: 'props',
  title: 'React Props',
  content: `
    <p>Props are arguments passed into React components. Props are passed to components via HTML attributes.</p>
  `,
  codeExample: `function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

const myElement = <Car brand="Ford" />;`
};

export const reactUseState = {
  id: 'use-state',
  title: 'React useState',
  content: `
    <p>The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.</p>
  `,
  codeExample: `import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return <h1>My favorite color is {color}!</h1>;
}`
};
