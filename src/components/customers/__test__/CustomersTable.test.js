import { render, screen } from "@testing-library/react";
import { customersData } from "../../../data/customerData";
import CustomersTable from "../CustomersTable";
import { BrowserRouter } from "react-router-dom";
describe("CustomerTable component", () => {
  it("renders customer name correcty", () => {
    render(
      <BrowserRouter>
        <CustomersTable customers={customersData} />
      </BrowserRouter>
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Michael Johnson')).toBeInTheDocument();
    expect(screen.getByText('Emily Davis')).toBeInTheDocument();
  });
});
