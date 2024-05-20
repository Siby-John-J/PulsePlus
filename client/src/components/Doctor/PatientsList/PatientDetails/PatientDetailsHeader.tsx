
import ListModel from '../../Appointements/ListModel'
import { UserTemplate } from '../../../Admin/Dashboard/DoctorMiniList'
import { UserTemplateStyle } from '../../../../types/hardcoded/styleEnum'

function PatientDetailsHeader() {
    const style = {
        main: 'w-[100%] h-full flex flex-row justify-evenly items-center mb-9'
    }

    return (
        <div className='bg-white w-[100%] h-[13%] border-[1px]'>
            <ListModel prop={{...style}}>
                <Details />
                <Diagnosys />
                <LastVisit />
                <NextRecomendation />
            </ListModel>
        </div>
    )
}

function Diagnosys() {
    return (
        <div>
            <h1 className='text-[11px]'>DIAGBOSYS</h1>
            <h1 className='text-lg font-semibold'>Heart problems</h1>
        </div>
    )
}

function LastVisit() {
    return (
        <div>
            <h1 className='text-[11px]'>LAST VISIT</h1>
            <h1 className='text-lg font-semibold'>21.10.2012</h1>
        </div>
    )
}

function NextRecomendation() {
    return (
        <div>
            <h1 className='text-[11px]'>NEXT RECOMENDATION</h1>
            <h1 className='text-lg font-semibold'>Chest Examination</h1>
        </div>
    )
}

function Details() {
    const { ROW } = UserTemplateStyle

    return (
        <div className='scale-125'>
            <UserTemplate details={{
                name: 'siby john j', 
                details: '32 male', 
                style: 'text-[15px] font-light',
                mainStyle: ROW
            }} />
        </div>
    )
}

export default PatientDetailsHeader