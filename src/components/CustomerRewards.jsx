import { useParams } from "react-router-dom";
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
import useCustomers from "../hooks/useCustomers";
import useCustomerTransactions from "../hooks/useCustomerTransactions";

function CustomerRewards() {
  const { customerId } = useParams();
  const customers = useCustomers();
  const transactions  = useCustomerTransactions(customerId);
  
  const customer = customers.find((c) => c.customerId === customerId);
  const customerName = customer ? customer.customerName : '';

  const totalPointsByMonth = calculateTotalPointsByMonth(transactions);
  const totalPoints = calculateTotalPoints(transactions);
  const allTransactions = Object.values(transactions).flat();
 
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
