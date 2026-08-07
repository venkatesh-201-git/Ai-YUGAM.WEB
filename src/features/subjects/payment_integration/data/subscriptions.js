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
