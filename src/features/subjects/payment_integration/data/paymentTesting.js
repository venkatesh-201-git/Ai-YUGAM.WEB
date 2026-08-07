export const paymentTesting = {
  id: 'module-20-testing',
  title: 'Module 20 – Sandbox & Automated Payment Testing',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Test edge cases in sandbox environments: simulated network drops, incorrect OTPs, duplicate webhook deliveries, and mock card assertions.
    </p>
  `,
  codeExample: `describe('Payment Security Tests', () => {
  it('should reject tampered payment signatures', () => {
    const isTamperedValid = verifyPaymentSignature('order_123', 'pay_123', 'fake_sig');
    expect(isTamperedValid).toBe(false);
  });
});`
};

export const paymentDeployment = {
  id: 'module-21-deployment',
  title: 'Module 21 – Production Deployment & SSL Setup',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Deploying MERN payment backends with HTTPS, Nginx reverse proxies, environment variable injection, and uptime monitoring alerts.
    </p>
  `,
  codeExample: `# Sample Nginx SSL Reverse Proxy Configuration for Payment Webhooks
server {
    listen 443 ssl http2;
    server_name api.ai-yugam.com;
}`
};

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
