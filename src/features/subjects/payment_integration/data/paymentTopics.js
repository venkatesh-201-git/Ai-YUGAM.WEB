export const paymentTopics = [
  {
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

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">4. Essential Payment Terminology & Key Terms You Must Remember</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse rounded-2xl overflow-hidden">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-black tracking-wider text-gray-600 dark:text-gray-300">
              <th class="p-4">Term</th>
              <th class="p-4">Meaning / Definition</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-800 text-sm">
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Customer</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Person paying money</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Merchant</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Business receiving money</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Payment Gateway</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Secure service that processes payments</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Bank</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Holds customer and business money</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Order</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">A request to collect payment</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Payment</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">The completed money transfer</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Transaction</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">A record of the payment process</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Webhook</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Secure notification from the gateway to your backend</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Invoice</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Official payment receipt</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Refund</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Returning money to the customer</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-emerald-600 dark:text-emerald-400">Settlement</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Money transferred from the gateway to your bank</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300 my-4">
        <li class="flex items-center gap-3"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 font-mono text-xs font-bold text-emerald-500">MDR</span> <strong>Merchant Discount Rate:</strong> Percentage fee charged by gateway per transaction (e.g. 2% for cards, 0% for UPI under limit).</li>
        <li class="flex items-center gap-3"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 font-mono text-xs font-bold text-emerald-500">Chargeback</span> Customer dispute filed directly with card issuing bank demanding a forced refund due to fraud or non-delivery.</li>
        <li class="flex items-center gap-3"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 font-mono text-xs font-bold text-emerald-500">PCI-DSS</span> <strong>Payment Card Industry Data Security Standard:</strong> Global security mandate for storing cardholder data.</li>
      </ul>
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
  },
  {
    id: 'module-1-prerequisites',
    title: 'Module 1 – Prerequisites & MERN Setup',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Before building a payment engine, review the full-stack MERN (MongoDB, Express, React, Node.js) foundational prerequisites, JWT security, environment configuration, and HTTPS async requirements.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Key Architecture Stack Components</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-cyan-500 tracking-wider">Frontend (React + Axios)</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Loads SDK popups (Razorpay Checkout / Stripe Elements), handles checkout state, redirects to success/failure routes.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-green-500 tracking-wider">Backend (Node.js + Express)</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Creates server orders, signs cryptographic HMAC tokens, verifies webhooks, manages database updates.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-emerald-500 tracking-wider">Database (MongoDB + Mongoose)</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Stores Users, Orders, Payments, Invoices, Subscriptions, and Audit Logs with strict schema validation.</p>
        </div>
        <div class="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
          <span class="text-xs font-black uppercase text-purple-500 tracking-wider">Authentication (JWT + Cookies)</span>
          <p class="text-xs text-gray-600 dark:text-gray-400 mt-2">Secures payment endpoints so users can only view their own payment histories and invoices.</p>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Environment Variable Management (.env)</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">Never commit payment secret keys to version control! Separate client-side keys from server-side secrets:</p>
      <div class="p-5 bg-gray-900 text-gray-200 rounded-2xl font-mono text-xs space-y-2">
        <div class="text-emerald-400"># Server-Only Private Secrets (Never expose to client!)</div>
        <div>RAZORPAY_KEY_SECRET=wz9x8y7z6a5b4c3d2e1f</div>
        <div>JWT_SECRET=super_secret_jwt_key_2026</div>
        <div>WEBHOOK_SECRET=whsec_9948d7a6e5f4c3b2a1</div>
        <div class="text-cyan-400 mt-3"># Client-Facing Public Key (Safe for React frontend)</div>
        <div>VITE_RAZORPAY_KEY_ID=rzp_test_1234567890abcdef</div>
      </div>
    `,
    codeExample: `// Sample Express Async Middleware for Payment Security
import jwt from 'jsonwebtoken';

export const verifyUserToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'Unauthorized access' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token' });
  }
};`
  },
  {
    id: 'module-2-architecture',
    title: 'Module 2 – Payment System Architecture',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Design a resilient, fault-tolerant enterprise payment architecture. Understand the separation of concerns across Frontend, Backend, Gateway, and Database.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Complete Payment Architecture Flow Diagram</h3>
      <div class="p-6 bg-gray-900 text-gray-200 rounded-3xl space-y-3 my-6 font-mono text-xs overflow-x-auto">
        <div class="text-center font-bold text-emerald-400 text-sm mb-4">────── COMPLETE END-TO-END PAYMENT FLOW ──────</div>
        <div class="flex flex-col items-center space-y-2">
          <div class="px-4 py-2 bg-emerald-500 text-black font-bold rounded-xl shadow">Customer</div>
          <div class="text-gray-500">│</div>
          <div class="text-gray-500">▼</div>
          <div class="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl shadow">React Frontend</div>
          <div class="text-gray-500">│</div>
          <div class="text-gray-500">▼</div>
          <div class="px-4 py-2 bg-purple-600 text-white font-bold rounded-xl shadow">Node.js Backend</div>
          <div class="text-gray-500">│</div>
          <div class="text-cyan-400 font-bold text-[10px]">Create Order</div>
          <div class="text-gray-500">│</div>
          <div class="text-gray-500">▼</div>
          <div class="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow">Payment Gateway</div>
          <div class="text-gray-500">│</div>
          <div class="text-gray-500">▼</div>
          <div class="px-4 py-2 bg-amber-600 text-white font-bold rounded-xl shadow">Customer Chooses Payment Method</div>
          <div class="text-gray-500">│</div>
          <div class="text-gray-500">▼</div>
          <div class="px-4 py-2 bg-pink-600 text-white font-bold rounded-xl shadow">Customer's Bank</div>
          <div class="text-gray-500">│</div>
          <div class="text-yellow-400 font-bold text-[10px]">Money Approved?</div>
          <div class="text-gray-500">│</div>
          <div class="w-full max-w-md grid grid-cols-2 gap-4 text-center">
            <div class="p-3 bg-emerald-950/60 border border-emerald-500 rounded-2xl flex flex-col items-center">
              <span class="text-emerald-400 font-black text-sm mb-2">YES</span>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-emerald-600 text-white font-bold rounded-lg text-[10px] my-1">Gateway</div>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-blue-600 text-white font-bold rounded-lg text-[10px] my-1">Backend Verification</div>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-purple-600 text-white font-bold rounded-lg text-[10px] my-1">MongoDB Updated</div>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-teal-600 text-white font-bold rounded-lg text-[10px] my-1">Premium Activated</div>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-orange-600 text-white font-bold rounded-lg text-[10px] my-1">Invoice Generated</div>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-indigo-600 text-white font-bold rounded-lg text-[10px] my-1">Email Sent</div>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-emerald-500 text-black font-black rounded-lg text-[10px] my-1 shadow-lg">User Login Allowed</div>
            </div>

            <div class="p-3 bg-red-950/60 border border-red-500 rounded-2xl flex flex-col items-center justify-start">
              <span class="text-red-400 font-black text-sm mb-2">NO</span>
              <div class="text-gray-400 text-[10px]">▼</div>
              <div class="px-3 py-1 bg-red-600 text-white font-black rounded-lg text-[10px] my-2 shadow-lg">Payment Failed</div>
              <p class="text-[9px] text-gray-400 mt-2 italic">User remains on basic tier. Error state reported back to React frontend.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Component Responsibilities Matrix</h3>
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
  },
  {
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
            <tr>
              <td class="p-4 font-bold text-emerald-500">Cashfree</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">India Marketplace & Payouts</td>
              <td class="p-4 font-mono text-xs">1.9% + GST</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">Instant vendor payouts, instant refunds API.</td>
            </tr>
            <tr>
              <td class="p-4 font-bold text-purple-600">PhonePe PG</td>
              <td class="p-4 text-gray-600 dark:text-gray-400">India Mobile First</td>
              <td class="p-4 font-mono text-xs">0% - Competitive</td>
              <td class="p-4 text-gray-700 dark:text-gray-300">High UPI conversion success rate, deep App integration.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-10 mb-4">2. Sandbox Mode vs Production Mode</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">All gateways provide a <strong>Sandbox (Test Mode)</strong> environment allowing end-to-end testing with dummy test card numbers and simulated UPI failures without charging real money.</p>
    `,
    codeExample: `// Choosing SDK initialization based on environment
import Razorpay from 'razorpay';

export const getRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};`
  },
  {
    id: 'module-4-merchant-account-setup',
    title: 'Module 4 – Merchant Account & API Key Setup',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Step-by-step guide to registering a business merchant account, completing KYC verification, linking bank accounts, generating API keys, and switching between Test and Live modes.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Onboarding Checklist</h3>
      <div class="space-y-4 my-6">
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">1</span>
          <span class="text-sm text-gray-700 dark:text-gray-300"><strong>Business Registration:</strong> Sole Proprietorship, LLP, or Private Limited details.</span>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">2</span>
          <span class="text-sm text-gray-700 dark:text-gray-300"><strong>KYC Verification:</strong> Upload Business PAN, Certificate of Incorporation, and GSTIN.</span>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">3</span>
          <span class="text-sm text-gray-700 dark:text-gray-300"><strong>Bank Settlement Account:</strong> Link Current Account IFSC & Account Number for daily payouts.</span>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">4</span>
          <span class="text-sm text-gray-700 dark:text-gray-300"><strong>API Keys Generation:</strong> Copy Key ID and Key Secret from Gateway Developer Dashboard.</span>
        </div>
      </div>
    `,
    codeExample: `# Example config verification script
node -e "
  console.log('Checking Payment Env Vars...');
  console.log('Key ID:', process.env.RAZORPAY_KEY_ID ? 'OK' : 'MISSING');
  console.log('Key Secret:', process.env.RAZORPAY_KEY_SECRET ? 'OK' : 'MISSING');
"`
  },
  {
    id: 'module-5-database-design',
    title: 'Module 5 – Production MongoDB Database Design',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Designing robust, highly normalized Mongoose schemas for Users, Subscription Plans, Orders, Payments, Invoices, Refunds, and Webhook Logs.
      </p>

      <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mt-8 mb-4">1. Core Schema Entities Diagram</h3>
      <div class="p-6 bg-gray-900 text-gray-200 rounded-3xl font-mono text-xs space-y-3">
        <div>📁 <strong>User</strong> (id, email, role, subscriptionStatus, currentPlanId)</div>
        <div>📁 <strong>Plan</strong> (id, title, price, interval, features, razorpayPlanId)</div>
        <div>📁 <strong>Order</strong> (id, userId, planId, amount, razorpayOrderId, status)</div>
        <div>📁 <strong>Payment</strong> (id, orderId, razorpayPaymentId, method, signature, status)</div>
        <div>📁 <strong>Invoice</strong> (id, paymentId, invoiceNumber, taxAmount, pdfUrl)</div>
        <div>📁 <strong>Refund</strong> (id, paymentId, razorpayRefundId, amount, reason, status)</div>
      </div>
    `,
    codeExample: `import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  razorpayOrderId: { type: String, required: true, unique: true },
  status: { type: String, enum: ['CREATED', 'PAID', 'FAILED'], default: 'CREATED' },
}, { timestamps: true });

export const Order = mongoose.model('Order', OrderSchema);`
  },
  {
    id: 'module-6-frontend-ui',
    title: 'Module 6 – Frontend Checkout & Pricing UI',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Build high-converting pricing tables, checkout modals, payment popup triggers, and dynamic status screens (Success, Failed, Pending, History).
      </p>
    `,
    codeExample: `// Loading Razorpay Script dynamically in React
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};`
  },
  {
    id: 'module-7-backend-apis',
    title: 'Module 7 – Backend Express Payment APIs',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Implement clean, modular REST API endpoints for creating orders, verifying HMAC signatures, retrieving payment history, downloading invoices, and processing refunds.
      </p>
    `,
    codeExample: `// Express Payment Controller Endpoint Example
import crypto from 'crypto';
import { Order } from '../models/Order.js';

export const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    await Order.findOneAndUpdate({ razorpayOrderId: razorpay_order_id }, { status: 'PAID' });
    return res.status(200).json({ success: true, message: 'Payment verified successfully' });
  }

  return res.status(400).json({ success: false, message: 'Invalid payment signature' });
};`
  },
  {
    id: 'module-8-payment-flow',
    title: 'Module 8 – Complete Payment Flow & Signature Validation',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Step-by-step implementation of order creation, client popup triggering, cryptographic HMAC verification, database update, and user premium role activation.
      </p>
    `,
    codeExample: `// Complete React Checkout Trigger Handler
const handlePayment = async (plan) => {
  const res = await axios.post('/api/v1/payments/create-order', { planId: plan._id });
  const { order } = res.data;

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Ai-Yugam Pro",
    description: plan.title,
    order_id: order.razorpayOrderId,
    handler: async (response) => {
      const verifyRes = await axios.post('/api/v1/payments/verify', response);
      if (verifyRes.data.success) {
        window.location.href = '/payment-success';
      }
    },
    theme: { color: "#10b981" }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};`
  },
  {
    id: 'module-9-webhooks',
    title: 'Module 9 – Webhook Integration & Idempotency',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Why webhooks are non-negotiable for handling dropped browser connections, network failures, retry policies, signature verification, and idempotency handling.
      </p>
    `,
    codeExample: `// Webhook Verification & Processing Handler
export const handleWebhook = async (req, res) => {
  const secret = process.env.WEBHOOK_SECRET;
  const signature = req.headers['x-razorpay-signature'];

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (expectedSignature !== signature) {
    return res.status(400).send('Invalid webhook signature');
  }

  const { event, payload } = req.body;
  if (event === 'payment.captured') {
    const payment = payload.payment.entity;
    // Perform idempotent database update using payment.order_id
  }

  res.status(200).json({ status: 'ok' });
};`
  },
  {
    id: 'module-10-user-activation',
    title: 'Module 10 – User Premium Activation & Access Control',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Manage active subscriptions, automatically grant premium feature access, restrict expired users, and build Express authorization middleware.
      </p>
    `,
    codeExample: `// Express Middleware restricting access to active subscribers
export const requireActiveSubscription = async (req, res, next) => {
  if (req.user.subscriptionStatus !== 'ACTIVE') {
    return res.status(403).json({ success: false, message: 'Subscription required' });
  }
  next();
};`
  },
  {
    id: 'module-11-invoice-system',
    title: 'Module 11 – Automated GST Invoice System',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Build automated invoice numbering engines, calculate State/Central GST taxes (CGST + SGST or IGST), render PDF invoices on-the-fly, and attach to emails.
      </p>
    `,
    codeExample: `// Invoice tax calculator helper
export const calculateGST = (amount, state, merchantState = 'KA') => {
  const isSameState = state === merchantState;
  const taxRate = 0.18; // 18% GST
  const taxAmount = amount * taxRate;
  
  if (isSameState) {
    return { cgst: taxAmount / 2, sgst: taxAmount / 2, igst: 0, total: amount + taxAmount };
  }
  return { cgst: 0, sgst: 0, igst: taxAmount, total: amount + taxAmount };
};`
  },
  {
    id: 'module-12-email-system',
    title: 'Module 12 – Transactional Email System (Nodemailer/SendGrid)',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Send automated HTML transactional emails for Welcome messages, Payment Success notifications, Payment Failure alerts, Refund receipts, and Renewal reminders.
      </p>
    `,
    codeExample: `import nodemailer from 'nodemailer';

export const sendPaymentSuccessEmail = async (userEmail, invoicePdfBuffer) => {
  const transporter = nodemailer.createTransport({ /* SMTP config */ });
  await transporter.sendMail({
    from: '"Ai-Yugam Billing" <billing@ai-yugam.com>',
    to: userEmail,
    subject: 'Payment Successful - Receipt Attached',
    html: '<h1>Thank you for your payment!</h1><p>Your subscription is active.</p>',
    attachments: [{ filename: 'invoice.pdf', content: invoicePdfBuffer }]
  });
};`
  },
  {
    id: 'module-13-sms-notifications',
    title: 'Module 13 – SMS & Multi-Channel Alerts',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Integrate Twilio, Fast2SMS, and WhatsApp Business API for instant payment confirmation alerts and OTP delivery.
      </p>
    `,
    codeExample: `// Twilio SMS dispatch helper
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendPaymentSMS = async (phone, amount) => {
  await client.messages.create({
    body: \`Ai-Yugam: Payment of ₹\${amount} confirmed. Thank you!\`,
    from: process.env.TWILIO_PHONE,
    to: phone
  });
};`
  },
  {
    id: 'module-14-security',
    title: 'Module 14 – Payment Security & Vulnerability Defense',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Protect your application against Replay Attacks, CSRF, XSS, NoSQL Injections, API rate-limiting, and enforce strict HMAC verification.
      </p>
    `,
    codeExample: `import rateLimit from 'express-rate-limit';

// Strict Rate Limiting on Payment endpoints to stop brute-force/fraud attacks
export const paymentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 payment attempts per window
  message: { success: false, message: 'Too many payment requests, try again later' }
});`
  },
  {
    id: 'module-15-subscriptions',
    title: 'Module 15 – Automated Subscription Billing',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Build recurring subscription engines supporting Monthly/Yearly plans, auto-renewals, free trials, plan upgrades, downgrades, and cancellations.
      </p>
    `,
    codeExample: `// Creating a Recurring Subscription Plan on Gateway
export const createRecurringSubscription = async (customerId, planId) => {
  const subscription = await razorpay.subscriptions.create({
    plan_id: planId,
    customer_notify: 1,
    total_count: 12,
  });
  return subscription;
};`
  },
  {
    id: 'module-16-coupons',
    title: 'Module 16 – Coupons & Discount Engine',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Implement percentage discounts, fixed cash discounts, voucher expiration dates, user-specific usage caps, and coupon validation logic.
      </p>
    `,
    codeExample: `// Coupon discount calculation logic
export const applyCoupon = (amount, coupon) => {
  if (new Date() > new Date(coupon.expiryDate)) throw new Error('Coupon expired');
  if (coupon.usedCount >= coupon.maxUsage) throw new Error('Coupon usage limit reached');

  let discount = 0;
  if (coupon.type === 'PERCENTAGE') {
    discount = (amount * coupon.value) / 100;
  } else if (coupon.type === 'FIXED') {
    discount = coupon.value;
  }
  return Math.max(0, amount - discount);
};`
  },
  {
    id: 'module-17-refunds',
    title: 'Module 17 – Refund Processing System',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Handle Full Refunds, Partial Refunds, Instant Refunds, tracking refund status, and handling refund webhooks.
      </p>
    `,
    codeExample: `// Processing a refund via Gateway API
export const initiateRefund = async (paymentId, amount) => {
  const refund = await razorpay.payments.refund(paymentId, {
    amount: amount * 100, // Amount in paise
    speed: 'normal',
    notes: { reason: 'Customer requested refund' }
  });
  return refund;
};`
  },
  {
    id: 'module-18-admin-dashboard',
    title: 'Module 18 – Admin Payment Operations Dashboard',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Build admin tools to monitor total revenue metrics, active subscriber counts, failed transaction troubleshooting, and pending payouts.
      </p>
    `,
    codeExample: `// MongoDB Aggregation for Admin Dashboard Summary
export const getAdminMetrics = async () => {
  const totalRevenue = await Order.aggregate([
    { $match: { status: 'PAID' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);
  return { revenue: totalRevenue[0]?.total || 0 };
};`
  },
  {
    id: 'module-19-reports',
    title: 'Module 19 – Financial Reporting & Analytics',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Generate Daily/Monthly revenue charts, churn rates, average revenue per user (ARPU), and exportable CSV analytics reports.
      </p>
    `,
    codeExample: `// Daily Revenue Reporting Aggregation Pipeline
export const getDailyRevenueReport = async () => {
  return await Order.aggregate([
    { $match: { status: 'PAID' } },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        dailyTotal: { $sum: "$amount" },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);
};`
  },
  {
    id: 'module-20-testing',
    title: 'Module 20 – Sandbox & Automated Payment Testing',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Test edge cases in sandbox environments: simulated network drops, incorrect OTPs, duplicate webhook deliveries, and mock card assertions.
      </p>
    `,
    codeExample: `// Jest test case for payment HMAC verification
describe('Payment Security Tests', () => {
  it('should reject tampered payment signatures', () => {
    const isTamperedValid = verifyPaymentSignature('order_123', 'pay_123', 'fake_sig');
    expect(isTamperedValid).toBe(false);
  });
});`
  },
  {
    id: 'module-21-deployment',
    title: 'Module 21 – Production Deployment & SSL Setup',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Deploying MERN payment backends with HTTPS, Nginx reverse proxies, environment variable injection, and uptime monitoring alerts.
      </p>
    `,
    codeExample: `# Sample Nginx SSL Reverse Proxy Configuration for Payment Webhooks
server {
    listen 443 ssl http2;
    server_name api.ai-yugam.com;

    ssl_certificate /etc/letsencrypt/live/api.ai-yugam.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.ai-yugam.com/privkey.pem;

    location /api/v1/payments/webhook {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`
  },
  {
    id: 'module-22-best-practices',
    title: 'Module 22 – Production Best Practices & Resilience',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Structured JSON logging, database transaction fallbacks, automated daily database backups, and disaster recovery strategies.
      </p>
    `,
    codeExample: `// Winston JSON Logger configuration for payment audit logs
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'payment-service' },
  transports: [
    new winston.transports.File({ filename: 'payment-errors.log', level: 'error' }),
    new winston.transports.File({ filename: 'payment-audit.log' })
  ]
});`
  },
  {
    id: 'module-23-enterprise-features',
    title: 'Module 23 – Multi-Gateway Routing & PCI Compliance',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Implement smart dynamic gateway routing (auto-switch to backup gateway on failure), multi-currency support, and PCI-DSS compliance considerations.
      </p>
    `,
    codeExample: `// Smart Routing Gateway Switcher
export const getOptimalGateway = (currency, userCountry) => {
  if (currency === 'INR') return 'RAZORPAY';
  if (userCountry === 'US' || currency === 'USD') return 'STRIPE';
  return 'CASHFREE';
};`
  },
  {
    id: 'module-24-complete-project',
    title: 'Module 24 – Complete Hands-On MERN Project',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Build a complete production-style MERN payment application from scratch including pricing UI, backend REST APIs, Webhooks, GST invoices, and user access control.
      </p>

      <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4 my-6">
        <h4 class="font-black text-lg text-emerald-600 dark:text-emerald-400">Project Deliverables Checklist</h4>
        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>✅ React Vite Frontend with Tailwind CSS Pricing Table & Modals</li>
          <li>✅ Express Server with Razorpay & Webhook Endpoints</li>
          <li>✅ MongoDB Atlas Database Schemas with Audit Logs</li>
          <li>✅ Automatic PDF Invoice Generation with GST tax split</li>
          <li>✅ User Subscription Role Management Middleware</li>
        </ul>
      </div>
    `,
    codeExample: `# Repository Setup & Run Command
git clone https://github.com/ai-yugam/mern-payment-mastery.git
cd mern-payment-mastery
npm install
npm run dev`
  },
  {
    id: 'module-25-interview-prep',
    title: 'Module 25 – Payment System Interview Preparation',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Master high-frequency Payment System engineering interview questions, system design challenges, security trade-offs, and scenario questions.
      </p>

      <div class="space-y-6 my-8">
        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-base text-gray-900 dark:text-white">Q1: How do you prevent double-charging a customer if a network connection drops after payment?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Enforce <strong>Idempotency Keys</strong> at both gateway and database levels. Store unique <code>razorpay_order_id</code> in MongoDB with a unique index so duplicate payment completion requests or duplicate webhooks return the existing order status without executing a second charge.</p>
        </div>

        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-base text-gray-900 dark:text-white">Q2: Why must you verify HMAC signatures on the server side instead of trusting frontend callback parameters?</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Answer:</strong> Frontend code runs in the user's browser where malicious users can easily intercept network requests using tools like Postman or browser console and send a fake <code>{ status: 'PAID' }</code> payload. Verifying the HMAC SHA-256 signature using the secret key (known ONLY to the server and gateway) mathematically guarantees authenticity.</p>
        </div>

        <div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-2">
          <h4 class="font-bold text-base text-gray-900 dark:text-white">Q3: How do you handle webhook delivery delays or out-of-order execution?</h4>
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
  }
];
