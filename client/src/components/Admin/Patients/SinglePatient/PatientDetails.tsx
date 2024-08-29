
import { UserTemplate } from '../../Dashboard/DoctorMiniList'
import { UserTemplateStyle } from '../../../../types/hardcoded/styleEnum'
import { useEffect, useState } from 'react'
import { useFetchGetTemplate } from '../../../../hooks/usePatient'

function PatientDetails(props: any) {
    const { patient } = props
    const { ROW } = UserTemplateStyle
    
    return (
        <>
            <div className='scale-[200%] mt-[4.4em] ml-[4em]'>
                <UserTemplate details={{name: patient.name, details: patient.age, style: 'text-[12px]', mainStyle: ROW}} />
            </div>
            <MoreDetails address={patient.address} phone={patient.phone} />
            <PatientActions id={patient.id} />
        </>
    )
}

function MoreDetails(props: { address: string, phone: string }) {
    return (
        <div className='w-[40%] h-[100%] flex flex-col items-start justify-between py-10'>
            <h1 className='text-lg font-normal'>{ props.phone }</h1>
            <h1 className='text-lg font-normal'>{ props.address }</h1>
        </div>
    )
}

function PatientActions(props: { id: string }) {
    async function blockUser() {

    }

    async function deleteUser() {

    }

    return (
        <div className='w-[20%] h-[100%] flex flex-col justify-evenly'>
            <button onClick={blockUser} className='py-2 px-2 bg-blue-600 text-white rounded-md'>Block</button>
            <button onClick={deleteUser} className='py-2 px-2 bg-blue-600 text-white rounded-md'>Delete</button>
        </div>
    )
}

export default PatientDetails