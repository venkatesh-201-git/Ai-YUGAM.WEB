export const paymentArchitecture = {
  id: 'module-2-architecture',
  title: 'Module 2 – Payment System Architecture',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Design a resilient, fault-tolerant enterprise payment architecture. Understand the separation of concerns across Frontend, Backend, Gateway, and Database.
    </p>

    <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Component Responsibilities Matrix</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
      <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
        <h4 class="font-bold text-emerald-500 mb-2">Frontend Layer</h4>
        <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Present product pricing plans</li>
          <li>• Initialize Checkout Modal popup</li>
          <li>• Show loading state during processing</li>
          <li>• Render Instant Success/Failed views</li>
        </ul>
      </div>
      <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
        <h4 class="font-bold text-blue-500 mb-2">Backend Layer</h4>
        <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Secure API key authentication</li>
          <li>• Create Gateway Order ID on server</li>
          <li>• Cryptographic HMAC signature check</li>
          <li>• Process Webhooks asynchronously</li>
        </ul>
      </div>
      <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
        <h4 class="font-bold text-purple-500 mb-2">Database Layer</h4>
        <ul class="text-xs text-gray-600 dark:text-gray-400 space-y-2">
          <li>• Maintain idempotency ledger</li>
          <li>• Store raw payment webhook payloads</li>
          <li>• Activate user subscription status</li>
          <li>• Generate GST tax invoices</li>
        </ul>
      </div>
    </div>
  `,
  codeExample: `// Architecture Interface Contract Definition
export interface IPaymentOrderRequest {
  planId: string;
  currency: 'INR' | 'USD';
  couponCode?: string;
}

export interface IPaymentVerificationRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}`
};
