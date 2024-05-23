import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import { calculatePoints } from "../utils/calculatePoints";

function CustomerTransactions() {
  const { customerId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const fetchCustomerName = async () => {
      const customerData = await fetchCustomers();
      const customer = customerData.find(
        (c) => c.customerId === parseInt(customerId)
      );
      if (customer) {
        setCustomerName(customer.customerName);
      }
    };

    const fetchCustomerTransactions = async () => {
      const transactionsData = await fetchTransactionByCustomerId(
        parseInt(customerId)
      );
      const groupedTransactions = groupTransactionsByMonth(transactionsData);
      setTransactions(groupedTransactions);
    };
    fetchCustomerName();
    fetchCustomerTransactions();
  }, [customerId]);

  return (
    <div>
      <h2>{customerName}'s Transactions</h2>
      {Object.keys(transactions).map((month) => (
        <div key={month}>
          <h3>{month}</h3>
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
        {transactions[month].map((transaction) => (
          <tr key={transaction.transactionId}>
            <td>
              {new Date(transaction.date).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
              })}
            </td>
            <td>{transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>{calculatePoints(transaction.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      ))}
    </div>
  );
}

export default CustomerTransactions;
