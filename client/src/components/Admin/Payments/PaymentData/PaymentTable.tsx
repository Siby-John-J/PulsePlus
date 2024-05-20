import React from 'react'
import PaymentChart from './PaymentChart'
import TransactionData from './TransactionData'

function PaymentTable() {
  return (
    <div className='w-[50%] h-[100%] flex flex-col'>
      <div className='w-[100%] flex flex-row justify-between items-center py-3 px-5'>
      <h1 className='text-2xl font-semibold'>Transactions</h1>
      <div className='h-[2em] w-[2em] rounded-full bg-black'></div>
      </div>
      <TransactionData />
    </div>
  )
}

export default PaymentTable