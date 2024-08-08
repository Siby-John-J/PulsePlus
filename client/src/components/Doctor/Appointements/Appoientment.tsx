import ListModel from "./ListModel"
import Selector from "./Selector"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import '../style.css'
import { useEffect, useState } from "react"
import { useSelector, UseSelector } from "react-redux"
import { useFetchGetTemplate } from "../../../hooks/usePatient"

function Appoientment() {
  const state = useSelector((state: any) => state).authReducer
  const [appointments, setAppointments] = useState([{}])

  async function getAndSetData() {
    const response = await useFetchGetTemplate('http://localhost:2000/admin-service/appointment/for_doctor/?id=' + state.id)
    setAppointments(response)
  }

  useEffect(() => {
    getAndSetData()
  }, [])
  

  return (
    <div className="w-[80%] h-[100%]">
      <AppoientmentBanner />
      {
        appointments.map((item: any) => {
          return (
            <AppoientmentListHolder data={item} />
          )
        })
      }
    </div>
  )
}

function AppoientmentBanner() {
  return (
    <div className="bg-blue-500 w-[100%] h-[30%] rounded-bl-[40px] flex flex-col justify-evenly items-start pl-20">
      <h1 className="text-white text-2xl">Appoientments</h1>
      <Selector />
    </div>
  )
}

function AppoientmentListHolder(props: { data: any }) {
  const { date, time } = props.data
  

  const style = {
    main: 'bg-white w-[90%] h-[6em] shadow-xl rounded-md border-sky-500 border-l-8 flex flex-row justify-evenly items-center mb-9'
  }

  return (
    <div className="list-holder w-[100%] h-fit flex flex-col items-center z-10">
      <ListModel prop={{...style}}>
        <Status />
        <Date date={date} time={time} />
        <Details />
      </ListModel>
      {/* <ListModel /> */}
    </div>
  )

  function Details() {
    const { ROW } = UserTemplateStyle
    
    return (
      <div className=' w-[35%] h-[100%] flex items-center'>
      <div className="doc-appoint ml-[3em]">
        <UserTemplate details={{name: 'siby john j', details: 'T2-Kiji34', style: 'text-[12px] font-light', mainStyle: ROW}} />
      </div>
    </div>
    )
  }

  function Date(props: { date: any, time: any }) {

    return (
      <div className='w-[25%] h-[100%] flex flex-col pl-10 justify-evenly py-3'>
      <h1 className="font-semibold">{date}</h1>
      <h1 className="font-light">{time}</h1>
    </div>
    )
  }

  function Status() {
    return (
      <div className='w-[20%] h-[100%] flex flex-col pl-10 justify-evenly py-3'>
      <h1 className="font-semibold">Long discuss</h1>
      <div className="flex flex-row items-center">
        <div className="bg-orange-500 rounded-full w-3 h-3 mr-4"></div>
        <h1 className="text-orange-500 font-semibold">Waiting</h1>
      </div>
    </div>
    )
  }
}

export default Appoientment