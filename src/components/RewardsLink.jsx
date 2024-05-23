import { useParams } from "react-router-dom";

function RewardsLink() {
  const { customerId } = useParams();
  return (
    <a href={`/rewards/${customerId}`}>Rewards</a>
  );
}

export default RewardsLink
