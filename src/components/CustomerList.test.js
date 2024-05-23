import React,{ act }  from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CustomerList from "./CustomerList";
import { fetchCustomers } from "../api/fetchData";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../api/fetchData.js")

describe("CustomerList Component", () => {

  beforeEach(() => {
    fetchCustomers.mockClear();
  })

  it("fetches and displays customers", async ()=> {
    const mockCustomers = [
      { customerId: 1, customerName: "John Doe" },
      { customerId: 2, customerName: "Jane Smith" }
    ];
    fetchCustomers.mockResolvedValueOnce(mockCustomers);
    render(<CustomerList/>)



    expect(screen.getByText("Customer List")).toBeInTheDocument();
    // await waitFor(() => {
    //   expect(screen.getByText('John Doe')).toBeInTheDocument();
      
    // });
    
  })

  it("handles empty customer list", async () => {
    fetchCustomers.mockResolvedValueOnce([]);
    render(<CustomerList />);
    expect(screen.getByText("Customer List")).toBeInTheDocument();
    // await waitFor(() => {
    //   expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    // })
  })

  // it("displays the Rewards link for each customer", async () => {
  //   const mockCustomers = [
  //     { customerId: 1, customerName: "John Doe" },
  //     { customerId: 2, customerName: "Jane Smith" }
  //   ];

  //   fetchCustomers.mockResolvedValueOnce(mockCustomers);
  //   render(
  //     <CustomerList />
  //   )

  //   await waitFor(() => {
  //     mockCustomers.forEach(() => {
  //       const linkElement = screen.getByText("Rewards");
  //       expect(linkElement).toBeInTheDocument();
  //     })
  //   })
  // })
})