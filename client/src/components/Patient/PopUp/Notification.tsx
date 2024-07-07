import { useDispatch } from "react-redux"
import { turnOffnotificationPopup } from "../../../redux/slices/patient/notificationSlice"
import { off } from "../../../redux/slices/patient/layoutSlice"
import { useState } from "react"

function Notification() {
    const dispatch = useDispatch()
    const [notification, setNotification] = useState<string[]>([
        'your appointement rejected',
        'you are unworthy to study magic',
        'youre sus niga'
    ])
    
    return (
        <div className="bg-white absolute top-[9%] right-[16%] px-4 py-2 w-[18em] h-fit rounded-md border-[1px] border-black">
            {
                notification.map((item: string) => {
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

function NotificationList(props: { data: string }) {
    return (
        <div className="my-2 py-1 bg-slate-200 px-3">
            <h1>{ props.data }</h1>
            <div className="bg-red-600 text-white w-fit px-2 rounded-md my-2 cursor-pointer">Delete</div>
        </div>
    )
}

export default Notification