export const financialReports = {
  id: 'module-19-reports',
  title: 'Module 19 – Financial Reporting & Analytics',
  content: `
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Generate Daily/Monthly revenue charts, churn rates, average revenue per user (ARPU), and exportable CSV analytics reports.
    </p>
  `,
  codeExample: `export const getDailyRevenueReport = async () => {
  return await Order.aggregate([
    { $match: { status: 'PAID' } },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        dailyTotal: { $sum: "$amount" },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ]);
};`
};
