export const calculatePoints = (amount) => {
  let points = 0;
  if(amount > 100){
    points += (amount - 100) * 2;
    amount = 100;
  }

  if(amount > 50){
    points += (amount - 50) * 1;
  }
  return points;
}

export const calculateTotalPoints = (transactions) => {
  return Object.values(transactions)
    .flat()
    .reduce(
      (total, transaction) => total + calculatePoints(transaction.amount),
      0
    );
};

export const calculateTotalPointsByMonth = (transactions) => {
  return Object.keys(transactions).reduce((totals, month) => {
    const monthlyTransactions = transactions[month];
    const monthlyTotalPoints = monthlyTransactions.reduce(
      (total, transaction) => total + calculatePoints(transaction.amount),
      0
    );
    return { ...totals, [month]: monthlyTotalPoints };
  }, {});
};