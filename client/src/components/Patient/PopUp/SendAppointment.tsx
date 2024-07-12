import { useDispatch } from "react-redux"
import { offAppointModel } from "../../../redux/slices/admin/sendAppoModelSlice"
import { useState } from "react"

function SendAppointment() {
  const [selection, setSeletion] = useState('')
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [currentTog, setCurrentTog] = useState(false)

  const [doctorData, setDoctorData] = useState([])
  const [groupData, setGrouprData] = useState([])
  const [departmentData, setDepartmentData] = useState([])

  const updateSelection = (name: string) => {
    setSeletion(name)
  }
  
  const addUpdate = () => {
    setIsAdd(prev => !prev)
  }

  const updateBtnToggle = (state: boolean) => {
    setCurrentTog(state)
  }

  const getData = (data: any, type: string) => {
    if(data === 'Doctor') setDoctorData(data)
    if(data === 'Groups') setGrouprData(data)
    if(data === 'Departments') setDepartmentData(data)
  }

  const sendData = () => {
    
  }

  return (
    <div className='bg-white absolute top-[20%] px-4 py-2 w-[30em] h-fit rounded-md'>
        <h1 className='py-1 font-bold text-[1.4em]'>Share Apppointment</h1>
        {
          !isAdd ? <DropDown update={updateSelection} /> : <SelectOptions getData={getData} option={selection} />
        }
        {
          !isAdd &&
          <div className="flex flex-row w-[100%] justify-between px-2 py-4">
            <ListData />
          </div>
        }
        <div className='flex flex-row w-[100%] justify-between px-2 py-4'>
          {
            !isAdd ? <ShareButtonGroup send={sendData} update={addUpdate} /> : <SelectButtonGroup update={addUpdate} />
          }
        </div>
    </div>
  )
}

function ListData() {
  return (
    <h1>lwal</h1>
  )
}

function SelectButtonGroup(props: any) {
  return (
    <>
      <button className='bg-green-600 text-white w-[12em] py-2 rounded-md px-4'
        onClick={e => {
          // dispatch(offAppointModel())
          props.update(true)
        }}
        >
        Ok
      </button>
      <button className='bg-red-600 text-white w-[12em] py-2 rounded-md px-4'
        onClick={e => {
          // dispatch(offAppointModel())
          props.update(true)
        }}
        >
        Cancel
      </button>
    </>
  )
}

function ShareButtonGroup(props: any) {
  const dispatch = useDispatch()

  return (
    <>
      <button className='bg-blue-600 text-white w-[7em] py-2 rounded-md px-4'
        onClick={e => {
          props.update(true)
        }}
        >
        Add
      </button>
      <button className='bg-green-600 text-white w-[7em] py-2 rounded-md px-4'
        onClick={e => {
          props.send()
          dispatch(offAppointModel())
        }}
        >
        Send
      </button>
      <button className='bg-red-600 text-white w-[7em] py-2 rounded-md px-4'
        onClick={e => {
          dispatch(offAppointModel())
        }}
        >
        Cancel
      </button>
    </>
  )
}

function DropDown(props: any) {
  const [isDrop, setIsDrop] = useState<boolean>(false)
  const [sendFields, setSendFields] = useState<string[]>([
    // 'Doctors',
    'Departments',
    'Groups'
  ])
  const [current, setCurrent] = useState('Doctor')
  props.update(current)

  return (
    <div>
      <div
      onClick={e => setIsDrop(prev => !prev)} 
      className='border-[1px] border-black h-[3em] py-2 mt-2 text-start px-2 rounded flex items-center'>
      <h1 className='text-black'>{current}</h1>
      </div>
      {
        isDrop &&
        sendFields.map(item => {
          return (
            <div
              onClick={e => {
                setSendFields(prev => {
                  const res = prev.filter(e => e !== item)
                  return [...res, current]
                })
                setCurrent(item)
                setIsDrop(false)
              }}
              className="bg-gray-200 h-[3em] mt-1 py-2 text-start px-2 rounded flex items-center">{item}</div>
          )
        })
      }
    </div>
  )
}

function SelectOptions(props: any) {
  const [doctors, setDoctors] = useState([
    'Dr Phil',
    'Dr siby',
    'Dr sashi'
  ])
  const [groups, setGroups] = useState([
    'Soman group',
    'Al Ottha 99',
    'Sauron'
  ])
  const [departments, setDepartments] = useState([
    'Cardiology',
    'Comorology',
    'Phsycology'
  ])

  const [selected, setSelected] = useState<string[]>([])

  props.getData(selected, props.option)

  const setChange = (event: any) => {
    setSelected(prev => {
      if(!prev.includes(event.target.value)) {
        return [...prev, event.target.value]
      } else {
        return prev
      }
    })
  }

  const clearChange = (item: string) => {
    setSelected(prev => {
      return prev.filter(e => e !== item)
    })
  }

  return (
    <div>
      <div className="flex flex-col h-[5em] justify-evenly">
        <label htmlFor="">Select {props.option}</label>
        <select onChange={setChange} className="border-none outline-none">
          {
              props.option === 'Doctor' &&
              doctors.map(data =>{
                return (
                  <option value={data}>{data}</option>
                )
              })
          }
          {
              props.option === 'Departments' &&
              departments.map(data =>{
                return (
                  <option value={data}>{data}</option>
                )
              })
          }
          {
              props.option === 'Groups' &&
              groups.map(data =>{
                return (
                  <option value={data}>{data}</option>
                )
              })
          }
        </select>
      </div>
      <hr className="border-black border-[1px]" />
      {
        selected.map(item => {
          return (
            <DataBar remove={clearChange} content={item} />
          )
        })
      }
    </div>
  )
}

function DataBar(props: any) {
  return (
    <div className="border-[1px] border-black h-[3em] py-2 mt-2 text-start px-2 rounded flex items-center justify-between">
      <div>{props.content}</div>
      <div
        onClick={e => {
          props.remove(props.content)
        }}
        className="bg-red-200 text-red-500 w-6 h-6 text-center rounded-lg cursor-pointer">X</div>
    </div>
  )
}

export default SendAppointment