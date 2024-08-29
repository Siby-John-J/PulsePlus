import { UserTemplate } from '../../Dashboard/DoctorMiniList'
import { UserTemplateStyle } from '../../../../types/hardcoded/styleEnum'

function PatientAppoinements(data: any) {
    console.log(data)
    
    return (
        <div className=' w-[100%] h-[100%]'>
            <AppoientmentModel />
            <AppoientmentModel />
            <AppoientmentModel />
        </div>
    )
}

function AppoientmentModel() {
    const { ROW } = UserTemplateStyle

    return (
        <div className='flex mb-4 flex-row border-blue-600 border-l-4 rounded-md bg-white justify-between items-center py-3 px-[2em]'>
            <div>
                <h1 className="text-lg">4 DEC 3903</h1>
                <h1 className='font-thin'>3.30pm</h1>
            </div>
            <div className='scale-125'>
                <UserTemplate details={{name: 'Dr Siby John', details: 'Cardiologist', style: 'text-[12px]', mainStyle: ROW}} />
            </div>
            <div>
                <h1 className='text-xl'>Chest Pain</h1>
            </div>
            <div>
                <h1 className='text-xl'>Heart Memes</h1>
            </div>
        </div>
    )
}

export default PatientAppoinements