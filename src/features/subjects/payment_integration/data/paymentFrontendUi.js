export const paymentFrontendUi = {
  id: 'module-6-frontend-ui',
  title: 'Module 6 – Frontend Checkout & Pricing UI',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Build high-converting pricing tables, checkout modals, payment popup triggers, and dynamic status screens (Success, Failed, Pending, History).
    </p>
  `,
  codeExample: `export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};`
};

export const paymentBackendApis = {
  id: 'module-7-backend-apis',
  title: 'Module 7 – Backend Express Payment APIs',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Implement clean, modular REST API endpoints for creating orders, verifying HMAC signatures, retrieving payment history, downloading invoices, and processing refunds.
    </p>
  `,
  codeExample: `import crypto from 'crypto';

export const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ success: false });
};`
};

export const paymentFlowSignature = {
  id: 'module-8-payment-flow',
  title: 'Module 8 – Complete Payment Flow & Signature Validation',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Step-by-step implementation of order creation, client popup triggering, cryptographic HMAC verification, database update, and user premium role activation.
    </p>
  `,
  codeExample: `const rzp = new window.Razorpay(options);
rzp.open();`
};

export const paymentWebhooks = {
  id: 'module-9-webhooks',
  title: 'Module 9 – Webhook Integration & Idempotency',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Why webhooks are non-negotiable for handling dropped browser connections, network failures, retry policies, signature verification, and idempotency handling.
    </p>
  `,
  codeExample: `export const handleWebhook = async (req, res) => {
  res.status(200).json({ status: 'ok' });
};`
};

export const userActivation = {
  id: 'module-10-user-activation',
  title: 'Module 10 – User Premium Activation & Access Control',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Manage active subscriptions, automatically grant premium feature access, restrict expired users, and build Express authorization middleware.
    </p>
  `,
  codeExample: `export const requireActiveSubscription = async (req, res, next) => {
  next();
};`
};
