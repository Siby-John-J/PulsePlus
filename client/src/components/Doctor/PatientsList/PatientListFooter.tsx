
function PatientListFooter() {
  return (
    <div className="flex font-medium flex-row px-8 w-[30%] justify-evenly items-center">
      <h1>{'<'}</h1>
      <h1 className="font-bold bg-blue-500 px-2 rounded-full text-white">1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>...</h1>
      <h1>9</h1>
      <h1>{'>'}</h1>
    </div>
  )
}

export default PatientListFooter