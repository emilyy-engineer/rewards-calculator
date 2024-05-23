const customersData = [
  { customerId: 1, customerName: "John Doe" },
  { customerId: 2, customerName: "Jane Smith" },
  { customerId: 3, customerName: "Michael Johnson" },
  { customerId: 4, customerName: "Emily Davis" },
];
const transactionsData = [
  {
    transactionId: 1,
    customerId: 1,
    customerName: "John Doe",
    date: "2024-01-15",
    amount: 120,
    description: "Purchased electronics"
  },
  {
    transactionId: 2,
    customerId: 2,
    customerName: "Jane Smith",
    date: "2024-02-18",
    amount: 200,
    description: "Grocery shopping"
  },
  {
    transactionId: 3,
    customerId: 3,
    customerName: "Michael Johnson",
    date: "2024-03-22",
    amount: 150,
    description: "Clothing purchase"
  },
  {
    transactionId: 4,
    customerId: 4,
    customerName: "Emily Davis",
    date: "2024-01-10",
    amount: 300,
    description: "Home appliances"
  },
  {
    transactionId: 5,
    customerId: 1,
    customerName: "John Doe",
    date: "2024-02-05",
    amount: 180,
    description: "Furniture purchase"
  },
  {
    transactionId: 6,
    customerId: 2,
    customerName: "Jane Smith",
    date: "2024-03-28",
    amount: 220,
    description: "Grocery shopping"
  },
  {
    transactionId: 7,
    customerId: 3,
    customerName: "Michael Johnson",
    date: "2024-01-14",
    amount: 250,
    description: "Electronics purchase"
  },
  {
    transactionId: 8,
    customerId: 4,
    customerName: "Emily Davis",
    date: "2024-02-05",
    amount: 190,
    description: "Clothing purchase"
  },
  {
    transactionId: 9,
    customerId: 1,
    customerName: "John Doe",
    date: "2024-03-16",
    amount: 170,
    description: "Grocery shopping"
  },
  {
    transactionId: 10,
    customerId: 2,
    customerName: "Jane Smith",
    date: "2024-01-20",
    amount: 210,
    description: "Furniture purchase"
  },
  {
    transactionId: 11,
    customerId: 3,
    customerName: "Michael Johnson",
    date: "2024-02-02",
    amount: 230,
    description: "Home appliances"
  },
  {
    transactionId: 12,
    customerId: 4,
    customerName: "Emily Davis",
    date: "2024-03-22",
    amount: 260,
    description: "Electronics purchase"
  },
  {
    transactionId: 13,
    customerId: 1,
    customerName: "John Doe",
    date: "2024-01-18",
    amount: 240,
    description: "Furniture purchase"
  },
  {
    transactionId: 14,
    customerId: 2,
    customerName: "Jane Smith",
    date: "2024-02-25",
    amount: 280,
    description: "Grocery shopping"
  },
  {
    transactionId: 15,
    customerId: 3,
    customerName: "Michael Johnson",
    date: "2024-03-15",
    amount: 170,
    description: "Clothing purchase"
  },
  {
    transactionId: 16,
    customerId: 4,
    customerName: "Emily Davis",
    date: "2024-01-11",
    amount: 140,
    description: "Electronics purchase"
  },
  {
    transactionId: 17,
    customerId: 1,
    customerName: "John Doe",
    date: "2024-02-08",
    amount: 160,
    description: "Home appliances"
  },
  {
    transactionId: 18,
    customerId: 2,
    customerName: "Jane Smith",
    date: "2024-03-12",
    amount: 300,
    description: "Furniture purchase"
  },
  {
    transactionId: 19,
    customerId: 3,
    customerName: "Michael Johnson",
    date: "2024-01-07",
    amount: 220,
    description: "Grocery shopping"
  },
  {
    transactionId: 20,
    customerId: 4,
    customerName: "Emily Davis",
    date: "2024-02-01",
    amount: 210,
    description: "Clothing purchase"
  }
];


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
