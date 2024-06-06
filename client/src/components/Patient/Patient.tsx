import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import './animation.css'
import { useSelector } from 'react-redux'
import { useLogout } from '../../hooks/useAuth'
import { authReducerType } from '../../types/sliceTypes'

function Patient() {
  const [style, setStyle] = useState<string>('options bg-orange-500 w-[80%] py-[1.3em] text-xl rounded-lg cursor-pointer')
  const navigate = useNavigate()
  const authState = useSelector((state: authReducerType) => state.authReducer);
  
  const handleLogout = () => {
    useLogout(authState)
    navigate('/')
  }
  
  return (
    <div className='patient w-[100%] h-[100%] text-white flex flex-row bg-slate-100'>
        <div className='bg-slate-700 w-[20vw] flex flex-col justify-evenly text-center items-center'>
          <div className='flex flex-col h-[90%] w-[100%] justify-evenly text-center items-center'>
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
          <div className=' h-[10%] flex px-10 items-center w-[100%]'>
            <button className=' px-7 py-2 rounded-lg' onClick={handleLogout}>LogOut</button>
          </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Patient