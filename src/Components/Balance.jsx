import React from 'react'
import { useTransaction } from '../Context/TransactionContext'

function Balance() {

  const { totalBalance } = useTransaction();
  return (
    <div>
      <p className='text-sm text-gray-600 mt-2'>Your Balance</p>
      <h1 className='text-4xl font-extrabold text-gray-900 mb-2'>₹{totalBalance}</h1>
    </div>
  )
}

export default Balance