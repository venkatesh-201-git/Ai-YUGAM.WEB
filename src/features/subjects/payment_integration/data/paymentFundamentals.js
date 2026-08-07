export const paymentFundamentals = {
  id: 'module-0-fundamentals',
  title: 'Module 0 – Payment System Fundamentals',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Master the essential building blocks of online payment processing. Understand how money moves securely across digital networks, the roles of key financial entities, and the complete payment lifecycle in modern web applications.
    </p>

    <div class="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-2xl my-8">
      <h4 class="text-sm font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase mb-1">Core Concept</h4>
      <p class="text-base text-gray-700 dark:text-gray-300">
        A <strong>Payment Gateway</strong> acts as a secure digital bridge between a website checkout and financial networks, encrypting sensitive credit card or UPI credentials to safely transfer funds from customer to merchant.
      </p>
    </div>

    <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">1. Payment Gateway vs Payment Processor vs Bank</h3>
    <div class="overflow-x-auto my-6">
      <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black tracking-wider text-gray-600 dark:text-gray-300">
            <th class="p-4">Entity</th>
            <th class="p-4">Primary Responsibility</th>
            <th class="p-4">Examples</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
          <tr>
            <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Payment Gateway</td>
            <td class="p-4 text-gray-700 dark:text-gray-300">Front-end interface encrypting card/UPI details and routing transaction requests.</td>
            <td class="p-4 font-mono text-xs">Razorpay, Stripe, Cashfree</td>
          </tr>
          <tr>
            <td class="p-4 font-bold text-blue-600 dark:text-blue-400">Payment Processor</td>
            <td class="p-4 text-gray-700 dark:text-gray-300">Back-end communicator executing data flow between gateway, card networks, and issuing banks.</td>
            <td class="p-4 font-mono text-xs">First Data, Chase Paymentech, Visa/Mastercard Network</td>
          </tr>
          <tr>
            <td class="p-4 font-bold text-purple-600 dark:text-purple-400">Issuing Bank</td>
            <td class="p-4 text-gray-700 dark:text-gray-300">Customer bank holding the account funds; approves or declines transaction based on balance & fraud check.</td>
            <td class="p-4 font-mono text-xs">HDFC, ICICI, Chase, SBI</td>
          </tr>
          <tr>
            <td class="p-4 font-bold text-amber-600 dark:text-amber-400">Acquiring Bank</td>
            <td class="p-4 text-gray-700 dark:text-gray-300">Merchant bank receiving funds settled after a successful transaction.</td>
            <td class="p-4 font-mono text-xs">Axis Bank, HDFC Bank</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Merchant Account vs Payment Aggregator</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
        <h4 class="font-bold text-lg text-gray-900 dark:text-white mb-2">Dedicated Merchant Account</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">A special bank account exclusively setup for your specific business. Offers custom fee negotiations but requires lengthy bank approvals and PCI compliance certification.</p>
      </div>
      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800">
        <h4 class="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">Payment Aggregator (Standard)</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">Pools thousands of small businesses under a single master merchant account (e.g. Razorpay, Stripe). Instant onboarding, zero setup hassle, T+1/T+2 automated payouts.</p>
      </div>
    </div>

    <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">3. The Complete 6-Step Payment Lifecycle</h3>
    <div class="p-6 bg-gray-900 text-white rounded-3xl space-y-4 my-6 font-mono text-xs">
      <div class="flex items-center gap-3"><span class="px-2 py-1 bg-emerald-500 rounded font-bold text-black">1. Checkout</span> User submits payment request on website frontend.</div>
      <div class="flex items-center gap-3"><span class="px-2 py-1 bg-emerald-500 rounded font-bold text-black">2. Encrypt & Auth</span> Gateway encrypts payload (HMAC/SSL) and contacts card network.</div>
      <div class="flex items-center gap-3"><span class="px-2 py-1 bg-emerald-500 rounded font-bold text-black">3. Authorization</span> Issuing bank performs 2FA (OTP/3DS) and checks available limit.</div>
      <div class="flex items-center gap-3"><span class="px-2 py-1 bg-emerald-500 rounded font-bold text-black">4. Capture</span> Funds held by issuing bank are authorized for capture by merchant.</div>
      <div class="flex items-center gap-3"><span class="px-2 py-1 bg-emerald-500 rounded font-bold text-black">5. Webhook Sync</span> Gateway sends async webhook HTTP callback to backend server.</div>
      <div class="flex items-center gap-3"><span class="px-2 py-1 bg-emerald-500 rounded font-bold text-black">6. Settlement</span> Gateway settles funds into merchant account in 1-2 business days.</div>
    </div>
  `,
  codeExample: `// Conceptual example: High-level Payment Lifecycle Execution Flow
const processPayment = async (orderId, amount, paymentDetails) => {
  // 1. Create order on gateway
  const order = await gateway.orders.create({ amount: amount * 100, currency: "INR" });
  
  // 2. Client completes 2FA OTP payment popup
  
  // 3. Verify digital HMAC signature on backend
  const isValid = verifySignature(order.id, paymentDetails.paymentId, signature, SECRET);
  
  if (isValid) {
    await db.orders.updateOne({ orderId }, { status: 'PAID', paymentId: paymentDetails.paymentId });
    return { success: true, status: 'PAID' };
  } else {
    throw new Error('Fraudulent transaction signature!');
  }
};`
};
