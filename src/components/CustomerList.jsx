import { useEffect, useState } from "react";
import { fetchCustomers } from "../api/fetchData";
import { Link } from "react-router-dom";
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
    <div>
      <h1>Customer List</h1>
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
  );
}

export default CustomerList;
