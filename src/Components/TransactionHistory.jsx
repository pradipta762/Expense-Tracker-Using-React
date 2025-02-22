import React, { useState } from "react";
import { useTransaction } from "../Context/TransactionContext";
import Balance from "./Balance";
import Income from "./Income";
import Expense from "./Expense";

function TransactionHistory() {
  const { transactions } = useTransaction();
  const[showAll, setShowAll] = useState(false);
  return (
    <div>
      <Balance />
      <Income />
      <Expense />
      {transactions.length >= 1 && 
        <div className="mt-4 mb-5">
        <h4 className="font-bold text-md text-gray-600">Transaction History</h4>
        <div className="flex flex-col space-y-3 mt-4 overflow-scroll max-h-[170px]">
          {(showAll ? transactions : transactions.slice(0, 3)).map((transaction) => (
            <div
              key={transaction.id}
              className={`flex items-center justify-between border-r-4 py-2 px-2 shadow-md bg-gray-100 rounded-md ${transaction.type === 'expense' ? 'border-red-500' : 'border-green-500'}`}
            >
              <h2>{transaction.text}</h2>
              <p className="text-center">{transaction.mode}</p>
              <p>
                {transaction.type === "expense"
                  ? `-${transaction.amount}`
                  : transaction.amount}
              </p>
            </div>
          ))}
        </div>
        <button
        className="mt-4 bg-slate-700 text-white w-full py-1 rounded-xl cursor-pointer"
          onClick={() => setShowAll((prev) => !prev)}
        >{showAll ? 'Show Less' : 'Show All'}</button>
      </div>
      }
    </div>
  );
}

export default TransactionHistory;
