import { useDispatch, useSelector } from "react-redux"
import { turnOffnotificationPopup } from "../../../redux/slices/patient/notificationSlice"
import { off } from "../../../redux/slices/patient/layoutSlice"
import { io } from "socket.io-client"
import { useEffect, useId, useState } from "react"
import { useFetchGetTemplate } from "../../../hooks/usePatient"

// const socket = io('http://localhost:3003')

function Notification() {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state).authReducer

    const [isNewMessage, setIsnewMessage] = useState<boolean>(false)
    const [notification, setNotification] = useState<string[]>([])

    // socket.on('notification:update', (data: any) => {
    //     setIsnewMessage(true)
    // })

    useEffect(() => {
        useFetchGetTemplate(`http://localhost:2000/communication-service/doctor_notification/get?id=${state.id}`)
            .then(e => {
                // setNotification(e)
                console.log(e);
                
            })

    }, [])

    
    
    return (
        <div className="bg-white absolute top-[9%] right-[16%] px-4 py-2 w-[18em] h-fit rounded-md border-[1px] border-black">
            {
                notification.map((item: any) => {
                    return (
                        <NotificationList data={item} />
                    )
                })
            }
            <div className="flex flex-row w-[100%] justify-between px-3 py-3">
                <button>Clear</button>
                <button
                    className="cursor-pointer"
                    onClick={e => {
                        dispatch(off())
                        dispatch(turnOffnotificationPopup())
                }}>Cancel</button>
            </div>
        </div>
    )
}

function NotificationList(props: { data: {
    _id: string,
    senderId: string,
    content: string
} }) {
    
    return (
        <div className="my-2 py-1 bg-slate-200 px-3">
            <h1>{ props.data.content }</h1>
            <div className="bg-red-600 text-white w-fit px-2 rounded-md my-2 cursor-pointer">Delete</div>
        </div>
    )
}

export default Notification