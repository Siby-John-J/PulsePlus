
import { UserTemplate } from '../../Dashboard/DoctorMiniList'
import { UserTemplateStyle } from '../../../../types/hardcoded/styleEnum'

function PatientDetails() {
    const { ROW } = UserTemplateStyle
    
    return (
        <>
            <div className='scale-[200%] mt-[4.4em] ml-[4em]'>
                <UserTemplate details={{name: 'Siby John', details: '34', style: 'text-[12px]', mainStyle: ROW}} />
            </div>
            <MoreDetails />
            <PatientActions />
        </>
    )
}

function MoreDetails() {
    return (
        <div className='w-[40%] h-[100%] flex flex-col items-start justify-between py-10'>
            <h1 className='text-lg font-normal'>+ 91 3849380434</h1>
            <h1 className='text-lg font-normal'>Siby Home kadukkamood, nattupara</h1>
        </div>
    )
}

function PatientActions() {
    return (
        <div className='w-[20%] h-[100%] flex flex-col justify-evenly'>
            <button className='py-2 px-2 bg-blue-600 text-white rounded-md'>Block</button>
            <button className='py-2 px-2 bg-blue-600 text-white rounded-md'>Delete</button>
        </div>
    )
}

export default PatientDetails