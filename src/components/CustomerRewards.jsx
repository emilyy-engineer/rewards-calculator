import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import { calculatePoints } from "../utils/calculatePoints";

function CustomerRewards() {
  const { customerId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const totalPointsByMonth = Object.keys(transactions).reduce((totals, month) => {
    const monthlyTransactions = transactions[month];
    const monthlyTotalPoints = monthlyTransactions.reduce((total, transaction) => total + calculatePoints(transaction.amount), 0);
    return { ...totals, [month]: monthlyTotalPoints };
  }, {});
  const allTransactions = Object.values(transactions).flat();
  const totalPoints = Object.values(transactions)
  .flat()
  .reduce((total, transaction) => total + calculatePoints(transaction.amount), 0);
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
      <h3>Hi!{customerName}</h3>
      <h3>Your Total Points for Past 3 Months is {totalPoints}</h3>
  
      <ul>
        {Object.entries(totalPointsByMonth).map(([month, points]) => (
          <li key={month}>{month}: {points} points</li>
        ))}
      </ul>
       <h2>Transactions</h2>
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
          {allTransactions.map((transaction) => (
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
  );
}

export default CustomerRewards;
