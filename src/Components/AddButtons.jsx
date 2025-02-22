import React from 'react'
import { Link } from 'react-router-dom'

function AddButtons() {
  return (
    <div>
      <div className='flex mt-6 flex-col space-y-4'>
        <Link to='/addMoney' className='mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition cursor-pointer'>Add Money</Link>
        <Link to='/addExpense' className='mt-1 w-full bg-gray-100 text-gray-800 py-2 rounded-xl shadow-md hover:bg-gray-200 transition cursor-pointer'>Add Expense</Link>
        <Link to='/transaction-history' className='mt-1 w-full bg-gray-100 text-gray-800 py-2 rounded-xl shadow-md hover:bg-gray-200 transition cursor-pointer'>Transaction History</Link>
      </div>
    </div>
  )
}

export default AddButtons