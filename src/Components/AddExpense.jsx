import React, { useState } from 'react'
import Balance from './Balance'
import Expense from './Expense'
import { useTransaction } from '../Context/TransactionContext'

function AddExpense() {

  const[expense, setExpense] = useState("")
  const[expenseFor, setExpenseFor] = useState("")
  const[expenseMode, setExpenseMode] = useState("Cash")

  const { addExpense } = useTransaction();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!expense || !expenseFor) return;
    addExpense(expenseFor, expense, expenseMode);
    setExpense("");
    setExpenseFor("");
    setExpenseMode("Cash");
  }

  return (
    <div>
      <Balance />
      <Expense />
      <form className="mt-4 flex flex-col space-y-4">
        <div className='flex flex-col space-y-3'>
          <label className='text-gray-500 font-semibold self-start'>Paid For : </label>
          <input 
            type="text" 
            className="bg-gray-100 py-3 px-4 rounded-xl"
            onChange={(e) => {
              setExpenseFor(e.target.value)
            }}
            value={expenseFor}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-gray-500 font-semibold self-start">Amount :</label>
          <input
            type="number"
            className="bg-gray-100 py-3 px-4 rounded-xl"
            onChange={(e) => {
              setExpense(e.target.value);
            }}
            value={expense}
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
                checked={expenseMode === "Cash"}
                onChange={(e) => setExpenseMode(e.target.value)}
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
                checked={expenseMode === "UPI"}
                onChange={(e) => setExpenseMode(e.target.value)}
                className="accent-purple-600"
              />
            </div>
          </div>
        </div>
        <button 
          className="bg-red-500 text-gray-100 rounded-xl w-full py-3 hover:bg-red-600 hover:scale-105 transition cursor-pointer"
          onClick={handleSubmit}
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default AddExpense