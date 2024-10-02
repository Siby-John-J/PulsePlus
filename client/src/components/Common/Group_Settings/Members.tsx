import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"

function Members() {
  const [members, setMembers] = useState([
    { name: 'Siby John', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'member' },
    { name: 'Alan John', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'member' },
    { name: 'Griffith', age: 24, degree: "demon", gender: 'male', email: 'femto@gmail.com', role: 'admin' },
    { name: 'Siby John', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'co-admin' },
    { name: 'Siby John', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'member' },
    { name: 'Siby John', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'member' },
    { name: 'Gojo', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'member' },
    { name: 'Guts', age: 23, degree: "mbbs md", gender: 'male', email: 'romysiby@gmail.com', role: 'member' },
    { name: 'Anya', age: 6, degree: "mbbs md", gender: 'female', email: 'anya@gmail.com', role: 'member' },
  ])

  const [r, ref] = useState(0)
  const [r2, ref2] = useState(0)

  useLayoutEffect(() => {
    // const width = getComputedStyle(ref.current).width
    // sec.current.style.width = width
    console.log(r);
    
  }, [])

  return (
    <div className="bg-gray-200 w-[100%] h-[100%] px-3">
      <Head />
      <BookedAppoientments members={members} />
      {/* <DataTitle style={r} />
      <div className="h-[75%] w-[100%]">
        {
          members.map(item => {
            return (
              <DataList 
              style={r} 
              style2={r2}
              fun={ref} 
              fun2={ref2}
              name={item.name} age={item.age} gender={item.gender} degree={item.degree} email={item.email} role={item.role} />
            )
          })
        }
      </div> */}
    </div>
  )
}

// Header Properties
function Head() {
  return (
    <div className="w-[100%] h-[5em] flex flex-row justify-between">
      <div className="flex flex-col justify-between py-1">
        <h1 className="font-bold text-[19px]">Members List</h1>
        <button className="bg-purple-700 rounded-md py-2 px-3 font-medium text-white text-[13px]">+ Add Doctor</button>
      </div>
      <div className="h-full w-fit   flex flex-row items-end pb-1">
        <Filter />
      </div>
    </div>
  )
}

function Filter() {
  return (
    <>
      <div className="bg-white px-2 py-1 rounded-md mr-3">
        {/* <h1>Filter</h1> */}
        <select name="" id="" className="font-medium text-[13px] px-2 outline-none">
          <option value="">niga</option>
          <option value="">niga</option>
          <option value="">niga</option>
        </select>
      </div>
      <div className="bg-white w-[7em] justify-between px-3 flex flex-row items-center h-[2em] rounded-md">
        <button className="hover:text-purple-500 font-medium text-[13px]">Previous</button>
        <button className="hover:text-purple-500 font-medium text-[13px]">Next</button>
      </div>
    </>
  )
}

// Body Properties

// function DataTitle(props: { style: number }) {
//   console.log(props);
  
//   return (
//       <div className="bg-white flex flex-row font-medium items-center justify-between px-6 w-[100%] h-[3em] my-3 rounded-md">
//         <h1 className="bg-green-50">Name</h1>
//         <h1 className="bg-green-100">Gender</h1>
//         <h1 className="bg-green-200">Age</h1>
//         <h1 style={{width: props.style + 'px'}}className="bg-green-300">Email</h1>
//         <h1 className="bg-green-400">Degree</h1>
//         <h1 className="bg-green-500">Role</h1>
//         <h1 className="bg-green-600">N</h1>
//       </div>
//   )
// }
// function DataList(props: 
//   { name: string, age: number, degree: string, gender: string, email: string, role: string, 
//   fun: Function, style: number, fun2: Function, style2: number 
// },
// ) {
//   const { ROW } =  UserTemplateStyle
//   const { age, degree, email, gender, name, role, fun, fun2, style, style2 } = props
//   const widthref = useRef(null)
//   const widthref2 = useRef(null)

//   useEffect(() => {
//     const width = getComputedStyle(widthref.current).width.split("px")[0]
//     // const width2 = getComputedStyle(widthref2.current).width2.split("px")[0]
//     // sec.current.style .width = width
    
//     // console.log(fun, width);
//     fun(prev => {
//       if(Number(width) > prev) {
//         return Number(width)
//       } else {
//         return prev
//       }
//     })

//     fun2(prev => {
//       console.log(prev);
      
//       // if(Number(width2) > prev) {
//       //   return Number(width2)
//       // } else {
//       //   return prev
//       // }
//     })

//     console.log(width);
// }, [])
  
//   return (
//     <div className="bg-white flex flex-row items-center justify-between px-6 w-[100%] h-[3em] mt-2 rounded-md">
//         <div className="flex flex-row" ref={widthref2} style={{width: '153.4'+'px'}} >
//           <UserTemplate details={{ name: name, details: '', style: '', mainStyle: ROW + '  ', }} type='department' />
//           {/* <h1>Romy</h1> */}
//         </div>
//         <h1>{gender}</h1>
//         <h1>{age}</h1>
//         <h1 ref={widthref} style={{width: '153.4'+'px'}} className="bg-red-300">{email}</h1>
//         <h1>{degree}</h1>
//         <h1>{role}</h1>
//         <h1>N</h1>
//     </div>
//   )
// }

function BookedAppoientmentsList(
  props: {
    name:string, age:number, gender:string, degree:string, email:string, role: string
  }
) {
  const { age, degree, email, gender, name, role } = props
  return (
    <tr className="h-[3.3em] text-[16px] bg-white border-gray-200 border-b-8">
      <td className="flex flex-row items-center mt-2">
        <div className="flex flex-row items-center px-2">
        <div className="bg-black h-[2.3em] w-[2.3em] rounded-full"></div>
        <p className="ml-2">{name}</p>
        </div>
      </td>
      <td>{age}</td> 
      <td>{degree}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>
        <h1 className="bg-green-300 px-2 w-fit py-1 rounded-md">{role}</h1>
      </td>
      <td>
        <div>
          <div className="bg-white py-1 rounded-md mr-">
            <select name="" id="" className="font-medium text-[13px] outline-none">
              <option value="">none</option>
              <option value="">remove</option>
              <option value="">make member</option>
              <option value="">make co-admin</option>
            </select>
            </div>
        </div>
      </td>
    </tr>
  )
}

export function BookedAppoientments(props: { members: Array<{}> }) {
  const { members } = props
  
  return (
    <div className="w-[90%] h-fit flex flex-col rounded-md mt-5">
      <div className=" w-[100%] px-5">
        <table className="w-[100%] h-fit">
          <tr className="bg-white h-[2.4em] rounded-md border-gray-200 border-b-[0.4em]">
            <th className="text-left">
              <h1 className="px-2">Name</h1>
            </th>
            <th className="text-left">Age</th>
            <th className="text-left">Degree</th>
            <th className="text-left">Email</th>
            <th className="text-left">Gender</th>
            <th className="text-left">Role</th>
            <th className="text-left">Action</th>
          </tr>
          {
            members.map(item => {
              return <BookedAppoientmentsList name={item.name} age={item.age} gender={item.gender} degree={item.degree} email={item.email} role={item.role} />
            })
          }
        </table>
      </div>
      <div></div>
    </div>
  )
}

export default Members
