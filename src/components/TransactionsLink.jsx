import { useParams } from "react-router-dom";

function TransactionsLink() {
  const { customerId } = useParams();
  return (
    <a href={`/transactions/${customerId}`}>Transactions</a>
  );
}

export default TransactionsLink
