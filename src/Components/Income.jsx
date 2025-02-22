import React from "react";
import { useTransaction } from "../Context/TransactionContext";

function Income() {

  const { cashBalance, upiBalance } = useTransaction();

  return (
    <>
      <div className="flex justify-between bg-green-100 p-4 rounded-lg shadow-md border border-green-300">
        <div className="border-r border-gray-400 w-full text-center">
          <h4 className="text-gray-600 text-sm">Cash</h4>
          <p className="text-green-600 font-semibold text-lg">₹{cashBalance}</p>
        </div>
        <div className="w-full text-center">
          <h4 className="text-gray-600 text-sm">UPI</h4>
          <p className="text-green-600 font-semibold text-lg">₹{upiBalance}</p>
        </div>
      </div>
    </>
  );
}
// bg-white/20    border-white/30

export default Income;
