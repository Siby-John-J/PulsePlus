import React, { useEffect, useState } from "react"
import MessageData from "./MessageData"
import { AppointType } from "../../../types/appoientTypes"
import { useFetchUpdateStatus } from "../../../hooks/useMessage"
import { useDispatch, useSelector } from "react-redux"
import { addAppoinetments, changeStatusAppoinetments } from "../../../redux/slices/admin/appointmentSlice"
import { useFetchGetTemplate } from "../../../hooks/usePatient"
import { onAppointModel } from "../../../redux/slices/admin/sendAppoModelSlice"
import { off, on } from "../../../redux/slices/patient/layoutSlice"
import { addRegisters, changeStatusRegisters } from "../../../redux/slices/admin/registerSlice"
import { RegisterType } from "../../../types/registerTypes"

function Messages() {
    const state: AppointType[] = useSelector((state: any) => state).appointmentReducer.appointments
    const state2: AppointType[] = useSelector((state: any) => state).registerAdminReducer.registers
    
    const pending = state.filter(item =>  item.status === 'pending')
    const approve = state.filter(item => item.status === 'approved')
    const reject = state.filter(item => item.status === 'rejected')

    pending.push(...state2.filter(item =>  item.status === 'pending'))
    approve.push(...state2.filter(item =>  item.status === 'approved'))
    reject.push(...state2.filter(item =>  item.status === 'rejected'))

    const dispatch = useDispatch()

    useEffect(() => {
        useFetchGetTemplate('http://localhost:2000/admin-service/appointment/get')
            .then(e => {
                e.map((item: any) => {
                    const {__v, ...rest} = item
                    dispatch(addAppoinetments(rest))
                })
            })

        useFetchGetTemplate('http://localhost:2000/admin-service/validation/get')
            .then(e => {
                e.map((item: any) => {
                    const {__v, ...rest} = item
                    dispatch(addRegisters(rest))
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
    const dispatch = useDispatch()
    return (
        <div
            onClick={e => {
                // dispatch(off())
                dispatch(onAppointModel())
            }} 
            className="w-[30%] h-[95%] flex flex-col justify-evenly">
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

function MessageContent(props: {status: string, data: AppointType[] | RegisterType[]}) {
    const dispatch = useDispatch()
    
    const dropAndUpdate = async (e: any) => {
        const res: any = await dropCapture(e, props.status)
        
        if(res.type === 'appointment') {
            dispatch(changeStatusAppoinetments(res))
        } else if(res.type === 'register') {
            dispatch(changeStatusRegisters(res))
        }
        
    }

    return (
        <div 
            onDragOver={dropOver}
            onDrop={e => {
                dropAndUpdate(e)
            }}
            className="droppable w-full h-[82%]  flex-col overflow-scroll">
            {
                props.data.map((item: any) => {
                    return ( <MessageData status={props.status} data={item} /> )
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
    const parsed = JSON.parse(data)
    try {
        const res: any = await useFetchUpdateStatus(parsed, status)
        const {__v, _id, ...rest} = res
        
        return {...rest, type: parsed.type}
    } catch (error) {
        console.log(error)
    }
}

export default Messages
