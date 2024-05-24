import { render, screen } from "@testing-library/react";
import DashboardLink from "../DashboardLink";

describe("DashboardLink component", () => {
  it("should render Dashboard link with correct href", () => {
    render(<DashboardLink />);
    const linkElement = screen.getByRole("link", { name: "Dashboard" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
