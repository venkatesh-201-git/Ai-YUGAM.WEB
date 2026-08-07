export const couponsEngine = {
  id: 'module-16-coupons',
  title: 'Module 16 – Coupons & Discount Engine',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Implement percentage discounts, fixed cash discounts, voucher expiration dates, user-specific usage caps, and coupon validation logic.
    </p>
  `,
  codeExample: `export const applyCoupon = (amount, coupon) => {
  if (new Date() > new Date(coupon.expiryDate)) throw new Error('Coupon expired');
  let discount = 0;
  if (coupon.type === 'PERCENTAGE') {
    discount = (amount * coupon.value) / 100;
  } else if (coupon.type === 'FIXED') {
    discount = coupon.value;
  }
  return Math.max(0, amount - discount);
};`
};

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

export const adminDashboard = {
  id: 'module-18-admin-dashboard',
  title: 'Module 18 – Admin Payment Operations Dashboard',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Build admin tools to monitor total revenue metrics, active subscriber counts, failed transaction troubleshooting, and pending payouts.
    </p>
  `,
  codeExample: `export const getAdminMetrics = async () => {
  const totalRevenue = await Order.aggregate([
    { $match: { status: 'PAID' } },
    { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);
  return { revenue: totalRevenue[0]?.total || 0 };
};`
};
