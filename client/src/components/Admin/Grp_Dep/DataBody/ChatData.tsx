import { useEffect, useLayoutEffect, useRef, useState } from "react"

function ChatData(props: any) {
    const { info, type } = props.data
    
    return (
        <div className="flex flex-row items-end px-3 my-3">

            <div className=" bg-gray-200 w-fit rounded-md">
                <UserInfo />
                {
                    type === 'text' && <ChatItem />
                }
                {
                    type === 'image' && <ChatItemImage />
                }
                <Time />
            </div>
        </div>
  )
}

function Time() {
    return (
        <h1 className="text-[13px] px-3 py-1 rounded-b-md bg-black text-white flex items-center">a min ago</h1>
    )
}

function UserInfo() {
    return (
        <div className="flex flex-row bg-blue-500 text-white w-full py-2 px-3 items-center justify-between rounded-t-md">
            <div className="w-[2em] h-[2em] bg-black rounded-full"></div>
            <h1 className="font-medium">nigaraj</h1>
        </div>
        
    )
}

function ChatItem() {
    return (
        <div className="w-fit  break-words px-3 py-2">
            tex holder and  WuW
        </div>
    )
}

function ChatItemImage() {
    const [data, setData] = useState([4,3,3,3,3])
    const ref = useRef(null)
    const sec = useRef(null)
    let len = 12

    if(data.length === 2) len = 6
    if(data.length >= 3) len = 3 
    
    useLayoutEffect(() => {
        const width = getComputedStyle(ref.current).width
        sec.current.style.width = width
    }, [])

    return (
        <div className="py-3 w-fit overflow-hidden rounded-md flex flex-col items-start px-2">
            <div ref={ref} className="rounded-md flex flex-row items-center">        
            {
                data.map((e, index) => {
                    return <div className={`mx-1 bg-black w-[${len}em] h-[${len}em] rounded-sm`}></div>
                })
            }
            </div>
            <h1 ref={sec} className={`mt-2 font-medium `}>Nigas fffffffff dfjdijfijij are in meth now</h1>
        </div>
    )
}

export default ChatData