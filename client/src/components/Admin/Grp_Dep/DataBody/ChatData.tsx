
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
        <div className="w-[30%] h-[4em] bg-blue-400">

        </div>
    )
}

export default ChatData