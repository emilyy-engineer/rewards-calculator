import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import {
  calculatePoints,
  calculateTotalPoints,
  calculateTotalPointsByMonth,
} from "../utils/pointsUtils";
import TransactionsTable from "./TransactionsTable";
import DashboardLink from "./DashboardLink";
import TotalRewardsPoints from "./TotalRewardsPoints";
import Greeting from "./Greeting";
import MonthlyPointsItem from "./MonthlyPointsItem";
import TransactionsLink from "./TransactionsLink";
import PageLayout from "./PageLayout";
import "../styles/PageLayout.scss";

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
      console.log("groupedTransactions=", groupedTransactions);
      setTransactions(groupedTransactions);
    };
    fetchCustomerName();
    fetchCustomerTransactions();
  }, [customerId]);

  return (
    <PageLayout leftContent={<TotalRewardsPoints totalPoints={totalPoints} />} rightContent={
      <>
        <DashboardLink />
        <TransactionsLink />
      </>
    }>
    <div className="page-layout__activity">
        <Greeting name={customerName} role="customer" />
        <h2>Reward Points Activity</h2>
        <TransactionsTable
          transactions={allTransactions}
          includePoints={true}
          calculatePoints={calculatePoints}
        />
      </div>
      <div className="page-layout__summary">
        <h3>Monthly Rewards Points</h3>
        <ul>
          {Object.entries(totalPointsByMonth).map(([month, points]) => (
            <MonthlyPointsItem key={month} month={month} points={points} />
          ))}
        </ul>
      </div>

    </PageLayout>
  );
}

export default CustomerRewards;
