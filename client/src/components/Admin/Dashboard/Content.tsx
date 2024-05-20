
export function ContentTitle() {
    return (
        <div className="flex flex-row items-center justify-between w-[90%]">
            <h1 className="text-3xl font-semibold">Good Morning, Admin</h1>
            <h1 className="px-7 py-2 rounded-md text-md font-medium bg-blue-300">30 Nov 2021</h1>
        </div>
    )
}
  
export function ContentInfo() {
  return (
    <div className="w-[90%] flex flex-row justify-between">
      <InfoModel />
      <InfoModel />
      <InfoModel />
    </div>
  )
}

function InfoModel() {
  return (
    <div className="flex flex-col rounded-md border-blue-600 border-[2px] bg-blue-300 w-fit py-3 px-10 pr-[6em]">
      <h1 className="text-lg">Appoinements</h1>
      <p className="text-2xl font-semibold">122</p>
    </div>
  )
}