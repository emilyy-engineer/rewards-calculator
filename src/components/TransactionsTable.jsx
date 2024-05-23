import { calculatePoints } from "../utils/pointsUtils";
import { formatDate } from "../utils/formatDate";
function TransactionsTable({ transactions }) {
  console.log(transactions);
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.transactionId}>
            <td>{formatDate(transaction.date)}</td>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>{calculatePoints(transaction.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
