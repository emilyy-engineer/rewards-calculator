import "./App.css";
import CustomerList from "./components/CustomerList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerRewards from "./components/CustomerRewards";
import CustomerTransactions from "./components/CustomerTransactions";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/rewards/:customerId" element={<CustomerRewards />} />
          <Route path="/transactions/:customerId" element={<CustomerTransactions />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/" element={<CustomerList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
