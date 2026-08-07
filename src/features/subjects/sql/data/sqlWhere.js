export const sqlWhere = {
  id: 'where',
  title: 'SQL Where',
  content: `
    <p>The <code>WHERE</code> clause is used to filter records. It is used to extract only those records that fulfill a specified condition.</p>
  `,
  codeExample: `SELECT * FROM Customers
WHERE Country = 'Mexico';`
};

export const sqlJoins = {
  id: 'joins',
  title: 'SQL Joins',
  content: `
    <p>A JOIN clause is used to combine rows from two or more tables, based on a related column between them.</p>
  `,
  codeExample: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
};
