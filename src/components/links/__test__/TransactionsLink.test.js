import { render, screen } from "@testing-library/react";
import TransactionsLink from "../TransactionsLink";

describe("TransactionsLink component", () => {
  it("should render TransactionsLink link with correct href", () => {
    render(<TransactionsLink />);
    const linkElement = screen.getByRole("link", { name: "Transactions" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href");
  });
});
