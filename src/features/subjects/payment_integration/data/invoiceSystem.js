export const invoiceSystem = {
  id: 'module-11-invoice-system',
  title: 'Module 11 – Automated GST Invoice System',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Build automated invoice numbering engines, calculate State/Central GST taxes (CGST + SGST or IGST), render PDF invoices on-the-fly, and attach to emails.
    </p>
  `,
  codeExample: `export const calculateGST = (amount, state, merchantState = 'KA') => {
  const isSameState = state === merchantState;
  const taxRate = 0.18;
  const taxAmount = amount * taxRate;
  if (isSameState) {
    return { cgst: taxAmount / 2, sgst: taxAmount / 2, igst: 0, total: amount + taxAmount };
  }
  return { cgst: 0, sgst: 0, igst: taxAmount, total: amount + taxAmount };
};`
};
