import { useEffect, useState } from "react";
import { fetchTransactionByCustomerId } from "../api/fetchData";
import { useParams } from "react-router-dom";
import TransactionsTable from "./TransactionsTable";
import DashboardLink from "./DashboardLink";
import RewardsLink from "./RewardsLink";
import TotalRewardsPoints from "./TotalRewardsPoints";
import Navbar from "./Navbar";

function CustomerTransactions() {
  const { customerId } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchCustomerTransactions = async () => {
      const transactionsData = await fetchTransactionByCustomerId(customerId);
      setTransactions(transactionsData);
    };
    fetchCustomerTransactions();
  }, [customerId]);

  const allTransactions = Object.values(transactions).flat();
  return (
    <div className="customer-rewards">
      <Navbar
        rightContent={
          <>
           <DashboardLink />
            <RewardsLink/>
          </>
        }
      />
      <div className="customer-rewards__content">
        <div className="customer-rewards__activity">
          <h2>Customer Transactions</h2>
          <TransactionsTable
            transactions={allTransactions}
            includePoints={false}
          />
        </div>
      </div>
    </div>
  )
}

export default CustomerTransactions
