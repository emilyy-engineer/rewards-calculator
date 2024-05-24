import { useEffect, useState } from "react";
import { fetchCustomers } from "../api/fetchData";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import CustomersTable from "./CustomersTable";
function CustomersPage() {
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
        <CustomersTable customers={customers} />
      </div>
    </PageLayout>
  );
}

export default CustomersPage;
