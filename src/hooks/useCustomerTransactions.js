import { useEffect, useState } from "react";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import { fetchTransactionByCustomerId } from "../api/fetchData";

function useCustomerTransactions(customerId){
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    const fetchTransactions = async () => {
      const transactionsData = await fetchTransactionByCustomerId(customerId);
      
      const groupedTransactions = groupTransactionsByMonth(transactionsData, 3);
      setTransactions(groupedTransactions);
    };
    fetchTransactions();
  },[customerId])

  return transactions;
}

export default useCustomerTransactions;