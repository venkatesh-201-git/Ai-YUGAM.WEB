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
