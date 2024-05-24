import "./App.css";
import CustomerList from "./components/CustomersPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerRewards from "./components/CustomerRewards";
import CustomerTransactions from "./components/CustomerTransactions";
import CustomersPage from "./components/CustomersPage";

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
