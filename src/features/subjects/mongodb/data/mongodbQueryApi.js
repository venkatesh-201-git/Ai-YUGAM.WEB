export const mongodbQueryApi = {
  id: 'query-api',
  title: 'MongoDB Query API',
  content: `
    <p>MongoDB uses a query language based on JSON. You can filter, sort, and organize data using operators like <code>$match</code>, <code>$group</code>, and <code>$sort</code>.</p>
  `,
  codeExample: `db.collection.find({ category: "Education" })`
};

export const mongodbCreateDb = {
  id: 'create-db',
  title: 'MongoDB Create DB',
  content: `
    <p>In MongoDB, a database is created implicitly when you insert the first piece of data into a collection. You can also explicitly create a database using the <code>use</code> command.</p>
  `,
  codeExample: `use myNewDatabase`
};

export const mongodbInsert = {
  id: 'insert',
  title: 'MongoDB Insert',
  content: `
    <p>Inserts a single document or multiple documents into a collection. If the collection does not exist, MongoDB creates it once you insert data.</p>
  `,
  codeExample: `db.customers.insertOne({ name: "John Doe", email: "john@example.com" })`
};
