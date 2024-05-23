import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCustomers } from "../api/fetchData";

function CustomerTransactions() {
  const {customerId} = useParams();
  const [transactions, setTransactions] = useState([]);
  const [customerName, setCustomerName] = useState("");
  
  useEffect(() => {
    const fetchCustomerName = async () => {
      const customerData = await fetchCustomers();
      const customer = customerData.find(c => c.customerId === parseInt(customerId))
      if(customer){
        setCustomerName(customer.customerName)
      }
    }
    fetchCustomerName();
  }, [customerId])

  return (
    <div>
      <h2>{customerName}'s Transactions</h2>
    </div>
  )
}

export default CustomerTransactions
