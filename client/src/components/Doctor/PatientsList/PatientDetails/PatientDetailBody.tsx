
function PatientDetailBody() {
  return (
    <div className='h-[87%] w-[100%] flex flex-col'>
      <div className="flex flex-row h-[50%] w-[100%]">
        <UserStatus props={{
          style: 'h-[100%] w-[50%] flex items-end justify-end pr-10',
          title: 'Latest Status',
          button: 'REFRESH'
        }}>
          <Surgaries />
        </UserStatus>
        <UserStatus props={{
            style: 'h-[100%] w-[50%] flex items-end justify-start pl-10',
            title: 'Current Medication',
            button: 'ADD NEW'
        }}>
          <Medicins />
        </UserStatus>
      </div>
      <div className="h-[50%] w-[100%]">
        <IllnessHistory />
      </div>
    </div>
  )
}

function UserStatus(props: any) {
  const { style, title, button} = props.props

  return (
    <div className={style}>
      <div className="h-[80%] w-[80%] flex flex-col justify-between">
        <div className="flex flex-row justify-between px-4">
          <h1 className="text-[1.2em] font-medium">{title}</h1>
          <button className="bg-green-500 rounded-md text-white py-1 px-6">{button}</button>
        </div>
        <div className="bg-white h-[80%] w-[100%] shadow-lg">
          <props.children.type />
        </div>
      </div>
    </div>
  )
}

function Surgaries() {
  return (
    <div className="h-[100%] w-[100%]">
      <SurgariesListModel />
    </div>
  )
}

function SurgariesListModel() {
  return (
    <div className="flex h-[50%] w-[100%] flex-row border-b-[1px]">
      <div className="h-[100%] w-[30%] flex items-center justify-center">
        <div className="text-[1em] font-bold text-white bg-blue-600 w-[50%] h-[60%] rounded-md 
                        border-[6px] border-white flex flex-col items-center justify-center shadow-lg">
          <h1>12</h1>
          <h1>OCT</h1>
        </div>
      </div>
      <div className="bg-white h-[100%] w-[80%] flex flex-col px-3 justify-center">
        <h1 className="text-[1.3em] font-medium">Visited at Medical Collage</h1>
        <p className="text-[14px] text-gray-500">the patient had visited the hostpital and was a serious of examinations</p>
      </div>
    </div>
  )
}

function MedicinModel() {
  return (
    <div className="h-[100%] w-[35%] flex flex-col items-center justify-evenly">
      <div className="h-[5em] w-[5em] shadow-md"></div>
      <div className="flex flex-col items-center">
        <h1 className="text-[18px] font-medium">Nadolol</h1>
        <h1 className="text-[12px] font-light text-gray-500">2 x 5mg</h1>
      </div>
    </div>
  )
}

function Medicins() {
  return (
    <div className="h-[100%] w-[100%] flex flex-row">
      <MedicinModel />
      <MedicinModel />
      <MedicinModel />
    </div>
  )
}

function IllnessHistory() {
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <div className="h-[75%] w-[81%] flex flex-col justify-between">
        <div className="h-[10%] w-[100%] py-6 flex items-center">
          <h1 className="font-semibold text-xl">Illness History</h1>
        </div>
        <div className="h-[70%] w-[100%] flex flex-col items-start justify-start">
          <table className="w-[100%]">
            <tr className="h-[2em]">
              <th className="text-[13px] text-left font-normal opacity-0">x</th>
              <th className="text-[13px] text-left font-normal">TYPE</th>
              <th className="text-[13px] text-left font-normal">DATE</th>
              <th className="text-[13px] text-left font-normal">MEDITATION</th>
              <th className="text-[13px] text-left font-normal">DOCTORS</th>
            </tr>
            <IllnessListModel />
          </table>
          {/* <IllnessListModel /> */}
        </div>
      </div>
    </div>
  )
}

function IllnessListModel() {
  return (
    <tr className="bg-white w-[100%] h-[3em] shadow-lg">
      <td className="">
        <div className="ml-3 h-[1.3em] w-[1.3em] border-red-500 border-2 rounded-full shadow-xl shadow-red-500"></div>
      </td>
      <td className="font-medium">brain cancer</td>
      <td className="text-[14px] text-gray-500">11.20.1902 - 12.23.1904</td>
      <td className="text-[14px] text-gray-500">Vit. C2 x 5mg, Aspira 3 x 3mg</td>
      <td className="flex flex-row items-center py-2">
        <div className="bg-black rounded-full w-[2em] h-[2em]"></div>
      </td>
    </tr>
  )
}

export default PatientDetailBody