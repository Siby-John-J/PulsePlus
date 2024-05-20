import { UserTemplate } from "./DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"

function AppoinetmentMessages() {
  const { ROW } = UserTemplateStyle

  return (
    <div className='w-[100%] h-[40%] border-blue-600 border-[1px] rounded-md'>
      <div className="flex flex-col bg-blue-600 pb-3 text-white rounded-t-md h-[40%]">
        <div className="pl-4 py-3 text-lg font-medium">Appoinetment Request</div>
        <div className="flex flex-row justify-between px-2">
          <UserTemplate details={{name: 'Romysiby', details: '23 Years Old', mainStyle: ROW }} />
          <div className="flex flex-col text-[11px]">
            <h1 className="text-[15px]">03/4/2032</h1>
            <p>3:00pm - 4:00pm</p>
          </div>
        </div>
      </div>
      <div className="h-[60%]">
        <div className="h-[70%] p-2">
          <p className="">Dear boi iam strugging with crippling depression and it was sis</p>
        </div>
        <div className=" w-[100%] h-[3em] flex justify-end">
          <div className="justify-between py-2 w-fit px-4">
            <button className="bg-blue-500 text-white rounded-sm py-[1px] px-3 mr-4">Accept</button>
            <button className="bg-gray-200 text-black rounded-sm py-[1px] px-3">Decline</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BookedAppoientmentsList() {
  return (
    <tr className="border-black h-[3.3em] border-b-[1px] text-[16px] font-semibold">
      <td className="flex flex-row items-center mt-2">
        <div className="bg-black h-[2.3em] w-[2.3em] rounded-full"></div>
        <p className="ml-4">siby</p>
      </td>
      <td>romy</td> 
      <td>Dierria</td>
      <td>09/22/2322</td>
      <td>9:00pm</td>
      <td>D</td>
    </tr>
  )
}

export function BookedAppoientments() {
  return (
    <div className="w-[90%] h-[100%] flex flex-col border-[1px] border-black rounded-md">
      <div className="flex flex-start text-xl font-semibold py-2 ml-5">
        Booked Appoientments
      </div>
      <div className=" w-[100%] px-5">
        <table className="w-[100%]">
          <tr className="bg-gray-300 text-gray-600 h-[2.4em] rounded-md">
            <th className="text-left">Patient name</th>
            <th className="text-left">Assigned Doctor</th>
            <th className="text-left">Disease</th>
            <th className="text-left">Date</th>
            <th className="text-left">Time</th>
            <th className="text-left">Action</th>
          </tr>
          <BookedAppoientmentsList />
          <BookedAppoientmentsList />
        </table>
      </div>
      <div></div>
    </div>
  )
}

export default AppoinetmentMessages