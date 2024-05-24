import { useEffect, useState } from 'react';
import { fetchCustomers } from '../api/fetchData';

function useCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const customersData = await fetchCustomers();
      setCustomers(customersData);
    };
    fetchData();
  }, []);

  return customers;
}

export default useCustomers;