import { UserTemplate } from "../Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"

function DoctorListContents() {
  return (
    <div className='w-full grid grid-cols-10 grid-rows-6 h-[85%] gap-3'>
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
      <SingleContent style={'col-span-2 row-span-3'} />
    </div>
  )
}

function SingleContent(props: any) {
  const style = props.style
  console.log(style)
  const { COLUMN } =  UserTemplateStyle

  return (
    <div className={"rounded-2xl flex flex-col items-center bg-white shadow-xl justify-between py-5 " + style}>
      <div className='doctorTemp'>
        <UserTemplate details={{name: 'Dr Phil Swift', details: 'MBBS MD', mainStyle: COLUMN}} />
      </div>
      <div className="z-30 mt-3">
        <h1 className="font-medium bg-blue-100 px-6 py-1 rounded-md text-blue-600">Neurologist</h1>
      </div>
      <div className="bg-gray-200 w-full py-[0.4em] text-center">
        <button className="font-medium text-lg text-gray-500">Message</button>
      </div>
    </div>
  )
}

export default DoctorListContents
