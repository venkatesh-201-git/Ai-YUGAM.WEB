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
