import { useState } from "react"
import { SurgeryDetails } from "../../../types/propTypes"
import SurgeryEdit from "./SurgeryEdit"

function Surgery() {
  return (
    <div className='flex flex-col items-center bg-gray-300 w-[80%]'>
      <div className="w-full py-7 mb-4 px-6">
        <h1 className="text-2xl font-medium">Surgeries</h1>
      </div>
      <SurgeryList />
      <SurgeryList />
    </div>
  )
}

function SurgeryList() {
  const [isEnable, setIsEnable] = useState<boolean>(false)
  
  return (
    <>
      {isEnable && <SurgeryEdit/>}
      <div className='flex flex-row h-[13%] w-[90%] px-5 my-3'>
        <div className='w-[10%] h-full flex flex-col bg-white rounded-md items-center justify-evenly mr-2'>
          <h1 className="text font-medium">{'Siby john'}</h1>
          <button className='bg-green-700 w-fit px-7 py-1 rounded-full text-white'
            onClick={e => setIsEnable(!isEnable)}
          >Edit</button>
        </div>
        
        <div className='flex flex-row bg-white rounded-md ml-[1px] w-full'>
          <SurgeryDetailsTemplate data={{title: 'Diagnosys', content: 'Cancer'}} />
          {/* <SurgeryDetailsTemplate data={{title: 'Diagnosys', content: 'Cancer', style: ''}} /> */}

          <div className='flex flex-col items-start justify-evenly px-3'>
            <h1 className='font-semibold py-1 rounded-md'>Date</h1>
            <p className="font-sans">09/11/2000</p>
            <p>10:30pm</p>
          </div>
          <div className='flex flex-col items-start justify-evenly ml-4'>
            <h1 className='font-normal py-1 rounded-md'>Confession</h1>
            <p className="font-light text-[14px]">iam siby john has confessed to do this surgery <tr/>lwa s nigagas are serious <tr/>
            </p>
          </div>
          {/* <SurgeryDetailsTemplate data={{title: 'Medical Condition', content: 'having ceaser'}} /> */}
          <SurgeryDetailsTemplate data={{title: 'Status', content: 'pending'}} />

          <div className='flex flex-col items-start justify-evenly mx-4'>
            <h1>Doctors</h1>
            <input className="border-[1px] border-black" type="text" />
          </div>

          <div className='flex flex-col items-start justify-evenly mx-2'>
            <h1>Lead Doctor</h1>
            <p>Dr. Mark Grayson</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

function SurgeryDetailsTemplate(props: any) {
  const { title, content }: SurgeryDetails = props.data

  return (
    <div className='flex flex-col items-start justify-evenly px-3'>
      <h1 className='border-[1px] border-black px-2 py-1 rounded-md'>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Surgery
