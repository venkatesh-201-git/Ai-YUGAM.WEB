export const mongodbInsert = {
  id: 'insert',
  title: 'MongoDB Insert',
  content: `
    <p>Inserts a single document or multiple documents into a collection. If the collection does not exist, MongoDB creates it once you insert data.</p>
  `,
  codeExample: `db.customers.insertOne({ name: "John Doe", email: "john@example.com" })`
};
