export const paymentSecurity = {
  id: 'module-14-security',
  title: 'Module 14 – Payment Security & Vulnerability Defense',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Protect your application against Replay Attacks, CSRF, XSS, NoSQL Injections, API rate-limiting, and enforce strict HMAC verification.
    </p>
  `,
  codeExample: `import rateLimit from 'express-rate-limit';

export const paymentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: 'Too many payment requests, try again later' }
});`
};
