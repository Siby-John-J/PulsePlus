import { useEffect, useLayoutEffect, useRef, useState } from "react"
import GroupPoll from "../../../Common/GroupPoll"

function  ChatData(props: any) {
    const { data, type, time, secret, senderId, question, options } = props.data
    
    let user = 'justify-start'
    
    return (
        <div className={'px-3 my-3 w-[100%] flex ' + user }>

            <div className=" bg-gray-100 w-fit rounded-md shadow-black shadow-sm">
                <UserInfo id={senderId} />
                {
                    type === 'text' && <ChatItem data={data} />
                }
                {
                    type === 'multimedia' && <ChatItemImage data={props.data} />
                }
                {
                    type === 'poll' && <GroupPoll question={question} options={options}  />
                }
                <Time date={time} />
            </div>
        </div>
  )
}

function Time(props: { date: any }) {
    const time = getTime(props.date)

    function getTime(time: number) {
        const date = new Date(time)
        
        const strDate: any = date.toString().split(' ')[4]
        const hr = date.getHours()
        const zone = hr < 12 ? ' AM' : ' PM'
    
        return (strDate.split(':')[0] - 12 + ":"  + strDate.split(':')[1] + zone)
    }
    
    return (
        <h1 className="text-[13px] px-3 py-1 rounded-b-md text-black flex items-center">{time}</h1>
    )
}

function UserInfo(props: { id: string }) {
    return (
        <div className="flex flex-row text-white bg-black w-full py-2 px-3 items-center justify-between rounded-t-md">
            <div className="w-[2em] h-[2em] bg-white rounded-full"></div>
            <h1 className="font-medium">{props.id}</h1>
        </div>
        
    )
}

function ChatItem(props: { data: string }) {
    return (
        <div className="w-fit  break-words px-3 py-2">
            { props.data }
        </div>
    )
}

function ChatItemImage(props: { data: any }) {
    const { data, caption } = props.data
    
    const [datas, setData] = useState(data)
    const ref = useRef(null)
    const sec = useRef(null)
    let len = 12

    if(data.length === 2) len = 6
    if(data.length >= 3) len = 3 
    
    useLayoutEffect(() => {
        const width = getComputedStyle(ref.current).width
        if(sec.current) sec.current.style.width = width
    }, [])
    
    return (
        <div className="py-3 w-fit overflow-hidden rounded-md flex flex-col items-start px-2 cursor-pointer">
            <div ref={ref} className="rounded-md flex flex-row items-center">        
            {
                data.map((e, index) => {
                    return <div className={`mx-1 w-[${len}em] h-[${len}em] rounded-sm`}>
                        <img src={'http://localhost:2000/doctor-service/' + e} />
                    </div>
                })
            }
            </div>
            <h1 ref={sec} className={`mt-2 font-medium `}>{caption ? caption : ''}</h1>
        </div>
    )
}

export default ChatData