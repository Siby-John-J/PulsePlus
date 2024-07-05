import React, { useEffect, useState } from "react"
import MessageData from "./MessageData"
import { AppointType } from "../../../types/appoientTypes"
import { useFetchUpdateStatus } from "../../../hooks/useUpdateMessage"

function Messages() {
    const [data, setData] = useState<AppointType[]>([
        { content: 'string', id: 'string', title: 'string', status: 'pending' },
        { content: 'number', id: 'number', title: 'number', status: 'approved' },
        { content: 'sus', id: 'number', title: 'number', status: 'pending' },
        { content: 'lwal', id: 'string', title: 'string', status: 'pending' }
    ])
    const pending = data.filter(item => item.status === 'pending')
    const approve = data.filter(item => item.status === 'approved')
    const reject = data.filter(item => item.status === 'rejected')

    // useEffect(() => {
    //     fetch('http://localhost:2000/admin-service/appointment/get').then(e => e.json())
    //         .then(e => {
    //             setData(e)
                
    //         })
        
    // }, [])

  return (
    <div className="w-[80%] flex flex-row justify-evenly bg-slate-100">
        <PendingMessageHolder data={pending} style={{header: 'pending', headerColor: 'bg-blue-500'}} />
        <ApprovedMessageHolder data={approve} style={{header: 'approved', headerColor: 'bg-green-500'}} />
        <RejectedMessageHolder data={reject} style={{header: 'rejected', headerColor: 'bg-red-500'}} />
    </div>
  )
}

function PendingMessageHolder(props: any) {
    return (
        <div className="w-[30%] h-[95%] flex flex-col justify-evenly">
            <MessageHeader data={props.style} />
            <MessageContent status={'pending'} data={props.data} />
        </div>
    )
}

function ApprovedMessageHolder(props: any) {
    return (
        <div className="w-[30%] h-[95%] flex flex-col justify-evenly">
            <MessageHeader data={props.style} />
            <MessageContent status={'approved'} data={props.data} />
        </div>
    )
}

function RejectedMessageHolder(props: any) {
    return (
        <div className="w-[30%] h-[95%] flex flex-col justify-evenly">
            <MessageHeader data={props.style} />
            <MessageContent status={'rejected'} data={props.data} />
        </div>
    )
}

function MessageHeader(props: any) {
    const { header, headerColor } = props.data

    return (
        <div className={"w-full h-[8%] rounded-md flex flex-row items-center justify-between px-5 " + headerColor}>
            <h1 className="text-[17px] font-medium text-white">{header}</h1>
        </div>
    )
}

function MessageContent(props: {status: string, data: AppointType[]}) {
    return (
        <div 
            onDragOver={dropOver}
            onDrop={e => dropCapture(e, props.status)}
            className="droppable w-full h-[82%] bg-slate-100 flex flex-col">
            {
                props.data.map((item: any) => {
                    return ( <MessageData data={item} /> )
                })
            }
        </div>
    )
}

const dropOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
}

const dropCapture = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    const data = e.dataTransfer.getData('text')
    useFetchUpdateStatus(JSON.parse(data), status)
}

export default Messages
