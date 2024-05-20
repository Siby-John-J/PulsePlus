import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"

function DoctorMiniList() {
  return (
    <div className="w-[100%] h-[50%] rounded-md border-black border-[1px]">
      <div className="flex flex-row justify-between  py-2 px-3">
        <h1 className="font-semibold text-lg">Doctors list</h1>
        <p className="text-md font-normal text-blue-700">View All</p>
      </div>
      <div className="flex flex-col items-center pt-2">
        <DoctorList />
      </div>
    </div>
  )
}

export function UserTemplate(data: any) {
  const { name, details, style, mainStyle } = data.details

  return (
    <div className={mainStyle}>
      <div className="bg-black h-[2.5em] w-[2.5em] rounded-full"></div>
      <div className="flex flex-col text-[14px] justify-center">
        <h1 className="font-semibold">{name}</h1>
        <p className={style}>{details}</p>
      </div>
    </div>
  )
}

function DoctorList() {
  const { ROW } =  UserTemplateStyle
  
  return (
    <div className=" w-[90%] h-[3em] flex flex-row justify-between items-center px-2 border-gray-500 border-b-[1px]  pb-3">
      <UserTemplate details={{name: 'Dr Siby John', details: 'nenes', style: 'text-[12px]', mainStyle: ROW}} />
      <div className="text-[12px] font-semibold text-green-400">Available</div>
    </div>
  )
}

export default DoctorMiniList