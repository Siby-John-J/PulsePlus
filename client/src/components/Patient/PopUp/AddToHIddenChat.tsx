import React, { useState } from 'react'
import { UserTemplate } from '../../Admin/Dashboard/DoctorMiniList'
import { UserTemplateStyle } from '../../../types/hardcoded/styleEnum'
import { hidOff, hidpOn } from '../../../redux/slices/hiddenMessageSlice'
import { useDispatch } from 'react-redux'

function AddToHIddenChat() {
    const dispatch = useDispatch()
    const [data, setData] = useState<{name: string, details: string}[]>([
        { name: 'Dr siby john', details: 'MBBS' },
        { name: 'Dr nila vishal', details: 'MBBS MD' },
        { name: 'Dr meera john', details: 'cardiologist' },
        { name: 'Dr alan vishal', details: 'neurologist' },
        // { name: 'Dr armani', details: 'MBBS' },
        { name: 'Dr anya forger', details: 'MBBS MB' },
    ])
    const [selected, setSelected] = useState([])

    const setToSelect = (e: any) => {
        const includes = selected.includes(e.target.value)
        if(!includes) {
            setSelected((prev: any) => [...prev, e.target.value])
        } else {
            setSelected((prev) => {
                return prev.filter(el => e.target.value !== el)
            })
        }
    }
    
    
    const { ROW } = UserTemplateStyle
    const style = ROW + ' shadow-md py-1 px-2 rounded-md w-[13em]'
    
    return (
        <div className='bg-white absolute top-[20%] px-3 py-2 w-[20em] h-fit rounded-md flex flex-col items-center'>
            <h1 className='font-medium text-[20px] my-3'>Add members</h1>
            <div className="h-full flex flex-col gap-2">
                {
                    data.map((data: object) => {
                        return (
                            <div className='flex flex-row justify-between w-[100%] items-center'>
                            <input 
                                onClick={setToSelect}
                                className='mr-4 h-[1.2em] w-[1.2em]' value={data.name} type="checkbox" name="" id="" />
                            <UserTemplate details={{name: data.name, details: data.details, style: 'text-[12px]', mainStyle: style}} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[100%] flex justify-evenly text-white mt-5'>
                <button
                onClick={e=> {
                    dispatch(hidOff({selected: selected}))
                }} 
                className='px-3 py-1 shadow-sm shadow-black rounded-md w-[6em] bg-green-500'>Continue</button>
                <button
                onClick={e=> {
                    dispatch(hidOff({selected: selected}))
                }} 
                className='px-3 py-1 shadow-sm shadow-black rounded-md w-[6em] bg-red-500'>Cancel</button>
            </div>
        </div>
    )
}

export default AddToHIddenChat