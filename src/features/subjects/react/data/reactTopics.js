export const reactTopics = [
  {
    id: 'intro',
    title: 'React Introduction',
    content: `
      <p>React is a JavaScript library for building user interfaces. It is used to build single-page applications and allows us to create reusable UI components.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Components</h4>
           <p class="text-[10px] text-gray-500 mt-2">Break complex UIs into small, manageable pieces.</p>
         </div>
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Virtual DOM</h4>
           <p class="text-[10px] text-gray-500 mt-2">Efficiently updates exactly what needs changing.</p>
         </div>
      </div>
    `,
    codeExample: `import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  return <h1>Hello Ai-Yugam!</h1>;
}

ReactDOM.render(<Hello />, document.getElementById('root'));`,
  },
  {
    id: 'jsx',
    title: 'React JSX Intro',
    content: `
      <p>JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</p>
    `,
    codeExample: `const myElement = <h1>I Love JSX!</h1>;`,
  },
  {
    id: 'props',
    title: 'React Props',
    content: `
      <p>Props are arguments passed into React components. Props are passed to components via HTML attributes.</p>
    `,
    codeExample: `function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

const myElement = <Car brand="Ford" />;`,
  },
  {
    id: 'use-state',
    title: 'React useState',
    content: `
      <p>The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.</p>
    `,
    codeExample: `import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
  return <h1>My favorite color is {color}!</h1>;
}`,
  },
];
