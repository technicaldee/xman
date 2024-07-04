// components/TransactionsScreen.js
import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const transactions = [
  {
    id: 1,
    type: "deposit",
    amount: "500 CUSD",
    date: "2024-06-28",
    status: "Completed",
  },
  {
    id: 2,
    type: "withdrawal",
    amount: "200 CUSD",
    date: "2024-06-27",
    status: "Completed",
  },
  {
    id: 3,
    type: "deposit",
    amount: "1000 CUSD",
    date: "2024-06-25",
    status: "Pending",
  },
  {
    id: 4,
    type: "withdrawal",
    amount: "150 CUSD",
    date: "2024-06-23",
    status: "Completed",
  },
];

const TransactionsScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-center bg-blue-500 p-4 text-white text-2xl font-bold">
        Transactions
      </header>

      {/* Transactions List */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <div className="flex items-center">
                {transaction.type === "deposit" ? (
                  <AiOutlineArrowDown size={24} className="text-green-500" />
                ) : (
                  <AiOutlineArrowUp size={24} className="text-red-500" />
                )}
                <div className="ml-4">
                  <p className="text-gray-700">{transaction.amount}</p>
                  <p className="text-gray-500 text-sm">{transaction.date}</p>
                </div>
              </div>
              <span
                className={`text-sm ${
                  transaction.status === "Completed"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {transaction.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionsScreen;
