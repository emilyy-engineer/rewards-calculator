export const groupTransactionsByMonth = (transactions, numberOfMonths = 12) => {
  const grouped = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString("default", {
      year: "numeric",
      month: "long",
    });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(transaction);
    return acc;
  }, {});

  const sortedGrouped = Object.keys(grouped)
    .sort((a, b) => new Date(b) - new Date(a))
    .slice(0, numberOfMonths)
    .reduce((acc, month) => {
      const sortedTransactions = grouped[month].sort((a, b) => new Date(b.date) - new Date(a.date));
      acc[month] = sortedTransactions;
      return acc;
    }, {});

  return sortedGrouped;
};