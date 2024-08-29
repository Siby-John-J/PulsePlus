import { useEffect, useState } from "react";
import { useFetchGetTemplate } from "../../../hooks/usePatient";
import { useSelector } from "react-redux";
import { authReducerType } from "../../../types/sliceTypes";

function Appointments() {
    const [appointments, setAppointments] = useState([])
    const auth = useSelector((state: authReducerType) => state.authReducer);
    const { id } = auth

    async function getAndStoreData() {
        const response = await useFetchGetTemplate('http://localhost:2000/admin-service/appointment/accepted?id=' + id)
        setAppointments(response)
    }

    useEffect(() => {
        getAndStoreData()
        
    }, [])
    return (
        <div className="appointments bg-slate-300 col-span-4 row-span-8 rounded-2xl flex flex-col items-center">
            <div className=" w-[90%] text-2xl font-medium text-black py-2">
                Appointments
            </div>
            <div className="flex flex-row items-center w-[90%] h-[60px] rounded-md">
                <div className="bg-white text-black px-14 py-2 rounded-md font-medium h-[2.5em] w-[50%] text-center">
                    Upcoming
                </div>
                <div className="text-black px-14 py-2 rounded-md font-medium h-[2.5em] w-[50%] text-center">
                    Past
                </div>
            </div>
            <div className="w-[90%] h-[80%]">
                {
                    appointments.map((item: any) => {
                        return (
                            <AppointmentModel data={item} />
                        )
                    })
                }
            </div>
        </div>
    );
}

function AppointmentModel(props: { data: any }) {
    const { span, date, time, accept, title } = props.data

    const ar2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const arr = date.split('-')

    let [doc, setDoc] = useState('')
    const [divDate, setDivDate] = useState({
        charMonth: ar2[arr[1] - 1],
        day: arr[2],
        year: arr[0]
    })
    
    useEffect(() => {
        useFetchGetTemplate('http://localhost:2000/doctor-service/auth/getByParams/?param=_id&id='+accept).then(e => {
            setDoc(e.name)
        })
    }, [])

    return (
        <div className="bg-white flex text-black flex-row mt-3 rounded-lg drop-shadow-md py-2 w-[90%]">
            <div className="pl-4">
                <h1 className="font-medium text-[15px]">
                    {`${divDate.day} ${divDate.charMonth}, `}<br /> {divDate.year}
                </h1>
                <p className="text-[12px]">{time}</p>
            </div>
            <div className="px-6">
                <h1>Diagnosys</h1>
                <h1 className="text-xl font-medium">{title}</h1>
                <p className="text-[13px]">{'Doctor ' + doc}</p>
            </div>
            <div className="flex ml-[4em]">
                <div>
                    <h1 className="bg-blue-700 text-white text-[14px] px-5 rounded-md">
                        {span}
                    </h1>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    );
}
export default Appointments