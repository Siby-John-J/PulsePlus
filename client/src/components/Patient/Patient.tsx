import { useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import './animation.css'
import { useFetchRefreshToken } from '../../hooks/useFetch'

function Patient() {
  const [style, setStyle] = useState<string>('options bg-orange-500 w-[80%] py-[1.3em] text-xl rounded-lg cursor-pointer')

  const res = useFetchRefreshToken()
  
  return (
    <div className='patient w-[100%] h-[100%] text-white flex flex-row bg-slate-100'>
        <div className='bg-slate-700 w-[20vw] flex flex-col justify-evenly text-center items-center'>
            <h1 className={style}>
              <Link to='/patient/profile'>Profile</Link>
            </h1>
            <h1 className={style}>
              <Link to='/patient/chat'>Chat</Link>
            </h1>
            <h1 className={style}>
              <Link to='/patient/surgery'>Surgery</Link>
            </h1>
            <h1 className={style}>  
              <Link to='/patient/billing'>Billing</Link>
            </h1>
        </div>
        <Outlet />
    </div>
  )
}

export default Patient