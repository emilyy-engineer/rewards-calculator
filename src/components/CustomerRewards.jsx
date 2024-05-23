import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import { calculatePoints, calculateTotalPoints, calculateTotalPointsByMonth } from "../utils/pointsUtils";
import TransactionsTable from "./TransactionsTable";

function CustomerRewards() {
  const { customerId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const totalPointsByMonth = calculateTotalPointsByMonth(transactions);
  const totalPoints = calculateTotalPoints(transactions);
  const allTransactions = Object.values(transactions).flat();
  useEffect(() => {
    const fetchCustomerName = async () => {
      const customerData = await fetchCustomers();
      const customer = customerData.find((c) => c.customerId === customerId);
      if (customer) {
        setCustomerName(customer.customerName);
      }
    };

    const fetchCustomerTransactions = async () => {
      const transactionsData = await fetchTransactionByCustomerId(customerId);
      // console.log("transactionsData:", transactionsData)
      // console.log("groupTransactionsByMonth=",groupTransactionsByMonth)
      const groupedTransactions = groupTransactionsByMonth(transactionsData);
      // console.log("groupedTransactions=",groupedTransactions)
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
          <li key={month}>
            {month}: {points} points
          </li>
        ))}
      </ul>
      <h2>Transactions</h2>
      <TransactionsTable transactions={allTransactions} />
    </div>
  );
}

export default CustomerRewards;
