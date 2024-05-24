import { useEffect, useState } from "react";
import { fetchCustomers } from "../api/fetchData";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import Greeting from "./Greeting";
import Navbar from "./Navbar";
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const customersData = await fetchCustomers();
      setCustomers(customersData);
    };
    fetchData();
  }, []);
  return (
    <PageLayout leftContent={<Link to="/">Home</Link>}>
      
      <div className="page-layout__activity">
        <Greeting name="Admin" role="admin" />
        <h2>Customer List</h2>
        <ul>
          {customers.map((customer) => (
            <li key={customer.customerId}>
              {customer.customerName}{" "}
              <Link to={`/rewards/${customer.customerId}`}>
                Rewards
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}

export default CustomerList;
