export const enterpriseFeatures = {
  id: 'module-23-enterprise-features',
  title: 'Module 23 – Multi-Gateway Routing & PCI Compliance',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Implement smart dynamic gateway routing (auto-switch to backup gateway on failure), multi-currency support, and PCI-DSS compliance considerations.
    </p>
  `,
  codeExample: `export const getOptimalGateway = (currency, userCountry) => {
  if (currency === 'INR') return 'RAZORPAY';
  if (userCountry === 'US' || currency === 'USD') return 'STRIPE';
  return 'CASHFREE';
};`
};
