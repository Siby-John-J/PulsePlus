
function ChatData(props: any) {
    const { info, type } = props.data
    
    return (
        <div className="flex flex-row items-end px-3 my-3">
            <UserInfo />
            {
                type === 'text' && <ChatItem />
            }
            {
                type === 'image' && <ChatItemImage />
            }
        </div>
  )
}

function UserInfo() {
    return (
        <div className="w-[2em] h-[2em] bg-black rounded-full mr-3"></div>
    )
}

function ChatItem() {
    return (
        <div className="w-fit max-w-[50%] bg-red-400 break-words">
            tex holder and  jiji u qwwwwww
        </div>
    )
}

function ChatItemImage() {
    return (
        <div className="w-fit h-[4em] bg-gray-200 rounded-md flex flex-row items-center px-2">
            <div className="mx-1 bg-black w-[3em] h-[3em] rounded-sm"></div>
            <div className="mx-1 bg-black w-[3em] h-[3em] rounded-sm"></div>
            <div className="mx-1 bg-black w-[3em] h-[3em] rounded-sm"></div>
            <div className="mx-1 bg-black w-[3em] h-[3em] rounded-sm"></div>
        </div>
    )
}

export default ChatData