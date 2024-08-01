import { useDispatch, useSelector } from "react-redux";
import { useFetchDeleteTemplate } from "../../../hooks/usePatient";
import { isModel, isOffModel } from "../../../redux/slices/doctor/appointPaymentSlice";

const setData = (e: React.DragEvent<HTMLDivElement>, data: object) => {
    e.dataTransfer.setData('data', JSON.stringify(data))
}

function AppoinementModel(props: any) {
    const { title, content } = props.data

    return (
        <div draggable 
            onDragStart={e => setData(e, props.data)}
            className="app-model bg-white shadow-lg h-[8em] w-[70%] mt-6 rounded-md cursor-grab">
            <div className="flex flex-row text-[12px] justify-between px-4 py-2 items-center">
                <div>
                    <h1 className="font-medium">{content.name}</h1>
                    <p className="text-[11px]">{`${content.age}Years Old`}</p>
                </div>
                <div>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="px-2 py-1 text-[12px]">{content.deceaseDiscription}</div>
        </div>
    );
}



function EmptyAppoints() {
    return (
        <div className="app-holder overflow-scroll flex items-center justify-center w-[100%] h-[100%]">
            <h1 className="font-bold text-[12px]">
                No Requests
            </h1>
        </div>
    )
}

export function Appoinements(props: {
    data: any,
    refresher: Function
}) {
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state).authReducer

    return (
        <div className="w-[100%] h-[60%] mb-4 mt-8 flex flex-row items-center  rounded-md">
            {
                !props.data ? <EmptyAppoints /> :
                <div className="app-holder overflow-scroll flex-col w-[100%] h-[100%]">
                    {
                        props.data.map((item: any) => {
                            return ( <AppoinementModel data={item} /> )
                        })
                    }
                </div>
                
            }

            <div className=" h-[70%] w-[30%] flex flex-col justify-evenly">
                <div 
                    onDragOver={dropOver}
                    onDrop={e => {
                        const res = dropCapture(e, {doctorId: data.id, status: 'reject', data})
                        props.refresher()
                    }}
                    className="border-red-500 bg-red-500 bg-opacity-25 border-[2px] w-[100%] rounded-md h-[45%]">

                    </div>
                <div 
                    onDragOver={dropOver}
                    onDrop={e => {
                        const data = e.dataTransfer.getData('data')
                        const parsed = JSON.parse(data)
                        
                        dispatch(isModel({senderId: parsed.senderId, appointId: parsed.appointmentId}))  
                    }}
                    className="border-green-400 bg-green-500 bg-opacity-25 w-[100%] border-[2px] rounded-md h-[45%]"></div>
            </div>
        </div>
    );
}

const dropOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
}

const dropCapture = async (e: React.DragEvent<HTMLDivElement>, receved: {
    status: string,
    data: object,
    doctorId: string
}) => {
    const data = e.dataTransfer.getData('data')
    const parsed = JSON.parse(data)
    
    if(receved.status === 'reject') {
        await useFetchDeleteTemplate(`http://localhost:2000/admin-service/appointment/remove_record?id=${receved.doctorId}`)
    }
}