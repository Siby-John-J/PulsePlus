
function Department() {
  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center'>
        <DepartmentModel />
        <DepartmentModel />
        <DepartmentModel />
        <DepartmentModel />
        <DepartmentModel />
        <DepartmentModel />
    </div>
  )
}

function DepartmentModel() {
    return (
        <div className="bg-white rounded-md shadow-lg mt-3 w-[95%] h-[3em] flex flex-row items-center justify-between px-1">
            <div className="flex flex-row h-[100%] w-[31%] items-center">
                <div className="bg-black rounded-md w-[81%] h-[90%]"></div>
                <h1 className="text-lg font-medium px-4">Cardiologist</h1>
            </div>
            <div className="flex flex-row px-5">
                <h1 className="px-4">9 Groups</h1>
                <h1>30 Members</h1>
            </div>
        </div>
    )
}

export function CreateDepartment() {
    return (
        <div></div>
    )
}

export default Department
