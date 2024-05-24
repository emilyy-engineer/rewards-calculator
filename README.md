# Rewards Calculator

This is a React front-end application that calculates rewards for customers based on their transactions. The application simulates async API calls to fetch customer and transaction data.

## Table of Contents

- [Project Setup](#project-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Simulated API](#simulated-api)
- [Components](#components)

## Project Setup
1. **Clone the repository:**
    ```sh
    git clone https://github.com/emilyy-engineer/rewards-calculator.git
    cd rewards-calculator
    ```
2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Simulated API

The simulated API calls are located in the `src/api/fetchData.js` file. These functions mimic async API requests to fetch customer and transaction data.

## Project Structure
src/
├── api/
│ └── fetchData.js # Simulated API calls
├── components/
│ ├── common/
│ │ ├── Navbar.jsx
│ │ ├── PageLayout.jsx
│ │ └── Greeting.jsx
│ ├── customers/
│ │ ├── CustomersPage.jsx
│ │ ├── CustomersTable.jsx
│ │ ├── CustomerRewards.jsx
│ │ ├── MonthlyPointsItem.jsx
│ │ └── TotalRewardsPoints.jsx
│ ├── links/
│ │ ├── DashboardLink.jsx
│ │ ├── RewardsLink.jsx
│ │ └── TransactionsLink.jsx
│ ├── transactions/
│ └── TransactionsTable.jsx
│ └── CustomerTransactions.jsx
├── hooks/
│ ├── useCustomers.js # Custom hook for fetching customers
│ └── useCustomerTransactions.js # Custom hook for fetching transactions
├── utils/
│ ├── formatDate.js # Utility function for date formatting
│ └── groupTransactionsByMonth.js # Utility function for grouping transactions
├── styles/
│ ├── App.scss
│ ├── Navbar.scss
│ ├── PageLayout.scss
│ ├── TransactionsTable.scss
│ └── reset.scss
├── tests/
│ ├── useCustomers.test.js # Unit tests for useCustomers hook
│ └── useCustomerTransactions.test.js # Unit tests for useCustomerTransactions hook
├── App.js
├── index.js
└── setupTests.js

## Components

- **common**: Contains common components used across the application, such as `Navbar`, `PageLayout`, and `Greeting`.
- **customers**: Contains components related to customer features, such as `CustomersPage`, `CustomersTable`, and `CustomerRewards`.
- **links**: Contains link components for navigation, such as `DashboardLink`, `RewardsLink`, and `TransactionsLink`.
- **transactions**: Contains components related to transactions, such as `TransactionsTable` and `CustomerTransactions`.