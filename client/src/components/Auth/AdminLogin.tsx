import { useState } from "react";
import { useNavigate } from "react-router"
import { signInType } from "../../types/authTypes";
import { useGettoken } from "../../hooks/useAuth";
import { useStoreSet } from "../../hooks/useStore";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

function AdminLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signIndata, setSignInData] = useState<signInType>({
        name: "",
        password: "",
        auth: false
    });

    const authenticate = async () => {
        const response = await useGettoken(signIndata, 'admin')
        
        if(response.accessToken) {
            setSignInData(data => {
                data.auth = true
                return data
            })

            useStoreSet(response.accessToken)
            dispatch(login(signIndata))

            return navigate('/admin/dashboard')
        }
    }

    return (
        <div className="bg-gray-600 w-[100%] h-[100%] flex justify-center items-center">
            <div className="flex flex-col bg-white px-3 py-2 rounded-md">
                <h1>Username</h1>
                <input type="text"
                    onChange={e => {
                        setSignInData(data => {
                            data.name = e.target.value
                            return data
                        })
                    }} 
                    className="px-2 outline-none border-[1px] border-black w-[20vw] h-[2.3em] border-l-4 border-l-blue-600 rounded-md" />
                <h1>Password</h1>
                <input type="text"
                    onChange={e => {
                        setSignInData(data => {
                            data.password = e.target.value
                            return data
                        })
                    }} 
                    className="px-2 outline-none border-[1px] border-black w-[20vw] h-[2.3em] border-l-4 border-l-blue-600 rounded-md" />
                <button 
                    onClick={authenticate}
                    className="mt-5 font-semibold bg-blue-500 text-white rounded-sm py-1">
                    SignIn
                </button>
            </div>
        </div>
    )
}

export default AdminLogin
