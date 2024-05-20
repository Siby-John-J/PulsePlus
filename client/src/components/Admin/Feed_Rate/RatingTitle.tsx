
function RatingTitle() {
  return (
    <div className='flex flex-row bg-gray-400 justify-between px-10 items-center h-[10%] w-[100%]'>
        <h1 className="text-2xl font-semibold">Feedbacks</h1>
        <div className='flex flex-row bg-gray-200'>
            <button>Filter</button>
        </div>
    </div>
  )
}

export default RatingTitle