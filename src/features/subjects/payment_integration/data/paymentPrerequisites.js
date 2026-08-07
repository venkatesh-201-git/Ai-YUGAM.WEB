export const paymentPrerequisites = {
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
};

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
