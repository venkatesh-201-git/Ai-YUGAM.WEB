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
