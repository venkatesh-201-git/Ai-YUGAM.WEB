export const userActivation = {
  id: 'module-10-user-activation',
  title: 'Module 10 – User Premium Activation & Access Control',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Manage active subscriptions, automatically grant premium feature access, restrict expired users, and build Express authorization middleware.
    </p>
  `,
  codeExample: `export const requireActiveSubscription = async (req, res, next) => {
  if (req.user.subscriptionStatus !== 'ACTIVE') {
    return res.status(403).json({ success: false, message: 'Subscription required' });
  }
  next();
};`
};

export const invoiceSystem = {
  id: 'module-11-invoice-system',
  title: 'Module 11 – Automated GST Invoice System',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Build automated invoice numbering engines, calculate State/Central GST taxes (CGST + SGST or IGST), render PDF invoices on-the-fly, and attach to emails.
    </p>
  `,
  codeExample: `export const calculateGST = (amount, state, merchantState = 'KA') => {
  const isSameState = state === merchantState;
  const taxRate = 0.18;
  const taxAmount = amount * taxRate;
  if (isSameState) {
    return { cgst: taxAmount / 2, sgst: taxAmount / 2, igst: 0, total: amount + taxAmount };
  }
  return { cgst: 0, sgst: 0, igst: taxAmount, total: amount + taxAmount };
};`
};

export const emailSystem = {
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
    html: '<h1>Thank you for your payment!</h1>',
  });
};`
};
