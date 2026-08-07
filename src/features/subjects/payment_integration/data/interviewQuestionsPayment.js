export const interviewQuestionsPayment = {
  id: 'module-25-interview-prep',
  title: 'Module 25 – Payment System Interview Preparation',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Master high-frequency Payment System engineering interview questions, core definitions, payment lifecycles, security trade-offs, and architecture questions.
    </p>

    <div class="space-y-6 my-8">
      <div class="p-6 bg-emerald-500/5 dark:bg-emerald-950/20 rounded-3xl border border-emerald-500/30 space-y-3">
        <h4 class="font-black text-lg text-emerald-600 dark:text-emerald-400">1. What is a Payment Gateway?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Answer:</strong> A Payment Gateway is a secure service that encrypts and transfers payment information from the customer to the payment processor/bank and returns the transaction result.
        </p>
      </div>

      <div class="p-6 bg-blue-500/5 dark:bg-blue-950/20 rounded-3xl border border-blue-500/30 space-y-3">
        <h4 class="font-black text-lg text-blue-600 dark:text-blue-400">2. What is the difference between a Payment Gateway and a Payment Processor?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Answer:</strong> A gateway securely collects and forwards payment data, while a processor communicates with banks and card networks to authorize and process the payment.
        </p>
      </div>

      <div class="p-6 bg-purple-500/5 dark:bg-purple-950/20 rounded-3xl border border-purple-500/30 space-y-3">
        <h4 class="font-black text-lg text-purple-600 dark:text-purple-400">3. What is a Merchant Account?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Answer:</strong> A Merchant Account is a special account used by businesses to temporarily receive customer payments before they are settled into the business's bank account.
        </p>
      </div>

      <div class="p-6 bg-amber-500/5 dark:bg-amber-950/20 rounded-3xl border border-amber-500/30 space-y-3">
        <h4 class="font-black text-lg text-amber-600 dark:text-amber-400">4. What is a Payment Aggregator?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Answer:</strong> A Payment Aggregator enables multiple merchants to accept online payments using a shared payment infrastructure, reducing setup complexity.
        </p>
      </div>

      <div class="p-6 bg-cyan-500/5 dark:bg-cyan-950/20 rounded-3xl border border-cyan-500/30 space-y-3">
        <h4 class="font-black text-lg text-cyan-600 dark:text-cyan-400">5. What is Settlement?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Answer:</strong> Settlement is the process of transferring the final payment amount (after applicable fees) from the merchant account to the merchant's bank account.
        </p>
      </div>

      <div class="p-6 bg-indigo-500/5 dark:bg-indigo-950/20 rounded-3xl border border-indigo-500/30 space-y-3">
        <h4 class="font-black text-lg text-indigo-600 dark:text-indigo-400">6. What is the Payment Lifecycle?</h4>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Answer:</strong> The payment lifecycle is the complete journey of a transaction from payment initiation, authorization, and processing to settlement and confirmation.
        </p>
      </div>
    </div>

    <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">Additional Architecture & Security Scenario Questions</h3>
    <div class="space-y-6 my-8">
      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-2">
        <h4 class="font-bold text-base text-gray-900 dark:text-white">Q7: How do you prevent double-charging a customer if a network connection drops after payment?</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Enforce <strong>Idempotency Keys</strong> at both gateway and database levels. Store unique <code>razorpay_order_id</code> in MongoDB with a unique index so duplicate payment completion requests or duplicate webhooks return the existing order status without executing a second charge.</p>
      </div>

      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-2">
        <h4 class="font-bold text-base text-gray-900 dark:text-white">Q8: Why must you verify HMAC signatures on the server side instead of trusting frontend callback parameters?</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Frontend code runs in the user's browser where malicious users can easily intercept network requests using tools like Postman or browser console and send a fake <code>{ status: 'PAID' }</code> payload. Verifying the HMAC SHA-256 signature using the secret key (known ONLY to the server and gateway) mathematically guarantees authenticity.</p>
      </div>

      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-2">
        <h4 class="font-bold text-base text-gray-900 dark:text-white">Q9: How do you handle webhook delivery delays or out-of-order execution?</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Always check the event timestamp and current entity status before updating state. Maintain a state machine (CREATED -> PROCESSING -> PAID -> EXPIRED) where terminal states (PAID) cannot be overridden by late-arriving earlier events.</p>
      </div>
    </div>
  `,
  codeExample: `// Interview Quick Reference: SHA-256 Verification Formula
const isSignatureValid = (orderId, paymentId, signature, secret) => {
  const generatedSignature = crypto
    .createHmac('sha256', secret)
    .update(\`\${orderId}|\${paymentId}\`)
    .digest('hex');
  return generatedSignature === signature;
};`
};
