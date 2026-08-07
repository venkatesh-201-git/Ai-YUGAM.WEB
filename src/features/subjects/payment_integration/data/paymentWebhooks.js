export const paymentWebhooks = {
  id: 'module-9-webhooks',
  title: 'Module 9 – Webhook Integration & Idempotency',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Why webhooks are non-negotiable for handling dropped browser connections, network failures, retry policies, signature verification, and idempotency handling.
    </p>
  `,
  codeExample: `export const handleWebhook = async (req, res) => {
  res.status(200).json({ status: 'ok' });
};`
};
