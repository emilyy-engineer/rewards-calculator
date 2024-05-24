import '../src/styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerRewards from "./components/customers/CustomerRewards";
import CustomerTransactions from "./components/transactions/CustomerTransactions";
import CustomersPage from "./components/customers/CustomersPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/rewards/:customerId" element={<CustomerRewards />} />
          <Route
            path="/transactions/:customerId"
            element={<CustomerTransactions />}
          />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/" element={<CustomersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
