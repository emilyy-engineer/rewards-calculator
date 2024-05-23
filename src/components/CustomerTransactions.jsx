import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
const groupTransactionsByMonth = transactions => {
  const grouped = transactions.reduce((acc, transaction) => {
    const month = new Date(transaction.date).toLocaleString('default', { year: 'numeric', month: 'long' });
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
function CustomerTransactions() {
  const {customerId} = useParams();
  const [transactions, setTransactions] = useState([]);
  const [customerName, setCustomerName] = useState("");
  
  useEffect(() => {
    const fetchCustomerName = async () => {
      const customerData = await fetchCustomers();
      const customer = customerData.find(c => c.customerId === parseInt(customerId))
      if(customer){
        setCustomerName(customer.customerName)
      }
    }

    const fetchCustomerTransactions = async () =>{
      const transactionsData = await fetchTransactionByCustomerId(parseInt(customerId));
      console.log("transactionsData=",transactionsData);
      const groupedTransactions = groupTransactionsByMonth(transactionsData);
      setTransactions(groupedTransactions)
    }
    fetchCustomerName();
    fetchCustomerTransactions();
  }, [customerId])

  return (
    <div>
      <h2>{customerName}'s Transactions</h2>
      {Object.keys(transactions).map(month => (
        <div key={month}>
          <h3>{month}</h3>
          <ul>
            {transactions[month].map(transaction => (
              <li key={transaction.transactionId}>
                {new Date(transaction.date).toLocaleDateString()}: ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default CustomerTransactions
