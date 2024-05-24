import { Link } from "react-router-dom";

function CustomersTable({ customers }) {
  return (
    <table className="transactions-table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Rewards Link</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.customerId}>
            <td>{customer.customerName}</td>
            <td>
              <Link to={`/rewards/${customer.customerId}`}>Rewards</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomersTable
