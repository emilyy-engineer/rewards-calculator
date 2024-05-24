import { groupTransactionsByMonth } from "../groupTransactionsByMonth";
import { transactionsData } from "../../data/transactionsData";
describe("groupTransactionsByMonth", () => {
  it("should group transactions by month and return the last 3 months", () => {
    const groupedTransactions = groupTransactionsByMonth(transactionsData, 3);
    const keys = Object.keys(groupedTransactions);
    expect(keys).toEqual(['2024 March', '2024 February', '2024 January'])
  });
});
