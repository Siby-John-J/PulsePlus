import { useDispatch, useSelector } from "react-redux"
import "./Notification.css"
import { turnOffnotificationPopup } from "../../../redux/slices/patient/notificationSlice"
import { off } from "../../../redux/slices/patient/layoutSlice"
import { io } from "socket.io-client"
import { useEffect, useId, useRef, useState } from "react"
import { useFetchDeleteTemplate, useFetchGetTemplate, useFetchPostTemplate } from "../../../hooks/usePatient"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import { appointResponseType } from "../../../types/patient/app_resType"

// const socket = io('http://localhost:3003')

async function deleteNotification(event: any, id: string, type: string) {
    let url = ''
    if(type === 'normal_noti') {
        url = `http://localhost:2000/communication-service/notification/remove?id=${id}`
    } else if(type === 'appo_noti') {
        url = `http://localhost:2000/communication-service/doctor_notification/remove?id=${id}`
    }

    const response = await useFetchDeleteTemplate(url)
    return response
}

async function createPayment(data: any, id: string) {
    const url = 'http://localhost:2000/patient-service/payment/create?id=' + id
    const response = await useFetchPostTemplate(url, data)
    
    window.location.href = response.res
}

function Notification() {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state).authReducer

    const [isNewMessage, setIsnewMessage] = useState<boolean>(false)
    const [notification, setNotification] = useState<object[]>([])
    const limit = useRef(0)

    // socket.on('notification:update', (data: any) => {
    //     setIsnewMessage(true)
    // })

    console.log(state);
    

    const getAndStoreData = async() => {
        const regular = await useFetchGetTemplate(`http://localhost:2000/communication-service/notification/get?id=${state.id}`)
        const payment = await useFetchGetTemplate(`http://localhost:2000/communication-service/doctor_notification/get?id=${state.id}`)
        setNotification(regular)
        setNotification(prev => [...prev, ...payment])
    }
    
    useEffect(() => {
        getAndStoreData()
    }, [])
    const items = [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ]

    return (
        <>
        <div className="bg-red-500 h-[1.2em] w-[1.2em] top-[8%] rounded-sm z-50 shadow-lg rotate-[45deg] right-[16.7%] absolute"></div>
        <div className="bg-white absolute shadow-lg top-[9%] right-[16%] px-0 w-[22em] h-fit rounded-md border-[1px]">
            <div className="bg-red-500 w-[100%] h-[2.3em] flex items-center px-3 rounded-t-md">
                <h1 className="text-white font-medium">Notifications</h1>
            </div>
            <div className="bg-slate-100">
            {
                notification.map((item: any) => {
                    if(item.type === "appointment") {
                        return (
                            <NotificationList refresh={getAndStoreData} data={item} />
                        )
                    }
                    if(item.type === 'appo-payment') {
                        return (
                            <PaymentNotificationList refresh={getAndStoreData} data={item} />
                        )
                    }
                })
            }
            <div className="flex flex-row w-[100%] justify-between px-3 py-3">
                <button onClick={e => createPayment(items, state.id)}>Clear</button>
                <button
                    className="cursor-pointer"
                    onClick={e => {
                        dispatch(off())
                        dispatch(turnOffnotificationPopup())
                }}>Cancel</button>
            </div>
            </div>
        </div>
        </>
    )
}

function NotificationList(props: { data: {
    _id: string,
    senderId: string,
    content: string
}, refresh: Function }) {
    const [hover, isHover] = useState<boolean>(false)
    const res =  hover ? ' notification-2 ' : " noti-notification"

    return (
        <div 
            onMouseLeave={e => isHover(orev => false)}
            onMouseOver={e => isHover(prev => true)}
            
            className="flex flex-row-reverse my-1 py-1">
            <div
                onClick={e => {
                    deleteNotification(e, props.data._id, 'normal_noti').then(e => {
                        props.refresh()
                    })
                }}
                className="bg-gray-300 pl-3 w-[3em] fixed h-[4em] left-[80.8%] text-black flex items-center justify-center cursor-pointer">
                D
            </div> 
            <div className={res}>
            <div className="w-[3em] mx-4 flex flex-col items-center justify-center">
                {/* <UserTemplate /> */}
                <div className="bg-black h-[2.2em] w-[2.2em] rounded-full"></div>
                <h1 className="text-[14px]">Admin</h1>
            </div>
            <div className="w-[70%] py-1 flex flex-col justify-between">
                <h1 className="w-[100%] text-[13px] break-words overflow-scroll scroller">{ props.data.content}</h1>
                <h1 className="text-gray-400 text-xs">2 hours ago</h1>
                {/* <div className="bg-red-600 text-white w-fit px-2 ml-[60%] rounded-md my-2 cursor-pointer">Delete</div> */}
            </div>
            <div className="w-[0.7em] mt-6 h-[0.7em] bg-green-400 rounded-full"></div>
        </div>
        </div>
    )
}

function PaymentNotificationList(props: { data: appointResponseType, refresh: Function } ) {
    const [hover, isHover] = useState<boolean>(false)
    const res =  hover ? ' notification ' : 'second-noti'
    const { date, diagnosys, endTime, startTime, fee, senderId, span } = props.data
    const items = [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ]

    return (
        <div className="flex flex-row-reverse my-1 py-1" 
            onMouseLeave={e => isHover(prev => false)}
            onMouseOver={e => isHover(prev => true)}
            // onClick={e => createPayment({ items })}
            >
            <div
                onClick={e => {
                    deleteNotification(e, props.data._id, 'appo_noti').then(e => props.refresh())
                }}
                className="bg-gray-300 pl-3 w-[3em] fixed h-[4em] left-[80.8%] text-black flex items-center justify-center">
                D
            </div>
            <div className={res}>
                <div className="text-[8px] px-3">
                    <h1 className="font-bold text-[14px]">Upcoming Appointment</h1>
                    <p className="text-gray-400">
                        { `${diagnosys} | Duration 123min` }
                    </p>
                </div>
                <div className="flex flex-row h-full items-center justify-between w-[65%]">
                    <div className="flex flex-row items-center px-2">
                        <div className="w-4 h-4 bg-black mr-2"></div>
                        <h1 className="text-[9px] font-semibold">{date}</h1>
                    </div>
                    <div className="flex flex-row items-center px-2">
                        <div className="w-4 h-4 bg-black mr-2"></div>
                        <h1 className="text-[9px] font-semibold">
                            { startTime + ' ' + span + ' - ' + endTime + ' ' + span}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification