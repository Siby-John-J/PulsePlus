
function TransactionData() {
  return (
    <div className='w-[100%] h-[90%]  py-3'>
        <TransactionDataHeader />
        <TransactionDataContent />
        <TransactionDataContent />
        <TransactionDataContent />
    </div>
  )
}

function TransactionDataHeader() {
    return (
        <div className='flex flex-row items-center justify-between px-5'>
            <div className='flex flex-row items-center'>
                <h1 className='font-semibold border-blue-600 border-b-2 py-2 '>Income</h1>
                <h1 className='font-semibold border-blue-600 border-b-2 py-2 mx-8'>Upcoming</h1>
            </div>
            <div className='flex flex-row items-center'>
                <input type="date" className='w-[15em] mx-4 outline-none border-gray-500 border-[2px] py-1 px-3 rounded-md' />
                <div className='bg-gray-700 h-[2em] w-[2em] rounded-full'></div>
            </div>
        </div>
    )
}

function TransactionDataContent() {
    return (
        <div className="w-[100%] mt-4 flex flex-row items-center  justify-between px-[3em]">
            <h1 className="font-semibold">Dear Reader</h1>
            <div className="flex flex-row items-center">
                <div className='bg-gray-700 h-[1em] w-[1em] rounded-full mx-3'></div>
                <h1 className="text-gray-500">Pending</h1>
            </div>
            <h1 className="font-semibold">09/11/2000</h1>
        </div>
    )
}

export default TransactionData