import "./App.css";
import CustomerList from "./components/CustomerList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerTransactions from "./components/CustomerRewards";
import CustomerRewards from "./components/CustomerRewards";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/rewards/:customerId" element={<CustomerRewards />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/" element={<CustomerList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
