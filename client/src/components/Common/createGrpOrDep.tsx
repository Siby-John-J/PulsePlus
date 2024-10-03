import { useDispatch } from "react-redux";
import { grpOff } from "../../redux/slices/createGrpDepSlice";
import { useState } from "react";
import { DisplayError } from "../Patient/PopUp/CreatePoll";
import { useFetchPostTemplate } from "../../hooks/usePatient";

function CreateGrpOrDep() {
    const [data, setData] = useState({
      name: '',
      department: 'none',
      memberLimit: 0
    })
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()
    const departments = ['none', 'yo', 'sus', 'rizzing', 'ohio', 'skibidi']
    const style = "outline-none border-black border-[1px] w-[100%] rounded-md px-3 py-2 "

    const setToData = (event: any, type: string) => {
      setData((prev) => {
        return { ...prev, [type]: event.target.value }
      })
    }

    const checkAuthenticate = async (e) => {
      if(data.name === '') return setErrorMessage(prev => 'Must enter a group name')
        
      if(data.membercount < 0) return setErrorMessage(prev => 'Members count cannot be negative')

      try {
        const resp = await useFetchPostTemplate('http://localhost:2000/doctor-service/groups', {
          ...data,
          description: ''
        })
        
      } catch (error) {
        alert('there was an error creating group')
      }

      dispatch(grpOff())
    }
    
    return (
      <div className="bg-white absolute top-[20%] px-4 py-2 w-[20em] h-fit rounded-md">
        <h1 className="text-[1.1em] font-bold">Create Group</h1>
        {
          errorMessage !== '' && <DisplayError message={errorMessage} />
        }
        <div className="my-3">
          <h1 className="font-medium pb-3">Group name</h1>
          <input onClick={e => setErrorMessage(prev => '')} onChange={e => setToData(e, 'name')} type="text" className={style} />
        </div>
        <div className="my-3">
          <h1 className="font-medium pb-3">Select Department</h1>
          <select onClick={e => setErrorMessage(prev => '')} onChange={e => setToData(e, 'department')} name="" id="" className={style}>
            {
              departments.map(item => 
                <option value={item}>{item}</option>
              )
            }
          </select>
        </div>
        <div>
          <h1 className="font-medium pb-3">Max group members</h1>
          <input
            placeholder="leave it empty or 0 for unlimited"
            onClick={e => setErrorMessage(prev => '')} 
            onChange={e => setToData(e, 'membercount')} type="number" name="" id="" className={style + 'mb-3'} />
        </div>
        <div className="flex flex-row w-[100%] justify-between">
          <button
          onClick={checkAuthenticate}
          className="w-[48%] bg-green-500 px-0 py-1 rounded-md text-white" >Create</button>
          <button className="w-[48%] bg-red-500 px-0 py-1 rounded-md text-white" onClick={e => dispatch(grpOff())}>Cancel</button>
        </div>
      </div>
    )
}

export default CreateGrpOrDep;
