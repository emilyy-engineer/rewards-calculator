import React, { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomersPage from "./CustomersPage";
import { fetchCustomers } from "../api/fetchData";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../api/fetchData.js");

describe("CustomersPage Component", () => {
  beforeEach(() => {
    fetchCustomers.mockClear();
  });

  it("fetches and displays customers", async () => {
    render(<CustomersPage />);
    expect(screen.getByText("Customer List")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("handles empty customer list", async () => {
    render(<CustomersPage />);
    expect(screen.getByText("Customer List")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  // it("displays the Rewards link for each customer", async () => {
  //   const mockCustomers = [
  //     { customerId: 1, customerName: "John Doe" },
  //     { customerId: 2, customerName: "Jane Smith" }
  //   ];

  //   fetchCustomers.mockResolvedValueOnce(mockCustomers);
  //   render(
  //     <CustomersPage />
  //   )

  //   await waitFor(() => {
  //     mockCustomers.forEach(() => {
  //       const linkElement = screen.getByText("Rewards");
  //       expect(linkElement).toBeInTheDocument();
  //     })
  //   })
  // })
});
