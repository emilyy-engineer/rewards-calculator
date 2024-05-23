import { groupTransactionsByMonth } from "./groupTransactionsByMonth";

describe("groupTransactionsByMonth", () => {
  it("should group transactions by month and return the last 3 months", () => {
    const transactions = [
      {
        transactionId: 1,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-01",
        amount: 120,
        description: "Purchased electronics",
      },
      {
        transactionId: 2,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-02",
        amount: 130,
        description: "Grocery shopping",
      },
      {
        transactionId: 3,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-03",
        amount: 140,
        description: "Clothing purchase",
      },
      {
        transactionId: 4,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-04",
        amount: 150,
        description: "Home appliances",
      },
      {
        transactionId: 5,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-05",
        amount: 160,
        description: "Furniture purchase",
      },
      {
        transactionId: 6,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-06",
        amount: 170,
        description: "Purchased electronics",
      },
      {
        transactionId: 7,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-01-07",
        amount: 180,
        description: "Grocery shopping",
      },
      {
        transactionId: 8,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-01",
        amount: 190,
        description: "Clothing purchase",
      },
      {
        transactionId: 9,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-02",
        amount: 200,
        description: "Home appliances",
      },
      {
        transactionId: 10,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-03",
        amount: 210,
        description: "Furniture purchase",
      },
      {
        transactionId: 11,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-04",
        amount: 220,
        description: "Purchased electronics",
      },
      {
        transactionId: 12,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-05",
        amount: 230,
        description: "Grocery shopping",
      },
      {
        transactionId: 13,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-06",
        amount: 240,
        description: "Clothing purchase",
      },
      {
        transactionId: 14,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-02-07",
        amount: 250,
        description: "Home appliances",
      },
      {
        transactionId: 15,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-03-01",
        amount: 260,
        description: "Furniture purchase",
      },
      {
        transactionId: 16,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-03-02",
        amount: 270,
        description: "Purchased electronics",
      },
      {
        transactionId: 17,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-03-03",
        amount: 280,
        description: "Grocery shopping",
      },
      {
        transactionId: 18,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-03-04",
        amount: 290,
        description: "Clothing purchase",
      },
      {
        transactionId: 19,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-03-05",
        amount: 300,
        description: "Home appliances",
      },
      {
        transactionId: 20,
        customerId: 1,
        customerName: "John Doe",
        date: "2024-03-06",
        amount: 310,
        description: "Furniture purchase",
      },
    ];
    const expected = {
      "March 2024": [
        { transactionId: 15, customerId: 1, customerName: "John Doe", date: "2024-03-01", amount: 260, description: "Furniture purchase" },
        { transactionId: 16, customerId: 1, customerName: "John Doe", date: "2024-03-02", amount: 270, description: "Purchased electronics" },
        { transactionId: 17, customerId: 1, customerName: "John Doe", date: "2024-03-03", amount: 280, description: "Grocery shopping" },
        { transactionId: 18, customerId: 1, customerName: "John Doe", date: "2024-03-04", amount: 290, description: "Clothing purchase" },
        { transactionId: 19, customerId: 1, customerName: "John Doe", date: "2024-03-05", amount: 300, description: "Home appliances" },
        { transactionId: 20, customerId: 1, customerName: "John Doe", date: "2024-03-06", amount: 310, description: "Furniture purchase" }
      ],
      "February 2024": [
        { transactionId: 8, customerId: 1, customerName: "John Doe", date: "2024-02-01", amount: 190, description: "Clothing purchase" },
        { transactionId: 9, customerId: 1, customerName: "John Doe", date: "2024-02-02", amount: 200, description: "Home appliances" },
        { transactionId: 10, customerId: 1, customerName: "John Doe", date: "2024-02-03", amount: 210, description: "Furniture purchase" },
        { transactionId: 11, customerId: 1, customerName: "John Doe", date: "2024-02-04", amount: 220, description: "Purchased electronics" },
        { transactionId: 12, customerId: 1, customerName: "John Doe", date: "2024-02-05", amount: 230, description: "Grocery shopping" },
        { transactionId: 13, customerId: 1, customerName: "John Doe", date: "2024-02-06", amount: 240, description: "Clothing purchase" },
        { transactionId: 14, customerId: 1, customerName: "John Doe", date: "2024-02-07", amount: 250, description: "Home appliances" }
      ],
      "January 2024": [
        { transactionId: 1, customerId: 1, customerName: "John Doe", date: "2024-01-01", amount: 120, description: "Purchased electronics" },
        { transactionId: 2, customerId: 1, customerName: "John Doe", date: "2024-01-02", amount: 130, description: "Grocery shopping" },
        { transactionId: 3, customerId: 1, customerName: "John Doe", date: "2024-01-03", amount: 140, description: "Clothing purchase" },
        { transactionId: 4, customerId: 1, customerName: "John Doe", date: "2024-01-04", amount: 150, description: "Home appliances" },
        { transactionId: 5, customerId: 1, customerName: "John Doe", date: "2024-01-05", amount: 160, description: "Furniture purchase" },
        { transactionId: 6, customerId: 1, customerName: "John Doe", date: "2024-01-06", amount: 170, description: "Purchased electronics" },
        { transactionId: 7, customerId: 1, customerName: "John Doe", date: "2024-01-07", amount: 180, description: "Grocery shopping" }
      ]
    };
    const result = groupTransactionsByMonth(transactions);
    expect(result).toEqual(expected)
  });
});
