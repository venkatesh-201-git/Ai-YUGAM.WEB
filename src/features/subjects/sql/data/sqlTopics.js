export const sqlTopics = [
  {
    id: 'intro',
    title: 'SQL Introduction',
    content: `
      <p>SQL is a standard language for accessing and manipulating databases. It stands for Structured Query Language.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Data Access</h4>
           <p class="text-[10px] text-gray-500 mt-2">SQL can execute queries against a database and retrieve data.</p>
         </div>
         <div class="p-6 bg-blue-50/50 dark:bg-gray-900 rounded-2xl border dark:border-gray-800">
           <h4 class="font-black text-xs uppercase tracking-widest text-secondary">Data Integrity</h4>
           <p class="text-[10px] text-gray-500 mt-2">SQL can set permissions on tables and ensure accuracy.</p>
         </div>
      </div>
    `,
    codeExample: `SELECT * FROM Customers;`,
  },
  {
    id: 'select',
    title: 'SQL Select',
    content: `
      <p>The <code>SELECT</code> statement is used to select data from a database. Each column you want to select must be listed after the SELECT keyword.</p>
    `,
    codeExample: `SELECT CustomerName, City FROM Customers;`,
  },
  {
    id: 'where',
    title: 'SQL Where',
    content: `
      <p>The <code>WHERE</code> clause is used to filter records. It is used to extract only those records that fulfill a specified condition.</p>
    `,
    codeExample: `SELECT * FROM Customers
WHERE Country = 'Mexico';`,
  },
  {
    id: 'joins',
    title: 'SQL Joins',
    content: `
      <p>A JOIN clause is used to combine rows from two or more tables, based on a related column between them.</p>
    `,
    codeExample: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`,
  },
];
