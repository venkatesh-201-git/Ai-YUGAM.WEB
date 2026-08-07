export const paymentDatabaseDesign = {
  id: 'module-5-database-design',
  title: 'Module 5 – Production MongoDB Database Design',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Designing robust, highly normalized Mongoose schemas for Users, Subscription Plans, Orders, Payments, Invoices, Refunds, and Webhook Logs.
    </p>
  `,
  codeExample: `import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['CREATED', 'PAID', 'FAILED'], default: 'CREATED' },
}, { timestamps: true });`
};
