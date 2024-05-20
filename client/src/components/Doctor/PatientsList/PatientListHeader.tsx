
function PatientListHeader() {
  return (
    <div className=' w-[100%] h-[15%] flex items-center flex-row pt-6'>
        <div className='px-5 py-1 mx-9 border-[1px] border-black bg-white'>
            Filters
        </div>
        <input className='outline-none border-[1px] border-black py-1 pl-8 rounded-md placeholder:text-black' 
            placeholder='Search by name or #id' type="text" />
    </div>
  )
}

export default PatientListHeader