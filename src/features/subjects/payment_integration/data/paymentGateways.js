export const paymentGateways = {
  id: 'module-3-payment-gateways',
  title: 'Module 3 – Comparing Top Payment Gateways',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Select the right payment gateway provider for your business model. Detailed comparison of Razorpay, Stripe, Cashfree, PhonePe, and PayU.
    </p>

    <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Detailed Gateway Feature Matrix</h3>
    <div class="overflow-x-auto my-6">
      <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black text-gray-600 dark:text-gray-300">
            <th class="p-4">Gateway</th>
            <th class="p-4">Target Market</th>
            <th class="p-4">UPI & Cards Fee</th>
            <th class="p-4">Key Strengths</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
          <tr>
            <td class="p-4 font-bold text-blue-500">Razorpay</td>
            <td class="p-4 text-gray-600 dark:text-gray-400">India & International</td>
            <td class="p-4 font-mono text-xs">2% + GST</td>
            <td class="p-4 text-gray-700 dark:text-gray-300">Best developer documentation, subscriptions, smart routing.</td>
          </tr>
          <tr>
            <td class="p-4 font-bold text-purple-500">Stripe</td>
            <td class="p-4 text-gray-600 dark:text-gray-400">Global / USA / EU / India</td>
            <td class="p-4 font-mono text-xs">2.9% + 30¢</td>
            <td class="p-4 text-gray-700 dark:text-gray-300">Gold standard for global SaaS & multi-currency recurring billing.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  codeExample: `import Razorpay from 'razorpay';

export const getRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};`
};

export const merchantAccountSetup = {
  id: 'module-4-merchant-account-setup',
  title: 'Module 4 – Merchant Account & API Key Setup',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Step-by-step guide to registering a business merchant account, completing KYC verification, linking bank accounts, generating API keys, and switching between Test and Live modes.
    </p>
  `,
  codeExample: `console.log('Checking Payment Env Vars...');`
};

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
