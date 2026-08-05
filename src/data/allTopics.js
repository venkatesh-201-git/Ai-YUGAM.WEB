import { htmlTopics } from '../features/subjects/html/data/htmlTopics';
import { pythonTopics } from '../features/subjects/python/data/pythonTopics';
import { cssTopics } from '../features/subjects/css/data/cssTopics';
import { javascriptTopics } from '../features/subjects/javascript/data/javascriptTopics';
import { sqlTopics } from '../features/subjects/sql/data/sqlTopics';
import { javaTopics } from '../features/subjects/java/data/javaTopics';
import { reactTopics } from '../features/subjects/react/data/reactTopics';
import { bootstrapTopics } from '../features/subjects/bootstrap/data/bootstrapTopics';
import { mongodbTopics } from '../features/subjects/mongodb/data/mongodbTopics';
import { gitTopics } from '../features/subjects/git/data/gitTopics';
import { postmanTopics } from '../features/subjects/postman/data/postmanTopics';
import { paymentTopics } from '../features/subjects/payment_integration/data/paymentTopics';

// Master Registry for all Learning Paths
export const allTopics = {
  html: htmlTopics,
  python: pythonTopics,
  css: cssTopics,
  javascript: javascriptTopics,
  sql: sqlTopics,
  java: javaTopics,
  react: reactTopics,
  bootstrap: bootstrapTopics,
  mongodb: mongodbTopics,
  git: gitTopics,
  postman: postmanTopics,
  payment_integration: paymentTopics,
  
  // Future Placeholders
  node: [{ id: 'intro', title: 'Node Intro', content: '<p>Node.js is coming soon!</p>' }],
  c: [{ id: 'intro', title: 'C Intro', content: '<p>C Tutorial is coming soon!</p>' }],
  cpp: [{ id: 'intro', title: 'C++ Intro', content: '<p>C++ Tutorial is coming soon!</p>' }],
  csharp: [{ id: 'intro', title: 'C# Intro', content: '<p>C# Tutorial is coming soon!</p>' }],
  php: [{ id: 'intro', title: 'PHP Intro', content: '<p>PHP Tutorial is coming soon!</p>' }],
};
