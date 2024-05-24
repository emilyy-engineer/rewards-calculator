import { useParams } from "react-router-dom";
import {
  calculatePoints,
  calculateTotalPoints,
  calculateTotalPointsByMonth,
} from "../../utils/pointsUtils";
import TransactionsTable from "../transactions/TransactionsTable";
import DashboardLink from "../links/DashboardLink";
import TotalRewardsPoints from "./TotalRewardsPoints";
import Greeting from "../common/Greeting";
import MonthlyPointsItem from "./MonthlyPointsItem";
import TransactionsLink from "../links/TransactionsLink";
import PageLayout from "../common/PageLayout";
import "../../styles/PageLayout.scss";
import useCustomers from "../../hooks/useCustomers";
import useCustomerTransactions from "../../hooks/useCustomerTransactions";

function CustomerRewards() {
  const { customerId } = useParams();
  const customers = useCustomers();
  const transactions = useCustomerTransactions(customerId);
  if (!customers.length || !transactions) {
    return <div>Loading...</div>;
  }
  const customer = customers.find((c) => c.customerId === customerId);
  const customerName = customer ? customer.customerName : "";

  const totalPointsByMonth = calculateTotalPointsByMonth(transactions);
  const totalPoints = calculateTotalPoints(transactions);
  const allTransactions = Object.values(transactions).flat();

  return (
    <PageLayout
      leftContent={<TotalRewardsPoints totalPoints={totalPoints} />}
      rightContent={
        <>
          <DashboardLink />
          <TransactionsLink />
        </>
      }
    >
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
