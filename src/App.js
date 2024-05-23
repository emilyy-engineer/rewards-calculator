import "./App.css";
import CustomerList from "./components/CustomerList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/transactions/:customerId">
            
          </Route>

          <Route path="/customers">
            <CustomerList />
          </Route>
          <Route path="/">
            <CustomerList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
