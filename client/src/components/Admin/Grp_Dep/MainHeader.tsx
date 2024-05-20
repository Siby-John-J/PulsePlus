
function MainHeader() {
  return (
    <div className="h-[15%]">
    <div className="flex flex-row h-[50%] items-center justify-between px-5">
      <h1 className="text-xl font-medium">Groups & Departments</h1>
      <div className="font-medium text-white">
        <button className="bg-blue-600 px-5 py-2 rounded-xl mx-2">Create Group</button>
        <button className="bg-blue-600 px-5 py-2 rounded-xl mx-2">Create Department</button>
      </div>
    </div>
    <div className=" h-[50%] flex items-center px-5">
      <h1 className="font-light text-lg text-blue-600">/Groups</h1>
    </div>
  </div>
  )
}

export default MainHeader
