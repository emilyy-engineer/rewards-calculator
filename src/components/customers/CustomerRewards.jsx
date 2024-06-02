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
import { useMemo } from "react";

function CustomerRewards() {
  const { customerId } = useParams();
  const customers = useCustomers();
  const transactions = useCustomerTransactions(customerId);


  const customer = useMemo(
    () => customers.find((c) => c.customerId === customerId),
    [customers, customerId]
  );
  const customerName = customer ? customer.customerName : "";

  const totalPointsByMonth = useMemo(
    () => calculateTotalPointsByMonth(transactions),
    [transactions]
  );
  const totalPoints = useMemo(
    () => calculateTotalPoints(transactions),
    [transactions]
  );
  const allTransactions = useMemo(
    () => Object.values(transactions).flat(),
    [transactions]
  );
  if (!customers.length || !transactions) {
    return <div>Loading...</div>;
  }


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
