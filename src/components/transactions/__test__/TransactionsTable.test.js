import { render, screen } from "@testing-library/react";
import { transactionsData } from "../../../data/transactionsData";
import TransactionsTable from "../TransactionsTable";
import { calculatePoints } from "../../../utils/pointsUtils";
describe("TransactionsTable component", () => {
  it("should not render transactions' points when includePoints is false", () => {
    const allTransactions = Object.values(transactionsData).flat();
    render(
      <TransactionsTable transactions={allTransactions} includePoints={false} />
    );

    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.queryByText("Points")).not.toBeInTheDocument();
  });

  it("should render transactions points when includePoints is true", () => {
    const allTransactions = Object.values(transactionsData).flat();
    render(
      <TransactionsTable transactions={allTransactions} includePoints={true} calculatePoints={calculatePoints} />
    );

    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Points")).toBeInTheDocument();
  });
});
