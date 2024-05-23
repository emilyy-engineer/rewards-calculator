export const groupTransactionsByMonth = (transactions) => {
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
    .slice(0, 3)
    .reduce((acc, month) => {
      acc[month] = grouped[month];
      return acc;
    }, {});

  return sortedGrouped;
};