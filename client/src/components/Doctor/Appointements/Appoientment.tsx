import ListModel from "./ListModel"
import Selector from "./Selector"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import '../style.css'

function Appoientment() {
  return (
    <div className="w-[80%] h-[100%]">
      <AppoientmentBanner />
      <AppoientmentListHolder />
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

function AppoientmentListHolder() {
  const style = {
    main: 'bg-white w-[90%] h-[6em] shadow-xl rounded-md border-sky-500 border-l-8 flex flex-row justify-evenly items-center mb-9'
  }

  return (
    <div className="list-holder w-[100%] h-fit flex flex-col items-center z-10">
      <ListModel prop={{...style}}>
        <Status />
        <Date />
        <Details />
      </ListModel>
      {/* <ListModel /> */}
    </div>
  )

  function Details() {
    return (
      <div className=' w-[35%] h-[100%] flex items-center'>
      <div className="doc-appoint ml-[3em]">
        <UserTemplate details={{name: 'siby john j', details: 'T2-Kiji34', style: 'text-[12px] font-light'}} />
      </div>
    </div>
    )
  }

  function Date() {
    return (
      <div className='w-[25%] h-[100%] flex flex-col pl-10 justify-evenly py-3'>
      <h1 className="font-semibold">24 Nov 2023</h1>
      <h1 className="font-light">08:00pm - 10:00pm</h1>
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