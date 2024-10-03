import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { grpOn } from "../../../redux/slices/createGrpDepSlice"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useFetchGetTemplate } from "../../../hooks/usePatient"

function GroupList(props: { setId: Function }) {

    return (
        <div className="flex flex-col w-full h-full justify-between">
            <ListGroups setId={props.setId} />
            <ListContacts />
        </div>
    )
}

function ListGroups(props: { setId: Function }) {
    const dispatch = useDispatch()
    const [groupList, setGroupList] = useState([])

    const getAndSetData = async () => {
        const resp = await useFetchGetTemplate('http://localhost:2000/doctor-service/groups')     
        setGroupList(prev => resp)
        return resp[0]
    }

    useEffect(() => {
        getAndSetData().then(e => {
            props.setId(prev => e._id)
        })
    }, [])

    return (
        <div className="bg-white rounded-md w-[100%] h-[55%] flex flex-col items-center">
            <div className="w-[90%] h-[20%] flex items-center justify-center">
                <input type="text" className="bg-gray-100 h-[60%] w-[100%] px-4" />
            </div>
            <div className="w-[90%] h-[60%] mt-3 overflow-scroll">
                {
                    groupList.map(item => <SingleHolder data={item} setId={props.setId} type="group" />)
                }
                {/* <SingleHolder data={{memes: 'wl'}} setId={Function} type="group" /> */}
                {/* <SingleHolder type="department" />
                <SingleHolder type="department" /> */}
            </div>
            <div className="w-[90%] h-[20%] flex flex-row items-center justify-evenly">
                <button onClick={e => dispatch(grpOn())} className="bg-purple-700 text-white px-7 py-[5px] rounded-sm ">create</button>
                <button className="bg-white text-purple-700 px-7 py-[5px] rounded-sm ">add</button>
            </div>
        </div>
    )
}

function SingleContent() {
    return (
        <div className="w-[90%] h-[20%] bg-white mt-2 shadow-md flex flex-row items-center px-2">
            <div className="bg-black w-7 h-7 rounded-sm"></div>
            <h1 className="text-[0.9em] font-medium px-3">Clean Architecture</h1>
        </div>
    )
}

function SingleHolder(props: { type: string, setId: Function, data: object }) {
    const { type } = props
    const { ROW } = UserTemplateStyle
    const { name, description, _id } = props.data
    
    return (
        <div className="mb-3 hover:cursor-pointer"
            onClick={e => props.setId(prev => _id)}
            >
            <UserTemplate type={type} details={{name: name, details: description, style: 'font-light', mainStyle: ROW}} />
        </div>
    )
}

function ListContacts() {
    return (
        <div className="bg-white w-[100%] h-[40%] rounded-md">
            <div className="w-[100%] px-4 py-2">
                <h1 className="text-[20px] font-medium">Contacts</h1>
            </div>
            <div className="w-[100%] h-[80%] flex flex-col items-center">
                <SingleContent />
            </div>
        </div>
    )
}

export default GroupList
