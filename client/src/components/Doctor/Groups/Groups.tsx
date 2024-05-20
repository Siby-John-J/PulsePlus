import GroupList from "./GroupList"
import MainChat from "./MainChat"
import ChatTitle from "./ChatTitle"

function Groups() {
  return (
    <div className="bg-gray-300 h-[100%] w-[80%]">
        <div className="w-[100%] h-[10%] flex items-center px-10">
            <h1 className="text-[1.7em] font-medium">Groups</h1>
        </div>
        <div className="w-[100] h-[90%] flex flex-row justify-evenly items-center">
            <div className="rounded-md w-[18%] h-[90%]">
                <GroupList />
            </div>
            <div className="bg-white w-[58%] h-[90%] rounded-md">
              <MainChat />
            </div>
            <div className="bg-white w-[20%] rounded-md h-[90%]">
              <ChatTitle />
            </div>
        </div>
    </div>
  )
}

export default Groups