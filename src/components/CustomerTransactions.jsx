import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";

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
          <ul>
            {transactions[month].map((transaction) => (
              <li key={transaction.transactionId}>
                {new Date(transaction.date).toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                })}
                :{transaction.description} - ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CustomerTransactions;
