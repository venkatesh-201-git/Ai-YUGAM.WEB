export const refundsSystem = {
  id: 'module-17-refunds',
  title: 'Module 17 – Refund Processing System',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Handle Full Refunds, Partial Refunds, Instant Refunds, tracking refund status, and handling refund webhooks.
    </p>
  `,
  codeExample: `export const initiateRefund = async (paymentId, amount) => {
  const refund = await razorpay.payments.refund(paymentId, {
    amount: amount * 100,
    speed: 'normal',
    notes: { reason: 'Customer requested refund' }
  });
  return refund;
};`
};
