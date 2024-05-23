import { transactionsData } from "../data/transactionsData";
import { customersData } from "../data/customerData";

export const fetchCustomers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customersData);
    }, 100);
  });
};

export const fetchTransctions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactionsData);
    }, 100);
  });
};

export const fetchTransactionByCustomerId = async (customerId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transactionByCustomerId = transactionsData.filter(
        (transaction) => transaction.customerId === customerId
      );
      resolve(transactionByCustomerId);
    }, 100);
  });
};
