import GroupList from "./GroupList"
import MainChat from "./MainChat"
import ChatTitle from "./ChatTitle"
import { useEffect, useRef, useState } from "react"

function Groups() {
  const [expand, setExpand] = useState<boolean>(false)
  const [groupId, setGroupId] = useState('')
  let style = 'w-[78%]'

  if(expand) style = 'w-[58%]'

  useEffect(() => {
    console.log(groupId);
  },[groupId])

  return (
    <div className="bg-gray-300 h-[100%] w-[80%]">
        <div className="w-[100%] h-[5%] flex items-center px-10">
          <h1 className="text-[1.7em] font-medium mt-7">Groups & Departments</h1>
        </div>
        <div className="w-[100] h-[95%] flex flex-row justify-evenly items-center">
            <div className="rounded-md w-[18%] h-[90%]">
                <GroupList setId={setGroupId} />
            </div>
            <div className={'bg-white h-[90%] rounded-md ' + style}>
              <MainChat groupId={groupId} expand={expand} setExpand={setExpand} />
            </div>
            {
              expand && 
              <div className="bg-white w-[20%] rounded-md h-[90%]">
                <ChatTitle />
              </div>
            }
        </div>
    </div>
  )
}

export default Groups