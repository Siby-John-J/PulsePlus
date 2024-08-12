import { Link, useLocation, Outlet } from "react-router-dom"
import { DoctorModelLoader } from "../ModelLoader"
import { useEffect } from "react"
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/signaling')

function Doctor() {
  const { pathname } = useLocation()
  const regex = /[^/]*$/
  const match = pathname.match(regex)

  return (
    <>
    <DoctorModelLoader />
    <div className=" w-[100vw] h-[100vh] flex flex-row">
        <div className="bg-yellow-300 flex flex-row justify-center font-semibold w-[20%]">
            <div className="flex flex-col justify-evenly">
                <div className="bg-white border-l-4 border-l-emerald-400 px-7 py-3 pr-[10em]">
                  <Link to="/doctor/dashboard">
                    Dashboard
                  </Link>
                </div>
                <div className="bg-white px-7 py-3 pr-[10em]">
                  <Link to="/doctor/appointments">
                    Appointments
                  </Link>
                </div>
                <div className="bg-white px-7 py-3 pr-[10em]">
                    <Link to="/doctor/patients">
                      Patients
                    </Link>
                </div>
                <div className="bg-white px-7 py-3 pr-[10em]">
                  <Link to="/doctor/chats">
                    Chats
                  </Link>
                </div>
                <div className="bg-white px-7 py-3 pr-[10em]">
                  <Link to="/doctor/groups">
                    Groups
                  </Link>
                </div>
                <div className="bg-white px-7 py-3 pr-[10em]">
                  <Link to="/doctor/surgery">
                    Surgeries
                  </Link>
                </div>
            </div>
        </div>
        <Outlet />
    </div>
    </>
  )
}

export default Doctor