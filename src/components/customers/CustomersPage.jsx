import { Link } from "react-router-dom";
import PageLayout from "../common/PageLayout";
import Greeting from "../common/Greeting";
import CustomersTable from "./CustomersTable";
import useCustomers from "../../hooks/useCustomers";

function CustomersPage() {
  const customers = useCustomers();
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
