import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import { calculatePoints, calculateTotalPoints, calculateTotalPointsByMonth } from "../utils/pointsUtils";
import TransactionsTable from "./TransactionsTable";
import "../styles/CusotmerRewards.scss"
import CustomerRewardsNavbar from "./CustomerRewardsNavbar";
import Navbar from './Navbar';
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
      const groupedTransactions = groupTransactionsByMonth(transactionsData, 3);
      console.log("groupedTransactions=",groupedTransactions)
      setTransactions(groupedTransactions);
    };
    fetchCustomerName();
    fetchCustomerTransactions();
  }, [customerId]);
  const leftContent = <div>Rewards Points: {totalPoints}</div>;
  const rightContent = (
    <>
      <a href="/">Dashboard</a>
      <a href={`/rewards/${customerId}`}>Rewards</a>
    </>
  );
  return (
    <div className="customer-rewards">
      <Navbar leftContent={leftContent} rightContent={rightContent} />
      <div className="customer-rewards__content">
        <div className="customer-rewards__activity">
          <h3>Hi! {customerName}</h3>
          <h2>Reward Points Activity</h2>
          <div className="customer-rewards__transactions">
            <TransactionsTable transactions={allTransactions} />
          </div>
        </div>
        <div className="customer-rewards__summary">
          <div className="customer-rewards__total-points">
            Your Total Points for Past 3 Months: {totalPoints}
          </div>
          <ul>
            {Object.entries(totalPointsByMonth).map(([month, points]) => (
              <li key={month}>
                {month}: {points} points
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerRewards;
