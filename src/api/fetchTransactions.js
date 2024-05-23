const transactionsData = [
  { customerId: 1, customerName: 'John Doe', date: '2024-01-15', amount: 120 },
  { customerId: 2, customerName: 'Jane Smith', date: '2024-02-18', amount: 200 },
  { customerId: 3, customerName: 'Michael Johnson', date: '2024-03-22', amount: 150 },
  { customerId: 4, customerName: 'Emily Davis', date: '2024-01-10', amount: 300 },
  { customerId: 1, customerName: 'John Doe', date: '2024-02-05', amount: 180 },
  { customerId: 2, customerName: 'Jane Smith', date: '2024-03-28', amount: 220 },
  { customerId: 3, customerName: 'Michael Johnson', date: '2024-01-14', amount: 250 },
  { customerId: 4, customerName: 'Emily Davis', date: '2024-02-05', amount: 190 },
  { customerId: 1, customerName: 'John Doe', date: '2024-03-16', amount: 170 },
  { customerId: 2, customerName: 'Jane Smith', date: '2024-01-20', amount: 210 },
  { customerId: 3, customerName: 'Michael Johnson', date: '2024-02-02', amount: 230 },
  { customerId: 4, customerName: 'Emily Davis', date: '2024-03-22', amount: 260 },
  { customerId: 1, customerName: 'John Doe', date: '2024-01-18', amount: 240 },
  { customerId: 2, customerName: 'Jane Smith', date: '2024-02-25', amount: 280 },
  { customerId: 3, customerName: 'Michael Johnson', date: '2024-03-15', amount: 170 },
  { customerId: 4, customerName: 'Emily Davis', date: '2024-01-11', amount: 140 },
  { customerId: 1, customerName: 'John Doe', date: '2024-02-08', amount: 160 },
  { customerId: 2, customerName: 'Jane Smith', date: '2024-03-12', amount: 300 },
  { customerId: 3, customerName: 'Michael Johnson', date: '2024-01-07', amount: 220 },
  { customerId: 4, customerName: 'Emily Davis', date: '2024-02-01', amount: 210 }
];


export const fetchTransctions = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(transactionsData)
    }, 1000)
  })
}