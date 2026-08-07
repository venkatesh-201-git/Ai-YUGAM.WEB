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
