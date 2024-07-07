import React, { useEffect, useState } from "react"
import MessageData from "./MessageData"
import { AppointType } from "../../../types/appoientTypes"
import { useFetchUpdateStatus } from "../../../hooks/useMessage"
import { useDispatch, useSelector } from "react-redux"
import { addAppoinetments, changeStatusAppoinetments } from "../../../redux/slices/admin/appointmentSlice"

function Messages() {
    const state: AppointType[] = useSelector((state: any) => state).appointmentReducer.appointments
    
    const pending = state.filter(item =>  item.status === 'pending')
    const approve = state.filter(item => item.status === 'approved')
    const reject = state.filter(item => item.status === 'rejected')

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:2000/admin-service/appointment/get').then(e => e.json())
            .then(e => {
                e.map(item => {
                    const {__v, _id, ...rest} = item
                    dispatch(addAppoinetments(rest))
                })
            })
    }, [])

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
    const dispatch = useDispatch()
    
    const dropAndUpdate = async (e) => {
        const res = await dropCapture(e, props.status)
        dispatch(changeStatusAppoinetments(res))
    }

    return (
        <div 
            onDragOver={dropOver}
            onDrop={e => dropAndUpdate(e)}
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

const dropCapture = async (e: React.DragEvent<HTMLDivElement>, status: string) => {
    const data = e.dataTransfer.getData('text')

    try {
        const res = await useFetchUpdateStatus(JSON.parse(data), status)
        const {__v, _id, ...rest} = res
        
        return rest
    } catch (error) {
        console.log(error)
    }
}

export default Messages
