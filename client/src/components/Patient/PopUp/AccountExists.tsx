import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { on } from '../../../redux/slices/patient/layoutSlice'
import { removeExModel } from '../../../redux/slices/accountExistsSlice'
import { useNavigate } from 'react-router'

function AccountExists() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state: any = useSelector((state: any) => state).layoutReducer

  return (
    <div className='bg-white absolute top-[10%] px-4 py-2 w-[30em] h-fit rounded-md flex flex-col items-center'>
        <div className='h-[4em] w-[4em] bg-red-500 rounded-full mt-3'></div>
        <h1 className='text-xl font-bold py-4'>Account Already Exists</h1>
        <p className='text-center'>
            this account already been exists please give new credentials or login to the account
        </p>
        <div className='mt-5 mb-3 w-[100%] flex justify-between px-[8em]'>
            <button
                onClick={e => {
                    dispatch(removeExModel())
                    navigate('/')
                }}
                className='bg-cyan-600 text-white px-5 py-1 rounded-md hover:shadow-md'>Login</button>
            <button
                onClick={e => dispatch(removeExModel())}
                className='bg-red-600 text-white px-5 py-1 rounded-md hover:shadow-md'>cancel</button>
        </div>
    </div>
  )
}

export default AccountExists