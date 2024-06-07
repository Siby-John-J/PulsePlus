import { useDispatch } from "react-redux"
import { turnOffNotFilledPopup } from "../../../redux/slices/patient/notFilledSlice"
import { turnOnDetailsPopup } from "../../../redux/slices/patient/patientDetailPopupSlice"
// import { turnOff } from "../../../redux/slices/patient/patientDetailPopupSlice"

function NotFilledDetailsWarning() {
  const dispatch = useDispatch()

  return (
    <div className='bg-white absolute top-[20%] px-4 py-2 w-[30em] h-fit rounded-md'>
        <h1 className='py-1 font-bold text-[1.4em]'>Save Details</h1>
        <p className='py-1'>Are you really want to save the details?</p>
        <div className='bg-red-600 py-2 mt-2 text-start px-2 rounded'>
            <h1 className='text-white font-thin'>by saving unfilled details you cannot able to send the <br /> appointment request</h1>
        </div>
        <div className='flex flex-row w-[100%] justify-between px-2 py-4'>
            <button className='bg-black text-white py-1 rounded-md px-4'
              onClick={e => {
                dispatch(turnOffNotFilledPopup())
                dispatch(turnOnDetailsPopup())
              }}
              >
              Keep Editing
            </button>
            <button className='bg-red-600 text-white py-1 rounded-md px-4'
              onClick={e => {
                dispatch(turnOffNotFilledPopup())
              }}
              >
              Save Details
            </button>
        </div>
    </div>
  )
}

export default NotFilledDetailsWarning