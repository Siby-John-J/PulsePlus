import { useEffect, useState } from "react";
import { AdminProgress } from "../../../types/propTypes";
import "./animation.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useFetchGetTemplate } from "../../../hooks/usePatient";
import { doctorDetailsType } from "../../../types/doctor/doctorDetailsType";
import { useFetchRefreshToken } from "../../../hooks/useFetch";
import { useGettoken } from "../../../hooks/useAuth";
import { useStoreSet } from "../../../hooks/useStore";
import { Appoinements } from "./Appoint";
import { setToModel } from "../../../redux/slices/doctor/appointPaymentSlice";

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state).authReducer
    const [details, setDetails] = useState<doctorDetailsType>({
        name: "",
        appointmentCount: 0,
        degree: "",
        department: "",
    })
    const [appoinements, setAppointments] = useState([])
    const [requests, setRequests] = useState([])

    const { name, password, auth } = data

    const authentication = async() => {
        const response = await useFetchRefreshToken(auth)
        
                
        if(response.accessToken === 'token not found' && auth.auth) {
            // const res = await useGettoken(auth, 'doctor')
            // useStoreSet(res.accessToken)
            // const response = await useFetchRefreshToken(auth)
            
        } else if(auth.auth === false) {
            // navigate('/')
        } else {
            // dispatch(get(response))
        }
    }
    
    useEffect(() => {
        // authentication()
        if(!auth) return navigate('/')
        const res = getAndSetData()
        // setRequests(prev)
            
    }, [])
    
    async function getAndSetData() {
        const detailsResponse = await useFetchGetTemplate(`http://localhost:2000/doctor-service/auth/get?email=${name}&password=${password}`)
        // const appoinementsResponse = await useFetchGetTemplate(`http://localhost:2000/doctor-service/appointment/get?id=${detailsResponse._id}`)
        const requestResponse: 
            { data: Array<object>, result: Array<object> }
        = await useFetchGetTemplate(`http://localhost:2000/admin-service/appointment/get_by_records?id=${detailsResponse._id}&type=anything`)
        
        setDetails({
            appointmentCount: 2,
            degree: detailsResponse.degree,
            department: detailsResponse.department,
            name: detailsResponse.name
        })

        // setAppointments(appoinementsResponse)
        // console.log(requestResponse);
        
        const { data, result } = requestResponse
        
        const final: any = []
        
        for(let i = 0; i < result.length; i++) {
            if(result[i].appointmentId === data[i]._id) {
                final.push({senderId: data[i].senderId, ...result[0]})
            }
        }
        // console.log(requestResponse);
        
        setRequests(final)
    }

    return (
        <div className="w-[80%] h-[100%] flex flex-row bg-slate-200">
            <div className=" w-[60%] h-[100%] flex flex-col items-center">
                <DetailBanner data={details} />
                <Progress />
                <Walllet />
                <Message />
            </div>
            <div className="flex flex-col items-center w-[40%] mr-8">
                <Appoinements refresher={getAndSetData} data={requests} />
                <Results>
                    <ResultsModel />
                    <ResultsModel />
                    <ResultsModel />  
                </Results>
            </div>
        </div>
    );
}

function Walllet() {
    return (
        <div className="w-[90%]  flex flex-col justify-between">
            <div className="w-[100%] flex flow-row justify-between">
                <div className="bg-blue-600 rounded-lg font-mono shadow-md w-[50%] h-[100%] flex flex-col justify-evenly px-7 text-white">
                    <h1 className="text-2xl mt-5">Current Balance</h1>
                    <h1 className="text-3xl font-semibold mb-10">34,344</h1>
                </div>
                <div className="flex  items-end flex-col justify-between w-[50%] h-[100%] text-[1em]">
                    <div className="flex flex-row py-3 px-8 justify-between bg-white rounded-md w-[90%] border-[1px] ">
                        <h1 className="font-medium">Income</h1>
                        <h1 className="font-thin">10,000</h1>
                    </div>
                    <div className="flex flex-row py-3 px-8 justify-between bg-white rounded-md w-[90%] border-[1px] ">
                        <h1 className="font-medium">Spend</h1>
                        <h1 className="font-thin">3,000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Results(props: any) {
    return (
        <div className="h-[14em] w-[100%] bg-white rounded-md flex flex-col items-center gap-2 pt-3">
            <div className="flex flex-row justify-between px-4 w-[100%]">
              <h1 className="font-medium text-[18px]">Surgeries</h1>
              <div className="flex flex-row">
                <h1>Edit</h1>
                <h1>Delete</h1>
              </div>
            </div>
            <div className="w-[100%] h-[10em] flex-col items-center justify-center holder overflow-y-scroll">
              { props.children }
            </div>
        </div>
    );
}

function ResultsModel() {
    return (
        <div className="bg-white rounded-xl mt-2 ml-6 shadow-lg w-[90%] h-[4em] justify-evenly flex flex-row items-center">
            <div className="">
                <h1 className="font-medium">Blood Sugar</h1>
                <h1 className="text-[13px] text-gray-500">3 june, 02:00 AM</h1>
            </div>
            <div className="items-center">
              <h1 className="text-[13px] text-gray-500">Duration</h1>
              <h1 className="font-medium text-[15px]">3hr 34min</h1>
            </div>
            <div className="flex flex-row items-center">
              <h1 className="font-medium">30%</h1>
              <div className="flex w-[5em] bg-gray-300 h-[3px] ml-3">
                <div className="w-[30%] bg-blue-500 h-[3px]"></div>
              </div>
            </div>
        </div>
    );
}



function Message() {
    return (
        <div className="0 w-[90%] h-[23%] mt-6 text-[16px]">
            <MessageModel />
        </div>
    );
}

function MessageModel() {
    return (
        <div className="flex flex-col border-green-600 border-[1px] rounded-md h-[100%] w-[50%]">
            <div className="flex py-3 justify-around flex-row bg-green-600 rounded-t-md text-white">
                <h1>Admin Message</h1>
                <div className="flex flex-row font-extralight">
                    <h1>09/11/2000 9:00pm</h1>
                    <br />
                    <h1></h1>
                </div>
            </div>
            <div className="flex flex-col h-[80%] px-4 py-2">
                <p className="text-[14px]">
                    the message is simple whch was once able to twice
                    reincarnate one with the power of shit
                </p>
            </div>
            <div className="flex flex-row w-[100%] justify-end px-7 pb-2">
                <button className="mx-7 bg-green-600 text-white px-5 rounded-md">
                    ok
                </button>
                <button>cancel</button>
            </div>
        </div>
    );
}

function DetailBanner(props: { data: doctorDetailsType}) {
    const { appointmentCount, degree, department, name } = props.data

    return (
        <div className="bg-emerald-400 w-[90%] rounded-md h-[23%] mt-8 flex flex-col text-white">
            <div className="flex flex-row justify-between px-10 mt-3">
                <div>
                    <h1 className="text-[12px] mb-2">Welcome Back, </h1>
                    <h2 className="text-[20px] font-medium">{'Dr. ' + name}</h2>
                    <p>{`${degree} (${department})`}</p>
                </div>
                <div className="bg-black rounded-full h-[6em] w-[6em]"></div>
            </div>
            <div className="w-[100%] pl-10 mt-4 text-[1.2em]">
                <div>{`You have total ${appointmentCount} Appoinements today!`}</div>
            </div>
        </div>
    );
}

function Progress() {
    return (
        <div className="w-[90%] h-[20%] mt-8 flex flex-row justify-between text-white">
            <ProgressModel props={{ data: "appoinements" }} />
            <ProgressModel props={{ data: "surgeries" }} />
            <ProgressModel props={{ data: "requests" }} />
        </div>
    );
}

function ProgressModel(prop: AdminProgress) {
    return (
        <div className="bg-blue-600 h-[80%] w-[30%] rounded-md shadow-xl flex flex-col justify-evenly">
            <div className="mb-4 font-medium ml-3 text-[13px]">
                {prop.props.data}
            </div>
            <div className="flex flex-col h-[3em]">
                <div className="ml-3 mb-3">4/10</div>
                <div className="ml-3 bg-black rounded-md h-[60%] w-[90%]"></div>
            </div>
        </div>
    );
}

function Request() {
    return <div></div>;
}

export default Dashboard;
