import "./animation.css";
import { useSelector } from "react-redux";
import {
    detailsTypes,
    patientAuthReducerType,
    patientDetailsReducerType,
} from "../../types/patient/patientTypes";
import { useEffect, useMemo } from "react";
import { useFetchRefreshToken } from "../../hooks/useFetch";
import { authReducerType } from "../../types/sliceTypes";

function Profile() {
    const auth = useSelector((state: authReducerType) => state.authReducer);
    const patientDetailsState = useSelector(
        (state: patientDetailsReducerType) => state.patientReducer
    );
    
    useFetchRefreshToken(auth)

    const {
        address,
        name,
        dob,
        age, 
        blood_group,
        email,
        gender,
        phone,
        place,
    } = patientDetailsState;
    

    // const { name } = patientAuthState
    // const dob = 'Date'

    return (
        <div className="mt-0 ml-8 mr-8 w-[80vw] grid grid-cols-10 grid-rows-9 gap-5">
            <div className="flex flex-row justify-between mt-4 text-black text-3xl font-semibold col-span-10 rounded-2xl">
                <div>Profile</div>
                <div className="text-xl flex items-center bg-orange-500 text-white px-4 rounded-md cursor-pointer">
                    Create Treatment
                </div>
            </div>
            <Main data={{name, dob}} />
            <Details
                props={{
                    address,
                    dob,
                    age,
                    blood_group,
                    email,
                    gender,
                    phone,
                    place,
                }}
            />
            <Appointments />
            <Id />
            <Notes />
            <Family />
        </div>
    );
}

function Main(props: any) {
    console.log(props.data);

    return (
        <div className="main bg-slate-300 col-span-2 rounded-3xl row-span-4 text-black flex flex-col justify-center items-center">
            <div className="bg-black h-[80px] w-[80px] rounded-full mb-3"></div>
            <h1 className="text-3xl font-semibold mb-4">{props.data.name}</h1>
            <p>Created</p>
            <p className="font-medium mb-6">{'date'}</p>
        </div>
    );
}

function Id() {
    return (
        <div className="id bg-gray-300 col-span-2 row-span-1 rounded-2xl text-black text-2xl font-semibold flex items-center justify-center">
            TD-P90K12
        </div>
    );
}

function Family() {
    return (
        <div className="family bg-slate-300 text-black col-span-2 row-span-3 rounded-2xl flex flex-col items-center">
            <div className="font-semibold text-xl mt-1 ">Family</div>
            <div className="flex flex-col h-[70%] w-[90%] mt-2">
                <FamilyModel />
                <FamilyModel />
            </div>
            <div className="">Add Member</div>
        </div>
    );
}

function Notes() {
    return (
        <div className="notes bg-slate-300 col-span-4 row-span-4 rounded-3xl flex flex-col items-center">
            <div className="flex flex-col w-[80%] h-[80%] mt-5">
                <NotesModel />
            </div>
            <div className="">
                <h1 className="py-[8px] px-[19px] rounded-md bg-slate-900 text-white cursor-pointer">
                    create new
                </h1>
            </div>
        </div>
    );
}

function Appointments() {
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
                <AppointmentModel />
            </div>
        </div>
    );
}

function FamilyModel() {
    return (
        <div className="flex flex-row justify-evenly items-center mb-2">
            <div className="bg-black h-10 w-10 rounded-full"></div>
            <div className="flex flex-col justify-center align-middle">
                <h1 className="m-0 p-0">Alessa John</h1>
                <p className="font-extralight">Sister</p>
            </div>
            <div className="">D</div>
        </div>
    );
}

function NotesModel() {
    return (
        <div className="w-auto h-[60px] rounded-md flex flex-row justify-evenly items-center bg-white text-black drop-shadow-md mb-3">
            <h1 className="font-medium">new-note</h1>
            <h1 className="font-medium">12.3.33 - 9:00pm</h1>
            <h1 className="text-white bg-orange-500 h-fit px-4 py-[2px] rounded-sm text-center cursor-pointer">
                view
            </h1>
        </div>
    );
}

function AppointmentModel() {
    return (
        <div className="bg-white flex text-black flex-row mt-3 rounded-lg drop-shadow-md py-2 w-[90%]">
            <div className="pl-4">
                <h1 className="font-medium text-[15px]">
                    23 Nov, <br /> Tue
                </h1>
                <p>3am - 4am</p>
            </div>
            <div className="px-6">
                <h1>Diagnosys</h1>
                <h1 className="text-xl font-medium">Headache</h1>
                <p className="text-[13px]">Doctor Romy</p>
            </div>
            <div className="flex ml-[4em]">
                <div>
                    <h1 className="bg-blue-700 text-white text-[14px] px-5 rounded-md">
                        New
                    </h1>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    );
}

function Details(props: { props: detailsTypes }) {
    function validate(value: any) {
        if (typeof value === "object" && value.length > 20) {
            return value.toString().slice(0, 20);
        }

        if (value !== undefined) {
            return value;
        } else {
            return "null";
        }
    }

    return (
        <div className="details bg-slate-300 col-span-4 row-span-4 rounded-3xl flex flex-col text-center text-black">
            {
                props.props.email !== undefined ?
                    <div className="flex flex-row justify-between items-center text-start mx-5 h-[100%]">
                        <div className="flex flex-col justify-evenly h-full">
                            <div>
                                <h1 className="font-extralight">Date of Birth</h1>
                                <p className="font-medium">
                                    {validate('props.props.dob')}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Address</h1>
                                <p className="font-medium">
                                    {validate(props.props.address)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Blood Group</h1>
                                <p className="font-medium">
                                    {validate(props.props.blood_group)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Place</h1>
                                <p className="font-medium">
                                    {validate(props.props.place)}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly pr-0 h-full">
                            <div>
                                <h1 className="font-extralight">Phone</h1>
                                <p className="font-medium">
                                    {validate(props.props.phone)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Gender</h1>
                                <p className="font-medium">
                                    {validate(props.props.gender)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Age</h1>
                                <p className="font-medium">
                                    {validate(props.props.age)}
                                </p>
                            </div>
                            <div>
                                <h1 className="font-extralight">Email</h1>
                                <p className="font-medium">
                                    {validate(props.props.email)}
                                </p>
                            </div>
                        </div>
                    </div>
                 : <div></div>
            }

            <div className="mb-3 cursor-pointer">edit details</div>
        </div>
    );
}

export default Profile;
