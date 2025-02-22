import React from "react";
import { useTransaction } from "../Context/TransactionContext";

function Expense() {

  const  { totalExpense } = useTransaction();

  return (
    <div className="bg-red-100 p-4 rounded-lg mt-4 border border-red-300 shadow-md">
      <p className="text-gray-500 text-sm">Expense</p>
      <p className="text-red-600 font-semibold text-lg">₹{totalExpense}</p>
    </div>
  );
}

export default Expense;
