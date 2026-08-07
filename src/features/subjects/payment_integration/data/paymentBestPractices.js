export const paymentBestPractices = {
  id: 'module-22-best-practices',
  title: 'Module 22 – Production Best Practices & Resilience',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Structured JSON logging, database transaction fallbacks, automated daily database backups, and disaster recovery strategies.
    </p>
  `,
  codeExample: `import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
});`
};

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

export const completePaymentProject = {
  id: 'module-24-complete-project',
  title: 'Module 24 – Complete Hands-On MERN Project',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Build a complete production-style MERN payment application from scratch including pricing UI, backend REST APIs, Webhooks, GST invoices, and user access control.
    </p>
  `,
  codeExample: `git clone https://github.com/ai-yugam/mern-payment-mastery.git
cd mern-payment-mastery
npm install
npm run dev`
};
