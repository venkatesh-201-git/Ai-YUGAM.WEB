export const smsNotifications = {
  id: 'module-13-sms-notifications',
  title: 'Module 13 – SMS & Multi-Channel Alerts',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Integrate Twilio, Fast2SMS, and WhatsApp Business API for instant payment confirmation alerts and OTP delivery.
    </p>
  `,
  codeExample: `import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendPaymentSMS = async (phone, amount) => {
  await client.messages.create({
    body: \`Ai-Yugam: Payment of ₹\${amount} confirmed. Thank you!\`,
    from: process.env.TWILIO_PHONE,
    to: phone
  });
};`
};

export const paymentSecurity = {
  id: 'module-14-security',
  title: 'Module 14 – Payment Security & Vulnerability Defense',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Protect your application against Replay Attacks, CSRF, XSS, NoSQL Injections, API rate-limiting, and enforce strict HMAC verification.
    </p>
  `,
  codeExample: `import rateLimit from 'express-rate-limit';

export const paymentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many payment requests, try again later' }
});`
};

export const subscriptions = {
  id: 'module-15-subscriptions',
  title: 'Module 15 – Automated Subscription Billing',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Build recurring subscription engines supporting Monthly/Yearly plans, auto-renewals, free trials, plan upgrades, downgrades, and cancellations.
    </p>
  `,
  codeExample: `export const createRecurringSubscription = async (customerId, planId) => {
  const subscription = await razorpay.subscriptions.create({
    plan_id: planId,
    customer_notify: 1,
    total_count: 12,
  });
  return subscription;
};`
};
