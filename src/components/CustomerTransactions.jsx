import { useParams } from "react-router-dom";
import TransactionsTable from "./TransactionsTable";
import DashboardLink from "./DashboardLink";
import RewardsLink from "./RewardsLink";
import "../styles/PageLayout.scss";
import PageLayout from "./PageLayout";
import useCustomerTransactions from "../hooks/useCustomerTransactions";

function CustomerTransactions() {
  const { customerId } = useParams();
  const transactions = useCustomerTransactions(customerId);
  const allTransactions = Object.values(transactions).flat();

  return (
    <PageLayout
      rightContent={
        <>
          <DashboardLink />
          <RewardsLink />
        </>
      }
    >
      <div className="page-layout__activity">
        <h2>Customer Transactions</h2>
        <TransactionsTable
          transactions={allTransactions}
          includePoints={false}
        />
      </div>
    </PageLayout>
  )
}

export default CustomerTransactions
