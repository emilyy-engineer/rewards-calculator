import { Route, Router, Routes } from "react-router-dom";
import { fetchCustomers, fetchTransactionByCustomerId } from "../api/fetchData";
import { calculatePoints } from "../utils/calculatePoints";
import { groupTransactionsByMonth } from "../utils/groupTransactionsByMonth";
import { render, waitFor, screen } from "@testing-library/react";
import CustomerRewards from "./CustomerRewards";

jest.mock('../api/fetchData')
jest.mock('../utils/groupTransactionsByMonth')
jest.mock('../utils/calculatePoints')

describe("CustomerRewards Component", ()=>{
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches and displays customer name and points', async () => {
    const mockCustomerId = 1;
    const mockCustomerName = "John Doe";
    const mockCustomers = [
      { customerId: 1, customerName: 'John Doe' },
      { customerId: 2, customerName: 'Jane Smith' }
    ];
    const mockTransactions = [
      { transactionId: 1, customerId: 1, amount: 120, date: '2024-01-15' },
      { transactionId: 5, customerId: 1, amount: 180, date: '2024-02-05' }
    ];
    const mockGroupedTransactions = {
      '2024-01': [mockTransactions[0]],
      '2024-02': [mockTransactions[1]]
    };
    fetchCustomers.mockResolvedValueOnce(mockCustomers);
    fetchTransactionByCustomerId.mockResolvedValueOnce(mockTransactions);
    groupTransactionsByMonth.mockReturnValueOnce(mockGroupedTransactions);
    calculatePoints.mockImplementation(amount => amount);
    render(<CustomerRewards />)
    // window.history.pushState({}, 'Customer Rewards', `/customer/${mockCustomerId}`);
    
      expect(screen.getByText(`Hi!${mockCustomerName}`)).toBeInTheDocument();
    
    
  })
})