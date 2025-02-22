import React, { useState } from "react";
import Balance from "./Balance";
import Income from "./Income";
import { useTransaction } from "../Context/TransactionContext";

function AddMoney() {
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");

  const { addMoney } = useTransaction();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!amount) return;
    addMoney(amount, paymentMode)
    setAmount("")
  }

  return (
    <div>
      <Balance />
      <Income />
      <form className="mt-4 flex flex-col space-y-4">
        <div className="flex flex-col space-y-3">
          <label className="text-gray-500 font-semibold self-start">Amount :</label>
          <input
            className="bg-gray-100 py-3 px-4 rounded-xl"
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
              console.log(amount);
            }}
            value={amount}
          />
        </div>
        <div>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <label htmlFor="cash-mode">Cash</label>
              <input
                type="radio"
                name="expense-mode"
                id="cash-mode"
                value="Cash"
                checked={paymentMode === "Cash"}
                onChange={(e) => setPaymentMode(e.target.value)}
                className="accent-purple-600"
              />
            </div>

            {/* UPI Option */}
            <div className="flex gap-2 items-center">
              <label htmlFor="upi-mode">UPI</label>
              <input
                type="radio"
                name="expense-mode"
                id="upi-mode"
                value="UPI"
                checked={paymentMode === "UPI"}
                onChange={(e) => setPaymentMode(e.target.value)}
                className="accent-purple-600"
              />
            </div>
          </div>
        </div>
        <button 
          className="bg-green-500 text-gray-100 rounded-xl w-full py-3 hover:bg-green-600 hover:scale-105 transition cursor-pointer"
          onClick={handleSubmit}
        >
          Add Money
        </button>
      </form>
    </div>
  );
}

export default AddMoney;
