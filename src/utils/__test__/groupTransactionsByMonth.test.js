import { groupTransactionsByMonth } from "../groupTransactionsByMonth";
import { transactionsData } from "../../data/transactionsData";
describe("groupTransactionsByMonth", () => {
  it("should group transactions by month and return the last 3 months", () => {
    const groupedTransactions = groupTransactionsByMonth(transactionsData, 3);
    const keys = Object.keys(groupedTransactions);
    console.log(keys)
    expect(keys).toEqual(['March 2024', 'February 2024', 'January 2024'])
  });
});
