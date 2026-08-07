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
