import { htmlTopics } from '../features/subjects/html/data/htmlTopics';
import { pythonTopics } from '../features/subjects/python/data/pythonTopics';
import { cssTopics } from '../features/subjects/css/data/cssTopics';
import { javascriptTopics } from '../features/subjects/javascript/data/javascriptTopics';
import { sqlTopics } from '../features/subjects/sql/data/sqlTopics';
import { javaTopics } from '../features/subjects/java/data/javaTopics';
import { reactTopics } from '../features/subjects/react/data/reactTopics';
import { bootstrapTopics } from '../features/subjects/bootstrap/data/bootstrapTopics';
import { mongodbTopics } from '../features/subjects/mongodb/data/mongodbTopics';

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
  
  // Future Placeholders
  node: [{ id: 'intro', title: 'Node Intro', content: '<p>Node.js is coming soon!</p>' }],
  git: [{ id: 'intro', title: 'Git Intro', content: '<p>Git is coming soon!</p>' }],
  postman: [{ id: 'intro', title: 'Postman Intro', content: '<p>Postman is coming soon!</p>' }],
  c: [{ id: 'intro', title: 'C Intro', content: '<p>C Tutorial is coming soon!</p>' }],
  cpp: [{ id: 'intro', title: 'C++ Intro', content: '<p>C++ Tutorial is coming soon!</p>' }],
  csharp: [{ id: 'intro', title: 'C# Intro', content: '<p>C# Tutorial is coming soon!</p>' }],
  php: [{ id: 'intro', title: 'PHP Intro', content: '<p>PHP Tutorial is coming soon!</p>' }],
};
