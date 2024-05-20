
function Group() {
  return (
    <div className='w-[100%] h-[100%] flex flex-col items-center'>
        <GroupModel />
        <GroupModel />
        <GroupModel />
        <GroupModel />
        <GroupModel />
        <GroupModel />
    </div>
  )
}

function GroupModel() { 
    return (
        <div className="bg-white rounded-md shadow-lg mt-3 w-[95%] h-[4em] flex flex-row items-center justify-between px-1 cursor-pointer">
            <div className="flex flex-row h-[100%] w-[60%] items-center px-1">
                <div className="bg-black rounded-full w-[13%] h-[70%]"></div>
                <h1 className="text-lg font-medium px-4">Green Desire</h1>
            </div>
            <div className="flex flex-row px-5">
                <h1 className="font-thin">30 Members</h1>
            </div>
        </div>
    )
}

export function CreateGroup() {
    const InpStyle = "border-gray-400 rounded-md border-[1px] w-[100%] placeholder:text-[14px] px-3 mt-3 outline-none "
    
    return (
        <div className=" flex flex-col items-start px-4 w-[100%]">
            <h1 className="text-base font-semibold mt-3">Create New Group</h1>
            <input placeholder="Group name" className={InpStyle + 'h-[2.5em]'} type="text" />
            <div className="flex flex-row justify-between">
                <input placeholder="Fixed Members" type="number" className={InpStyle + 'w-[48%] h-[2.5em]'} />
                <input placeholder="Department" type="text" className={InpStyle + 'w-[48%] h-[2.5em]'} />
            </div>
            <input type="text" placeholder="Enter Group Description Here" className={InpStyle + 'h-[7em] pb-[20%]'} />
            <div className="py-4 w-[100%] flex flex-row justify-between">
                <button className="rounded-sm w-[48%] bg-blue-500 py-2 text-white">Create Group</button>
                <button className="rounded-sm w-[48%] bg-gray-100 py-2 text-gray-500">Cancel</button>
            </div>
        </div>
    )
}

function GroupInput(props: any) {
    const style = 'mt-5 flex flex-row justify-between w-[90%] items-center'

    return (
        <div className={style}>
            <input placeholder={props.title} className="border-gray-400 rounded-md border-[1px] w-[100%] h-[2.5em] placeholder:text-[14px] px-3" type="text" />
        </div>
    )
}

export default Group
