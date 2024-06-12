import { useEffect, useState } from "react"
import MessageData from "./MessageData"

function Messages() {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:2000/admin-service/appointment/get').then(e => e.json())
    //         .then(e => {
    //             setData(e)
                
    //         })
        
    // }, [])

  return (
    <div className="w-[80%] flex flex-row justify-evenly bg-slate-100">
        <MessageHolder data={{header: 'pending', headerColor: 'bg-blue-500'}} />
        <MessageHolder data={{header: 'approved', headerColor: 'bg-green-500'}} />
        <MessageHolder data={{header: 'rejected', headerColor: 'bg-red-500'}} />
    </div>
  )
}

function MessageHolder(props: any) {
    return (
        <div className="w-[30%] h-[95%] flex flex-col justify-evenly">
            <MessageHeader data={props.data} />
            <MessageContent />
        </div>
    )
}

function MessageHeader(props: any) {
    const { header, headerColor } = props.data

    return (
        <div className={"w-full h-[8%] rounded-md flex flex-row items-center justify-between px-5 " + headerColor}>
            <h1 className="text-[17px] font-medium text-white">{header}</h1>
            {/* <div className="bg-gray-200 w-[60%] h-full"></div> */}
        </div>
    )
}

function MessageContent() {
    return (
        <div className="w-full h-[82%] bg-slate-100 flex flex-col">
            <MessageData />
            <MessageData />
            <MessageData />
        </div>
    )
}

export default Messages
