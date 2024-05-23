import React from 'react';

const CustomerRewardsNavbar = ({ totalPoints, customerId }) => (
  <div className="customer-rewards__navbar">
    <div className="customer-rewards__navbar__left">
      Rewards Points: {totalPoints}
    </div>
    <div className="customer-rewards__navbar__right">
      <a href="/">Dashboard</a>
      <a href={`/rewards/${customerId}`}>Rewards</a>
    </div>
  </div>
);

export default CustomerRewardsNavbar;