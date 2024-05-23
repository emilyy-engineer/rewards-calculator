import { useEffect, useState } from "react"
import { fetchCustomers } from "../api/fetchData"

function CustomerList() {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const customersData = await fetchCustomers();
      setCustomers(customersData)
    }
    fetchData()
  },[])
  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.customerId}>
            {customer.customerName}
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default CustomerList
