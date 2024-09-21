import React, { useState } from 'react'
import { UserTemplate } from '../../Dashboard/DoctorMiniList'
import { UserTemplateStyle } from '../../../../types/hardcoded/styleEnum'

function Appointment(props: { holder: string }) {
    const { ROW } = UserTemplateStyle
    let style = 'border-none px-7 my-1 py-1 rounded-md text-white '

    props.holder === 'admin' ? style += 'bg-red-500' : style += 'bg-blue-500'

    return (
        <div className=' flex my-3 justify-end px-3'>
            <div className='bg-white h-fit w-[20em] border-blue-500 shadow-xl border-l-[0.2em] px-1 py-1 flex flex-col items-start justify-evenly pl-4'>
                <UserTemplate details={{name: 'Dr Siby John', details: 'nenes', style: 'text-[13px] ', mainStyle: ROW}} />
                <p className='font-serif py-2 text-[14px]'>i am struggling with crippiling depresson</p>
                <button className={style}>{
                    props.holder === 'admin' ? 'Remove' : 'Add'
                }</button>
            </div>
        </div>
    )
}

export default Appointment